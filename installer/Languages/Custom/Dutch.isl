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
WGNativeTitle=Windows-gadgetplatform
WGNativeDesc=Windows 7 bevat het platform voor bureaubladgadgets, maar het is op deze computer uitgeschakeld.
WGNativeText=De gadget Weer draait in het platform voor bureaubladgadgets (de "Sidebar"), dat deel uitmaakt van Windows 7: er hoeft niets te worden gedownload, het platform hoeft alleen weer te worden ingeschakeld.%n%n- Als het onderdeel Windows-gadgetplatform is uitgeschakeld: open Configuratiescherm > Programma's > Windows-onderdelen in- of uitschakelen, selecteer "Windows-gadgetplatform" en klik op OK.%n- Als gadgets door een beleid zijn uitgeschakeld (bijvoorbeeld met Microsoft Fix it 50906): verwijder het beleid TurnOffSidebar (Microsoft Fix it 50907 doet dit) of vraag het uw beheerder.%n%nKlik daarna op "Opnieuw controleren". U kunt ook nu doorgaan: de gadget wordt geïnstalleerd en verschijnt zodra het platform is ingeschakeld.
WGNativeFound=Het Windows-gadgetplatform is ingeschakeld. Klik op Volgende om door te gaan.
WGNativePolicyOff=Gadgets zijn uitgeschakeld door een beleid (TurnOffSidebar).
WGNativeFeatureOff=Het onderdeel Windows-gadgetplatform is uitgeschakeld.
WGNativeStillOff=Het Windows-gadgetplatform is nog steeds uitgeschakeld. De gadget wordt geïnstalleerd, maar verschijnt pas wanneer het platform is ingeschakeld.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=Het gadgetplatform maakt deel uit van Windows: er is geen extra software nodig.
WGNativeNoteText=Windows 7 bevat ook de oorspronkelijke gadget Weer van Microsoft, die geen weergegevens meer ontvangt. Na de installatie kan de gadgetgalerie daarom twee gadgets Weer met hetzelfde pictogram tonen.%n%nOm de juiste te kiezen, selecteert u een gadget Weer in de galerie en klikt u op "Details weergeven": de beschrijving van deze gadget eindigt met "Weergegevens van Open-Meteo."%n%nAls de oorspronkelijke gadget Weer op uw bureaublad staat, sluit u die en voegt u deze toe vanuit de galerie; kies daarna opnieuw uw plaats.
