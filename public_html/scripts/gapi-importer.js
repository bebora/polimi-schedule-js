// Client ID from the Developer Console
const CLIENT_ID = "845509487647-5786nh91r45rsm485m2mb4cqcfmis94g.apps.googleusercontent.com";

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

const SCOPES = "https://www.googleapis.com/auth/calendar";

const authorizeButton = document.getElementById("authorize_button");
const signoutButton = document.getElementById("signout_button");
const loggedInSection = document.getElementById("logged_in_section");
const loggedOutSection = document.getElementById("logged_out_section");

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function (error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    loggedOutSection.style.display = "none";
    loggedInSection.style.display = "block";
    //listUpcomingEvents(true);
    getCalendars();
  } else {
    loggedOutSection.style.display = "block";
    loggedInSection.style.display = "none";
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById("pop-content");
  var textContent = document.createTextNode(message + "\n");
  pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user"s calendar. If no events are found an
 * appropriate message is printed.
 */
function listUpcomingEvents(getPrimary) {
  if (getPrimary === undefined || getPrimary === true) {
    calendarId = "primary";
  }
  else {
    console.log(getPrimary);
    let s = document.getElementById("calendarId");
    calendarId = s.options[s.selectedIndex].value;
  }
  gapi.client.calendar.events.list({
    "calendarId": calendarId,
    "timeMin": (new Date()).toISOString(),
    "showDeleted": false,
    "singleEvents": true,
    "maxResults": 10,
    "orderBy": "startTime"
  }).then(function (response) {
    var events = response.result.items;
    appendPre("Upcoming events:");

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        if (!when) {
          when = event.start.date;
        }
        appendPre(event.summary + " (" + when + ")")
      }
    } else {
      appendPre("No upcoming events found.");
    }
  });
}
function importMultipleEvents(genericEvents, calendarId) {
  let events = [];
  genericEvents.forEach(function (item, key) {
    let resource = {
      "summary": item.summary,
      "start": {
        "dateTime": item.start.toISOString(),
        "timeZone": "Europe/Rome"
      },
      "end": {
        "dateTime": item.end.toISOString(),
        "timeZone": "Europe/Rome"
      },
      "recurrence": [
        "RRULE:" + item.rrule
      ]
    };
    if (item.location !== null) {
      resource.location = item.location;
    }
    events.push(resource);
  });
  for (let e of events) {
    gapi.client.calendar.events.insert({
      "calendarId": calendarId,
      "resource": e
    })
      .then(function (response) {
        console.log("Response", response.result);
      },
        function (err) { console.error("Execute error", err); });
  }
}

function getCalendars() {
  return gapi.client.calendar.calendarList.list({})
    .then(function (response) {
      //console.log(response.result.items);
      let s = document.getElementById("calendarId");
      let options = response.result.items;
      options.forEach(function (item, key) {
        if (/Polimi|Universit/i.test(item.summary))
          s[key] = new Option(item.summary, item.id, true, true);
        else
          s[key] = new Option(item.summary, item.id);
      });
    },
      function (err) { console.error("Execute error", err); });
}

function handleGcalendarImport(genericEvents) {
  const checkBox = document.getElementById("newCalendar");
  let calendarId = null;
  if (checkBox.checked == true) {
    const newName = document.getElementById("newName").value;
    gapi.client.calendar.calendars.insert({
      "resource": {
        "summary": newName,
        "timeZone": "Europe/Rome"
      }
    })
      .then(function (response) {
        console.log(response.result);
        calendarId = response.result.id;
        console.log(calendarId);
        importMultipleEvents(genericEvents, calendarId);
      },
        function (err) { console.error("Execute error", err); });
  }
  else {
    const calendarIdOptions = document.getElementById("calendarId");
    calendarId = calendarIdOptions.options[calendarIdOptions.selectedIndex].value;
    importMultipleEvents(genericEvents, calendarId);
  }
}