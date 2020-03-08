let ICS = this["ics-js"];
const weekdays = {
  "Domenica": 0,
  "Lunedì": 1,
  "Martedì": 2,
  "Mercoledì": 3,
  "Giovedì": 4,
  "Venerdì": 5,
  "Sabato": 6,
  "Sunday": 0,
  "Monday": 1,
  "Tuesday": 2,
  "Wednesday": 3,
  "Thursday": 4,
  "Friday": 5,
  "Saturday": 6,
};

function parseCourse(course) {
  let events = [];
  let noLessonTest = /\s*(?:L'orario non è stato definito|The schedule has not been defined)/;
  let noScheduleTest = /\s*Nessun orario definito/; //TODO find english version
  if (noLessonTest.test(course) || noScheduleTest.test(course)) {
    return [];
  }
  let titleMatch = /(\d{6}) - (.*?)(?:\s*\((?:Docente|Professor):.*\)|$)/m.exec(course);
  let courseName = titleMatch[2];
  let datesRegex = /(1|2|A|Annual(?:e*))\s*(?:Inizio lezioni|Start of lessons|Lectures start): (\d{2}\/\d{2}\/\d{4}) (?:Fine lezioni|End of lesson(?:s*)|Lectures end): (\d{2}\/\d{2}\/\d{4})/g; //English strings are different between Manifesto degli Studi and personal timetables from the Online Services
  let datesGroups = [...course.matchAll(datesRegex)];
  // Some annual courses consist of two courses, but the main course heading does not have any relevant event data and should be removed from the parsing.
  if (datesGroups.length > 1) {
    return parseCourse(course.split("\n\n").slice(1).join("\n\n")); //
  }
  else if (datesGroups.length === 1) {
    let datesMatch = datesGroups[0];
    let start = new Date(datesMatch[2].replace(/(\d{2})\/(\d{2})\/(\d{4})/,"$3-$2-$1"));
    let end = new Date(datesMatch[3].replace(/(\d{2})\/(\d{2})\/(\d{4})/,"$3-$2-$1"));
    let courseDays = /[^\n]+\n[^\n]+\n?([\s\S]*)/.exec(course);
    if (courseDays[1] !== "") {
      let rows = courseDays[1].trim().split("\n\n")[0].split("\n");
      for (let j of rows) {
        let timeMatch = /([^\s]*) (?:dalle|from) (\d{2}):(\d{2}) (?:alle|to) (\d{2}):(\d{2})/i.exec(j);
        let noRoomTest = /.*? Aula al momento non disponibile.*/; //TODO find english version
        let weekDay = weekdays[timeMatch[1]];
        let firstDay = new Date(start);
        if (weekDay < start.getDay()) {
          firstDay.setDate(firstDay.getDate()-firstDay.getDay()+7+weekDay);
        }
        else {
          firstDay.setDate(firstDay.getDate()-firstDay.getDay()+weekDay);
        }
        firstDay.setHours(timeMatch[2], timeMatch[3], 0);
        let lastDay = new Date(end);
        if (weekDay <= end.getDay()) {
          lastDay.setDate(lastDay.getDate()-lastDay.getDay()+weekDay);
        }
        else {
          lastDay.setDate(lastDay.getDate()-lastDay.getDay()-7+weekDay);
        }
        let firstEnd = new Date(firstDay);
        firstEnd.setHours(timeMatch[4], timeMatch[5], 0);
        let location = null;
        if (!noRoomTest.test(j)) {
          let roomMatch = /(?:aula|classroom|lecture theatre) (.*)/.exec(j);
          location = roomMatch[1];
        }
        events.push(
          {
            "summary": courseName,
            "start": firstDay,
            "end": firstEnd,
            "duration": timeMatch[4]-timeMatch[2], //TODO duration is redundant, check ical validity using only dtstart and dtend
            "dtstamp": new Date(),
            "location": location,
            "rrule": "FREQ=WEEKLY;UNTIL="+lastDay.getFullYear()+("0"+(lastDay.getMonth()+1)).slice(-2)+("0"+lastDay.getDate()).slice(-2)+"T235959Z"
          }
        );
      }
    }
  }
  return events;
}

function parseText(allCourses) {
  try {
    const separator = "\n\n\n"; 
    let coursesList = allCourses.trim().split(separator);
    let events = [];
    for (let wholeCourse of coursesList) {
      events = [...events, ...parseCourse(wholeCourse.trim())];
    }
    return events;
  }
  catch(err) {
    console.log("The website is no longer compatible with polimi-schedule-js. Please report the error message and the calendar text you are trying to convert. ("+err.message+")");
  }
  return null;
}

function getIcalendar(allCourses, logError=true) {
  let events = parseText(allCourses);
  if (events === null) {
    if (logError) {
      alert("Unable to parse courses data! Text may be invalid or empty.");
    }
    return "";
  }
  else {
    let cal = new ICS.VCALENDAR();
    cal.addProp("VERSION", 2);
    cal.addProp("PRODID", "bebora@github");
    for (let e of events) {
      let icalEvent = new ICS.VEVENT();
      icalEvent.addProp("SUMMARY", e.summary);
      icalEvent.addProp("DTSTART", e.start, { VALUE: "DATE-TIME" });
      icalEvent.addProp("DURATION", "PT"+e.duration+"H"); //Assuming that the duration of the lessons is a multiple of one hour
      icalEvent.addProp("DTSTAMP", e.dtstamp, { VALUE: "DATE-TIME" });
      icalEvent.addProp("UID");
      if (e.location !== null) {
        icalEvent.addProp("LOCATION", e.location);
      }
      icalEvent.addProp("RRULE", e.rrule);
      cal.addComponent(icalEvent);
    }
    return cal.toString();
  }
}
