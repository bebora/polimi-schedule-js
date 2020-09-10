(function(exports){
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
  const months = {
    "jan": 0,
    "feb": 1,
    "mar": 2,
    "apr": 3,
    "may": 4,
    "jun": 5,
    "jul": 6,
    "aug": 7,
    "sep": 8,
    "oct": 9,
    "nov": 10,
    "dec": 11,
    "gen": 0,
    "feb": 1,
    "mar": 2,
    "apr": 3,
    "mag": 4,
    "giu": 5,
    "lug": 6,
    "ago": 7,
    "set": 8,
    "ott": 9,
    "nov": 10,
    "dic": 11
  };

  function dateToRuleText(date) {
    return date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
  }

  function createDateFromText(text) { //text is something like 01-ott-2020
    let date = new Date();
    let pieces = text.split("-");
    date.setFullYear(parseInt(pieces[2]), months[pieces[1].toLowerCase()], parseInt(pieces[0]))
    date.setSeconds(0, 0);
    return date;
  }

  function parseCourse(course) {
    let events = [];
    let noLessonTest = /\s*(?:L'orario non è stato definito|The schedule has not been defined)/;
    let noScheduleTest = /\s*(?:Nessun orario definito|No timetable defined)/;
    if (noLessonTest.test(course) || noScheduleTest.test(course)) {
      return [];
    }
    const titleRegex = /(\d{6}) - (.*?)(?:\s*\((?:Docente|Professor):.*\)|$)/m;
    let titleMatch = titleRegex.exec(course);
    if (titleMatch === null) {
      return [];
    }
    let courseName = titleMatch[2];
    const eventsWithoutDateIntervalTest =  /^\s*(?:Semestre|Semester):\s*(1|2|Annual(?:e?))\s*$/gm;
    if (eventsWithoutDateIntervalTest.test(course)) { //New calendar format
      let timeLocationRegex = /^\s*([^\s]*) (?:dalle|from) (\d{2}):(\d{2}) (?:alle|to) (\d{2}):(\d{2}), (.+?(?=\sin\s)) in (?:the)?\s*(?:aula|classroom|lecture theatre)\s*(.*)$/gmi;
      let timesLocations = [...course.split(timeLocationRegex)];
      timesLocations.splice(0,1); //Remove the first match as it is the course intestation, which has already been parsed
      let regexCapturingGroups = 8;
      let numberTimesLocations = timesLocations.length / regexCapturingGroups; //The array contains (n * number of captured groups each time) elements
      for (let i=0; i < numberTimesLocations; i++) {
        //let weekDay = timesLocations[i*regexCapturingGroups];
        let startHour = timesLocations[i*regexCapturingGroups+1];
        let startMinute = timesLocations[i*regexCapturingGroups+2];
        let endHour = timesLocations[i*regexCapturingGroups+3];
        let endMinute = timesLocations[i*regexCapturingGroups+4];
        let lessonType = timesLocations[i*regexCapturingGroups+5];
        let location = timesLocations[i*regexCapturingGroups+6];
        let dates = timesLocations[i*regexCapturingGroups+7].split("\n\n")[0].trim().split("\n");
        let firstDay = createDateFromText(dates.splice(0, 1)[0]);
        let firstEnd = new Date(firstDay);
        firstDay.setHours(startHour);
        firstDay.setMinutes(startMinute);
        firstEnd.setHours(endHour);
        firstEnd.setMinutes(endMinute);
        let textualTime = ("0" + (firstDay.getHours())).slice(-2) + ("0" + firstDay.getMinutes()).slice(-2) + "00Z";
        events.push(
          {
            "summary": courseName,
            "start": firstDay,
            "end": firstEnd,
            "duration": endHour - startHour, //TODO duration is redundant, check ical validity using only dtstart and dtend
            "dtstamp": new Date(),
            "location": location,
            "lessontype": lessonType[0].toUpperCase()+lessonType.substring(1),
            "rdate": dates.map(createDateFromText).map(dateToRuleText).map(onlydate => onlydate.concat("T"+textualTime)).join(',')
          }
        );
      }
    }
    else {
      let datesRegex = /(1|2|A|Annual(?:e*))?\s*(?:Inizio lezioni|Start of lessons|Lectures start): (\d{2}\/\d{2}\/\d{4})\s*(?:Fine lezioni|End of lesson(?:s*)|Lectures end): (\d{2}\/\d{2}\/\d{4})/g; //English strings are different between Manifesto degli Studi and personal timetables from the Online Services
      let datesGroups = [...course.matchAll(datesRegex)];
      // Some annual courses consist of two courses, but the main course heading does not have any relevant event data. On the other hand, some courses also have information in the first section and it should't be removed
      if (datesGroups.length > 1) {
        let subCourses = [];
        if (course.includes("\n\n")) { //For Firefox
          subCourses = course.split("\n\n");
        }
        else { //For Chromium based browsers
          let aggregate = false;
          let tempCourse = "";
          for (let row of course.split("\n")) {
            if (titleRegex.test(row)) {
              if (aggregate === false) {
                aggregate = true;
                tempCourse = row;
              }
              else {
                aggregate = false;
                subCourses.push(tempCourse);
                tempCourse = row;
              }
            }
            else {
              tempCourse += "\n" + row;
            }
          }
          subCourses.push(tempCourse);
        }
        return [...parseCourse(subCourses[0]), ...parseCourse(subCourses.slice(1).join("\n\n"))];
      }
      else if (datesGroups.length === 1) {
        let datesMatch = datesGroups[0];
        let start = new Date(datesMatch[2].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1"));
        let end = new Date(datesMatch[3].replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1"));
        let courseDays = /[^\n]+\n[^\n]+\n?([\s\S]*)/.exec(course);
        if (courseDays !== null && courseDays[1] !== "") {
          let rows = courseDays[1].trim().split("\n\n")[0].split("\n");
          for (let j of rows) {
            let timeMatch = /([^\s]*) (?:dalle|from) (\d{2}):(\d{2}) (?:alle|to) (\d{2}):(\d{2})/i.exec(j);
            if (timeMatch === null) {
              //Row may be empty or "Aula virtuale per didattica a distanza" and should be ignored
              continue;
            }
            let noRoomTest = /.*? Aula al momento non disponibile.*/; //TODO find english version
            let weekDay = weekdays[timeMatch[1]];
            let firstDay = new Date(start);
            if (weekDay < start.getDay()) {
              firstDay.setDate(firstDay.getDate() - firstDay.getDay() + 7 + weekDay);
            }
            else {
              firstDay.setDate(firstDay.getDate() - firstDay.getDay() + weekDay);
            }
            firstDay.setHours(timeMatch[2], timeMatch[3], 0);
            let lastDay = new Date(end);
            if (weekDay <= end.getDay()) {
              lastDay.setDate(lastDay.getDate() - lastDay.getDay() + weekDay);
            }
            else {
              lastDay.setDate(lastDay.getDate() - lastDay.getDay() - 7 + weekDay);
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
                "duration": timeMatch[4] - timeMatch[2],
                "dtstamp": new Date(),
                "location": location,
                "rrule": "FREQ=WEEKLY;UNTIL=" + lastDay.getFullYear() + ("0" + (lastDay.getMonth() + 1)).slice(-2) + ("0" + lastDay.getDate()).slice(-2) + "T235959Z"
              }
            );
          }
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
    catch (err) {
      console.log("The website is no longer compatible with polimi-schedule-js. Please report the error message and the calendar text you are trying to convert. (" + err.message + ")");
    }
    return null;
  }

  function getIcalendar(allCourses, logError = true) {
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
        icalEvent.addProp("DURATION", "PT" + e.duration + "H"); //Assuming that the duration of the lessons is a multiple of one hour
        icalEvent.addProp("DTSTAMP", e.dtstamp, { VALUE: "DATE-TIME" });
        icalEvent.addProp("UID");
        if (e.location !== undefined) {
          icalEvent.addProp("LOCATION", e.location);
        }
        if (e.lessontype !== undefined) {
          icalEvent.addProp("DESCRIPTION", e.lessontype);
        }
        if (e.rrule !== undefined) {
          icalEvent.addProp("RRULE", e.rrule);
        }
        if (e.rdate !== undefined) {
          icalEvent.addProp("RDATE", e.rdate);
        }
        cal.addComponent(icalEvent);
      }
      return cal.toString();
    }
  }
  exports.parseText = parseText;
  exports.getIcalendar = getIcalendar;
})(typeof exports === 'undefined'? this : exports);

