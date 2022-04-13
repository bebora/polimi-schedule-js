import { handleGcalendarImport, handleClientLoad } from "./gapi-importer.js";
import { setLanguage } from "./set-language";
import { getIcalendar, parseText } from "./schedule-to-ical";
import { saveAs } from "file-saver";

document.getElementById("download").addEventListener("click", function () {
  let icsContent = getIcalendar(document.getElementById("input").value);
  if (icsContent.error !== null) {
    document.getElementById("error").style.display = "inline-block";
    setTimeout(function () {
      document.getElementById("error").style.display = "none";
    }, 3000);
    displayErrorPopup(icsContent.error);
  } else {
    let blob = new Blob([icsContent.data], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "orarioPolimi.ics");
  }
});

document.getElementById("import_button").addEventListener("click", function () {
  const events = parseText(document.getElementById("input").value);
  if (events.error !== null) {
    document.getElementById("error").style.display = "inline-block";
    setTimeout(function () {
      document.getElementById("error").style.display = "none";
    }, 3000);
    console.error(
      "Unable to parse courses data! Text may be invalid or empty. If you think your text is correct, retry and/or contact the website maintainer."
    );
    displayErrorPopup(events.error);
  } else {
    handleGcalendarImport(events.data, displayErrorPopup);
  }
});

document.getElementById("import-gcal").addEventListener("click", function () {
  showOverlay("google-pop");
});

document.querySelectorAll(".pop-window").forEach((el) =>
  el.addEventListener("click", (event) => {
    event.stopPropagation();
  })
);

/**
 * Hide an overlay
 * @param {string} id id of the overlay background
 */
export function hideOverlay(id) {
  document.getElementById(id).style.display = "none";
}

/**
 * Display an overlay
 * @param {string} id id of the overlay background
 */
function showOverlay(id) {
  document.getElementById(id).style.display = "block";
}

function displayNewName() {
  const checkBox = document.getElementById("newCalendar");
  const inputElem = document.getElementById("inputElem");
  if (checkBox.checked === true) {
    inputElem.style.display = "block";
  } else {
    inputElem.style.display = "none";
  }
}

let telegram_dst = null;
const piece1 = atob("cG9saW1p");
const piece2 = [..."troppus_sj_eludehcs"].reverse().join("");
const base_issue_url =
  "https://github.com/bebora/polimi-schedule-js/issues/new";

function generateLinks(errorInfo = null) {
  if (telegram_dst === null) {
    telegram_dst = `https://t.me/${piece1}_${piece2}`;
    document.getElementById("telegram-link").href = telegram_dst;
  }
  const timetableInput = document.getElementById("input").value;
  let issueText = `<!-- Please add a title above and describe the problem on the next line -->\n\n\n
<details>
    <summary>Debug info</summary>

User agent: \`${navigator.userAgent}\`
Timetable input:
\`\`\`
${timetableInput}
\`\`\`
`;
  if (errorInfo !== null) {
    issueText += `Error info: \`${JSON.stringify(errorInfo, null, 0)}\`\n`;
  }
  issueText += "</details>";

  document.getElementById(
    "github-link"
  ).href = `${base_issue_url}?body=${encodeURIComponent(issueText)}`;
}

function displayErrorPopup(errorInfo = null) {
  generateLinks(errorInfo);
  showOverlay("error-pop");
  console.error("Error info:", errorInfo);
}

document.getElementById("manualErrorPopup").addEventListener("click", () => {
  displayErrorPopup();
});

function bindEventListeners() {
  document.getElementById("google-pop").addEventListener("click", () => {
    hideOverlay("google-pop");
  });
  document
    .getElementById("google-close-button")
    .addEventListener("click", () => {
      hideOverlay("google-pop");
    });

  document.getElementById("error-pop").addEventListener("click", () => {
    hideOverlay("error-pop");
  });
  document
    .getElementById("error-close-button")
    .addEventListener("click", () => {
      hideOverlay("error-pop");
    });

  document.getElementById("itFlag").addEventListener("click", () => {
    setLanguage("it");
  });
  document.getElementById("enFlag").addEventListener("click", () => {
    setLanguage("en");
  });

  document
    .getElementById("newCalendar")
    .addEventListener("click", displayNewName);
}

function setupUi() {
  bindEventListeners();
  setLanguage((navigator.language || navigator.userLanguage).slice(0, 2));
}

export { handleClientLoad };

setupUi();
