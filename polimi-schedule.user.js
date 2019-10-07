// ==UserScript==
// @name     polimi-schedule-js
// @version  1.0
// @require  https://raw.githubusercontent.com/eligrey/FileSaver.js/master/dist/FileSaver.js
// @require  https://raw.githubusercontent.com/angeloashmore/ics-js/master/dist/ics-js.js
// @require  schedule-to-ical.js
// @match    https://www4.ceda.polimi.it/manifesti/manifesti/controller/GestioneCarrelloPublic.do*
// @match    https://www13.ceda.polimi.it/oralez/oralez/controller/MainDesktop.do*
// @grant    none
// ==/UserScript==


//TODO add EXDATE for holidays


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function addDownloadButton() {
  try {
    let divOrari;
    let orariText = undefined;
    let showButton = false;
    if (/.*GestioneCarrelloPublic\.do.*/.test(window.location.href)) { //Manifesto degli Studi
      if (document.getElementById('orarioTestuale') != null)
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
      let icsContent = parseText(orariText);
      let buttonNode = document.createElement('BUTTON');
      buttonNode.innerHTML = 'Esporta orario come iCalendar';
      buttonNode.type = 'button';
      buttonNode.style.marginTop = '35px';
      buttonNode.style.backgroundColor = '#c0ff85';
      divOrari.appendChild(buttonNode);
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
