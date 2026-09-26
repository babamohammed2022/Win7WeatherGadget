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
