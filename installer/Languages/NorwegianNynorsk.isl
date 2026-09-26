; *** Inno Setup version 4.0.5+ Norsk, nynorsk messages ***
;
; Translated by/omsett av: Magnar Myrtveit
;
; To download user-contributed translations of this file, go to:
;   http://www.jrsoftware.org/is3rdparty.php
;
; Note: When translating this text, do not add periods (.) to the end of
; messages that didn't have them already, because on those messages Inno
; Setup adds the periods automatically (appending a period would result in
; two periods being displayed).
;
; $jrsoftware: issrc/Files/Default.isl,v 1.32 2003/06/18 19:24:07 jr Exp $

[LangOptions]
LanguageName=Norsk, nynorsk
LanguageID=$0409
; If the language you are translating to requires special font faces or
; sizes, uncomment any of the following entries and change them accordingly.
;DialogFontName=MS Shell Dlg
;DialogFontSize=8
;DialogFontStandardHeight=13
;TitleFontName=Arial
;TitleFontSize=29
;WelcomeFontName=Verdana
;WelcomeFontSize=12
;CopyrightFontName=Arial
;CopyrightFontSize=8

DialogFontName=MS Shell Dlg
DialogFontSize=8
DialogFontStandardHeight=13
TitleFontName=Arial
TitleFontSize=29
WelcomeFontName=Verdana
WelcomeFontSize=12
CopyrightFontName=Arial
CopyrightFontSize=8
[Messages]

; *** Application titles
SetupAppTitle=Installasjon
SetupWindowTitle=Installering - %1
UninstallAppTitle=Avinstallasjon
UninstallAppFullTitle=Avinstallering - %1

; *** Misc. common
InformationTitle=Informasjon
ConfirmTitle=Godta
ErrorTitle=Feil

; *** SetupLdr messages
SetupLdrStartupMessage=Dette vil installera %1. Vil du halda fram?
LdrCannotCreateTemp=Kan ikkje laga midlertidig fil. Installasjonen er avbroten
LdrCannotExecTemp=Kan ikkje k�yra fila i den midlertidige katalogen. Installasjonen er avbroten

; *** Startup error messages
LastErrorMessage=%1.%n%nFeil %2: %3
SetupFileMissing=Fila %1 finst ikkje i installasjonskatalogen. Ver venleg og fiks problemet eller f� tak i ein ny kopi av programmet.
SetupFileCorrupt=Installasjonsfila er �ydelagt. Ver venleg og f� tak i ein ny kopi av programmet.
SetupFileCorruptOrWrongVer=Installasjonsfilane er �ydelagde, eller ikkje kompatible med dette installasjonsprogrammet.Ver venleg og fiks problemet eller f� tak i ein ny kopi av programmet.
NotOnThisPlatform=Dette programmet k�yrer ikkje p� %1.
OnlyOnThisPlatform=Dette programmet k�yrer berre p� %1.
WinVersionTooLowError=Dette programmet krev %1 versjon %2 eller nyare.
WinVersionTooHighError=Dette programmet kan ikkje bli installert p� %1 versjon %2 eller nyare.
AdminPrivilegesRequired=Du m� vera logga inn som administrator n�r du installerer dette programmet.
PowerUserPrivilegesRequired=Du m� vera logga inn som administrator eller ha administrator-rettar n�r du installerer dette programmet.
SetupAppRunningError=Installasjonen har oppdaga at %1 k�yrer.%n%nVer venleg og lukk det no, og trykk OK for � halda fram, eller Avbryt for � avslutta.
UninstallAppRunningError=Avinstallasjonen har oppdaga at %1 k�yrer.%n%nVer venleg og lukk det no, og trykk OK for � halda fram, eller Avbryt for � avslutta.

; *** Misc. errors
ErrorCreatingDir=Installasjonsprogrammet kunne ikkje laga katalogen "%1"
ErrorTooManyFilesInDir=Kunne ikkje laga ei fil i mappa "%1" fordi den inneheld for mange filar

; *** Setup common messages
ExitSetupTitle=Avslutt installasjonen
ExitSetupMessage=Installasjonen er ikkje ferdig. Viss du avsluttar no, vil ikkje programmet bli installert.%n%nDu kan k�yra installasjonen p� nytt seinare for � fullf�ra installsajonen.%n%nVil du avslutta installasjonen?
AboutSetupMenuItem=&Om installasjonsprogrammet...
AboutSetupTitle=Om installasjonsprogrammet
AboutSetupMessage=%1 versjon %2%n%3%n%n%1 heimeside:%n%4
AboutSetupNote=

; *** Buttons
ButtonBack=< &Tilbake
ButtonNext=&Neste >
ButtonInstall=&Installer
ButtonOK=OK
ButtonCancel=Avbryt
ButtonYes=&Ja
ButtonYesToAll=Ja til &alle
ButtonNo=&Nei
ButtonNoToAll=N&ei til alle
ButtonFinish=&Ferdig
ButtonBrowse=&Bla gjennom...

; *** "Select Language" dialog messages
SelectLanguageTitle=Vel installasjonsspr�k
SelectLanguageLabel=Vel spr�ket som skal brukast under installasjonen:

; *** Common wizard text
ClickNext=Trykk Neste for � halda fram, eller Avbryt for � avslutta installasjonen.
BeveledLabel=

; *** "Welcome" wizard page
WelcomeLabel1=Velkomen til installasjonen av [name]
WelcomeLabel2=Dette vil installera [name/ver] p� di datamaskin.%n%nDet er anbefalt at du lukkar alle andre program f�r du fortset.

; *** "Password" wizard page
WizardPassword=Passord
PasswordLabel1=Denne installasjonen er passordbeskytta.
PasswordLabel3=Ver venleg og skriv inn passordet, og trykk Neste for � halda fram. Store og sm� bokstavar blir behandla ulikt.
PasswordEditLabel=&Passord:
IncorrectPassword=Passordet du skreiv inn er feil. Ver venleg og pr�v igjen.

; *** "License Agreement" wizard page
WizardLicense=Lisensvilk�r
LicenseLabel=Ver venleg og les den fylgjande viktige informasjonen f�r du fortset.
LicenseLabel3=Ver venleg og les dei fylgjande lisensvilk�ra. Du m� godta innehaldet i denne avtalen f�r du fortset installasjonen.
LicenseAccepted=Eg &godtar avtalen
LicenseNotAccepted=Eg godtar &ikkje avtalen

; *** "Information" wizard pages
WizardInfoBefore=Informasjon
InfoBeforeLabel=Ver venleg og les den fylgjande viktige informasjonen f�r du fortset.
InfoBeforeClickLabel=N�r du er klar til � halda fram med installasjonen, trykk Neste.
WizardInfoAfter=Informasjon
InfoAfterLabel=Ver venleg og les den fylgjande viktige informasjonen f�r du fortset.
InfoAfterClickLabel=N�r du er klar til � fullf�ra installasjonen, trykk Neste.

; *** "User Information" wizard page
WizardUserInfo=Brukarinformasjon
UserInfoDesc=Ver venleg og skriv inn din informasjon.
UserInfoName=&Brukarnamn:
UserInfoOrg=&Organisasjon:
UserInfoSerial=&Serienummer:
UserInfoNameRequired=Du m� skriva inn eit namn.

; *** "Select Destination Directory" wizard page
WizardSelectDir=Vel m�lmappe
SelectDirDesc=Kvar skal [name] bli installert?
SelectDirLabel=Vel mappa der du vil at [name] skal bli installert, og trykk Neste.
DiskSpaceMBLabel=Programmet krev minst [mb] MB diskplass.
ToUNCPathname=Kan ikkje installera til ei UNC-bane. Viss du pr�ver � installera i eit nettverk, m� du skriva inn nettverksm�lstasjonen.
InvalidPath=Du m� skriva inn ei full bane med stasjonsbokstav; for eksempel:%n%nC:\APP%n%neller ei UNC-bane som:%n%n\\server\share
InvalidDrive=Den valte stasjonen eller UNC-delinga finst ikkje, eller er ikkje tilgjengeleg. Ver venleg og vel ein annan.
DiskSpaceWarningTitle=Ikkje nok diskplass
DiskSpaceWarning=Installasjonsprogrammet krev minst %1 KB ledig plass for � installera, men den valte stasjonen har berre %2 KB ledig.%n%nVil du halda fram likevel?
BadDirName32=Katalognamn kan ikkje innehalda nokon av dei fylgjande teikna:%n%n%1
DirExistsTitle=Katalogen finst
DirExists=Katalogen:%n%n%1%n%nfinst allereie. Vil du installera til denne katalogen likevel?
DirDoesntExistTitle=Katalogen finst ikkje
DirDoesntExist=Katalogen:%n%n%1%n%nfinst ikkje. Vil du at katalogen skal bli laga?

; *** "Select Components" wizard page
WizardSelectComponents=Vel komponentar
SelectComponentsDesc=Kva komponentar skal installerast?
SelectComponentsLabel2=Vel dei komponentane du vil installera; vel vekk dei komponentane du ikkje vil installera. Trykk Neste n�r du er klar til � halda fram.
FullInstallation=Full installasjon
; if possible don't translate 'Compact' as 'Minimal' (I mean 'Minimal' in your language)
CompactInstallation=Kompakt installasjon
CustomInstallation=Eigendefinert installasjon
NoUninstallWarningTitle=Komponentane finst
NoUninstallWarning=Installasjonen har oppdaga at desse komponentane allereie er installerte p� datamaskina:%n%n%1%n%nDesse komponentane blir ikkje avinstallerte sj�lv om du vel dei vekk.%n%nVil du halda fram likevel?
ComponentSize1=%1 KB
ComponentSize2=%1 MB
ComponentsDiskSpaceMBLabel=Valte alternativ krev minst [mb] MB ledig diskplass.

; *** "Select Additional Tasks" wizard page
WizardSelectTasks=Vel tilleggsoppg�ver
SelectTasksDesc=Kva tilleggsoppg�ver skal utf�rast?
SelectTasksLabel2=Vel dei tilleggsoppg�vene som skal utf�rast mens [name] blir installert, trykk deretter Neste.

; *** "Select Start Menu Folder" wizard page
WizardSelectProgramGroup=Vel mappe i Start-menyen
SelectStartMenuFolderDesc=Kvar skal snarvegane plasserast?
SelectStartMenuFolderLabel=Vel mappa i Start-menyen der du vil at snarvegane skal bli plasserte. Trykk deretter Neste.
NoIconsCheck=&Ikkje lag ikon
MustEnterGroupName=Du m� skriva inn eit katalognamn.
BadGroupName=Katalognamn kan ikkje innehalda nokon av dei fylgjande teikna:%n%n%1
NoProgramGroupCheck2=&Ikkje lag mappe i Start-menyen

; *** "Ready to Install" wizard page
WizardReady=Klar til � installera
ReadyLabel1=Installasjonsprogrammet er no klart til � starta installasjonen av [name] p� di datamaskin.
ReadyLabel2a=Trykk Installer for � halda fram med installasjonen, eller trykk Tilbake viss du vil sj� p� eller endra instillingane.
ReadyLabel2b=Trykk Installer for � halda fram med installasjonen.
ReadyMemoUserInfo=Brukarinformasjon:
ReadyMemoDir=M�lmappe:
ReadyMemoType=Installasjonstype:
ReadyMemoComponents=Valte komponentar:
ReadyMemoGroup=Mappe i Start-menyen:
ReadyMemoTasks=Tilleggsoppg�ver:

; *** "Preparing to Install" wizard page
WizardPreparing=F�rebur installasjonen
PreparingDesc=Installasjonsprogrammet f�rebur installasjonen av [name] p� di datamaskin.
PreviousInstallNotCompleted=Installasjonen/fjerninga av eit tidlegare program blei ikkje fullf�rt. Du m� starta maskina p� nytt for � fullf�ra den installasjonen.%n%nEtter omstarten m� du k�yra installasjonsprogrammet p� nytt for � fullf�ra installasjonen av [name].
CannotContinue=Installasjonsprogrammet kan ikkje halda fram. Ver venleg og trykk Avbryt for � avslutta.

; *** "Installing" wizard page
WizardInstalling=Installerer
InstallingLabel=Ver venleg og vent mens [name] blir installert p� di datamaskin.

; *** "Setup Completed" wizard page
FinishedHeadingLabel=Fullf�rer installasjonsvegvisaren for [name]
FinishedLabelNoIcons=Installasjonen av [name] er fullf�rt.
FinishedLabel=Installasjonen av [name] er fullf�rt. Du kan starta programmet ved � trykka p� eit av dei installerte ikona.
ClickFinish=Trykk Ferdig for � avslutta installasjonen.
FinishedRestartLabel=For � fullf�ra installasjonen av [name], m� maskina bli starta p� nytt. Vil du starta p� nytt no?
FinishedRestartMessage=For � fullf�ra installasjonen av [name], m� maskina bli starta p� nytt.%n%nVil du starta p� nytt no?
ShowReadmeCheck=Ja, eg vil sj� LESMEG-fila
YesRadio=&Ja, start maskina p� nytt no
NoRadio=&Nei, eg vil starta p� nytt seinare
; used for example as 'Run MyProg.exe'
RunEntryExec=K�yr %1
; used for example as 'View Readme.txt'
RunEntryShellExec=Vis %1

; *** "Setup Needs the Next Disk" stuff
ChangeDiskTitle=Installasjonen treng den neste disketten
SelectDirectory=Vel katalog
SelectDiskLabel2=Ver venleg og set inn diskett %1 og trykk OK.%n%nViss filane finst i ein annan katalog enn den vist nedom, skriv inn riktig bane eller trykk Bla gjennom...
PathLabel=&Bane:
FileNotInDir2=Finn ikkje fila "%1" i "%2". Ver venleg og set inn riktig diskett eller vel ein annan katalog.
SelectDirectoryLabel=Ver venleg og skriv inn plasseringa til den neste disketten.

; *** Installation phase messages
SetupAborted=Installasjonen blei ikkje fullf�rt.%n%nVer venleg og fiks problemet og k�yr installasjonen p� nytt.
EntryAbortRetryIgnore=Tykkk Pr�v p� nytt for � pr�va p� nytt, Ignor�r for � halda fram, eller Avbryt for � avslutta installasjonen.

; *** Installation status messages
StatusCreateDirs=Oppretter katalogar...
StatusExtractFiles=Pakkar ut filar...
StatusCreateIcons=Oppretter program-ikon...
StatusCreateIniEntries=Oppretter INI-instillingar...
StatusCreateRegistryEntries=Opprettter register-instillingar...
StatusRegisterFiles=Registrerer filar...
StatusSavingUninstall=Lagrar avinstallasjonsinformasjon...
StatusRunProgram=Fullf�rer installasjonen...
StatusRollback=Tilbakestiller endringar...

; *** Misc. errors
ErrorInternal2=Intern feil: %1
ErrorFunctionFailedNoCode=%1 gjekk gale
ErrorFunctionFailed=%1 gjekk gale; kode %2
ErrorFunctionFailedWithMessage=%1 gjekk gale; kode %2.%n%3
ErrorExecutingProgram=Kunne ikkje k�yre fila:%n%1

; *** Registry errors
ErrorRegOpenKey=Feil under opning av registern�kkel:%n%1\%2
ErrorRegCreateKey=Feil under oppretting av registern�kkel:%n%1\%2
ErrorRegWriteKey=Feil under skriving til registern�kkel:%n%1\%2

; *** INI errors
ErrorIniEntry=Feil under oppretting av innstillingar i fila "%1".

; *** File copying errors
FileAbortRetryIgnore=Trykk Pr�v p� nytt for � pr�va p� nytt, Ignor�r for � hoppa over denne fila (ikkje anbefalt), eller Avbryt for � avslutta installasjonen.
FileAbortRetryIgnore2=Trykk Pr�v p� nytt for � pr�va p� nytt, Ignor�r for � halda fram (ikkje anbefalt), eller Avbryt for � avslutta installasjonen.
SourceIsCorrupted=Kjeldefila er �ydelagt
SourceDoesntExist=Kjeldefila "%1" finst ikkje
ExistingFileReadOnly=Den eksisterande fila er skrivebeskytta.%n%nTrykk Pr�v p� nytt for � fjerna skrivebeskyttinga og pr�va p� nytt, Ignor�r for � hoppa over denne fila, eller Avbryt for � avslutta installasjonen.
ErrorReadingExistingDest=Ein feil oppstod under lesing av den eksisterande fila:
FileExists=Fila finst allereie.%n%nVil du at installasjonsprogrammet skal skriva over den?
ExistingFileNewer=Den eksisterande fila er nyare enn den installasjonen pr�ver � installera. Det er anbefalt at du beheld den eksisterande fila.%n%nVil du behalda den eksisterande fila?
ErrorChangingAttr=Ein feil oppstod under fors�k p� � endra attributtar i den eksisterande fila:
ErrorCreatingTemp=Ein feil oppstod under fors�k p� � oppretta ei fil i m�lmappa:
ErrorReadingSource=Ein feil oppstod under fors�k p� � lesa kjeldefila:
ErrorCopying=Ein feil oppstod under fors�k p� � kopiera fila:
ErrorReplacingExistingFile=Ein feil oppstod under fors�k p� � erstatta den eksisterande fila:
ErrorRestartReplace=RestartReplace gjekk gale:
ErrorRenamingTemp=Ein feil oppstod under fors�k p� � gje nytt namnt til ei fil i m�lmappa:
ErrorRegisterServer=Kunne ikkje registrera DLL/OCX: %1
ErrorRegisterServerMissingExport=DllRegisterServer-eksportering blei ikkje funne
ErrorRegisterTypeLib=Kunne ikkje registrera typebiblioteket: %1

; *** Post-installation errors
ErrorOpeningReadme=Ein feil oppstod under fors�k p� � opna LESMEG-fila.
ErrorRestartingComputer=Installasjonsprogrammet kunne ikkje starta maskina p� nytt. Ver venleg og gjer dette manuelt.

; *** Uninstaller messages
UninstallNotFound=Kan ikkje avinstallera. Fila "%1" finst ikkje.
UninstallOpenError=Kan ikkje avinstallera. Fila "%1" kunne ikkje opnast.
UninstallUnsupportedVer=Kan ikkje avinstallera. Avinstallasjonsloggfila "%1" er i eit format som denne versjonen av avinstallasjonsprogrammet ikkje forst�r
UninstallUnknownEntry=Ein ukjend parameter (%1) blei funne i avinstallasjonsloggen
ConfirmUninstall=Er du sikker p� at du vil fjerna %1 og alle tilh�yrande komponentar?
OnlyAdminCanUninstall=Denne installasjonen kan berre avinstallerast av ein brukar med administrator-rettar.
UninstallStatusLabel=Ver venleg og vent mens %1 blir fjerna fr� di datamaskin.
UninstalledAll=Fjerninga av %1 var vellukka.
UninstalledMost=Avinstalleringa av %1 er fullf�rt.%n%nNokre element kunne ikkje bli sletta. Desse kan slettast manuelt.
UninstalledAndNeedsRestart=For � fullf�ra avinstallasjonen av %1, m� datamaskina startast p� nytt.%n%nVil du starta p� nytt no?
UninstallDataCorrupted=Kan ikkje avinstallera. "%1"-fila er �ydelagd.

; *** Uninstallation phase messages
ConfirmDeleteSharedFileTitle=Fjerna delt fil?
ConfirmDeleteSharedFile2=Systemet indikerer at den fylgjande delte fila ikkje blir brukt av nokon program. Vil du at avinstallasjonsprogrammet skal fjerna denne delte fila?%n%nViss nokre program framleis brukar denne fila, og den blir fjerna, kan du risikere at dei ikkje verkar som dei skal. Viss du er usikker, vel Nei. � la denne fila vera p� systemet vil ikkje gjera nokon skade.
SharedFileNameLabel=Filnamn:
SharedFileLocationLabel=Plassering:
WizardUninstalling=Avinstallasjons-status
StatusUninstalling=Avinstallerer %1...

