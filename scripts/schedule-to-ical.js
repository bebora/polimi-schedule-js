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
    "mag": 4,
    "giu": 5,
    "lug": 6,
    "ago": 7,
    "set": 8,
    "ott": 9,
    "dic": 11
  };
  const languageLookup = {
    "Lezione": "it",
    "Esercitazione": "it",
    "Laboratorio informatico": "it",
    "Laboratorio": "it",
    "Lesson": "en",
    "Training": "en",
    "Laboratory": "en",
    "Computer laboratory": "en"
  };

  const professorsLookup = {
    "it": {"one": "Docente:", "many": "Docenti:"},
    "en": {"one": "Professor:", "many": "Professors:"}
  };

  function dateToRuleText(date) {
    return date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
  }

  function createDateFromText(text) { //text is something like 01-ott-2020
    let date = new Date();
    let pieces = text.split("-");
    date.setFullYear(parseInt(pieces[2]), months[pieces[1].toLowerCase()], parseInt(pieces[0]));
    date.setSeconds(0, 0);
    return date;
  }

  function buildProfessorsList(course, alreadyMatchedTitles) {
    let professorNames = [];

    for (let title of alreadyMatchedTitles) {
      if (title[3] !== undefined) //Some courses composed of multiple subcourses does not have the professor name at the start
        professorNames.push(title[3].trim());
    }
    const virtualClassroomRegex = /^\s*(?:Aula virtuale|Virtual classroom)\s*-\s*(.*)$/gm;
    let virtualClassrooms = [...course.matchAll(virtualClassroomRegex)];

    for (let virtualClassroom of virtualClassrooms) {
      professorNames.push(virtualClassroom[1].trim());
    }
    professorNames = [...new Set(professorNames)];

    return professorNames;
  }

  function getProfessorString(lessonType, professorNames) {
    let pluralSelector = null;
    let languageTable = professorsLookup[languageLookup[lessonType] || "en"];

    if (professorNames.length === 1) {
      pluralSelector = "one";
    }
    else if (professorNames.length > 1) {
      pluralSelector = "many";
    }

    let professorString = "";
    if (pluralSelector != null) {
      professorString = languageTable[pluralSelector];
    }

    return professorString;
  }

  /**
   * @param {String[]} professorNames - list of professor names to use. If null, create them from scratch
   * **/
  function parseCourse(course, professorNames=null) {
    // Workaround for courses that actually contain other courses, such as the MIDA course contained in test/input/computerScienceDoppioCorso2020Firefox.txt
    if (course.includes("\n\n\n")) {
      let innerEvents = [];
      for (let wholeCourse of course.split(/\n\n\n/)) {
        innerEvents = [...innerEvents, ...parseCourse(wholeCourse.trim())];
      }
      return innerEvents;
    }
    let events = [];
    let noLessonTest = /\s*(?:L'orario non è stato definito|The schedule has not been defined)/;
    let noScheduleTest = /\s*(?:Nessun orario definito|No timetable defined)/;
    if (noLessonTest.test(course) || noScheduleTest.test(course)) {
      return [];
    }
    const titleRegex = /^\s*(\d{6}) - (.*?)(?:\s*\((?:Docente|Professor):(.*)\)|$)/gm;
    let titles = [...course.matchAll(titleRegex)];
    if (titles.length === 0) {
      return [];
    }

    if (professorNames === null) {
      professorNames = buildProfessorsList(course, titles);
    }

    let courseName = titles[titles.length - 1][2];
    const datesRegex = /(1|2|A|Annual(?:e*))?\s*(?:Inizio lezioni|Start of lessons|Lectures start): (\d{2}\/\d{2}\/\d{4})\s*(?:Fine lezioni|End of lesson(?:s*)|Lectures end): (\d{2}\/\d{2}\/\d{4})/g; //English strings are different between Manifesto degli Studi and personal timetables from the Online Services
    if (!datesRegex.test(course)) { //New calendar format
      let timeLocationRegex = /^\s*([^\s]*) (?:dalle|from) (\d{2}):(\d{2}) (?:alle|to) (\d{2}):(\d{2}), (.+?(?=\sin\s)) in (?:the)?\s*(?:aula|classroom|lecture theatre)\s*(.*)$/gmi;
      let timesLocations = [...course.split(timeLocationRegex)];
      timesLocations.splice(0,1); //Remove the first match as it is the course heading, which has already been parsed
      let regexCapturingGroups = 8;
      let numberTimesLocations = timesLocations.length / regexCapturingGroups; //The array contains (n * number of captured groups each time) elements
      for (let i=0; i < numberTimesLocations; i++) {
        //let weekDay = timesLocations[i*regexCapturingGroups];
        let startHour = timesLocations[i*regexCapturingGroups+1];
        let startMinute = timesLocations[i*regexCapturingGroups+2];
        let endHour = timesLocations[i*regexCapturingGroups+3];
        let endMinute = timesLocations[i*regexCapturingGroups+4];
        let lessonType = timesLocations[i*regexCapturingGroups+5];
        lessonType = lessonType[0].toUpperCase()+lessonType.substring(1);
        let location = timesLocations[i*regexCapturingGroups+6];
        let dates = timesLocations[i*regexCapturingGroups+7].split("\n\n")[0].trim().split("\n");
        let firstDay = createDateFromText(dates.splice(0, 1)[0]);
        let firstEnd = new Date(firstDay);
        firstDay.setHours(startHour);
        firstDay.setMinutes(startMinute);
        firstEnd.setHours(endHour);
        firstEnd.setMinutes(endMinute);
        let textualTime = ("0" + (firstDay.getHours())).slice(-2) + ("0" + firstDay.getMinutes()).slice(-2) + "00Z";

        let professorString = getProfessorString(lessonType, professorNames);
        let event = {
            "summary": courseName,
            "start": firstDay,
            "end": firstEnd,
            "duration": endHour - startHour, //TODO duration is redundant, check ical validity using only dtstart and dtend
            "dtstamp": new Date(),
            "location": location,
            "description": lessonType + "\n" + professorString + "\n" + professorNames.join("\n")
        };
        if (dates.length > 0) {
          event.rdate = dates.map(createDateFromText).map(dateToRuleText).map(onlydate => onlydate.concat("T"+textualTime)).join(',');
        }
        events.push(event);
      }
    }
    else {
      datesRegex.lastIndex = 0;
      let datesGroups = [...course.matchAll(datesRegex)];
      // Some annual courses consist of two courses, but the main course heading does not have any relevant event data. On the other hand, some courses also have information in the first section and it should't be removed
      if (datesGroups.length > 1) {
        let subCourses = [];
        let tempCourse = "";
        for (let row of course.split("\n")) {
          if (titleRegex.test(row)) {
            tempCourse = tempCourse.trim();
            if (tempCourse !== "")
              subCourses.push(tempCourse);
            tempCourse = row;
          }
          else {
            tempCourse += "\n" + row;
          }
        }
        tempCourse = tempCourse.trim();
        if (tempCourse !== "")
          subCourses.push(tempCourse);
        return [...parseCourse(subCourses[0], professorNames), ...parseCourse(subCourses.slice(1).join("\n"), professorNames)];
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
            let noRoomTest = /.*? (?:Aula al momento non disponibile|Classroom not available yet).*/;
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
            let lessonType = null;
            if (!noRoomTest.test(j)) {
              let roomMatch = /,\s*(.+)\s+in\s+(?:.*)(?:aula|classroom|lecture theatre) (.*)/.exec(j);
              lessonType = roomMatch[1][0].toUpperCase() + roomMatch[1].substring(1);
              location = roomMatch[2];
            }
            let professorString = getProfessorString(lessonType, professorNames);

            events.push(
              {
                "summary": courseName,
                "start": firstDay,
                "end": firstEnd,
                "duration": timeMatch[4] - timeMatch[2],
                "dtstamp": new Date(),
                "location": location,
                "rrule": "FREQ=WEEKLY;UNTIL=" + lastDay.getFullYear() + ("0" + (lastDay.getMonth() + 1)).slice(-2) + ("0" + lastDay.getDate()).slice(-2) + "T235959Z",
                "description": lessonType + "\n" + professorString + "\n" + professorNames.join("\n")
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
      let separator = "\n\n\n";

      if (allCourses.trim().includes("\n\n\n\n")) {
        separator = "\n\n\n\n";
      }
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
    if (events === null || events.length === 0) {
      if (logError) {
        alert("Unable to create iCalendar file! Text may be invalid or empty. If you think your text is correct, retry and/or contact the website maintainer.");
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
        if (e.description !== undefined) {
          icalEvent.addProp("DESCRIPTION", e.description.replace(/(?:\n)/g, '\\n'));
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

