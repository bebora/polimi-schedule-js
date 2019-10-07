let ICS = this['ics-js'];
let weekdays = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

function parseText(allCourses) {
  try {
    let coursesList = allCourses.trim().split('\n\n\n');
    let cal = new ICS.VCALENDAR();
    cal.addProp('VERSION', 2);
    cal.addProp('PRODID', 'bebora@github');
    for (let course of coursesList) {
      let noLessonTest = /\s*L'orario non è stato definito/;
      let noScheduleTest = /\s*Nessun orario definito/;
      if (noLessonTest.test(course) || noScheduleTest.test(course)) {
        continue;
      }
      let titleMatch = /(\d{6}) - (.+)/.exec(course);
      let tempText = titleMatch[2].split('(');
      tempText.pop();
      let courseName = tempText.join('(');
      let datesMatch = /Inizio lezioni: (\d{2}\/\d{2}\/\d{4}) Fine lezioni: (\d{2}\/\d{2}\/\d{4})/.exec(course);
      let start = new Date(datesMatch[1].replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1'));
      let end = new Date(datesMatch[2].replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1'));
      let courseDays = /[^\n]+\n[^\n]+\n?([\s\S]*)/.exec(course);
      if (courseDays[1] !== '') {
        let rows = courseDays[1].trim().split('\n');
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
          let event = new ICS.VEVENT();
          event.addProp('SUMMARY', courseName);
          event.addProp('DTSTART', firstDay, { VALUE: 'DATE-TIME' });
          event.addProp('DURATION', 'PT'+(timeMatch[4]-timeMatch[2])+'H'); //Assuming that the duration of the lessons is a multiple of one hour
          event.addProp('DTSTAMP', new Date(), { VALUE: 'DATE-TIME' });
          event.addProp('UID');
          if (!noRoomTest.test(j)) {
            let roomMatch = /aula (.*)/.exec(j);
            event.addProp('LOCATION', roomMatch[1]);
          }
          event.addProp('RRULE', 'FREQ=WEEKLY;UNTIL='+lastDay.getFullYear()+(lastDay.getMonth()+1)+lastDay.getDate());
          cal.addComponent(event);
        }
      }
    }
    return cal.toString();
  }
  catch(err) {
    console.log('The website is no longer compatible with polimi-schedule-js. ('+err.message+')');
  }
  return '';
}
