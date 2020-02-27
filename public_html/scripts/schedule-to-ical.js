let ICS = this["ics-js"];
let weekdays = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

function parseText(allCourses) {
  try {
    const separator = allCourses.includes("\n\n\n\n") ? "\n\n\n\n" : "\n\n\n"; 
    let coursesList = allCourses.trim().split(separator);
    let events = [];
    for (let wholeCourse of coursesList) {
      let course = wholeCourse.split("\n\n\n")[0];
      let noLessonTest = /\s*L'orario non è stato definito/;
      let noScheduleTest = /\s*Nessun orario definito/;
      if (noLessonTest.test(course) || noScheduleTest.test(course)) {
        continue;
      }
      let titleMatch = /(\d{6}) - (.*?)(?:\s*\(Docente:.*\)|$)/m.exec(course);
      let courseName = titleMatch[2];
      let datesMatch = /Inizio lezioni: (\d{2}\/\d{2}\/\d{4}) Fine lezioni: (\d{2}\/\d{2}\/\d{4})/.exec(course);
      let start = new Date(datesMatch[1].replace(/(\d{2})\/(\d{2})\/(\d{4})/,"$3-$2-$1"));
      let end = new Date(datesMatch[2].replace(/(\d{2})\/(\d{2})\/(\d{4})/,"$3-$2-$1"));
      let courseDays = /[^\n]+\n[^\n]+\n?([\s\S]*)/.exec(course);
      if (courseDays[1] !== "") {
        let rows = courseDays[1].trim().split("\n");
        for (let j of rows) {
          let timeMatch = /([^\s]*) dalle (\d{2}):(\d{2}) alle (\d{2}):(\d{2})/.exec(j);
          let noRoomTest = /.*? Aula al momento non disponibile.*/;
          let weekDay = weekdays.indexOf(timeMatch[1]);
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
            let roomMatch = /aula (.*)/.exec(j);
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
  catch(err) {
    console.log("The website is no longer compatible with polimi-schedule-js. ("+err.message+")");
  }
  return null;
}

function getIcalendar(allCourses) {
  //process events
  let events = parseText(allCourses);
  if (events === null) {
    alert("Unable to parse courses data!");
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
