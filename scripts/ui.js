document.getElementById("download").addEventListener("click", function () {
  let icsContent = getIcalendar(document.getElementById("input").value);
  if (icsContent === "") {
    document.getElementById("error").style.display = "inline-block";
    setTimeout(function () {
      document.getElementById("error").style.display = "none";
    }, 3000);
  } else {
    let blob = new Blob([icsContent], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "orarioPolimi.ics");
  }
});

document.getElementById("import_button").addEventListener("click", function () {
  const events = parseText(document.getElementById("input").value);
  if (events === null || events.length === 0) {
    document.getElementById("error").style.display = "inline-block";
    setTimeout(function () {
      document.getElementById("error").style.display = "none";
    }, 3000);
    console.log(
      "Unable to parse courses data! Text may be invalid or empty. If you think your text is correct, retry and/or contact the website maintainer."
    );
  } else {
    handleGcalendarImport(events);
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
function hideOverlay(id) {
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

function generateLinks(googleErr = null) {
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
  if (googleErr !== null) {
    issueText += `Gapi error: \`${JSON.stringify(googleErr, null, 0)}\`\n`;
  }
  issueText += "</details>";

  document.getElementById(
    "github-link"
  ).href = `${base_issue_url}?body=${encodeURIComponent(issueText)}`;
}

function displayErrorPopup(googleErr = null) {
  generateLinks(googleErr);
  showOverlay("error-pop");
}

document.getElementById("manualErrorPopup").addEventListener("click", () => {
  displayErrorPopup();
});
