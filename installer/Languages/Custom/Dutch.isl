; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Dutch
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Dutch.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Gadget-runtime
WGRuntimeDesc=Windows 10 en Windows 11 bevatten niet langer het programma dat bureaubladgadgets uitvoert.
WGRuntimeText=De Weer-gadget draait in een runtime voor bureaubladgadgets (de "Sidebar"), die niet op deze computer is gevonden.%n%nU kunt deze nu installeren: de runtime (ongeveer 5 MB) wordt alleen van gadgetsrevived.com gedownload als u op de knop hieronder klikt, en de controlesom wordt gecontroleerd voordat deze wordt uitgevoerd. De installatie kan om beheerdersrechten vragen. U kunt ook doorgaan en de runtime later installeren.
WGRuntimeDownloadBtn=Gadget-runtime downloaden en installeren
WGRuntimePageBtn=Downloadpagina openen
WGRuntimeRecheckBtn=Opnieuw controleren
WGRuntimeFound=De gadget-runtime is geïnstalleerd. Klik op Volgende om door te gaan.
WGRuntimeNotFound=De gadget-runtime is niet geïnstalleerd.
WGRuntimeDownloadFailed=Het downloaden is mislukt of het bestand komt niet overeen met de verwachte controlesom; er is niets uitgevoerd.%n%nGebruik "Downloadpagina openen" om de runtime handmatig te installeren.
WGRuntimeExtractFailed=Het gedownloade archief kan niet worden uitgepakt.%n%nGebruik "Downloadpagina openen" om de runtime handmatig te installeren.
WGRuntimeLaunchFailed=De installatie van de runtime kan niet worden gestart.
WGRuntimeStillMissing=De gadget-runtime is nog steeds niet gevonden. De gadget wordt geïnstalleerd, maar verschijnt pas als de runtime is geïnstalleerd.
WGContinueAnyway=Toch doorgaan?
WGShowGadgets=Gadgetgalerie openen
