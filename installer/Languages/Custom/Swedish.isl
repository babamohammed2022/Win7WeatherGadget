; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Swedish
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Swedish.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Körmiljö för gadgetar
WGRuntimeDesc=Windows 10 och Windows 11 innehåller inte längre programmet som kör skrivbordsgadgetar.
WGRuntimeText=Väder-gadgeten körs i en körmiljö för skrivbordsgadgetar ("Sidebar"), som inte hittades på den här datorn.%n%nDu kan installera den nu: körmiljön (cirka 5 MB) hämtas från gadgetsrevived.com endast om du klickar på knappen nedan, och dess kontrollsumma verifieras innan den körs. Installationen kan begära administratörsbehörighet. Du kan också fortsätta och installera den senare.
WGRuntimeDownloadBtn=Hämta och installera körmiljön för gadgetar
WGRuntimePageBtn=Öppna nedladdningssidan
WGRuntimeRecheckBtn=Kontrollera igen
WGRuntimeFound=Körmiljön för gadgetar är installerad. Klicka på Nästa för att fortsätta.
WGRuntimeNotFound=Körmiljön för gadgetar är inte installerad.
WGRuntimeDownloadFailed=Hämtningen misslyckades eller filen matchade inte den förväntade kontrollsumman, så ingenting kördes.%n%nAnvänd "Öppna nedladdningssidan" för att installera körmiljön manuellt.
WGRuntimeExtractFailed=Det hämtade arkivet kunde inte packas upp.%n%nAnvänd "Öppna nedladdningssidan" för att installera körmiljön manuellt.
WGRuntimeLaunchFailed=Installationen av körmiljön kunde inte startas.
WGRuntimeStillMissing=Körmiljön för gadgetar hittas fortfarande inte. Gadgeten installeras, men visas inte förrän körmiljön har installerats.
WGContinueAnyway=Vill du fortsätta ändå?
WGShowGadgets=Öppna gadgetgalleriet
WGNativeTitle=Windows gadgetplattform
WGNativeDesc=Windows 7 innehåller plattformen för skrivbordsgadgetar, men den är avstängd på den här datorn.
WGNativeText=Väder-gadgeten körs i plattformen för skrivbordsgadgetar ("Sidebar"), som ingår i Windows 7: ingenting behöver hämtas, plattformen behöver bara aktiveras igen.%n%n- Om funktionen Windows gadgetplattform är avstängd: öppna Kontrollpanelen > Program > Aktivera eller inaktivera Windows-funktioner, markera "Windows gadgetplattform" och klicka på OK.%n- Om gadgetar har stängts av med en princip (till exempel med Microsoft Fix it 50906): ta bort principen TurnOffSidebar (Microsoft Fix it 50907 gör det) eller kontakta administratören.%n%nKlicka sedan på "Kontrollera igen". Du kan också fortsätta nu: gadgeten installeras och visas så snart plattformen är aktiverad.
WGNativeFound=Windows gadgetplattform är aktiverad. Klicka på Nästa för att fortsätta.
WGNativePolicyOff=Gadgetar är avstängda av en princip (TurnOffSidebar).
WGNativeFeatureOff=Funktionen Windows gadgetplattform är avstängd.
WGNativeStillOff=Windows gadgetplattform är fortfarande avstängd. Gadgeten installeras, men den visas inte förrän plattformen är aktiverad.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=Gadgetplattformen ingår i Windows: ingen ytterligare programvara behövs.
WGNativeNoteText=Windows 7 innehåller också Microsofts ursprungliga Väder-gadget, som inte längre får några väderdata. Efter installationen kan gadgetgalleriet därför visa två Väder-gadgetar med samma ikon.%n%nFör att välja rätt markerar du en Väder-gadget i galleriet och klickar på "Visa information": beskrivningen av den här slutar med "Väderdata från Open-Meteo."%n%nOm den ursprungliga Väder-gadgeten finns på skrivbordet stänger du den och lägger till den här från galleriet; välj sedan din ort igen.
