// ==UserScript==
// @name     polimi-schedule-js
// @version  1.0
// @require  https://raw.githubusercontent.com/eligrey/FileSaver.js/master/dist/FileSaver.js
// @require  https://raw.githubusercontent.com/angeloashmore/ics-js/master/dist/ics-js.js
// @match    https://www4.ceda.polimi.it/manifesti/manifesti/controller/GestioneCarrelloPublic.do*
// @match    https://www13.ceda.polimi.it/oralez/oralez/controller/MainDesktop.do*
// @grant    none
// ==/UserScript==


//TODO handle missing schedule as in original polimi-schedule
//TODO add EXDATE for holidays
let ICS = this['ics-js'];
let weekdays = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

function parseText(allCourses) {
  try {
    let coursesList = allCourses.trim().split('\n\n\n');
    let cal = new ICS.VCALENDAR();
    cal.addProp('VERSION', 2);
    cal.addProp('PRODID', 'bebora@github');
    for (let course of coursesList) {
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
          let timeMatch = /([^\s]*) dalle (\d{2}):(\d{2}) alle (\d{2}):(\d{2}), .*? aula (.*)/.exec(j);
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
          event.addProp('LOCATION', timeMatch[6]);
          event.addProp('RRULE', 'FREQ=WEEKLY;UNTIL='+lastDay.getFullYear()+(lastDay.getMonth()+1)+lastDay.getDate());
          cal.addComponent(event);
        }
      }
    }
		return cal.toString();
  }
  catch(err) {
    console.log('Il sito è stato aggiornato e non è più compatibile con polimi-schedule-js. ('+err.message+')');
  }
  return '';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function addDownloadButton() {
	try {
    let divOrari;
    let orariText = undefined;
    let showButton = false;
    if (/.*GestioneCarrelloPublic\.do.*/.test(window.location.href)) { //Manifesto degli Studi
      if (/.*tab_selected=2.*/.test(window.location.href))
      	showButton = true;
      let ulOrarioTestuale = document.getElementsByClassName('ui-tabs-nav ui-helper-reset ui-helper-clearfix')[0];
      ulOrarioTestuale.children[0].children[0].innerText += ' + file iCalendar';
      let tdOrarioTestuale = document.getElementsByClassName('ElementInfoCard2 ui-corner-bottom')[0]; //Better not to use getElementById because target id is duplicated (#orarioTestuale)
      divOrari = tdOrarioTestuale.children[0];
      orariText = divOrari.children[1].innerText;
    }
    else {
      showButton = true;
      await sleep(100);
      divOrari = document.getElementsByClassName('tabs polij_tabs ui-tabs ui-corner-all ui-widget ui-widget-content')[0];
      //The innerText of the target div is different if set to display:none or display:block.
      //The first is full of unnecessary \t and \n that break the parser, so a 0x0 div set to display:block can be used to extract the cleaner innerText.
      //This works only if the new div is added to the document
      let fakeDiv = document.createElement('DIV');
      fakeDiv.innerHTML = document.getElementById('orarioTestuale').innerHTML;
      fakeDiv.style.display = 'block';
      fakeDiv.style.height = '0px';
      fakeDiv.style.width = '0px';
      fakeDiv.style.overflow = 'hidden';
      document.body.appendChild(fakeDiv);
      orariText = fakeDiv.innerText;
    }
    if (showButton) {
      let buttonNode = document.createElement('BUTTON');
      buttonNode.innerHTML = 'Esporta orario come iCalendar';
      buttonNode.type = 'button';
      buttonNode.style.marginTop = '35px';
      buttonNode.style.backgroundColor = '#c0ff85';
      divOrari.appendChild(buttonNode);
      let icsContent = parseText(orariText);
      buttonNode.addEventListener('click', function(){
        let blob = new Blob([icsContent || 'Something has prevented the script from correctly creating the calendar'], {type: 'text/plain;charset=utf-8'});
        saveAs(blob, 'orarioPolimi.ics');
      });
    }
  }
  catch(err) {
    console.log('Error while adding download button to page. ('+err.message+')');
  }
}


addDownloadButton()
