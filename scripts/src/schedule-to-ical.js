import { DateTime } from "luxon";
import { Component, Property } from "immutable-ics";
import { v4 as uuidv4 } from "uuid";

/**
 * @typedef {Object} ParsedData
 * @property {Object[]} data
 * @property {?string} error
 */

/**
 * @typedef {Object} IcalendarData
 * @property {string} data
 * @property {?string} error
 */

const europeRomeIcalTimezone = `
X-WR-TIMEZONE:Europe/Rome
BEGIN:VTIMEZONE
TZID:Europe/Rome
X-LIC-LOCATION:Europe/Rome
BEGIN:DAYLIGHT
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
TZNAME:CEST
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
TZNAME:CET
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
`.replace(/\r?\n/g, "\r\n"); // Assuming that the timezone will not change

const weekdays = {
  Domenica: 7,
  Lunedì: 1,
  Martedì: 2,
  Mercoledì: 3,
  Giovedì: 4,
  Venerdì: 5,
  Sabato: 6,
  Sunday: 7,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};
const months = {
  jan: 1,
  feb: 2,
  mar: 3,
  apr: 4,
  may: 5,
  jun: 6,
  jul: 7,
  aug: 8,
  sep: 9,
  oct: 10,
  nov: 11,
  dec: 12,
  gen: 1,
  mag: 5,
  giu: 6,
  lug: 7,
  ago: 8,
  set: 9,
  ott: 10,
  dic: 12,
};
// From existing examples, lessons always start in sep-oct or feb-mar-apr and respectively end in dec-jan or apr-may-jun
// Distributed Systems ends in oct (2022), Networked Software for Distributed Systems starts in nov (2022)
// Could the first end in nov or the latter start in oct? Assuming so
// This definitely breaks if some actual course starts or ends on unexpected months
const acceptableStartingMonths = [2, 3, 4, 9, 10, 11];
const acceptableEndingMonths = [4, 5, 6, 10, 11, 12, 1];
const languageLookup = {
  Lezione: "it",
  Esercitazione: "it",
  "Laboratorio informatico": "it",
  Laboratorio: "it",
  Lesson: "en",
  Training: "en",
  Laboratory: "en",
  "Computer laboratory": "en",
};

const professorsLookup = {
  it: { one: "Docente:", many: "Docenti:" },
  en: { one: "Professor:", many: "Professors:" },
};

/**
 * Insert the required Europe/Rome VTIMEZONE component inside the iCalendar output
 * @param {string} rawCalendar
 * @return {string}
 */
function insertVTimezone(rawCalendar) {
  return rawCalendar.replace(/\r\n(?=BEGIN:VEVENT)/, europeRomeIcalTimezone);
}

/**
 * Transform a date into a rdate local time format
 * @param {DateTime} date with the correct timezone already specified (e.g. Europe/Rome)
 * @return {string}
 */
function dateToLocalRuleText(date) {
  return date.toFormat("yyyyMMdd'T'HHmmss");
}

/**
 * Transform a date into a rdate UTC time format (Z suffix)
 * @param {DateTime} date with any timezone already specified
 * @return {string}
 */
function dateToUTCRuleText(date) {
  return date.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'");
}

/**
 * Generate a function that copies the hours and minutes from a datetime into other dates
 * @param {DateTime} firstDatetime object that contains the right hours and minutes
 * @return {function}
 */
function setHourGenerator(firstDatetime) {
  return (otherDate) => {
    return otherDate.set({
      hour: firstDatetime.hour,
      minute: firstDatetime.minute,
    });
  };
}

/**
 * Check if input line is a date or a virtual classroom. Not a proper date validator.
 * @param {string} line
 * @return {boolean}
 */
function isValidDate(line) {
  return /\d{2}-[a-zA-Z]{3}-\d{4}/gm.test(line);
}

/**
 * Detect whether course dates are in dd/mm/yyyy or mm/dd/yyyy format
 * @param {RegExpExecArray} startComponents
 * @param {RegExpExecArray} endComponents
 * @return {boolean}
 */
function isCourseDdMmYyyy(startComponents, endComponents) {
  // Default dates convention is dd/mm/yyyy
  let ret = true;

  const startMonth = parseInt(startComponents[2]);
  const endMonth = parseInt(endComponents[2]);

  const startAsNumber = parseInt(
    startComponents[3] + startComponents[2] + startComponents[1]
  );
  const endAsNumber = parseInt(
    endComponents[3] + endComponents[2] + endComponents[1]
  );

  // If the second component can't be a month, the format will be mm/dd/yyyy
  if (
    acceptableStartingMonths.indexOf(startMonth) === -1 ||
    acceptableEndingMonths.indexOf(endMonth) === -1 ||
    startMonth > 12 ||
    endMonth > 12 ||
    startAsNumber > endAsNumber
  ) {
    ret = false;
  }
  return ret;
}

/**
 * Create an appropriate DateTime object from a textual representation
 * @param text
 * @return {DateTime}
 */
function createDateFromText(text) {
  //text is something like 01-ott-2020
  let pieces = text.split("-");
  const year = parseInt(pieces[2]);
  const month = months[pieces[1].toLowerCase()];
  if (month === undefined) {
    throw new Error(`Invalid month in: ${text}`);
  }
  const day = parseInt(pieces[0]);
  return DateTime.fromObject(
    { year: year, month: month, day: day, hour: 12, minute: 0 },
    { zone: "Europe/Rome" }
  );
}

function buildProfessorsList(course, alreadyMatchedTitles) {
  let professorNames = [];

  for (let title of alreadyMatchedTitles) {
    if (title[3] !== undefined)
      //Some courses composed of multiple subcourses does not have the professor name at the start
      professorNames.push(title[3].trim());
  }
  const virtualClassroomRegex =
    /^\s*(?:Aula virtuale|Virtual classroom)\s*-\s*(.*)$/gm;
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
  } else if (professorNames.length > 1) {
    pluralSelector = "many";
  }

  let professorString = "";
  if (pluralSelector != null) {
    professorString = languageTable[pluralSelector];
  }

  return professorString;
}

/**
 * Parse a course in the format typically used by the AIUC School
 * @param {string} course
 * @param {string[]} professorNames
 * @param {string} courseName
 * @return {ParsedData}
 */
function parseAUICCourse(course, professorNames, courseName) {
  const events = [];
  let timeLocationRegex =
    /^\s*([^\s]*) (?:dalle|from) (\d{2}):(\d{2}) (?:alle|to) (\d{2}):(\d{2}), (.+?(?=\sin\s|\sClassroom\s|\sAula\s))(?: in (?:the)?\s*(?:aula|classroom|lecture theatre))*\s*(.*)$/gim;
  let timesLocations = [...course.split(timeLocationRegex)];
  timesLocations.splice(0, 1); //Remove the first match as it is the course heading, which has already been parsed
  let regexCapturingGroups = 8;
  let numberTimesLocations = timesLocations.length / regexCapturingGroups; //The array contains (n * number of captured groups each time) elements
  for (let i = 0; i < numberTimesLocations; i++) {
    //let weekDay = timesLocations[i*regexCapturingGroups];
    let startHour = timesLocations[i * regexCapturingGroups + 1];
    let startMinute = timesLocations[i * regexCapturingGroups + 2];
    let endHour = timesLocations[i * regexCapturingGroups + 3];
    let endMinute = timesLocations[i * regexCapturingGroups + 4];
    let lessonType = timesLocations[i * regexCapturingGroups + 5];
    lessonType = lessonType[0].toUpperCase() + lessonType.substring(1);
    let location = timesLocations[i * regexCapturingGroups + 6];
    let dates = timesLocations[i * regexCapturingGroups + 7]
      .split("\n\n")[0]
      .trim()
      .split("\n");
    dates = dates.filter(isValidDate);
    const partialFirstDay = createDateFromText(dates.splice(0, 1)[0]);
    const firstDay = partialFirstDay.set({
      hour: startHour,
      minute: startMinute,
    });
    const firstEnd = partialFirstDay.set({
      hour: endHour,
      minute: endMinute,
    });

    let professorString = getProfessorString(lessonType, professorNames);
    let event = {
      summary: courseName,
      start: firstDay,
      end: firstEnd,
      dtstamp: DateTime.now(),
      location: location,
      description:
        lessonType + "\n" + professorString + "\n" + professorNames.join("\n"),
    };
    if (dates.length > 0) {
      event.rdate = dates
        .map(createDateFromText)
        .map(setHourGenerator(firstDay))
        .map(dateToUTCRuleText)
        .join(",");
    }
    events.push(event);
  }
  return { data: events, error: null };
}

/**
 * Parse a course in the format typically used by the III School
 * @param {string} course
 * @param {RegExp} datesRegex
 * @param {RegExp} titleRegex
 * @param {string[]} professorNames
 * @param {string} courseName
 * @return {ParsedData}
 */
function parseIIICourse(
  course,
  datesRegex,
  titleRegex,
  professorNames,
  courseName
) {
  datesRegex.lastIndex = 0;
  let datesGroups = [...course.matchAll(datesRegex)];
  // Some annual courses consist of two courses, but the main course heading does not have any relevant event data. On the other hand, some courses also have information in the first section and it should't be removed
  if (datesGroups.length > 1) {
    let subCourses = [];
    let tempCourse = "";
    for (let row of course.split("\n")) {
      if (titleRegex.test(row)) {
        tempCourse = tempCourse.trim();
        if (tempCourse !== "") subCourses.push(tempCourse);
        tempCourse = row;
      } else {
        tempCourse += "\n" + row;
      }
    }
    tempCourse = tempCourse.trim();
    if (tempCourse !== "") subCourses.push(tempCourse);
    const headingData = parseCourse(subCourses[0], professorNames);
    const followingData = parseCourse(
      subCourses.slice(1).join("\n"),
      professorNames
    );
    return {
      data: [...headingData.data, ...followingData.data],
      error: headingData.error || followingData.error,
    };
  } else if (datesGroups.length === 1) {
    let datesMatch = datesGroups[0];

    const dateComponentsRegex = /(\d{2})\/(\d{2})\/(\d{4})/;

    const startComponents = dateComponentsRegex.exec(datesMatch[2]);
    const endComponents = dateComponentsRegex.exec(datesMatch[3]);

    const isDdMmYyyy = isCourseDdMmYyyy(startComponents, endComponents);
    const dateFormat = isDdMmYyyy ? "dd/MM/yyyy" : "MM/dd/yyyy";

    let start = DateTime.fromFormat(datesMatch[2], dateFormat, {
      zone: "Europe/Rome",
    }); //new Date(datesMatch[2].replace(/(\d{2})\/(\d{2})\/(\d{4})/, dateFormatter));
    let end = DateTime.fromFormat(datesMatch[3], dateFormat, {
      zone: "Europe/Rome",
    });
    if (start.valueOf() > end.valueOf()) {
      return {
        data: [],
        error: `Start is unexpectedly greater than End (${start} > ${end})`,
      };
    }

    const events = [];
    let courseDays = /[^\n]+\n[^\n]+\n?([\s\S]*)/.exec(course);
    if (courseDays !== null && courseDays[1] !== "") {
      let rows = courseDays[1].trim().split("\n\n")[0].split("\n");
      for (let j of rows) {
        let timeMatch =
          /([^\s]*) (?:dalle|from) (\d+)[:.](\d+)\s?(?<startMidday>(?:[ap])\.?m\.?)? (?:alle|to) (\d+)[:.](\d+)\s?(?<endMidday>(?:[ap])\.?m\.?)?/i.exec(
            j
          );
        if (timeMatch === null) {
          //Row may be empty or "Aula virtuale per didattica a distanza" and should be ignored
          continue;
        }
        let noRoomTest =
          /.*? (?:Aula al momento non disponibile|Classroom not available yet).*/;
        let weekDay = weekdays[timeMatch[1]];
        let firstDay = start;
        if (weekDay < start.weekday) {
          firstDay = start.set({
            day: start.day - start.weekday + 7 + weekDay,
          });
        } else {
          firstDay = start.set({ day: start.day - start.weekday + weekDay });
        }
        const startMiddayOffset =
          timeMatch.groups.startMidday !== undefined &&
          timeMatch.groups.startMidday[0] === "p"
            ? 12
            : 0; // Add hour offset for p.m.
        firstDay = firstDay.set({
          hour: parseInt(timeMatch[2]) + startMiddayOffset,
          minute: parseInt(timeMatch[3]),
        });

        let lastDay = end;
        if (weekDay <= end.weekday) {
          lastDay = end.set({ day: end.day - end.weekday + weekDay });
        } else {
          lastDay = end.set({ day: end.day - end.weekday - 7 + weekDay });
        }
        lastDay = lastDay.set({
          hour: firstDay.hour,
          minute: firstDay.minute,
        });
        if (firstDay.valueOf() > lastDay.valueOf()) {
          return {
            data: events,
            error: `First day is unexpectedly greater than Last day (${firstDay} > ${lastDay})`,
          };
        }

        let firstEnd = firstDay;
        const endMiddayOffset =
          timeMatch.groups.endMidday !== undefined &&
          timeMatch.groups.endMidday[0] === "p"
            ? 12
            : 0; // Add hour offset for p.m.
        firstEnd = firstEnd.set({
          hour: parseInt(timeMatch[5]) + endMiddayOffset,
          minute: parseInt(timeMatch[6]),
        });

        let location = null;
        let lessonType = null;
        if (!noRoomTest.test(j)) {
          let roomMatch =
            /,\s*(.+)\s+in\s+(?:.*?)(?:aula|classroom|lecture theatre|the classroom|the|room) (.*)/.exec(
              j
            ); // "the" is for "the CLASD classroom" ad example
          if (roomMatch === null) {
            // Some room descriptions do not contain "in" and/or have a weird text order. It seems to happen only in English.
            // The lessonType is assumed to be a regular lesson and "classroom lesson" will be stripped
            let inaccurateRoomMatch = /,\s*(?:classroom lesson)?\s*(.*)/.exec(
              j
            );
            if (inaccurateRoomMatch !== null) {
              lessonType = "Lesson";
              location = inaccurateRoomMatch[1];
            }
          } else {
            lessonType =
              roomMatch[1][0].toUpperCase() + roomMatch[1].substring(1);
            location = roomMatch[2];
          }
        }
        let professorString = getProfessorString(lessonType, professorNames);

        events.push({
          summary: courseName,
          start: firstDay,
          end: firstEnd,
          dtstamp: DateTime.now(),
          location: location,
          rrule: "FREQ=WEEKLY;UNTIL=" + dateToUTCRuleText(lastDay),
          description:
            lessonType +
            "\n" +
            professorString +
            "\n" +
            professorNames.join("\n"),
        });
      }
    }
    return { data: events, error: null };
  }
}

/**
 * @param {string} course textual representation of the course
 * @param {String[]|null} upperLevelProfessorNames - list of professor names to use. If null, create them from scratch
 * @param {string|null} subcourseSeparator - Separator that is supposed to divide the possible subcourses (usually \n\n for Chromium and \n\n\n for Firefox)
 * @return {ParsedData} Parsing result
 * **/
function parseCourse(
  course,
  upperLevelProfessorNames = null,
  subcourseSeparator = null
) {
  const titleRegex =
    /^\s*(\d{6}) - (.*?)(?:\s*\(\s*(?:Docente|Professor|Lecturer|Teacher):(.*)\)|$)/gm;
  const titles = [...course.matchAll(titleRegex)];
  if (titles.length === 0) {
    return { data: [], error: null };
  }

  let professorNames = buildProfessorsList(course, titles);

  if (professorNames.length === 0 && upperLevelProfessorNames !== null) {
    professorNames = upperLevelProfessorNames;
  }

  // Workaround for courses that actually contain other courses, such as the MIDA course contained in test/input/computerScienceDoppioCorso2020Firefox.txt
  if (subcourseSeparator !== null && titles.length > 1) {
    if (course.includes(subcourseSeparator)) {
      let innerEvents = [];
      for (const wholeCourse of course.split(subcourseSeparator)) {
        const newSubcourse = parseCourse(wholeCourse.trim(), professorNames);
        innerEvents = [...innerEvents, ...newSubcourse.data];
        if (newSubcourse.error !== null) {
          return { data: innerEvents, error: newSubcourse.error };
        }
      }
      return { data: innerEvents, error: null };
    }
  }

  const noLessonTest =
    /\s*(?:L'orario non è stato definito|The schedule has not been defined)/;
  const noScheduleTest = /\s*(?:Nessun orario definito|No timetable defined)/;
  if (noLessonTest.test(course) || noScheduleTest.test(course)) {
    return { data: [], error: null };
  }

  const courseName = titles[titles.length - 1][2];
  const datesRegex =
    /(1|2|A|Annual(?:e*))?\s*(?:Inizio lezioni|Start of lessons|Lectures start|Lessons start): (\d{2}\/\d{2}\/\d{4})\s*(?:Fine lezioni|End of lesson(?:s*)|Lectures end|Lessons end): (\d{2}\/\d{2}\/\d{4})/g; //English strings are different between Manifesto degli Studi and personal timetables from the Online Services
  if (!datesRegex.test(course)) {
    return parseAUICCourse(course, professorNames, courseName);
  } else {
    return parseIIICourse(
      course,
      datesRegex,
      titleRegex,
      professorNames,
      courseName
    );
  }
}

/**
 * Apply minor transformation to the user input to allow for easier parsing
 * @param {string} userInput
 * @return {string}
 */
function preprocessText(userInput) {
  return userInput.replace(/\n\)/g, ")"); // Remove newline before the closing parenthesis of the professor section, if present
}

/**
 * Parse the whole timetable input
 * @param {string} allCourses - User timetable
 * @return {ParsedData}
 */
function parseText(allCourses) {
  try {
    const preprocessedInput = preprocessText(allCourses);

    let separator = "\n\n\n";

    if (preprocessedInput.trim().includes("\n\n\n\n")) {
      separator = "\n\n\n\n";
    }
    let coursesList = preprocessedInput.trim().split(separator);
    let events = [];
    for (let wholeCourse of coursesList) {
      const newCourse = parseCourse(
        wholeCourse.trim(),
        null,
        separator.slice(0, -1)
      );
      events = [...events, ...newCourse.data];
      if (newCourse.error !== null) {
        return { data: events, error: newCourse.error };
      }
    }

    // Prevent the error popup from appearing if the input is empty
    if (events.length === 0 && preprocessedInput.trim().length !== 0) {
      return { data: [], error: "No courses detected" };
    }

    return { data: events, error: null };
  } catch (err) {
    console.error(
      "The website is no longer compatible with polimi-schedule-js. Please report the error message and the calendar text you are trying to convert. (" +
        err.message +
        ")"
    );
    return { data: [], error: err.message };
  }
}

/**
 *
 * @param {string} allCourses
 * @param {boolean} logError
 * @return {IcalendarData}
 */
function getIcalendar(allCourses, logError = true) {
  let events = parseText(allCourses);
  if (events.error !== null) {
    if (logError) {
      console.error(
        "Unable to create iCalendar file! Text may be invalid or empty. If you think your text is correct, retry and/or contact the website maintainer."
      );
    }
    return { data: "", error: events.error };
  } else {
    // console.log(JSON.stringify(events.data, null, 2))
    const versionProperty = new Property({ name: "VERSION", value: 2 });
    const prodId = new Property({ name: "PRODID", value: "bebora@github" });

    let calendar = new Component({
      name: "VCALENDAR",
      properties: [versionProperty, prodId],
    });

    for (let e of events.data) {
      let newEvent = new Component({
        name: "VEVENT",
        properties: [
          new Property({
            name: "SUMMARY",
            value: e.summary,
          }),
          new Property({
            name: "DTSTART",
            parameters: { TZID: "Europe/Rome" },
            value: dateToLocalRuleText(e.start),
          }),
          new Property({
            name: "DTEND",
            parameters: { TZID: "Europe/Rome" },
            value: dateToLocalRuleText(e.end),
          }),
          new Property({
            name: "DTSTAMP",
            value: dateToUTCRuleText(e.dtstamp),
          }),
          new Property({
            name: "UID",
            value: uuidv4(),
          }),
        ],
      });

      if (e.location !== undefined) {
        newEvent = newEvent.pushProperty(
          new Property({
            name: "LOCATION",
            value: e.location,
          })
        );
      }
      if (e.description !== undefined) {
        newEvent = newEvent.pushProperty(
          new Property({
            name: "DESCRIPTION",
            value: e.description,
          })
        );
      }
      if (e.rrule !== undefined) {
        newEvent = newEvent.pushProperty(
          new Property({
            name: "RRULE",
            value: e.rrule,
          })
        );
      }
      if (e.rdate !== undefined) {
        newEvent = newEvent.pushProperty(
          new Property({
            name: "RDATE",
            value: e.rdate,
          })
        );
      }

      calendar = calendar.pushComponent(newEvent);
    }
    const rawCalendar = calendar.toString();
    return { data: insertVTimezone(rawCalendar), error: null };
  }
}

export { parseText, getIcalendar };
