; *** Inno Setup version 6.1.0+ Montenegrin messages ***
;
; To download user-contributed translations of this file, go to:
;   https://jrsoftware.org/files/istrans/
;
; Translated by Drazen Djurisic (kntaur@gmail.com)
;
; Note: When translating this text, do not add periods (.) to the end of
; messages that didn't have them already, because on those messages Inno
; Setup adds the periods automatically (appending a period would result in
; two periods being displayed).

[LangOptions]
; The following three entries are very important. Be sure to read and 
; understand the '[LangOptions] section' topic in the help file.
LanguageName=Crnogorski
LanguageID=$081a
LanguageCodePage=1250
; If the language you are translating to requires special font faces or
; sizes, uncomment any of the following entries and change them accordingly.
;DialogFontName=
;DialogFontSize=8
;WelcomeFontName=Verdana
;WelcomeFontSize=12
;TitleFontName=Arial
;TitleFontSize=29
;CopyrightFontName=Arial
;CopyrightFontSize=8

[Messages]

; *** Application titles
SetupAppTitle=Instalacija
SetupWindowTitle=Instalacija - %1
UninstallAppTitle=Deinstalacija
UninstallAppFullTitle=Deinstalacija programa %1

; *** Misc. common
InformationTitle=Podaci
ConfirmTitle=Potvrda
ErrorTitle=Gre�ka

; *** SetupLdr messages
SetupLdrStartupMessage=Instalirat e te %1. �elite li da nastavite?
LdrCannotCreateTemp=Ne mogu da napravim privremenu datoteku. Instalacija obustavljena
LdrCannotExecTemp=Ne mogu da pokrenem datoteku u privremenom direktorijumu. Instalacija obustavljena
HelpTextNote=

; *** Startup error messages
LastErrorMessage=%1.%n%nGre�ka %2: %3
SetupFileMissing=Datoteka %1 nedostaje u instalacionom direktorijumu. Ispravite problem ili nabavite novi primjerak programa.
SetupFileCorrupt=Instalacione datoteke su o�tecene. Nabavite novi primjerak programa.
SetupFileCorruptOrWrongVer=Instalacione datoteke su o�tecene, ili su nekompatibilne sa ovom verzijom instalacije. Ispravite problem ili nabavite novi primjerak programa.
InvalidParameter=Neispravan parametar je prenijet na komandnu liniju:%n%n%1
SetupAlreadyRunning=Instalacija je vec pokrenuta.
WindowsVersionNotSupported=Ova verzija programa nije kompatibilna sa verzijom windows'-a na va�em racunaru.
WindowsServicePackRequired=Ovaj program zahtijeva %1 servisni paket %2 ili noviji.
NotOnThisPlatform=Program nece raditi na %1.
OnlyOnThisPlatform=Program ce raditi na %1.
OnlyOnTheseArchitectures=Program se mo�e instalirati samo na verzijama windows-a koji rade na sledecim arhitekturama procesora:%n%n%1
WinVersionTooLowError=Ovaj program zahtijeva %1 verziju %2 ili noviju.
WinVersionTooHighError=Program se ne mo�e instalirati na %1 verziju %2 ili noviju.
AdminPrivilegesRequired=Morate biti prijavljeni kao administrator da bi ste instalirali program.
PowerUserPrivilegesRequired=Morate biti prijavljeni kao administrator ili ovla�ceni korisnik da bi ste instalirali ovaj program.
SetupAppRunningError=Program %1 je trenutno pokrenut.%n%nUgasite ga, kliknite "U redu", ili "Obustavi" za napustite instalaciju.
UninstallAppRunningError=Program %1 je trenutno pokrenut.%n%nUgasite ga, kliknite "U redu", ili "Obustavi" za napustite instalaciju.

; *** Startup questions
PrivilegesRequiredOverrideTitle=Izaberite nacin instalacije
PrivilegesRequiredOverrideInstruction=Izaberite nacin instalacije
PrivilegesRequiredOverrideText1=%1 mo�e biti instaliran za sve korisnike (zahtijeva administratorske privilegije), ili samo za vas.
PrivilegesRequiredOverrideText2=%1 mo�e biti instaliran za vas samo, ili za sve korisnike (zahtijeva administratorske privilegije).
PrivilegesRequiredOverrideAllUsers=Instalacija za &sve korisnike
PrivilegesRequiredOverrideAllUsersRecommended=Instalacija za &sve korisnike (preporucuje se)
PrivilegesRequiredOverrideCurrentUser=Instalacija &za vas samo
PrivilegesRequiredOverrideCurrentUserRecommended=Instalacija &za vas samo (preporucuje se)

; *** Misc. errors
ErrorCreatingDir=Instalacija ne mo�e da napravi direktorijum "%1"
ErrorTooManyFilesInDir=Ne mogu da napravim datoteku u direktorijumu "%1" zato �to sadr�i previ�e datoteka

; *** Setup common messages
ExitSetupTitle=Napusti instalaciju
ExitSetupMessage=Instalacija nije kompletna. Ako izadete sad, program nece biti instaliran.%n%nMo�ete pokrenuti instalaciju neki drugi put da zavr�ite instaliranje.%n%nNapusti instalaciju?
AboutSetupMenuItem=&O programu...
AboutSetupTitle=O programu
AboutSetupMessage=%1 verzija %2%n%3%n%n%1 internet stranica:%n%4
AboutSetupNote=
TranslatorNote=

; *** Buttons
ButtonBack=< &Nazad
ButtonNext=&Dalje >
ButtonInstall=&Instaliraj
ButtonOK=U redu
ButtonCancel=Obustavi
ButtonYes=&Da
ButtonYesToAll=Da za &sve
ButtonNo=&Ne
ButtonNoToAll=N&e za sve
ButtonFinish=&Zavr�i
ButtonBrowse=&Pretra�i...
ButtonWizardBrowse=P&retra�i...
ButtonNewFolder=&Napravi novi direktorijum

; *** "Select Language" dialog messages
SelectLanguageTitle=Izaberite jezik instalacije
SelectLanguageLabel=Izaberite jezik koji ce te koristiti tokom instalacije.

; *** Common wizard text
ClickNext=Kliknite "Dalje" za nastavak, ili "Obustavi" da prekinete instalaciju.
BeveledLabel=
BrowseDialogTitle=Izaberite direktorijum
BrowseDialogLabel=Izaberite direktorijum sa liste ispod, onda kliknite na "U redu".
NewFolderName=Novi direktorijum

; *** "Welcome" wizard page
WelcomeLabel1=Dobro do�li na instalaciju programa [name]
WelcomeLabel2=Instalirat ce te [name/ver] na va�em racunaru.%n%nPreporucujemo da zatvorite sve ostale programe pa da nastavite sa instalacijom.

; *** "Password" wizard page
WizardPassword=Lozinka
PasswordLabel1=Instalacija je za�ticena lozinkom.
PasswordLabel3=Unesite lozinku i kliknite "Dalje" da nastavite. Lozinka je osjetljiva na velika i mala slova.
PasswordEditLabel=&Lozinka:
IncorrectPassword=Lozinka koju ste unijeli je netacna. Probajte opet.

; *** "License Agreement" wizard page
WizardLicense=Ugovor o licenci
LicenseLabel=Pa�ljivo procitajte sledece prije nego nastavite.
LicenseLabel3=Procitajte ugovor o licenci koji je ispod. Morate prihvatiti uslove ugovora ako �elite da nastavite sa instalacijom.
LicenseAccepted=&Prihvatam ugovor
LicenseNotAccepted=&Ne prihvatam ugovor

; *** "Information" wizard pages
WizardInfoBefore=Informacije
InfoBeforeLabel=Pa�ljivo procitajte sledece prije nego nastavite.
InfoBeforeClickLabel=Kada budete spremni da nastavite instalaciju, kliknite "Dalje".
WizardInfoAfter=Informacije
InfoAfterLabel=Pa�ljivo procitajte sledece prije nego nastavite.
InfoAfterClickLabel=Kada budete spremni da nastavite instalaciju, kliknite "Dalje".

; *** "User Information" wizard page
WizardUserInfo=Podaci o korisniku
UserInfoDesc=Unesite va�e podatke.
UserInfoName=&Korisnik:
UserInfoOrg=&Organizacija:
UserInfoSerial=&Serijski broj:
UserInfoNameRequired=Morate unijeti ime.

; *** "Select Destination Location" wizard page
WizardSelectDir=Izaberite lokaciju
SelectDirDesc=Gdje ce [name] biti instaliran?
SelectDirLabel3=Program [name] ce biti instaliran u direktorijumu.
SelectDirBrowseLabel=Za nastavak pritisnite "Dalje". Ako �elite drugi direktorijum, pritisnite "Potra�i".
DiskSpaceGBLabel=Potrebno je najmanje [gb] GB slobodnog prostora na disku.
DiskSpaceMBLabel=Potrebno je najmanje [mb] MB slobodnog prostora na disku.
CannotInstallToNetworkDrive=Program ne mo�ete instalirati na mre�nom disku.
CannotInstallToUNCPath=Program ne mo�ete instalirati na UNC putanji.
InvalidPath=Morate navesti cijelu putanju sa oznakom diska; npr:%n%nC:\APP%n%nili UNC putanja u obliku:%n%n\\server\share
InvalidDrive=Disk ili UNC koji ste naveli ne postoji ili nije dostupan. Izaberite drugi.
DiskSpaceWarningTitle=Nema dovoljno prostora na disku
DiskSpaceWarning=Programu je potrebno %1 KB slobodnog prostora za instalaciju, ali izabrani disk ima samo %2 KB.%n%nDa li �elite da nastavite bez obzira?
DirNameTooLong=Ime direktorijuma ili putanja je predugacka.
InvalidDirName=Ime direktorijuma nije valjano.
BadDirName32=Ime direktorijuma ne mo�e da sadr�i nijedan od sledecih karaktera:%n%n%1
DirExistsTitle=Direktorijum vec postoji
DirExists=Direktorijum:%n%n%1%n%nvec postoji. �elite ili da nastavite sa instalcijom u postojeci direktorijum?
DirDoesntExistTitle=Direktorijum ne postoji
DirDoesntExist=Direktorijum:%n%n%1%n%nne postoji. �elite li da kreiramo navedeni direktorijum?

; *** "Select Components" wizard page
WizardSelectComponents=Odabir komponenata
SelectComponentsDesc=Koje komponente �elite da instalirate?
SelectComponentsLabel2=Izaberite komponente koje �elite da instalirate; ocistite komponente koje ne �elite. Kliknite "Dalje" za nastavak instalacije.
FullInstallation=Kompletna instalacija
; if possible don't translate 'Compact' as 'Minimal' (I mean 'Minimal' in your language)
CompactInstallation=Podrazumijevana instalacija
CustomInstallation=Prilagodjena instalacija
NoUninstallWarningTitle=Komponenta postoji
NoUninstallWarning=Program je prona�ao da su sledece komponente vec instalirane:%n%n%1%n%nŠtrikiranjem ovih komponenti one nece biti deinstalirane.%n%nDa li �elite da nastavite?
ComponentSize1=%1 KB
ComponentSize2=%1 MB
ComponentsDiskSpaceGBLabel=Izabrane stavke zahtijevaju najmanje [gb] GB prostora na disku.
ComponentsDiskSpaceMBLabel=Izabrane stavke zahtijevaju najmanje [mb] MB prostora na disku.

; *** "Select Additional Tasks" wizard page
WizardSelectTasks=Odabir dodatnih zadataka
SelectTasksDesc=Koje dodatne zadatke �elite program da izvr�i?
SelectTasksLabel2=Izaberite dodatne zadatke koje zelite da  [name] izvr�i, onda kliknite "Dalje".

; *** "Select Start Menu Folder" wizard page
WizardSelectProgramGroup=Odabir direktorijuma u meniju "Start"
SelectStartMenuFolderDesc=Izaberite mjesto gdje �elite da budu precice?
SelectStartMenuFolderLabel3=Instalacija ce postaviti precice u sledecem direktorijumu "Start" menija.
SelectStartMenuFolderBrowseLabel=Za nastavak pritisnite "Dalje". Ako �elite drugi direktorijum pritisnite "Potra�i".
MustEnterGroupName=Morate unijeti ime direktorijuma.
GroupNameTooLong=Ime direktorijuma ili putanje je predugacko.
InvalidGroupName=Ime direktorijuma nije valjano.
BadGroupName=Naziv direktorijuma ne smije da sadr�i sledece karaktere:%n%n%1
NoProgramGroupCheck2=&Nemoj kreirati direktorijum u "Start" meniju

; *** "Ready to Install" wizard page
WizardReady=Spreman za instalaciju
ReadyLabel1=Program je spreman da instalira [name] na va�em racunaru.
ReadyLabel2a=Klikni "Instaliraj" da zapocnete instalaciju ili "Nazad" da ponovo pogledate i promijenite pojedine stavke.
ReadyLabel2b=Klikni "Instaliraj" da zapocnete instalaciju.
ReadyMemoUserInfo=Podaci o korisniku:
ReadyMemoDir=Lokacija direktorijuma:
ReadyMemoType=Vrsta instalacije:
ReadyMemoComponents=Izabrane komponente:
ReadyMemoGroup=Direktorijum u meniju "Start":
ReadyMemoTasks=Dodatni zadaci:

; *** TDownloadWizardPage wizard page and DownloadTemporaryFile
DownloadingLabel=Snimam dodatne datoteke...
ButtonStopDownload=&Zaustavi snimanje
StopDownload=Jeste li sigurni da �elite da zaustavite snimanje?
ErrorDownloadAborted=Snimanje obustavljeno
ErrorDownloadFailed=Snimanje neuspje�no: %1 %2
ErrorDownloadSizeFailed=informacije o velicini netacne: %1 %2
ErrorFileHash1=Hash identifikacija datoteke netacna: %1
ErrorFileHash2=Netacna hash identifikacija datoteke: ocekivan %1, naden %2
ErrorProgress=Neispravan progres: %1 of %2
ErrorFileSize=Neispravna velicina datoteke: ocekivana %1, nadena %2

; *** "Preparing to Install" wizard page
WizardPreparing=Priprema za instalaciju
PreparingDesc=Program se sprema da instalira [name] na va�em racunaru.
PreviousInstallNotCompleted=Instalacija ili deinstalacija prethodnog programa nije zavr�ena. Potrebno je da restartujete racunar da bi se instalacija zavr�ila.%n%nNakon restarta racunara pokrenite instalaciju ponovo da bi se [name] instalirao.
CannotContinue=Instalacija nije moguca. Kliknite "Otka�i" da izadete.
ApplicationsFound=Sledeci programi koriste datoteke koje treba da a�urira instalacioni program. Preporucujemo da dozvolite instalacionom programu da zatvori ove programe.
ApplicationsFound2=Sledeci programi koriste datoteke koje treba da a�urira instalacioni program. Preporucujemo da dozvolite instalacionom programu da zatvori ove programe. Nakon kompletirane instalacije, instalacija ce poku�ati da restartuje program .
CloseApplications=&Automatski zatvorite program
DontCloseApplications=&Ne zatvaraj program
ErrorCloseApplications=Ne mogu da zatvorim sve programe. Preporucujemo da ugasite sve programe cije datoteke treba da nadogradi instlacija.
PrepareToInstallNeedsRestart=Instalacija mora da restartuje racunar. Nakon restarta racunara, pokrenite instalaciju [name] da bi dovr�ili instalaciju.%n%n�elite li da restartujete racunar?

; *** "Installing" wizard page
WizardInstalling=Instaliram
InstallingLabel=Sacekajte da program instalira [name] na va� racunar.

; *** "Setup Completed" wizard page
FinishedHeadingLabel=Zavr�avam sa instalacijom [name] 
FinishedLabelNoIcons=Instalacija [name] je zavr�ena na va�em racunaru.
FinishedLabel=Instalacija [name] je zavr�ena. Program mo�ete startovati klikom na instaliranu precicu.
ClickFinish=Kliknite na "Zavr�i" da izadete.
FinishedRestartLabel=Da bi instalacija [name] bila kompletna, program mora restartovati racunar. Restartovanje racunara?
FinishedRestartMessage=Da bi instalacija [name] bila kompletna, program mora restartovati racunar.%n%nRestartovanje racunara?
ShowReadmeCheck=Da, �elim da pogledam tekstualnu datoteku
YesRadio=&Da, restartovacu racunar sada
NoRadio=&Ne, restartovacu racunar kasnije
; used for example as 'Run MyProg.exe'
RunEntryExec=Run %1
; used for example as 'View Readme.txt'
RunEntryShellExec=View %1

; *** "Setup Needs the Next Disk" stuff
ChangeDiskTitle=Sledeci disk
SelectDiskLabel2=Ubacite disk %1 i kliknite "U redu".%n%nAko se datoteke na ovom disku mogu pronaci u nekom drugom direktorijumu, unesite odgovarajucu putanju ili kliknite na „Potra�i“
PathLabel=&Path:
FileNotInDir2=Datoteka "%1" ne postoji na lokaciji "%2". Ubacite pravi disk ili izaberite drugi direktorijum.
SelectDirectoryLabel=Navedite lokaciju sledeceg diska.

; *** Installation phase messages
SetupAborted=Instalacija nije kompletna.%n%nIspravite problem i pokrenite instalaciju ponovo.
AbortRetryIgnoreSelectAction=Odaberite radnju
AbortRetryIgnoreRetry=&poku�aj ponovo
AbortRetryIgnoreIgnore=&Ignori�i gre�ku i nastavi
AbortRetryIgnoreCancel=Prekini instalaciju

; *** Installation status messages
StatusClosingApplications=Zatvaram programe...
StatusCreateDirs=Kreiram direktorijume...
StatusExtractFiles=Raspakujem datoteke...
StatusCreateIcons=Kreiram precice...
StatusCreateIniEntries=Kreiram INI unose...
StatusCreateRegistryEntries=Kreiram unose u registar...
StatusRegisterFiles=Registrujem datoteke...
StatusSavingUninstall=Snimam deinstalacione informacije...
StatusRunProgram=Yavr�avam sa instalacijom...
StatusRestartingApplications=Restartujem program...
StatusRollback=Poni�tavam izmjene...

; *** Misc. errors
ErrorInternal2=Interna gre�ka: %1
ErrorFunctionFailedNoCode=%1 neuspjeh
ErrorFunctionFailed=%1 neuspjeh; kod %2
ErrorFunctionFailedWithMessage=%1 neuspjeh; kod %2.%n%3
ErrorExecutingProgram=Ne mogu da pokrenem datoteku:%n%1

; *** Registry errors
ErrorRegOpenKey=Gre�ka pri unosu u registri:%n%1\%2
ErrorRegCreateKey=Gre�ka pri unosu u registri:%n%1\%2
ErrorRegWriteKey=Gre�ka pri unosu u registri:%n%1\%2

; *** INI errors
ErrorIniEntry=Gre�ka pri stvaranju INI unosa u datoteci "%1".

; *** File copying errors
FileAbortRetryIgnoreSkipNotRecommended=&Izostavite ovu datoteku (ne preporucuje se)
FileAbortRetryIgnoreIgnoreNotRecommended=&Ignori�i gre�ku i nastaviti instalaciju (ne preporucuje se)
SourceIsCorrupted=Instalaciona datoteka je o�tecena
SourceDoesntExist=Instalaciona datoteka "%1" ne postoji
ExistingFileReadOnly2=Postojeca datoteka ne mo�e se presnimiti jer je oznacena kao samo za citanje.
ExistingFileReadOnlyRetry=&Uklonite atribut na datoteci samo za citanje i poku�ajte ponovo
ExistingFileReadOnlyKeepExisting=&Zadr�ati postojecu datoteku
ErrorReadingExistingDest=Gre�ka nastala pri citanju vec postojece datoteke:
FileExistsSelectAction=Izaberite operaciju
FileExists2=Datoteka vec postoji.
FileExistsOverwriteExisting=&Presnimite postojecu datoteku
FileExistsKeepExisting=&Zadr�ati postojecu datoteku
FileExistsOverwriteOrKeepAll=&Uradi ovo kod sledeceg problema
ExistingFileNewerSelectAction=Izaberi operaciju
ExistingFileNewer2=Postojeca datoteka je novija od ove koju �elimo da instaliramo.
ExistingFileNewerOverwriteExisting=&Presnimite postojecu datoteku 
ExistingFileNewerKeepExisting=&Zadr�ite postojecu datoteku (preporucujemo)
ExistingFileNewerOverwriteOrKeepAll=&Uradi ovo kod sledeceg problema
ErrorChangingAttr=Gre�ka kod poku�aja da se promijeni atribut datoteke:
ErrorCreatingTemp=Gre�ka kod kreiranja datoteke u navedenom direktorijumu:
ErrorReadingSource=Gre�ka kod poku�aja citanja instalacione datoteke:
ErrorCopying=Gre�ka kod poku�aja snimanja datoteke:
ErrorReplacingExistingFile=Gre�ka kod poku�aja presnimavanja postojece datoteke:
ErrorRestartReplace=Ne mogu da zamijenim:
ErrorRenamingTemp=Do�lo je do gre�ke pri poku�aju da preimenujem datoteku u navedenom direktorijumu
ErrorRegisterServer=Ne mogu da registrujem DLL/OCX: %1
ErrorRegSvr32Failed=RegSvr32 nije uspio. Gre�ka %1
ErrorRegisterTypeLib=Ne mogu da upi�em biblioteku tipova: %1

; *** Uninstall display name markings
; used for example as 'My Program (32-bit)'
UninstallDisplayNameMark=%1 (%2)
; used for example as 'My Program (32-bit, All users)'
UninstallDisplayNameMarks=%1 (%2, %3)
UninstallDisplayNameMark32Bit=32-bit
UninstallDisplayNameMark64Bit=64-bit
UninstallDisplayNameMarkAllUsers=Svi korisnici
UninstallDisplayNameMarkCurrentUser=Trenutni korisnik

; *** Post-installation errors
ErrorOpeningReadme=Gre�ka pri otvaranju tekstualne datoteke.
ErrorRestartingComputer=Instalacija ne mo�e da restartuje racunar. Uradite to sami.

; *** Uninstaller messages
UninstallNotFound=Datoteka "%1" ne postoji. Ne mogu da deinstaliram.
UninstallOpenError=Datoteka "%1" se ne mo�e otvoriti. Ne mogu da deinstaliram
UninstallUnsupportedVer=Izvje�taj "%1" nije prepoznat ode ove verzije deinstalacije. Ne mogu da deinstaliram
UninstallUnknownEntry=Nepoznat unos (%1) se pojavio u izvje�taju deinstalacije
ConfirmUninstall=�elite li da deinstalirate %1 kao i sve njegove komponente?
UninstallOnlyOnWin64=Ovu instalaciju je moguce deinstalirati samo na 64-bit Windows-u.
OnlyAdminCanUninstall=Ova instalacija se mo�e deinstalirati samo kao administrator.
UninstallStatusLabel=Sacekajte da se %1 deinstalira sa racunara.
UninstalledAll=%1 je uspje�no deinstaliran.
UninstalledMost=%1 deinstalacija uspje�na.%n%nNeki elementi nijesu uklonjeni. Mo�ete ih sami ukloniti.
UninstalledAndNeedsRestart=Da zavr�ite sa deinstlacijom %1, restartujte va� racunar.%n%n�elite li restart sada?
UninstallDataCorrupted="%1" datoteka je o�tecena. Ne mogu da deinstaliram

; *** Uninstallation phase messages
ConfirmDeleteSharedFileTitle=Brisati dijeljenu datoteku?
ConfirmDeleteSharedFile2=Sistem je primijetio da sledecu dijeljenu datoteku vi�e ne koristi nijedan program. �elite li da deinstaliram dijeljenu datoteku?%n%nAko je neki program koristio dijeljenu datoteku, moguce je da on vi�e nece raditi. Ako nijesi siguran izaberi "Ne". Ostavljanje datoteke na va�em racunaru ne mo�ete imati problema.
SharedFileNameLabel=Ime datoteke:
SharedFileLocationLabel=Lokacija:
WizardUninstalling=Status deinstlacije
StatusUninstalling=Deinstaliram %1...

; *** Shutdown block reasons
ShutdownBlockReasonInstallingApp=Instaliram %1.
ShutdownBlockReasonUninstallingApp=Deinstaliram %1.

; The custom messages below aren't used by Setup itself, but if you make
; use of them in your scripts, you'll want to translate them.

[CustomMessages]

NameAndVersion=%1 verzija %2
AdditionalIcons=Dodatne precice:
CreateDesktopIcon=Kreiraj precicu na &desktop 
CreateQuickLaunchIcon=Kreiraj precicu na paleti za &Brzo pokretanje
ProgramOnTheWeb=%1 na internetu
UninstallProgram=Deinstaliraj %1
LaunchProgram=Pokreni %1
AssocFileExtension=&Pove�i %1 sa datotekom %2 
AssocingFileExtension=Povezujem %1 sa datotekom %2 ...
AutoStartProgramGroupDescription=Pokretanje:
AutoStartProgram=Automatski pokreni %1
AddonHostProgramNotFound=%1 nije naden u direktorijumu koji ste izabrali.%n%n�elite li da nastavim?
