# polimi-schedule-js
Genera un file iCalendar delle lezioni del Politecnico di Milano direttamente dal browser ed importalo sul tuo calendario.

Il calendario così ottenuto può essere importato facilmente su [Google Calendar](https://support.google.com/calendar/answer/37118), [GNOME Evolution](https://help.gnome.org/users/evolution/stable/import-single-files.html.en) e altri calendari. [Outlook](https://support.office.com/en-us/article/Import-or-subscribe-to-a-calendar-in-Outlook-com-cff1429c-5af6-41ec-a5b4-74f2c278e98c) non è attualmente supportato per il nuovo formato di orari, dato che non sa importare eventi con ricorrenze personalizzate (RDATE, EXDATE).

Si può usare in due modi:
- Userscript, installabile cliccando [qui](https://github.com/bebora/polimi-schedule-js/raw/master/scripts/polimi-schedule.user.js) (Testato con Firefox Desktop/Mobile usando Greasemonkey e con Chrome Desktop usando Tampermonkey.)
- [Convertitore su pagina separata](https://bebora.github.io/polimi-schedule-js/), su cui basta incollare l'orario testuale senza dover installare nessun componente aggiuntivo. È possibile scaricare da qui il calendario come file oppure importarlo velocemente su Google Calendar.

Compatibile sia con l'orario dei [Servizi Online](https://www.polimi.it/servizionline/) del Politecnico che con quello del [Manifesto degli Studi](https://polimi.it/orario-lezioni).



Realizzato con [Filesaver.js](https://github.com/eligrey/FileSaver.js/) e  [ics-js](https://github.com/angeloashmore/ics-js).

Ispirato a [polimi-schedule](https://github.com/jacopo-j/polimi-schedule).
