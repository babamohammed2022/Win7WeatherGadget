; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Hungarian
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Hungarian.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Minialkalmazás-futtatókörnyezet
WGRuntimeDesc=A Windows 10 és a Windows 11 már nem tartalmazza az asztali minialkalmazásokat futtató programot.
WGRuntimeText=Az Időjárás minialkalmazás egy asztali minialkalmazás-futtatókörnyezetben (az oldalsávban) fut, amely nem található ezen a számítógépen.%n%nMost telepítheti: a futtatókörnyezet (kb. 5 MB) csak akkor töltődik le a gadgetsrevived.com webhelyről, ha az alábbi gombra kattint, és futtatás előtt ellenőrizzük az ellenőrzőösszegét. A telepítő rendszergazdai jogokat kérhet. Folytathatja is, és később telepítheti.
WGRuntimeDownloadBtn=A minialkalmazás-futtatókörnyezet letöltése és telepítése
WGRuntimePageBtn=A letöltési oldal megnyitása
WGRuntimeRecheckBtn=Újraellenőrzés
WGRuntimeFound=A minialkalmazás-futtatókörnyezet telepítve van. A folytatáshoz kattintson a Tovább gombra.
WGRuntimeNotFound=A minialkalmazás-futtatókörnyezet nincs telepítve.
WGRuntimeDownloadFailed=A letöltés sikertelen volt, vagy a fájl nem egyezik a várt ellenőrzőösszeggel, ezért semmi sem lett futtatva.%n%nA futtatókörnyezet kézi telepítéséhez használja „A letöltési oldal megnyitása” gombot.
WGRuntimeExtractFailed=A letöltött archívum nem bontható ki.%n%nA futtatókörnyezet kézi telepítéséhez használja „A letöltési oldal megnyitása” gombot.
WGRuntimeLaunchFailed=A futtatókörnyezet telepítője nem indítható el.
WGRuntimeStillMissing=A minialkalmazás-futtatókörnyezet továbbra sem található. A minialkalmazás települ, de csak a futtatókörnyezet telepítése után jelenik meg.
WGContinueAnyway=Mégis folytatja?
WGShowGadgets=A minialkalmazás-gyűjtemény megnyitása
WGNativeTitle=Windows modulplatform
WGNativeDesc=A Windows 7 tartalmazza az asztali modulok platformját, de ezen a számítógépen ki van kapcsolva.
WGNativeText=Az Időjárás modul az asztali modulok platformján (az "oldalsávon") fut, amely a Windows 7 része: semmit sem kell letölteni, csak újra be kell kapcsolni a platformot.%n%n- Ha a Windows modulplatform szolgáltatás ki van kapcsolva: nyissa meg a Vezérlőpult > Programok > Windows-szolgáltatások be- és kikapcsolása lehetőséget, jelölje be a "Windows modulplatform" elemet, és kattintson az OK gombra.%n- Ha a modulokat házirend kapcsolta ki (például a Microsoft Fix it 50906): távolítsa el a TurnOffSidebar házirendet (ezt a Microsoft Fix it 50907 elvégzi), vagy forduljon a rendszergazdához.%n%nEzután kattintson az "Ellenőrzés újra" gombra. Most is folytathatja: a modul települ, és megjelenik, amint a platform be van kapcsolva.
WGNativeFound=A Windows modulplatform be van kapcsolva. A folytatáshoz kattintson a Tovább gombra.
WGNativePolicyOff=A modulokat házirend kapcsolta ki (TurnOffSidebar).
WGNativeFeatureOff=A Windows modulplatform szolgáltatás ki van kapcsolva.
WGNativeStillOff=A Windows modulplatform még mindig ki van kapcsolva. A modul települ, de csak a platform bekapcsolása után jelenik meg.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=A modulplatform a Windows része: nincs szükség további szoftverre.
WGNativeNoteText=A Windows 7 a Microsoft eredeti Időjárás modulját is tartalmazza, amely már nem kap időjárási adatokat. A telepítés után ezért a modulgyűjteményben két azonos ikonú Időjárás modul jelenhet meg.%n%nA megfelelő kiválasztásához jelöljön ki egy Időjárás modult a gyűjteményben, és kattintson a "Részletek megjelenítése" gombra: ennek a modulnak a leírása ezzel végződik: "Az időjárási adatokat az Open-Meteo szolgáltatja."%n%nHa az eredeti Időjárás modul az asztalon van, zárja be, és adja hozzá ezt a gyűjteményből; ezután válassza ki újra a települését.
