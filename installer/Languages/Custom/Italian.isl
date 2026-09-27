; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Italian
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Italian.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Runtime dei gadget
WGRuntimeDesc=Windows 10 e Windows 11 non includono più il programma che esegue i gadget del desktop.
WGRuntimeText=Il gadget Meteo funziona all'interno di un runtime per i gadget del desktop (la "barra laterale"), che non è stato trovato su questo computer.%n%nPuoi installarlo ora: il runtime (circa 5 MB) viene scaricato da gadgetsrevived.com solo se fai clic sul pulsante qui sotto e il suo checksum viene verificato prima dell'esecuzione. La sua installazione può richiedere i diritti di amministratore. Puoi anche continuare e installarlo in seguito.
WGRuntimeDownloadBtn=Scarica e installa il runtime dei gadget
WGRuntimePageBtn=Apri la pagina di download
WGRuntimeRecheckBtn=Controlla di nuovo
WGRuntimeFound=Il runtime dei gadget è installato. Fai clic su Avanti per continuare.
WGRuntimeNotFound=Il runtime dei gadget non è installato.
WGRuntimeDownloadFailed=Il download non è riuscito oppure il file non corrisponde al checksum previsto, quindi non è stato eseguito nulla.%n%nUsa "Apri la pagina di download" per installare il runtime manualmente.
WGRuntimeExtractFailed=Impossibile estrarre l'archivio scaricato.%n%nUsa "Apri la pagina di download" per installare il runtime manualmente.
WGRuntimeLaunchFailed=Impossibile avviare l'installazione del runtime.
WGRuntimeStillMissing=Il runtime dei gadget non è ancora stato trovato. Il gadget verrà installato, ma non comparirà finché il runtime non sarà installato.
WGContinueAnyway=Continuare comunque?
WGShowGadgets=Apri la raccolta dei gadget
WGNativeTitle=Piattaforma dei gadget di Windows
WGNativeDesc=Windows 7 include la piattaforma dei gadget del desktop, ma su questo computer è disattivata.
WGNativeText=Il gadget Meteo funziona nella piattaforma dei gadget del desktop (la "barra laterale"), che fa parte di Windows 7: non serve scaricare nulla, basta riattivarla.%n%n- Se la funzionalità Piattaforma gadget di Windows è disattivata: apri Pannello di controllo > Programmi > Attiva o disattiva funzionalità Windows, seleziona "Piattaforma gadget di Windows" e fai clic su OK.%n- Se i gadget sono stati disattivati da un criterio (ad esempio con Microsoft Fix it 50906): rimuovi il criterio TurnOffSidebar (lo fa Microsoft Fix it 50907) oppure rivolgiti all'amministratore.%n%nPoi fai clic su "Controlla di nuovo". Puoi anche continuare subito: il gadget viene installato e compare non appena la piattaforma viene riattivata.
WGNativeFound=La piattaforma dei gadget di Windows è attiva. Fai clic su Avanti per continuare.
WGNativePolicyOff=I gadget sono disattivati da un criterio (TurnOffSidebar).
WGNativeFeatureOff=La funzionalità Piattaforma gadget di Windows è disattivata.
WGNativeStillOff=La piattaforma dei gadget di Windows è ancora disattivata. Il gadget verrà installato, ma non comparirà finché la piattaforma non sarà attivata.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=La piattaforma dei gadget fa parte di Windows: non serve altro software.
WGNativeNoteText=Windows 7 include anche il gadget Meteo originale di Microsoft, che non riceve più dati meteo. Dopo l'installazione la raccolta dei gadget può mostrare due gadget Meteo con la stessa icona.%n%nPer scegliere quello giusto, seleziona un gadget Meteo nella raccolta e fai clic su "Mostra dettagli": la descrizione di questo termina con "Dati meteo forniti da Open-Meteo."%n%nSe il gadget Meteo originale è sul desktop, chiudilo e aggiungi questo dalla raccolta; poi scegli di nuovo la tua città.
