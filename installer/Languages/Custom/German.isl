; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: German
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\German.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Gadget-Laufzeitumgebung
WGRuntimeDesc=Windows 10 und Windows 11 enthalten das Programm zum Ausführen von Desktopgadgets nicht mehr.
WGRuntimeText=Das Wetter-Gadget läuft in einer Laufzeitumgebung für Desktopgadgets (der "Sidebar"), die auf diesem Computer nicht gefunden wurde.%n%nSie können sie jetzt installieren: Die Laufzeitumgebung (ca. 5 MB) wird nur dann von gadgetsrevived.com heruntergeladen, wenn Sie auf die Schaltfläche unten klicken, und ihre Prüfsumme wird vor der Ausführung überprüft. Das Setup kann Administratorrechte anfordern. Sie können auch fortfahren und sie später installieren.
WGRuntimeDownloadBtn=Gadget-Laufzeitumgebung herunterladen und installieren
WGRuntimePageBtn=Downloadseite öffnen
WGRuntimeRecheckBtn=Erneut prüfen
WGRuntimeFound=Die Gadget-Laufzeitumgebung ist installiert. Klicken Sie auf "Weiter", um fortzufahren.
WGRuntimeNotFound=Die Gadget-Laufzeitumgebung ist nicht installiert.
WGRuntimeDownloadFailed=Der Download ist fehlgeschlagen oder die Datei entspricht nicht der erwarteten Prüfsumme. Es wurde nichts ausgeführt.%n%nVerwenden Sie "Downloadseite öffnen", um die Laufzeitumgebung manuell zu installieren.
WGRuntimeExtractFailed=Das heruntergeladene Archiv konnte nicht entpackt werden.%n%nVerwenden Sie "Downloadseite öffnen", um die Laufzeitumgebung manuell zu installieren.
WGRuntimeLaunchFailed=Das Setup der Laufzeitumgebung konnte nicht gestartet werden.
WGRuntimeStillMissing=Die Gadget-Laufzeitumgebung wurde noch nicht gefunden. Das Gadget wird installiert, erscheint aber erst, wenn die Laufzeitumgebung installiert ist.
WGContinueAnyway=Trotzdem fortfahren?
WGShowGadgets=Gadgetkatalog öffnen
WGNativeTitle=Windows-Gadgetplattform
WGNativeDesc=Windows 7 enthält die Plattform für Desktopgadgets, sie ist auf diesem Computer jedoch deaktiviert.
WGNativeText=Das Wetter-Gadget läuft in der Plattform für Desktopgadgets (der "Sidebar"), die zu Windows 7 gehört: Es muss nichts heruntergeladen werden, die Plattform muss nur wieder aktiviert werden.%n%n- Wenn das Feature "Windows-Gadgetplattform" deaktiviert ist: Öffnen Sie Systemsteuerung > Programme > Windows-Funktionen aktivieren oder deaktivieren, wählen Sie "Windows-Gadgetplattform" aus und klicken Sie auf OK.%n- Wenn Gadgets durch eine Richtlinie deaktiviert wurden (zum Beispiel mit Microsoft Fix it 50906): Entfernen Sie die Richtlinie TurnOffSidebar (das erledigt Microsoft Fix it 50907) oder wenden Sie sich an Ihren Administrator.%n%nKlicken Sie dann auf "Erneut prüfen". Sie können auch gleich fortfahren: Das Gadget wird installiert und erscheint, sobald die Plattform aktiviert ist.
WGNativeFound=Die Windows-Gadgetplattform ist aktiviert. Klicken Sie auf "Weiter", um fortzufahren.
WGNativePolicyOff=Gadgets sind durch eine Richtlinie deaktiviert (TurnOffSidebar).
WGNativeFeatureOff=Das Feature "Windows-Gadgetplattform" ist deaktiviert.
WGNativeStillOff=Die Windows-Gadgetplattform ist noch deaktiviert. Das Gadget wird installiert, erscheint aber erst, wenn die Plattform aktiviert ist.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=Die Gadgetplattform ist Teil von Windows: Es wird keine zusätzliche Software benötigt.
WGNativeNoteText=Windows 7 enthält auch das ursprüngliche Wetter-Gadget von Microsoft, das keine Wetterdaten mehr erhält. Nach der Installation zeigt der Gadgetkatalog daher möglicherweise zwei Wetter-Gadgets mit demselben Symbol.%n%nUm das richtige auszuwählen, markieren Sie ein Wetter-Gadget im Katalog und klicken Sie auf "Details einblenden": Die Beschreibung dieses Gadgets endet mit "Wetterdaten von Open-Meteo."%n%nWenn sich das ursprüngliche Wetter-Gadget auf dem Desktop befindet, schließen Sie es und fügen Sie dieses aus dem Katalog hinzu; wählen Sie dann Ihren Ort erneut aus.
