; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Polish
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Polish.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Środowisko gadżetów
WGRuntimeDesc=Systemy Windows 10 i Windows 11 nie zawierają już programu uruchamiającego gadżety pulpitu.
WGRuntimeText=Gadżet Pogoda działa w środowisku gadżetów pulpitu (tzw. „pasku bocznym”), którego nie znaleziono na tym komputerze.%n%nMożesz je teraz zainstalować: środowisko (ok. 5 MB) zostanie pobrane z gadgetsrevived.com tylko po kliknięciu przycisku poniżej, a jego suma kontrolna zostanie sprawdzona przed uruchomieniem. Instalator może poprosić o uprawnienia administratora. Możesz też kontynuować i zainstalować je później.
WGRuntimeDownloadBtn=Pobierz i zainstaluj środowisko gadżetów
WGRuntimePageBtn=Otwórz stronę pobierania
WGRuntimeRecheckBtn=Sprawdź ponownie
WGRuntimeFound=Środowisko gadżetów jest zainstalowane. Kliknij Dalej, aby kontynuować.
WGRuntimeNotFound=Środowisko gadżetów nie jest zainstalowane.
WGRuntimeDownloadFailed=Pobieranie nie powiodło się lub plik nie ma oczekiwanej sumy kontrolnej, więc nic nie zostało uruchomione.%n%nUżyj opcji „Otwórz stronę pobierania”, aby zainstalować środowisko ręcznie.
WGRuntimeExtractFailed=Nie można wyodrębnić pobranego archiwum.%n%nUżyj opcji „Otwórz stronę pobierania”, aby zainstalować środowisko ręcznie.
WGRuntimeLaunchFailed=Nie można uruchomić instalatora środowiska.
WGRuntimeStillMissing=Nadal nie znaleziono środowiska gadżetów. Gadżet zostanie zainstalowany, ale nie pojawi się, dopóki środowisko nie zostanie zainstalowane.
WGContinueAnyway=Czy mimo to kontynuować?
WGShowGadgets=Otwórz galerię gadżetów
WGNativeTitle=Platforma gadżetów systemu Windows
WGNativeDesc=System Windows 7 zawiera platformę gadżetów pulpitu, ale na tym komputerze jest ona wyłączona.
WGNativeText=Gadżet Pogoda działa na platformie gadżetów pulpitu (tzw. "pasku bocznym"), która jest częścią systemu Windows 7: nie trzeba niczego pobierać, wystarczy ją ponownie włączyć.%n%n- Jeśli funkcja Platforma gadżetów systemu Windows jest wyłączona: otwórz Panel sterowania > Programy > Włącz lub wyłącz funkcje systemu Windows, zaznacz "Platforma gadżetów systemu Windows" i kliknij OK.%n- Jeśli gadżety zostały wyłączone zasadą (na przykład za pomocą Microsoft Fix it 50906): usuń zasadę TurnOffSidebar (robi to Microsoft Fix it 50907) lub skontaktuj się z administratorem.%n%nNastępnie kliknij "Sprawdź ponownie". Możesz też kontynuować od razu: gadżet zostanie zainstalowany i pojawi się, gdy tylko platforma zostanie włączona.
WGNativeFound=Platforma gadżetów systemu Windows jest włączona. Kliknij Dalej, aby kontynuować.
WGNativePolicyOff=Gadżety są wyłączone przez zasadę (TurnOffSidebar).
WGNativeFeatureOff=Funkcja Platforma gadżetów systemu Windows jest wyłączona.
WGNativeStillOff=Platforma gadżetów systemu Windows jest nadal wyłączona. Gadżet zostanie zainstalowany, ale pojawi się dopiero po włączeniu platformy.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=Platforma gadżetów jest częścią systemu Windows: dodatkowe oprogramowanie nie jest potrzebne.
WGNativeNoteText=System Windows 7 zawiera także oryginalny gadżet Pogoda firmy Microsoft, który nie otrzymuje już danych pogodowych. Po instalacji galeria gadżetów może więc pokazywać dwa gadżety Pogoda z taką samą ikoną.%n%nAby wybrać właściwy, zaznacz gadżet Pogoda w galerii i kliknij "Pokaż szczegóły": opis tego gadżetu kończy się tekstem "Dane pogodowe: Open-Meteo."%n%nJeśli oryginalny gadżet Pogoda jest na pulpicie, zamknij go i dodaj ten z galerii, a następnie ponownie wybierz swoją miejscowość.
