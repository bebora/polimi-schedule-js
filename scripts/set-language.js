const strings = {
    "en": {
        "text": {
            "title": "PoliMi schedule converter",
            "saveFile": " Save to file",
            "importToGcal": " Import to Google Calendar",
            "error": "Error! Unable to generate the calendar",
            "selectCalText": "Choose which calendar to add the events to",
            "orSelect": "or",
            "newCalendarLabel": " Create new calendar",
            "newNameLabel": "Name:",
            "importButtonText": "Import",
            "creationProgress": "Creating calendar...",
            "creationOk": "Calendar created",
            "homeOverview": "Convert the timetable of the Politecnico di Milano courses into an iCalendar file or import it into Google Calendar",
            "homeInfo": "PoliMi doesn't have any way to import the courses schedule into external calendars. With this converter you can transform the text timetable into a standard calendar format, iCalendar. Events in this format can be imported easily into most of calendar services and applications. In the following links you can see how to import them on some popular services:",
            "homeImportGoogle": "Import to Google Calendar",
            "homeImportOutlook": "Import to Outlook",
            "homeDetails": "With this tool you can also import events directly to Google Calendar, without having to download any iCalendar file.<br>The tool is available at:",
            "homeUserscriptInfo": "The converter can be used from the PoliMi website as a Userscript, installed by clicking <a href='https://github.com/bebora/polimi-schedule-js/raw/master/scripts/polimi-schedule.user.js'>here</a>. In this case you need to have an Userscript manager, such as Greasemonkey or Tampermonkey. Quick import to Google Calendar isn't available in this mode.",
            "repoInfo": "You can read the converter code on its <a href='https://github.com/bebora/polimi-schedule-js'>Github repository</a>.",
            "howToUseHead": "How to use?",
            "howToUseContent": "Go to the timetable page you want to convert. You can use both the one from <a href='https://www.polimi.it/en/online-services/'>Online services</a> and the one from <a href='https://polimi.it/orario-lezioni'>Manifesto degli Studi</a>. In the latter case, make sure to enable the customized time schedule and choose some courses, then go to \"View the schedule\".<br>Click on \"Text timetable\" and select the courses with your mouse, then copy them with a right click or by pressing CTRL+C.",
            "howToUseEnd": "Go to the converter page and paste the text with a right click or by pressing CTRL+V. Click on the appropriate button to download the events or to import them to Google Calendar.",
            "gcalendarHead": "Google Calendar integration",
            "gcalendarText": "The app can directly insert events Google Calendar to simplify the import, without having to download any file.<br>In order to do so, it explicitly requests user consent to connect to their Google account. Specifically, the app needs to read the names of existing calendars to list them when the user chooses where to import the events. The user may want to create a new calendar for the events, so the app also needs write access on Google Calendar. Full access permissions(read+write) are then needed for the correct app operations, but it doesn't and will never use them for purposes other than those described here.<br>You can read the complete privacy policy by clicking on the link at the bottom of the page."

        },
        "placeholder": {
            "input": "Paste lessons copied from the text timetable"
        }
    },
    "it": {
        "text": {
            "title": "Convertitore orario PoliMi",
            "saveFile": " Salva su file",
            "importToGcal": " Importa su Google Calendar",
            "error": "Errore! Non riesco a generare il calendario",
            "selectCalText": "Seleziona il calendario dove importare gli eventi",
            "orSelect": "oppure",
            "newCalendarLabel": " Create nuovo calendario",
            "newNameLabel": "Nome:",
            "importButtonText": "Importa",
            "creationProgress": "Creando il calendario...",
            "creationOk": "Calendario creato",
            "homeOverview": "Converti le lezioni del Politecnico di Milano in un file iCalendar o importale su Google Calendar",
            "homeInfo": "Il PoliMi non consente normalmente di importare gli orari delle lezioni su calendari esterni. Con questo convertitore è possibile trasformare l'orario testuale dei Servizi Online in un calendario in formato standard, ovvero iCalendar. Gli orari in formato iCalendar possono essere importati facilmente nella maggior parte delle applicazioni o servizi di calendario. Per esempio, nelle seguenti pagine è descritto come importare file iCalendar su alcuni servizi popolari:",
            "homeImportGoogle": "Importazione su Google Calendar",
            "homeImportOutlook": "Importazione su Outlook",
            "homeDetails": "Con questo tool è inoltre possibile importare gli eventi direttamente su Google Calendar, senza dover scaricare il file iCalendar, per rendere l'importazione ancora più semplice.<br>Il tool è disponibile al seguente link:",
            "homeUserscriptInfo": "Il convertitore può essere usato dal sito del PoliMi se installato come Userscript, cliccando <a href='https://github.com/bebora/polimi-schedule-js/raw/master/scripts/polimi-schedule.user.js'>qui</a>. In tal caso è necessario avere un Userscript manager, come Greasemonkey o Tampermonkey. Con questa modalità non è integrata l'importazione veloce su Google Calendar.",
            "repoInfo": "È possibile consultare il codice del tool nella sua <a href='https://github.com/bebora/polimi-schedule-js'>repository Github</a>.",
            "howToUseHead": "Come si usa?",
            "howToUseContent": "Vai sulla pagina degli orari che vuoi convertire. Puoi usare sia quella dei <a href='https://www.polimi.it/servizionline/'>Servizi Online</a> con gli orari dei tuoi corsi, sia quella del <a href='https://polimi.it/orario-lezioni'>Manifesto degli Studi</a>. In quest'ultimo caso, assicurati di abilitare l'orario personalizzato e scegliere delle materie, poi clicca su \"Visualizza l'orario\".<br>Clicca quindi su \"Orario testuale\" e seleziona gli orari con il mouse, poi copiali con il tasto destro oppure premendo CTRL+C.",
            "howToUseEnd": "Vai sulla pagina del convertitore ed incolla il testo con il tasto destro o premendo CTRL+V. Clicca sul bottone opportuno per scaricare il calendario o per importarlo su Google Calendar.",
            "gcalendarHead": "Integrazione con Google Calendar",
            "gcalendarText": "L'app può inserire gli eventi su Google Calendar direttamente per semplificare il più possibile l'importazione, senza dover scaricare nessun file.<br>Per fare ciò, richiede esplicitamente il consenso dell'utente per collegarsi all'account Google. In particolare, l'app ha bisogno di leggere i nomi dei calendari esistenti per poi proporli se l'utente vuole importare gli eventi in un calendario esistente. L'utente può voler creare un nuovo calendario per gli eventi, quindi l'app ha bisogno anche dei permessi in scrittura sul calendario Google. Sono necessari quindi permessi completi sul calendario, ma l'app non usa ora né userà mai i permessi per scopi differenti da quelli qui descritti.<br>È possibile vedere la privacy policy completa cliccando sul link a fondo pagina."
        },
        "placeholder": {
            "input": "Incolla le lezioni copiate dall'orario testuale"
        }
    }
}

function setLanguage(lang) {
    let tempLang = "en"
    if (lang in strings) {
        tempLang = lang;
    }
    for (const [key, value] of Object.entries(strings[tempLang].text)) {
        let node = document.getElementById(key);
        if (node !== null) {
            node.innerHTML = value;
        }
    }
    for (const [key, value] of Object.entries(strings[tempLang].placeholder)) {
        let node = document.getElementById(key);
        if (node !== null) {
            node.placeholder = value;
        }
    }
    document.getElementById(tempLang + "Flag").classList.remove("grayscale");
    for (let i of Object.keys(strings).filter(item => item !== tempLang)) {
        document.getElementById(i + "Flag").classList.add("grayscale");
    }
    document.title = strings[tempLang].text.title;
}