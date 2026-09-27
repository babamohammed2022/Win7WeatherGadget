; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Czech
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Czech.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Běhové prostředí miniaplikací
WGRuntimeDesc=Systémy Windows 10 a Windows 11 už neobsahují program, který spouští miniaplikace plochy.
WGRuntimeText=Miniaplikace Počasí běží v běhovém prostředí miniaplikací plochy (tzv. postranním panelu), které nebylo v tomto počítači nalezeno.%n%nMůžete ho nainstalovat hned: prostředí (asi 5 MB) se stáhne z webu gadgetsrevived.com, jen pokud kliknete na tlačítko níže, a před spuštěním se ověří jeho kontrolní součet. Instalace může vyžadovat oprávnění správce. Můžete také pokračovat a nainstalovat ho později.
WGRuntimeDownloadBtn=Stáhnout a nainstalovat prostředí miniaplikací
WGRuntimePageBtn=Otevřít stránku ke stažení
WGRuntimeRecheckBtn=Zkontrolovat znovu
WGRuntimeFound=Běhové prostředí miniaplikací je nainstalováno. Pokračujte kliknutím na Další.
WGRuntimeNotFound=Běhové prostředí miniaplikací není nainstalováno.
WGRuntimeDownloadFailed=Stahování se nezdařilo nebo soubor neodpovídá očekávanému kontrolnímu součtu, proto nebylo nic spuštěno.%n%nPomocí tlačítka „Otevřít stránku ke stažení“ nainstalujte prostředí ručně.
WGRuntimeExtractFailed=Stažený archiv nelze rozbalit.%n%nPomocí tlačítka „Otevřít stránku ke stažení“ nainstalujte prostředí ručně.
WGRuntimeLaunchFailed=Instalaci prostředí nelze spustit.
WGRuntimeStillMissing=Běhové prostředí miniaplikací stále nebylo nalezeno. Miniaplikace se nainstaluje, ale nezobrazí se, dokud nebude prostředí nainstalováno.
WGContinueAnyway=Chcete přesto pokračovat?
WGShowGadgets=Otevřít galerii miniaplikací
WGNativeTitle=Platforma miniaplikací systému Windows
WGNativeDesc=Systém Windows 7 obsahuje platformu miniaplikací plochy, ale v tomto počítači je vypnutá.
WGNativeText=Miniaplikace Počasí běží na platformě miniaplikací plochy ("postranním panelu"), která je součástí systému Windows 7: nic není třeba stahovat, stačí platformu znovu zapnout.%n%n- Pokud je vypnutá funkce Platforma miniaplikací systému Windows: otevřete Ovládací panely > Programy > Zapnout nebo vypnout funkce systému Windows, zaškrtněte "Platforma miniaplikací systému Windows" a klikněte na OK.%n- Pokud byly miniaplikace vypnuty zásadou (například nástrojem Microsoft Fix it 50906): odeberte zásadu TurnOffSidebar (provede to Microsoft Fix it 50907) nebo se obraťte na správce.%n%nPotom klikněte na "Zkontrolovat znovu". Můžete také pokračovat hned: miniaplikace se nainstaluje a zobrazí se, jakmile bude platforma zapnutá.
WGNativeFound=Platforma miniaplikací systému Windows je zapnutá. Pokračujte kliknutím na Další.
WGNativePolicyOff=Miniaplikace jsou vypnuty zásadou (TurnOffSidebar).
WGNativeFeatureOff=Funkce Platforma miniaplikací systému Windows je vypnutá.
WGNativeStillOff=Platforma miniaplikací systému Windows je stále vypnutá. Miniaplikace se nainstaluje, ale nezobrazí se, dokud platformu nezapnete.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=Platforma miniaplikací je součástí systému Windows: žádný další software není potřeba.
WGNativeNoteText=Systém Windows 7 obsahuje také původní miniaplikaci Počasí od společnosti Microsoft, která už nedostává žádná data o počasí. Po instalaci proto může galerie miniaplikací zobrazit dvě miniaplikace Počasí se stejnou ikonou.%n%nSprávnou vyberete tak, že v galerii označíte miniaplikaci Počasí a kliknete na "Zobrazit podrobnosti": popis této miniaplikace končí textem "Data o počasí poskytuje Open-Meteo."%n%nPokud je původní miniaplikace Počasí na ploše, zavřete ji a přidejte tuto z galerie; potom znovu vyberte své město.
