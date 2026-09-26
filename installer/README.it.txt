Gadget Meteo di Windows 7
=========================

Una versione del gadget Meteo di Windows 7 per Windows 10 e Windows 11.
Il gadget originale Microsoft è rimasto com'era; è stata sostituita solo la
fonte dei dati, perché il servizio meteo MSN che usava è stato chiuso.

COSA FA QUESTA INSTALLAZIONE
- Copia il gadget nel tuo profilo utente:
    %LOCALAPPDATA%\Microsoft\Windows Sidebar\Gadgets\Weather.gadget
- Copia questo documento, la licenza e uno script di pulizia in:
    %LOCALAPPDATA%\Programs\Windows 7 Weather Gadget
- Aggiunge una voce in Impostazioni > App per poterlo disinstallare.
Non richiede i diritti di amministratore e non modifica file di sistema,
driver, impostazioni di sicurezza o il Registro di sistema, a parte la
propria voce di disinstallazione.

REQUISITO: UN RUNTIME PER I GADGET
Windows 10 e 11 non includono più il programma che esegue i gadget del
desktop. Serve un runtime di terze parti, ad esempio Gadgets Revived
(https://gadgetsrevived.com/download-sidebar/) oppure 8GadgetPack
(https://8gadgetpack.net). Se non ne viene trovato nessuno, la pagina
successiva spiega come installarlo. Non viene scaricato nulla se non fai
clic sul pulsante di download.

LINGUA
Il gadget segue la lingua di visualizzazione di Windows. È disponibile in
20 lingue; per le altre lingue viene usato l'inglese.

INTERNET E PRIVACY
Durante il funzionamento il gadget contatta:
- api.open-meteo.com e geocoding-api.open-meteo.com (previsioni e ricerca
  delle città, https://open-meteo.com)
- api.bigdatacloud.net (solo per ricavare il nome di una località dalle
  coordinate)
Non servono account, chiavi API o dati personali, e non viene inviato nulla
oltre alle coordinate o al nome della città necessari per ogni richiesta.

DOPO L'INSTALLAZIONE
Fai clic con il pulsante destro sul desktop, scegli "Gadget" e fai doppio
clic sul gadget Meteo. Usa l'icona della chiave inglese per scegliere la
città e l'unità di temperatura.

LICENZA
Il gadget contiene file del gadget Meteo originale di Windows 7,
Copyright (c) 2009 Microsoft Corporation, che non sono coperti dalla licenza
del progetto. Il codice scritto per questo progetto è rilasciato con licenza
MIT. Vedi LICENSE.txt e NOTICE.md nella cartella di installazione.
