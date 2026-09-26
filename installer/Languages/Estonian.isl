; *** Inno Setup version 5.5.3+ Estonian messages ***
;
; Estonian translation by LiivaneLord
; E-mail: liivane.lord@mail.ee
; Last modification date: 2013-01-09
; T�lge baseerub rix'i t�lkele, mida on parandatud ja kohandatud uuemale versioonile.
;
; To download user-contributed translations of this file, go to:
;   http://www.jrsoftware.org/files/istrans/
;
; Note: When translating this text, do not add periods (.) to the end of
; messages that didn't have them already, because on those messages Inno
; Setup adds the periods automatically (appending a period would result in
; two periods being displayed).

[LangOptions]
; The following three entries are very important. Be sure to read and 
; understand the '[LangOptions] section' topic in the help file.
LanguageName=Eesti
LanguageID=$0425
LanguageCodePage=1257
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
SetupAppTitle=Paigalda
SetupWindowTitle=Paigalda %1
UninstallAppTitle=Eemalda
UninstallAppFullTitle=Eemalda %1

; *** Misc. common
InformationTitle=Informatsioon
ConfirmTitle=Kinnita
ErrorTitle=Viga

; *** SetupLdr messages
SetupLdrStartupMessage=Paigaldatakse %1. Kas soovid j�tkata?
LdrCannotCreateTemp=Ei saanud luua ajutist faili. Paigaldamine katkestati
LdrCannotExecTemp=Ei saanud k�ivitada faili ajutises kataloogis. Paigaldamine katkestati

; *** Startup error messages
LastErrorMessage=%1.%n%nViga %2: %3
SetupFileMissing=%1 on paigaldamise kaustast kadunud. Palun paranda see viga v�i hangi programmi uus koopia.
SetupFileCorrupt=Paigaldaja failid on rikutud. Palun hangi programmi uus koopia.
SetupFileCorruptOrWrongVer=Paigaldaja failid on kas rikutud v�i ei t��ta selle paigaldaja versiooniga. Palun paranda see viga v�i hangi programmi uus koopia.
InvalidParameter=K�sureale anti vale parameeter:%n%n%1
SetupAlreadyRunning=Paigaldaja alles t��tab.
WindowsVersionNotSupported=Seda programmi ei saa selle Windowsi versiooniga kasutada, mis arvutis praegu t��tab.
WindowsServicePackRequired=See programm vajab %1 Service Pack (Hoolduspakett) %2 v�i uuemat.
NotOnThisPlatform=See programm ei t��ta %1'i platvormil.
OnlyOnThisPlatform=See programm peab t��tama %1'i platvormil.
OnlyOnTheseArchitectures=Seda programmi saab paigaldada ainult neile Windowsi versioonidele, mis on v�lja t��tatud j�rgmistele protsessori arhitektuuridele:%n%n%1
MissingWOW64APIs=Sinu arvutis t��taval Windowsil puuduvad 64-bitise paigaldamise jaoks vajalik funktsionaalsus. Selle probleemi parandamiseks paigalda palun Service Pack (Hoolduspakett) %1.
WinVersionTooLowError=See programm vajab %1 versiooniga %2 v�i uuemat.
WinVersionTooHighError=Seda programmi ei saa paigaldada %1 versiooniga %2 v�i uuema puhul.
AdminPrivilegesRequired=Selle programmi paigaldamiseks pead olema administraatorina sisse logitud.
PowerUserPrivilegesRequired=Selle programmi paigaldamiseks pead olema sisse logitud administraatorina v�i Power user liikmena.
SetupAppRunningError=Paigaldaja tuvastas, et %1 t��tab hetkel.%n%nPalun sulge see programm ning seej�rel j�tkamiseks vajuta OK, katkestamiseks Katkesta.
UninstallAppRunningError=Eemaldaja tuvastas, et %1 t��tab hetkel.%n%nPalun sulge see programm ning seej�rel j�tkamiseks vajuta OK, katkestamiseks Katkesta.

; *** Misc. errors
ErrorCreatingDir=Paigaldaja ei saanud luua kataloogi "%1"
ErrorTooManyFilesInDir=Ei saanud luua faili kataloogi "%1", kuna seal on juba liiga palju faile

; *** Setup common messages
ExitSetupTitle=V�lju paigaldajast
ExitSetupMessage=Paigaldamine pole valmis. Kui praegu v�ljud, siis programmi ei paigaldata.%n%nPaigaldamise l�petamiseks v�id paigaldaja m�ni teine kord uuesti k�ivitada.%n%nSoovid v�ljuda paigaldajast?
AboutSetupMenuItem=&Teave paigaldajast...
AboutSetupTitle=Teave paigaldajast
AboutSetupMessage=%1 versiooniga %2%n%3%n%n%1 koduleht:%n%4
AboutSetupNote=
TranslatorNote=T�lkis LiivaneLord (liivane[dot]lord[at]mail[dot]ee)

; *** Buttons
ButtonBack=< &Tagasi
ButtonNext=&Edasi >
ButtonInstall=&Paigalda
ButtonOK=OK
ButtonCancel=Katkesta
ButtonYes=&Jah
ButtonYesToAll=K�ikidele J&ah
ButtonNo=&Ei
ButtonNoToAll=K�ikidele E&i
ButtonFinish=&Valmis
ButtonBrowse=&Sirvi...
ButtonWizardBrowse=S&irvi...
ButtonNewFolder=&Loo uus kaust

; *** "Select Language" dialog messages
SelectLanguageTitle=Vali paigaldaja keel
SelectLanguageLabel=Vali keel, mida soovid kasutada paigaldamise k�igus:

; *** Common wizard text
ClickNext=J�tkamiseks vajuta Edasi, paigaldajast v�ljumiseks vajuta Katkesta.
BeveledLabel=
BrowseDialogTitle=Sirvi kausta
BrowseDialogLabel=Vali allolevast nimekirjast kaust ja vajuta OK.
NewFolderName=Uus kaust

; *** "Welcome" wizard page
WelcomeLabel1=Tere tulemast [name] paigaldaja viisardisse
WelcomeLabel2=Sinu arvutisse paigaldatakse [name/ver].%n%nEnne j�tkamist on soovitatav sulgeda k�ik muud programmid.

; *** "Password" wizard page
WizardPassword=Parool
PasswordLabel1=See paigaldaja on kaitstud parooliga.
PasswordLabel3=Palun sisesta parool ja vajuta Edasi. Paroolid on t�stutundlikud.
PasswordEditLabel=&Parool:
IncorrectPassword=Sisestatud parool on vale. Palun proovi uuesti.

; *** "License Agreement" wizard page
WizardLicense=Litsentsileping
LicenseLabel=Palun loe enne j�tkamist see informatsioon l�bi.
LicenseLabel3=Palun loe j�rgnevat litsentsilepingut. Paigaldamise j�tkamiseks pead n�ustuma selle lepingu tingimustega.
LicenseAccepted=Ma &n�ustun lepinguga
LicenseNotAccepted=Ma &ei n�ustu lepinguga

; *** "Information" wizard pages
WizardInfoBefore=Informatsioon
InfoBeforeLabel=Palun loe enne j�tkamist see oluline informatsioon l�bi.
InfoBeforeClickLabel=Kui oled valmis j�tkama paigaldamist, vajuta Edasi.
WizardInfoAfter=Informatsioon
InfoAfterLabel=Palun loe enne j�tkamist see oluline informatsioon l�bi.
InfoAfterClickLabel=Kui oled valmis j�tkama paigaldamist, vajuta Edasi.

; *** "User Information" wizard page
WizardUserInfo=Andmed kasutaja kohta
UserInfoDesc=Palun sisesta oma andmed.
UserInfoName=&Kasutaja nimi:
UserInfoOrg=&Organisatsioon:
UserInfoSerial=&Seerianumber:
UserInfoNameRequired=Pead sisestama nime.

; *** "Select Destination Location" wizard page
WizardSelectDir=Vali programmile kaust
SelectDirDesc=Kuhu [name] paigaldada?
SelectDirLabel3=Paigaldaja paigaldab [name]'i j�rgnevasse kausta.
SelectDirBrowseLabel=J�tkamiseks vajuta Edasi. Kui soovid valida muu kausta, vajuta Sirvi.
DiskSpaceMBLabel=Programm vajab v�hemalt [mb] MB vaba ruumi.
CannotInstallToNetworkDrive=Programmi ei saa paigaldada v�rgudraivile.
CannotInstallToUNCPath=Programmi ei saa paigaldada UNC kataloogi.
InvalidPath=Pead sisestama t�ispika draivitee koos draivit�hisega; n�iteks:%n%nC:\APP%n%nv�i UNC kataloog kujul:%n%n\\server\share
InvalidDrive=Sinu valitud draivi v�i UNC kataloogi ei eksisteeri v�i puudub sellele ligip��s. Palun vali m�ni teine.
DiskSpaceWarningTitle=Pole piisavalt ruumi
DiskSpaceWarning=Paigaldamiseks on vaja v�hemalt %1 KB vaba ruumi, aga valitud draivil on vaba ainult %2 KB.%n%nKas soovid sellegipoolest j�tkata?
DirNameTooLong=Kausta nimi v�i kaustatee on liiga pikk
InvalidDirName=Kausta nimi on vale.
BadDirName32=Kausta nimed ei tohi sisaldada �htegi j�rgnevatest s�mbolitest:%n%n%1
DirExistsTitle=Kaust on olemas
DirExists=Kaust:%n%n%1%n%non juba olemas. Kas soovid sellegipoolest sinna paigaldada?
DirDoesntExistTitle=Kaust puudub
DirDoesntExist=Kaust:%n%n%1%n%npuudub. Kas soovid, et see kaust luuakse?

; *** "Select Components" wizard page
WizardSelectComponents=Vali komponendid
SelectComponentsDesc=Millised komponendid paigaldada?
SelectComponentsLabel2=Vali komponendid, mida paigaldada; eemalda m�rgid komponentidelt, mida ei soovi paigaldada. Kui oled valmis j�tkama, vajuta Edasi.
FullInstallation=T�ielik paigaldamine
; if possible don't translate 'Compact' as 'Minimal' (I mean 'Minimal' in your language)
CompactInstallation=Kompaktne paigaldamine
CustomInstallation=Kohandatud paigaldamine
NoUninstallWarningTitle=Komponendid on juba olemas
NoUninstallWarning=Paigaldaja tuvastas, et j�rgnevad komponendid on sinu arvutis juba olemas:%n%n%1%n%nNende mittevalimine ei eemalda neid.%n%nKas soovid sellegipoolest j�tkata?
ComponentSize1=%1 KB
ComponentSize2=%1 MB
ComponentsDiskSpaceMBLabel=Praegune valik vajab v�hemalt [mb] MB vaba ruumi.

; *** "Select Additional Tasks" wizard page
WizardSelectTasks=Vali t�iendavad �lesanded
SelectTasksDesc=Milliseid t�iendavaid �lesanded t�ita?
SelectTasksLabel2=Vali, milliseid t�iendavaid �lesandeid [name] paigaldaja peab t�itma ja vajuta Edasi.

; *** "Select Start Menu Folder" wizard page
WizardSelectProgramGroup=Vali Start men�� kaust
SelectStartMenuFolderDesc=Kuhu luua programmi otseteed?
SelectStartMenuFolderLabel3=Paigaldaja loob programmi otseteed j�rgnevasse Start men�� kausta.
SelectStartMenuFolderBrowseLabel=J�tkamiseks vajuta Edasi. Kui soovid valida muu kausta, vajuta Sirvi.
MustEnterGroupName=Pead sisestama kausta nime.
GroupNameTooLong=Kausta nimi v�i kaustatee on liiga pikk.
InvalidGroupName=Kausta nimi on vale.
BadGroupName=Kausta nimi ei tohi sisaldada j�rgnevatest s�mbolitest:%n%n%1
NoProgramGroupCheck2=&�ra loo Start men�� kausta

; *** "Ready to Install" wizard page
WizardReady=Valmis paigaldama
ReadyLabel1=Paigaldaja on valmis paigaldama [name]'i sinu arvutisse.
ReadyLabel2a=Paigaldamise j�tkamiseks vajuta Paigalda v�i vajuta Tagasi, et n�ha v�i muuta seadeid.
ReadyLabel2b=Paigaldamise j�tkamiseks vajuta Paigalda.
ReadyMemoUserInfo=Kasutaja andmed:
ReadyMemoDir=Sihtkaust:
ReadyMemoType=Paigalduse t��p:
ReadyMemoComponents=Valitud komponendid:
ReadyMemoGroup=Start men�� kaust:
ReadyMemoTasks=Lisa�lesanded:

; *** "Preparing to Install" wizard page
WizardPreparing=Paigaldamiseks valmistumine
PreparingDesc=Paigaldaja valmistub paigaldama [name]'i sinu arvutisse.
PreviousInstallNotCompleted=Eelmise programmi paigaldamine/eemaldamine ei ole l�petatud. Paigaldamise l�petamiseks pead arvuti taask�ivitama.%n%nP�rast taask�ivitust k�ivitage [name]'i paigaldaja uuesti, et l�petada paigaldamine.
CannotContinue=Paigaldaja ei saa j�tkata. V�ljumiseks vajuta palun Katkesta.
ApplicationsFound=J�rgnevad rakendused kasutavad faile, mida paigaldaja peab uuendama. Soovitatav on lubada paigaldajal need rakendused automaatselt sulgeda.
ApplicationsFound2=J�rgnevad rakendused kasutavad faile, mida paigaldaja peab uuendama. Soovitatav on lubada paigaldajal need rakendused automaatselt sulgeda. P�rasta paigaldamise l�petamist �ritab paigaldaja need rakendused taask�ivitada.
CloseApplications=&Sulge rakendused automaatselt
DontCloseApplications=�ra s&ulge rakendusi
ErrorCloseApplications=Paigaldaja ei saanud k�iki rakendusi automaatselt sulgeda. Enne j�tkamist on soovitatav sul sulgeda k�ik rakendused, mis kasutavad faile, mida paigaldaja peab uuendama.

; *** "Installing" wizard page
WizardInstalling=Paigaldamine
InstallingLabel=Palun oota, kuni [name] paigaldatakse sinu arvutisse.

; *** "Setup Completed" wizard page
FinishedHeadingLabel=[name]'i paigaldamise l�petamine
FinishedLabelNoIcons=[name]'i paigaldamine on l�petatud.
FinishedLabel=[name]'i paigaldamine on l�petatud. Programmi saab k�ivitada paigaldatud ikoonide abil.
ClickFinish=Paigaldajast v�ljumiseks vajuta Valmis.
FinishedRestartLabel=[name]'i paigaldamise l�petamiseks peab arvuti taask�ivituma. Kas soovid kohe taask�ivitada?
FinishedRestartMessage=[name]'i paigaldamise l�petamiseks peab arvuti taask�ivituma.%n%nKas soovid kohe taask�ivitada?
ShowReadmeCheck=Jah, sooviksin n�ha Readme (LoeMind) faili
YesRadio=&Jah, taask�ivita arvuti kohe
NoRadio=&Ei, taask�ivitan arvuti hiljem
; used for example as 'Run MyProg.exe'
RunEntryExec=K�ivita %1
; used for example as 'View Readme.txt'
RunEntryShellExec=Vaata %1

; *** "Setup Needs the Next Disk" stuff
ChangeDiskTitle=Paigaldaja vajab j�rgmist diski
SelectDiskLabel2=Palun sisesta disk %1 ja vajuta OK.%n%nKui diskil olevad failid asuvad kuskil mujal, siis sisesta �ige kaustatee v�i vajuta Sirvi.
PathLabel=&Asukoht:
FileNotInDir2=Fail "%1" ei asu kohas "%2". Palun sisesta �ige disk v�i vali teine kaust.
SelectDirectoryLabel=Palun t�psusta j�rgmise diski asukoht.

; *** Installation phase messages
SetupAborted=Paigaldamist ei l�petatud.%n%nPalun paranda viga ja k�ivita paigaldaja uuesti.
EntryAbortRetryIgnore=Uuesti proovimiseks vajuta Proovi uuesti, j�tkamiseks Ignoreeri v�i l�petamiseks Katkesta.

; *** Installation status messages
StatusClosingApplications=Rakenduste sulgemine...
StatusCreateDirs=Kaustade loomine...
StatusExtractFiles=Failide lahtipakkimine...
StatusCreateIcons=Otseteede loomine...
StatusCreateIniEntries=INI kirjete loomine...
StatusCreateRegistryEntries=Registri kirjete loomine...
StatusRegisterFiles=Failide registreerimine...
StatusSavingUninstall=Eemaldamise teabe salvestamine...
StatusRunProgram=Paigaldamise l�petamine...
StatusRestartingApplications=Rakenduste taask�ivitamine...
StatusRollback=Muudatuste tagasiv�tmine...

; *** Misc. errors
ErrorInternal2=Sisemine viga: %1
ErrorFunctionFailedNoCode=%1 luhtus
ErrorFunctionFailed=%1 luhtus; kood %2
ErrorFunctionFailedWithMessage=%1 luhtus; kood %2.%n%3
ErrorExecutingProgram=Ei saanud k�ivitada faili:%n%1

; *** Registry errors
ErrorRegOpenKey=Ei saanud avada registri v�tit:%n%1\%2
ErrorRegCreateKey=Ei saanud luua registri v�tit:%n%1\%2
ErrorRegWriteKey=Ei saanud kirjutada registri v�tit:%n%1\%2

; *** INI errors
ErrorIniEntry=Viga INI kirje loomisel failis "%1".

; *** File copying errors
FileAbortRetryIgnore=Uuesti proovimiseks vajuta Proovi uuesti, faili vahelej�tmiseks Ignoreeri (mittesoovitatav) v�i paigaldamisest loobumiseks Katkesta.
FileAbortRetryIgnore2=Uuesti proovimiseks vajuta Proovi uuesti, j�tkamiseks Ignoreeri (mittesoovitatav) v�i paigaldamisest loobumiseks Katkesta.
SourceIsCorrupted=L�htefail on rikutud
SourceDoesntExist=L�htefaili "%1" ei eksisteeri
ExistingFileReadOnly=Fail on m�rgitud kui kirjutuskaitstud.%n%nKirjutuskaitstuse mahav�tmiseks vajuta Proovi uuesti ja proovi uuesti, faili vahelej�tmiseks Ignoreeri v�i paigaldamisest loobumiseks Katkesta.
ErrorReadingExistingDest=Faili lugemisel ilmnes viga:
FileExists=Fail on juba olemas.%n%nKas soovid, et paigaldaja selle �le kirjutaks?
ExistingFileNewer=Olemasolev fail on uuem kui see, mida paigaldaja �ritab paigaldada. Soovitatav on olemasolev fail alles j�tta.%n%nKas soovid olemasoleva faili alles j�tta?
ErrorChangingAttr=Faili atribuutide muutmisel ilmnes viga:
ErrorCreatingTemp=Faili loomisel sihtkataloogi ilmnes viga:
ErrorReadingSource=L�htefaili lugemisel ilmnes viga:
ErrorCopying=Faili kopeerimisel ilmnes viga:
ErrorReplacingExistingFile=Olemasoleva faili asendamisel ilmnes viga:
ErrorRestartReplace=Faili asendamine peale taask�ivitust ei �nnestunud:
ErrorRenamingTemp=Faili nime muutmisel sihtkataloogis ilmnes viga:
ErrorRegisterServer=Ei saanud registreerida DLL/OCX: %1
ErrorRegSvr32Failed=RegSvr32 luhtus koodiga %1
ErrorRegisterTypeLib=Unable to register the type library: %1

; *** Post-installation errors
ErrorOpeningReadme=README (LoeMind) faili avamisel ilmnes viga.
ErrorRestartingComputer=Paigaldaja ei suutnud arvutit taask�ivitada. Palun tee seda k�sitsi.

; *** Uninstaller messages
UninstallNotFound=Faili "%1" ei ole olemas. Ei saa eemaldada.
UninstallOpenError=Faili "%1" ei saanud avada. Ei saa eemaldada.
UninstallUnsupportedVer=Eemaldamise logifaili "%1" formaat on tundmatu selle versiooni eemaldaja jaoks. Ei saa eemaldada
UninstallUnknownEntry=Eemaldaja logis on tundmatu kirje (%1)
ConfirmUninstall=Oled kindel, et soovid eemaldada %1'i ja k�ik selle komponendid?
UninstallOnlyOnWin64=Seda paigaldamist saab eemaldada ainult 64-bitises Windowsis.
OnlyAdminCanUninstall=Seda paigaldamist saab eemaldada ainult administraatori�igustega kasutaja.
UninstallStatusLabel=Palun oota, kuni %1 eemaldatakse sinu arvutist.
UninstalledAll=%1 eemaldati sinu arvutist edukalt.
UninstalledMost=%1'i eemaldamine �nnestus.%n%nM�ned elemendid j�id alles. Need v�ib k�sitsi kustutada.
UninstalledAndNeedsRestart=%1'i eemaldamise l�petamiseks peab arvuti taask�ivituma.%n%nKas soovid kohe taask�ivitada?
UninstallDataCorrupted="%1" fail on rikutud. Ei saa eemaldada

; *** Uninstallation phase messages
ConfirmDeleteSharedFileTitle=Kas kustutan �hiskasutuses oleva faili?
ConfirmDeleteSharedFile2=S�steem kinnitab, et �hiskasutuses olevat faili ei kasuta �kski teine programm. Kas soovid, et eemaldaja selle �hiskasutuses oleva faili kustutaks?%n%nKui m�ni programm seda siiski veel kasutab, siis ei pruugi see enam korralikult t��tada. Kui sa pole kindel, vali Ei. Faili allesj�tmine ei tekita probleeme.
SharedFileNameLabel=Faili nimi:
SharedFileLocationLabel=Asukoht:
WizardUninstalling=Eemaldamise staatus
StatusUninstalling=%1'i eemaldamine...

; *** Shutdown block reasons
ShutdownBlockReasonInstallingApp=%1'i paigaldamine.
ShutdownBlockReasonUninstallingApp=%1'i eemaldamine.

; The custom messages below aren't used by Setup itself, but if you make
; use of them in your scripts, you'll want to translate them.

[CustomMessages]

NameAndVersion=%1 versiooniga %2
AdditionalIcons=T�iendavad ikoonid:
CreateDesktopIcon=Loo &t��laua ikoon
CreateQuickLaunchIcon=Loo &kiirk�ivituse ikoon
ProgramOnTheWeb=%1 veebis
UninstallProgram=%1 - eemalda
LaunchProgram=K�ivita %1
AssocFileExtension=&Seosta %1 %2 faililaiendiga
AssocingFileExtension=Seostan %1 %2 faililaiendiga...
AutoStartProgramGroupDescription=K�ivitus:
AutoStartProgram=K�ivita %1 automaatselt
AddonHostProgramNotFound=%1 ei asu sinu valitud kaustas.%n%nKas soovid sellegipoolest j�tkata?
