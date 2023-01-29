// Client ID from the Developer Console
const CLIENT_ID =
  "845509487647-5786nh91r45rsm485m2mb4cqcfmis94g.apps.googleusercontent.com";

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

const SCOPES = "https://www.googleapis.com/auth/calendar";

const authorizeButton = document.getElementById("authorize_button");
const signoutButton = document.getElementById("signout_button");
const loggedInSection = document.getElementById("logged_in_section");
const loggedOutSection = document.getElementById("logged_out_section");

let tokenClient;
let gapiInited = false;
let gisInited = false;

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    loggedOutSection.style.display = "none";
    loggedInSection.style.display = "block";
    getCalendars();
  } else {
    loggedOutSection.style.display = "block";
    loggedInSection.style.display = "none";
  }
}

updateSigninStatus(false);

/**
 * Callback after api.js is loaded.
 */
export function gapiLoaded() {
  gapi.load("client", initializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function initializeGapiClient() {
  await gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
  });
  gapiInited = true;
  maybeEnableButtons();
}

/**
 * Callback after Google Identity Services are loaded.
 */
export function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: async (resp) => {
      console.log(resp);
      if (resp.error !== undefined) {
        throw resp;
      }
      updateSigninStatus(true);
    },
  });
  gisInited = true;
  maybeEnableButtons();
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
    console.log("Setting up Google section");
    if (gapi.client.getToken() !== null) {
      updateSigninStatus(true);
    } else {
      updateSigninStatus(false);
    }
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick() {
  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: "" });
  }
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick() {
  const token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken("");
    updateSigninStatus(false);
  }
}

/**
 * Import event resources with some delay between them to prevent hitting rate limits due to bursts of imports
 */
function delayedImport(
  calendarId,
  events,
  errorHandler,
  onProgress,
  currentTry = 0
) {
  onProgress(events.length);
  const maxTries = 3;
  console.log(`Importing ${events.length} events`);
  let delay = 0;
  const delayIncrement = 500 * (currentTry + 1);

  const promises = events.map((event) => {
    delay += delayIncrement;
    return new Promise((resolve) => setTimeout(resolve, delay)).then(() =>
      gapi.client.calendar.events.insert({
        calendarId: calendarId,
        resource: event,
      })
    );
  });

  Promise.allSettled(promises).then((outerValues) => {
    const failedImportEvents = [];
    const failedImportsIndices = [];
    outerValues.forEach((val, idx) => {
      if (val.status === "rejected") {
        failedImportEvents.push(events[idx]);
        failedImportsIndices.push(idx);
      }
    });
    console.log(`Number of failed imports: ${failedImportEvents.length}`);

    if (failedImportEvents.length === 0) {
      onProgress(0);
    } else {
      if (currentTry < maxTries) {
        delayedImport(
          calendarId,
          failedImportEvents,
          errorHandler,
          onProgress,
          currentTry + 1
        );
      } else {
        console.error(
          "Unable to import some events to Calendar",
          outerValues[failedImportsIndices[0]].reason
        );
        onProgress(-1);
        errorHandler(outerValues[failedImportsIndices[0]].reason);
      }
    }
  });
}
/**
 * Import events produced from the schedule parsing into a given calendar
 */
function importMultipleEvents(
  genericEvents,
  calendarId,
  errorHandler,
  onProgress
) {
  let events = [];
  genericEvents.forEach(function (item, key) {
    let resource = {
      summary: item.summary,
      start: {
        dateTime: item.start.setZone("Europe/Rome").toISO(),
        timeZone: "Europe/Rome",
      },
      end: {
        dateTime: item.end.setZone("Europe/Rome").toISO(),
        timeZone: "Europe/Rome",
      },
      recurrence: [],
    };
    if (item.location !== undefined) {
      resource.location = item.location;
    }
    if (item.description !== undefined) {
      resource.description = item.description;
    }
    if (item.rrule !== undefined) {
      resource.recurrence.push("RRULE:" + item.rrule);
    }
    if (item.rdate !== undefined) {
      resource.recurrence.push("RDATE:" + item.rdate);
    }
    events.push(resource);
  });
  document.getElementById("importProgress").style.display = "block";

  delayedImport(calendarId, events, errorHandler, onProgress);
}

/**
 * Insert all the calendars for which the user has at least writer access in the <select>
 */
function getCalendars() {
  return gapi.client.calendar.calendarList
    .list({
      minAccessRole: "writer",
    })
    .then(
      function (response) {
        //console.log(response.result.items);
        let calendarSelect = document.getElementById("calendarId");
        let options = response.result.items;
        options.forEach(function (item, key) {
          if (/Polimi|Universit/i.test(item.summary))
            calendarSelect[key] = new Option(item.summary, item.id, true, true);
          else calendarSelect[key] = new Option(item.summary, item.id);
        });
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
}

/**
 * Insert the events in the appropriate calendar
 * @param genericEvents
 * @param {function} errorHandler
 * @param {function} onProgress
 */
export function handleGcalendarImport(genericEvents, errorHandler, onProgress) {
  const checkBox = document.getElementById("newCalendar");
  let calendarId = null;
  const calendarIdOptions = document.getElementById("calendarId");
  // Automatically create new calendar if no calendar with write access is available
  if (checkBox.checked === true || calendarIdOptions.options.length === 0) {
    document.getElementById("creationProgress").style.display = "block";
    const newName = document.getElementById("newName").value;
    gapi.client.calendar.calendars
      .insert({
        resource: {
          summary: newName,
          timeZone: "Europe/Rome",
        },
      })
      .then(
        function (response) {
          document.getElementById("creationProgress").style.display = "none";
          document.getElementById("creationOk").style.display = "block";
          setTimeout(function () {
            document.getElementById("creationOk").style.display = "none";
          }, 3000);
          calendarId = response.result.id;
          importMultipleEvents(
            genericEvents,
            calendarId,
            errorHandler,
            onProgress
          );
        },
        function (err) {
          document.getElementById("creationProgress").style.display = "none";
          document.getElementById("creationFail").style.display = "block";
          setTimeout(function () {
            document.getElementById("creationFail").style.display = "none";
          }, 5000);
          console.error("Execute error", err);
          errorHandler(err.body);
        }
      );
  } else {
    calendarId =
      calendarIdOptions.options[calendarIdOptions.selectedIndex].value;
    importMultipleEvents(genericEvents, calendarId, errorHandler, onProgress);
  }
}
