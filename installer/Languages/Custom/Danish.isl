; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Danish
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Danish.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Afviklingsmiljø til gadgets
WGRuntimeDesc=Windows 10 og Windows 11 indeholder ikke længere det program, der kører skrivebordsgadgets.
WGRuntimeText=Vejret-gadgetten kører i et afviklingsmiljø til skrivebordsgadgets ("Sidebar"), som ikke blev fundet på denne computer.%n%nDu kan installere det nu: afviklingsmiljøet (ca. 5 MB) hentes kun fra gadgetsrevived.com, hvis du klikker på knappen nedenfor, og dets kontrolsum bekræftes, før det køres. Installationen kan bede om administratorrettigheder. Du kan også fortsætte og installere det senere.
WGRuntimeDownloadBtn=Hent og installer afviklingsmiljøet til gadgets
WGRuntimePageBtn=Åbn downloadsiden
WGRuntimeRecheckBtn=Kontrollér igen
WGRuntimeFound=Afviklingsmiljøet til gadgets er installeret. Klik på Næste for at fortsætte.
WGRuntimeNotFound=Afviklingsmiljøet til gadgets er ikke installeret.
WGRuntimeDownloadFailed=Overførslen mislykkedes, eller filen svarede ikke til den forventede kontrolsum, så intet blev kørt.%n%nBrug "Åbn downloadsiden" til at installere afviklingsmiljøet manuelt.
WGRuntimeExtractFailed=Det hentede arkiv kunne ikke udpakkes.%n%nBrug "Åbn downloadsiden" til at installere afviklingsmiljøet manuelt.
WGRuntimeLaunchFailed=Installationen af afviklingsmiljøet kunne ikke startes.
WGRuntimeStillMissing=Afviklingsmiljøet til gadgets kan stadig ikke findes. Gadgetten installeres, men vises først, når afviklingsmiljøet er installeret.
WGContinueAnyway=Vil du fortsætte alligevel?
WGShowGadgets=Åbn gadgetgalleriet
WGNativeTitle=Windows-gadgetplatform
WGNativeDesc=Windows 7 indeholder platformen til skrivebordsgadgets, men den er slået fra på denne computer.
WGNativeText=Gadgetten Vejret kører i platformen til skrivebordsgadgets ("Sidebar"), som er en del af Windows 7: der skal ikke hentes noget, platformen skal blot slås til igen.%n%n- Hvis funktionen Windows-gadgetplatform er slået fra: åbn Kontrolpanel > Programmer > Slå Windows-funktioner til eller fra, markér "Windows-gadgetplatform", og klik på OK.%n- Hvis gadgets er slået fra af en politik (f.eks. med Microsoft Fix it 50906): fjern politikken TurnOffSidebar (Microsoft Fix it 50907 gør det), eller kontakt din administrator.%n%nKlik derefter på "Kontrollér igen". Du kan også fortsætte nu: gadgetten installeres og vises, så snart platformen er slået til.
WGNativeFound=Windows-gadgetplatformen er slået til. Klik på Næste for at fortsætte.
WGNativePolicyOff=Gadgets er slået fra af en politik (TurnOffSidebar).
WGNativeFeatureOff=Funktionen Windows-gadgetplatform er slået fra.
WGNativeStillOff=Windows-gadgetplatformen er stadig slået fra. Gadgetten bliver installeret, men vises ikke, før platformen er slået til.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=Gadgetplatformen er en del af Windows: der kræves ingen ekstra software.
WGNativeNoteText=Windows 7 indeholder også Microsofts oprindelige gadget Vejret, som ikke længere modtager vejrdata. Efter installationen kan gadgetgalleriet derfor vise to Vejret-gadgets med samme ikon.%n%nFor at vælge den rigtige skal du markere en Vejret-gadget i galleriet og klikke på "Vis detaljer": beskrivelsen af denne slutter med "Vejrdata fra Open-Meteo."%n%nHvis den oprindelige gadget Vejret er på skrivebordet, så luk den, og tilføj denne fra galleriet; vælg derefter din by igen.
