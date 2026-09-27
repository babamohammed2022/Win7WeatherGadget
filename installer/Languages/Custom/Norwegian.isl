; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Norwegian
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Norwegian.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Kjøremiljø for gadgeter
WGRuntimeDesc=Windows 10 og Windows 11 inneholder ikke lenger programmet som kjører skrivebordsgadgeter.
WGRuntimeText=Vær-gadgeten kjører i et kjøremiljø for skrivebordsgadgeter ("Sidebar"), som ikke ble funnet på denne datamaskinen.%n%nDu kan installere det nå: kjøremiljøet (ca. 5 MB) lastes ned fra gadgetsrevived.com bare hvis du klikker på knappen nedenfor, og kontrollsummen kontrolleres før det kjøres. Installasjonen kan be om administratorrettigheter. Du kan også fortsette og installere det senere.
WGRuntimeDownloadBtn=Last ned og installer kjøremiljøet for gadgeter
WGRuntimePageBtn=Åpne nedlastingssiden
WGRuntimeRecheckBtn=Kontroller på nytt
WGRuntimeFound=Kjøremiljøet for gadgeter er installert. Klikk Neste for å fortsette.
WGRuntimeNotFound=Kjøremiljøet for gadgeter er ikke installert.
WGRuntimeDownloadFailed=Nedlastingen mislyktes, eller filen samsvarte ikke med forventet kontrollsum, så ingenting ble kjørt.%n%nBruk "Åpne nedlastingssiden" for å installere kjøremiljøet manuelt.
WGRuntimeExtractFailed=Kan ikke pakke ut det nedlastede arkivet.%n%nBruk "Åpne nedlastingssiden" for å installere kjøremiljøet manuelt.
WGRuntimeLaunchFailed=Kan ikke starte installasjonen av kjøremiljøet.
WGRuntimeStillMissing=Kjøremiljøet for gadgeter blir fortsatt ikke funnet. Gadgeten installeres, men vises ikke før kjøremiljøet er installert.
WGContinueAnyway=Vil du fortsette likevel?
WGShowGadgets=Åpne gadgetgalleriet
WGNativeTitle=Windows-plattformen for gadgeter
WGNativeDesc=Windows 7 inneholder plattformen for skrivebordsgadgeter, men den er slått av på denne datamaskinen.
WGNativeText=Vær-gadgeten kjører i plattformen for skrivebordsgadgeter ("Sidebar"), som er en del av Windows 7: ingenting må lastes ned, plattformen må bare slås på igjen.%n%n- Hvis funksjonen Windows-plattformen for gadgeter er slått av: åpne Kontrollpanel > Programmer > Aktiver eller deaktiver Windows-funksjoner, merk av for "Windows-plattformen for gadgeter" og klikk OK.%n- Hvis gadgeter er slått av med en policy (for eksempel med Microsoft Fix it 50906): fjern policyen TurnOffSidebar (Microsoft Fix it 50907 gjør dette) eller kontakt administratoren.%n%nKlikk deretter "Kontroller på nytt". Du kan også fortsette nå: gadgeten installeres og vises så snart plattformen er slått på.
WGNativeFound=Windows-plattformen for gadgeter er slått på. Klikk Neste for å fortsette.
WGNativePolicyOff=Gadgeter er slått av av en policy (TurnOffSidebar).
WGNativeFeatureOff=Funksjonen Windows-plattformen for gadgeter er slått av.
WGNativeStillOff=Windows-plattformen for gadgeter er fortsatt slått av. Gadgeten blir installert, men vises ikke før plattformen er slått på.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=Gadgetplattformen er en del av Windows: ingen ekstra programvare er nødvendig.
WGNativeNoteText=Windows 7 inneholder også Microsofts opprinnelige Vær-gadget, som ikke lenger mottar værdata. Etter installasjonen kan gadgetgalleriet derfor vise to Vær-gadgeter med samme ikon.%n%nFor å velge riktig, merk en Vær-gadget i galleriet og klikk "Vis detaljer": beskrivelsen av denne slutter med "Værdata fra Open-Meteo."%n%nHvis den opprinnelige Vær-gadgeten ligger på skrivebordet, lukk den og legg til denne fra galleriet; velg deretter stedet ditt på nytt.
