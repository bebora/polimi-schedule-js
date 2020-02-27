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
            "importButtonText": "Import"
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
            "importButtonText": "Importa"
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
    for (const [ key, value ] of Object.entries(strings[tempLang].text)) {
        document.getElementById(key).innerText = value;
    }
    for (const [ key, value ] of Object.entries(strings[tempLang].placeholder)) {
        document.getElementById(key).placeholder = value;
    }
    document.getElementById(tempLang+"Flag").classList.remove("grayscale");
    for (let i of Object.keys(strings).filter(item => item !== tempLang)) {
        document.getElementById(i+"Flag").classList.add("grayscale");
    }
}