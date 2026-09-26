; *** Inno Setup version 6.1.0+ Romanian messages ***
; Translator : Alexandru Bogdan Munteanu (muntealb@gmail.com)
;
; To download user-contributed translations of this file, go to:
;   https://jrsoftware.org/files/istrans/
;
; Note: When translating this text, do not add periods (.) to the end of
; messages that didn't have them already, because on those messages Inno
; Setup adds the periods automatically (appending a period would result in
; two periods being displayed).

[LangOptions]
; The following three entries are very important. Be sure to read and 
; understand the '[LangOptions] section' topic in the help file.
LanguageName=Rom<00E2>n<0103>
LanguageID=$0418
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
SetupAppTitle=Instalare
SetupWindowTitle=Instalare - %1
UninstallAppTitle=Dezinstalare
UninstallAppFullTitle=Dezinstalare %1

; *** Misc. common
InformationTitle=Informa�ii
ConfirmTitle=Confirmare
ErrorTitle=Eroare

; *** SetupLdr messages
SetupLdrStartupMessage=Va fi instalat programul %1. Vrei s� continui?
LdrCannotCreateTemp=Nu pot crea o fil� temporar�. Instalare abandonat�
LdrCannotExecTemp=Nu pot executa o fil� din dosarul temporar. Instalare abandonat�
HelpTextNote=

; *** Startup error messages
LastErrorMessage=%1.%n%nEroarea %2: %3
SetupFileMissing=Fila %1 lipse�te din dosarul de instalare. Corecteaz� problema sau folose�te o alt� copie a programului.
SetupFileCorrupt=Filele de instalare s�nt stricate (corupte). Folose�te o alt� copie a programului.
SetupFileCorruptOrWrongVer=Filele de instalare s�nt stricate (corupte) sau s�nt incompatibile cu aceast� versiune a Instalatorului. Remediaz� problema sau folose�te o alt� copie a programului.
InvalidParameter=Un parametru invalid a fost trecut c�tre linia de comand�:%n%n%1
SetupAlreadyRunning=Instalarea ruleaz� deja.
WindowsVersionNotSupported=Acest program nu suport� versiunea de Windows care ruleaz� pe calculatorul t�u.
WindowsServicePackRequired=Acest program necesit� %1 Service Pack %2 sau mai nou.
NotOnThisPlatform=Acest program nu va rula pe %1.
OnlyOnThisPlatform=Acest program trebuie s� ruleze pe %1.
OnlyOnTheseArchitectures=Acest program poate fi instalat doar pe versiuni de Windows proiectate pentru urm�toarele arhitecturi de procesor:%n%n%1
WinVersionTooLowError=Acest program necesit� %1 versiunea %2 sau mai nou�.
WinVersionTooHighError=Acest program nu poate fi instalat pe %1 versiunea %2 sau mai nou�.
AdminPrivilegesRequired=Trebuie s� fii logat ca Administrator pentru instalarea acestui program.
PowerUserPrivilegesRequired=Trebuie s� fii logat ca Administrator sau ca Membru al Grupului de Utilizatori Pricepu�i ("Power Users") pentru a instala acest program.
SetupAppRunningError=Instalatorul a detectat c� %1 ruleaz� �n acest moment.%n%n�nchide toate instan�ele programului respectiv, apoi clicheaz� OK pentru a continua sau Anuleaz� pentru a abandona instalarea.
UninstallAppRunningError=Dezinstalatorul a detectat c� %1 ruleaz� �n acest moment.%n%n�nchide toate instan�ele programului respectiv, apoi clicheaz� OK pentru a continua sau Anuleaz� pentru a abandona dezinstalarea.

; *** Startup questions
PrivilegesRequiredOverrideTitle=Select Modul de Instalare al Instalatorului
PrivilegesRequiredOverrideInstruction=Selecteaz� modul de instalare
PrivilegesRequiredOverrideText1=%1 poate fi instalat pentru to�i utilizatorii (necesit� calitatea de administrator), sau doar pentru tine.
PrivilegesRequiredOverrideText2=%1 poate fi instalat doar pentru tine, sau pentru to�i utilizatorii (necesit� calitatea de administrator).
PrivilegesRequiredOverrideAllUsers=Instaleaz� pentru to�i utiliz&atorii
PrivilegesRequiredOverrideAllUsersRecommended=Instaleaz� pentru to�i utiliz&atorii (recomandat)
PrivilegesRequiredOverrideCurrentUser=Instaleaz� doar pentru &mine
PrivilegesRequiredOverrideCurrentUserRecommended=Instaleaz� doar pentru &mine (recomandat)

; *** Misc. errors
ErrorCreatingDir=Instalatorul nu a putut crea dosarul "%1"
ErrorTooManyFilesInDir=Nu pot crea o fil� �n dosarul "%1" din cauz� c� are deja prea multe file

; *** Setup common messages
ExitSetupTitle=Abandonarea Instal�rii
ExitSetupMessage=Instalarea nu este terminat�. Dac� o abandonezi acum, programul nu va fi instalat.%n%nPo�i s� rulezi Instalatorul din nou alt� dat� pentru a termina instalarea.%n%nAbandonezi Instalarea?
AboutSetupMenuItem=&Despre Instalator...
AboutSetupTitle=Despre Instalator
AboutSetupMessage=%1 versiunea %2%n%3%n%n%1 sit:%n%4
AboutSetupNote=
TranslatorNote=

; *** Buttons
ButtonBack=< �na&poi
ButtonNext=&Continu� >
ButtonInstall=&Instaleaz�
ButtonOK=OK
ButtonCancel=Anuleaz�
ButtonYes=&Da
ButtonYesToAll=Da la &Tot
ButtonNo=&Nu
ButtonNoToAll=N&u la Tot
ButtonFinish=&Finalizeaz�
ButtonBrowse=&Exploreaz�...
ButtonWizardBrowse=Explo&reaz�...
ButtonNewFolder=Creea&z� Dosar Nou

; *** "Select Language" dialog messages
SelectLanguageTitle=Selectarea Limbii Instalatorului
SelectLanguageLabel=Selecteaz� limba folosit� pentru instalare:

; *** Common wizard text
ClickNext=Clicheaz� pe Continu� pentru a avansa cu instalarea sau pe Anuleaz� pentru a o abandona.
BeveledLabel=
BrowseDialogTitle=Explorare dup� Dosar
BrowseDialogLabel=Selecteaz� un dosar din lista de mai jos, apoi clicheaz� pe OK.
NewFolderName=Dosar Nou

; *** "Welcome" wizard page
WelcomeLabel1=Bun venit la Instalarea [name]
WelcomeLabel2=Programul [name/ver] va fi instalat pe calculator.%n%nEste recomandat s� �nchizi toate celelalte aplica�ii �nainte de a continua.

; *** "Password" wizard page
WizardPassword=Parol�
PasswordLabel1=Aceast� instalare este protejat� prin parol�.
PasswordLabel3=Completeaz� parola, apoi clicheaz� pe Continu� pentru a merge mai departe. Tipul literelor din parol� (Majuscule/minuscule) este luat �n considerare.
PasswordEditLabel=&Parol�:
IncorrectPassword=Parola pe care ai introdus-o nu este corect�. Re�ncearc�.

; *** "License Agreement" wizard page
WizardLicense=Acord de Licen�iere
LicenseLabel=Cite�te informa�iile urm�toare �nainte de a continua, s�nt importante.
LicenseLabel3=Cite�te urm�torul Acord de Licen�iere. Trebuie s� accep�i termenii acestui acord �nainte de a continua instalarea.
LicenseAccepted=&Accept licen�a
LicenseNotAccepted=&Nu accept licen�a

; *** "Information" wizard pages
WizardInfoBefore=Informa�ii
InfoBeforeLabel=Cite�te informa�iile urm�toare �nainte de a continua, s�nt importante.
InfoBeforeClickLabel=C�nd e�ti gata de a trece la Instalare, clicheaz� pe Continu�.
WizardInfoAfter=Informa�ii
InfoAfterLabel=Cite�te informa�iile urm�toare �nainte de a continua, s�nt importante.
InfoAfterClickLabel=C�nd e�ti gata de a trece la Instalare, clicheaz� pe Continu�.

; *** "User Information" wizard page
WizardUserInfo=Informa�ii despre Utilizator
UserInfoDesc=Completeaz� informa�iile cerute.
UserInfoName=&Utilizator:
UserInfoOrg=&Organiza�ie:
UserInfoSerial=Num�r de &Serie:
UserInfoNameRequired=Trebuie s� introduci un nume.

; *** "Select Destination Location" wizard page
WizardSelectDir=Selectarea Locului de Destina�ie
SelectDirDesc=Unde vrei s� instalezi [name]?
SelectDirLabel3=Instalatorul va pune [name] �n dosarul specificat mai jos.
SelectDirBrowseLabel=Pentru a avansa cu instalarea, clicheaz� pe Continu�. Dac� vrei s� selectezi un alt dosar, clicheaz� pe Exploreaz�.
DiskSpaceGBLabel=Este necesar un spa�iu liber de stocare de cel pu�in [gb] GB.
DiskSpaceMBLabel=Este necesar un spa�iu liber de stocare de cel pu�in [mb] MB.
CannotInstallToNetworkDrive=Instalatorul nu poate realiza instalarea pe un dispozitiv de re�ea.
CannotInstallToUNCPath=Instalatorul nu poate realiza instalarea pe o cale �n format UNC.
InvalidPath=Trebuie s� introduci o cale complet�, inclusiv litera dispozitivului; de exemplu:%n%nC:\APP%n%nsau o cale UNC de forma:%n%n\\server\share
InvalidDrive=Dispozitivul sau partajul UNC pe care l-ai selectat nu exist� sau nu este accesibil. Selecteaz� altul.
DiskSpaceWarningTitle=Spa�iu de Stocare Insuficient
DiskSpaceWarning=Instalarea necesit� cel pu�in %1 KB de spa�iu de stocare liber, dar dispozitivul selectat are doar %2 KB liberi.%n%nVrei s� continui oricum?
DirNameTooLong=Numele dosarului sau al c�ii este prea lung.
InvalidDirName=Numele dosarului nu este valid.
BadDirName32=Numele dosarelor nu pot include unul din urm�toarele caractere:%n%n%1
DirExistsTitle=Dosarul Exist�
DirExists=Dosarul:%n%n%1%n%nexist� deja. Vrei totu�i s� instalezi �n acel dosar?
DirDoesntExistTitle=Dosarul Nu Exist�
DirDoesntExist=Dosarul:%n%n%1%n%nnu exist�. Vrei ca el s� fie creat?

; *** "Select Components" wizard page
WizardSelectComponents=Selectarea Componentelor
SelectComponentsDesc=Care dintre componente trebuie instalate?
SelectComponentsLabel2=Selecteaz� componentele de instalat; deselecteaz� componentele care nu trebuie instalate. Clicheaz� pe Continu� pentru a merge mai departe.
FullInstallation=Instalare Complet�
; if possible don't translate 'Compact' as 'Minimal' (I mean 'Minimal' in your language)
CompactInstallation=Instalare Compact�
CustomInstallation=Instalare Personalizat�
NoUninstallWarningTitle=Componentele Exist�
NoUninstallWarning=Instalatorul a detectat c� urm�toarele componente s�nt deja instalate pe calculator:%n%n%1%n%nDeselectarea lor nu le va dezinstala.%n%nVrei s� continui oricum?
ComponentSize1=%1 KB
ComponentSize2=%1 MB
ComponentsDiskSpaceGBLabel=Selec�ia curent� necesit� cel pu�in [gb] GB spa�iu de stocare.
ComponentsDiskSpaceMBLabel=Selec�ia curent� necesit� cel pu�in [mb] MB spa�iu de stocare.

; *** "Select Additional Tasks" wizard page
WizardSelectTasks=Selectarea Sarcinilor Suplimentare
SelectTasksDesc=Ce sarcini suplimentare trebuie �ndeplinite?
SelectTasksLabel2=Selecteaz� sarcinile suplimentare care trebuie �ndeplinite �n timpul instal�rii [name], apoi clicheaz� pe Continu�.

; *** "Select Start Menu Folder" wizard page
WizardSelectProgramGroup=Selectarea Dosarului din Meniul de Start
SelectStartMenuFolderDesc=Unde trebuie s� fie plasate scurt�turile programului?
SelectStartMenuFolderLabel3=Scurt�turile vor fi plasate �n dosarul specificat mai jos al Meniului de Start.
SelectStartMenuFolderBrowseLabel=Pentru a avansa cu instalarea, clicheaz� pe Continu�. Dac� vrei s� selectezi un alt dosar, clicheaz� pe Exploreaz�.
MustEnterGroupName=Trebuie s� introduci numele dosarului.
GroupNameTooLong=Numele dosarului sau al c�ii este prea lung.
InvalidGroupName=Numele dosarului nu este valid.
BadGroupName=Numele dosarului nu poate include unul dintre caracterele urm�toarele:%n%n%1
NoProgramGroupCheck2=Nu crea un &dosar �n Meniul de Start

; *** "Ready to Install" wizard page
WizardReady=Preg�tit de Instalare
ReadyLabel1=Instalatorul e preg�tit pentru instalarea [name] pe calculator.
ReadyLabel2a=Clicheaz� pe Instaleaz� pentru a continua cu instalarea, sau clicheaz� pe �napoi dac� vrei s� revezi sau s� schimbi set�rile.
ReadyLabel2b=Clicheaz� pe Instaleaz� pentru a continua cu instalarea.
ReadyMemoUserInfo=Info Utilizator:
ReadyMemoDir=Loc de Destina�ie:
ReadyMemoType=Tip de Instalare:
ReadyMemoComponents=Componente Selectate:
ReadyMemoGroup=Dosarul Meniului de Start:
ReadyMemoTasks=Sarcini Suplimentare:

; *** TDownloadWizardPage wizard page and DownloadTemporaryFile
DownloadingLabel=Descarc file suplimentare...
ButtonStopDownload=O&pre�te desc�rcarea
StopDownload=Sigur vrei s� opre�ti desc�rcarea?
ErrorDownloadAborted=Desc�rcare abandonat�
ErrorDownloadFailed=Desc�rcare e�uat�: %1 %2
ErrorDownloadSizeFailed=Ob�inerea m�rimii a e�uat: %1 %2
ErrorFileHash1=Ha�ul filei a e�uat: %1
ErrorFileHash2=Ha�ul filei e nevalid: a�teptat %1, g�sit %2
ErrorProgress=Progres nevalid: %1 of %2
ErrorFileSize=M�rime a filei nevalid�: a�teptat� %1, g�sit� %2

; *** "Preparing to Install" wizard page
WizardPreparing=Preg�tire pentru Instalare
PreparingDesc=Instalatorul preg�te�te instalarea [name] pe calculator.
PreviousInstallNotCompleted=Instalarea/dezinstalarea anterioar� a unui program nu a fost terminat�. Va trebui s� reporne�ti calculatorul pentru a termina opera�ia precedent�.%n%nDup� repornirea calculatorului, ruleaz� Instalatorul din nou pentru a realiza instalarea [name].
CannotContinue=Instalarea nu poate continua. Clicheaz� pe Anuleaz� pentru a o �nchide.
ApplicationsFound=Aplica�iile urm�toare folosesc file care trebuie actualizate de c�tre Instalator. Este recomandat s� permi�i Instalatorului s� �nchid� automat aplica�iile respective.
ApplicationsFound2=Aplica�iile urm�toare folosesc file care trebuie actualizate de c�tre Instalator. Este recomandat s� permi�i Instalatorului s� �nchid� automat aplica�iile respective. Dup� ce instalarea e terminat�, Instalatorul va �ncerca s� reporneasc� aplica�iile.
CloseApplications=�nchide &automat aplica�iile
DontCloseApplications=Nu �nchi&de aplica�iile
ErrorCloseApplications=Instalatorul nu a putut �nchide automat toate aplica�iile. �nainte de a continua, e recomandat s� �nchizi manual toate aplica�iile care folosesc file ce trebuie actualizate de Instalator.
PrepareToInstallNeedsRestart=Instalatorul trebuie s� repornesc� calculatorul. Dup� repornire, ruleaz� Instalatorul din nou pentru a termina instalarea [name].%n%nVrei s� reporne�ti acum?

; *** "Installing" wizard page
WizardInstalling=Instalare �n Desf�urare
InstallingLabel=A�teapt� s� se termine instalarea [name] pe calculator.

; *** "Setup Completed" wizard page
FinishedHeadingLabel=Finalizarea Instal�rii [name]
FinishedLabelNoIcons=Instalarea [name] pe calculator a fost terminat�.
FinishedLabel=Instalarea [name] pe calculator a fost terminat�. Aplica�ia poate fi lansat� prin clicarea pe icoanele instalate.
ClickFinish=Clicheaz� pe Finalizeaz� pentru a p�r�si Instalatorul.
FinishedRestartLabel=Pentru a termina instalarea [name], trebuie repornit calculatorul. Vrei s� fie repornit acum?
FinishedRestartMessage=Pentru a termina instalarea [name], trebuie repornit calculatorul.%n%nVrei s� fie repornit acum?
ShowReadmeCheck=Da, vreau s� v�d fila de informare (README)
YesRadio=&Da, reporne�te calculatorul acum
NoRadio=&Nu, voi reporni eu calculatorul mai t�rziu
; used for example as 'Run MyProg.exe'
RunEntryExec=Ruleaz� %1
; used for example as 'View Readme.txt'
RunEntryShellExec=Vezi %1

; *** "Setup Needs the Next Disk" stuff
ChangeDiskTitle=Instalatorul Necesit� Discul Urm�tor
SelectDiskLabel2=Introdu Discul %1 �i clicheaz� pe OK.%n%nDac� filele de pe acest disc pot fi g�site �ntr-un alt dosar dec�t cel afi�at mai jos, introdu calea corect� sau clicheaz� pe Exploreaz�.
PathLabel=&Cale:
FileNotInDir2=Fila "%1" nu poate fi g�sit� �n "%2". Introdu discul corect sau selecteaz� alt dosar.
SelectDirectoryLabel=Specific� locul discului urm�tor.

; *** Installation phase messages
SetupAborted=Instalarea nu a fost terminat�.%n%nCorecteaz� problema �i apoi ruleaz� Instalarea din nou.
AbortRetryIgnoreSelectAction=Selecteaz� ac�iunea
AbortRetryIgnoreRetry=�ncearc� din &nou
AbortRetryIgnoreIgnore=&Ignor� eroarea �i continu�
AbortRetryIgnoreCancel=Anuleaz� instalarea

; *** Installation status messages
StatusClosingApplications=�nchid aplica�iile...
StatusCreateDirs=Creez dosarele...
StatusExtractFiles=Extrag filele...
StatusCreateIcons=Creez scurt�turile...
StatusCreateIniEntries=Creez intr�rile INI...
StatusCreateRegistryEntries=Creez intr�rile �n registru...
StatusRegisterFiles=�nregistrez filele...
StatusSavingUninstall=Salvez informa�iile de dezinstalare...
StatusRunProgram=Finalizez instalarea...
StatusRestartingApplications=Repornesc aplica�iile...
StatusRollback=Re�ntorc la starea ini�ial�, prin anularea modific�rilor f�cute...

; *** Misc. errors
ErrorInternal2=Eroare Intern�: %1
ErrorFunctionFailedNoCode=%1 a e�uat
ErrorFunctionFailed=%1 a e�uat; cod %2
ErrorFunctionFailedWithMessage=%1 a e�uat; cod %2.%n%3
ErrorExecutingProgram=Nu pot executa fila:%n%1

; *** Registry errors
ErrorRegOpenKey=Eroare la deschiderea cheii de registru:%n%1\%2
ErrorRegCreateKey=Eroare la crearea cheii de registru:%n%1\%2
ErrorRegWriteKey=Eroare la scrierea �n cheia de registru:%n%1\%2

; *** INI errors
ErrorIniEntry=Eroare la crearea intr�rii INI �n fi�ierul "%1".

; *** File copying errors
FileAbortRetryIgnoreSkipNotRecommended=&Sari peste aceast� fil� (nerecomandat)
FileAbortRetryIgnoreIgnoreNotRecommended=&Ignor� eroarea �i continu� (nerecomandat)
SourceIsCorrupted=Fila surs� este stricat� (corupt�)
SourceDoesntExist=Fila surs� "%1" nu exist�
ExistingFileReadOnly2=Fila deja existent� nu poate fi �nlocuit� pentru c�-i marcat� doar-citire.
ExistingFileReadOnlyRetry=�nl�tu&r� atributul doar-citire �i re�ncearc�
ExistingFileReadOnlyKeepExisting=&P�streaz� fila existent�
ErrorReadingExistingDest=A ap�rut o eroare la citirea filei deja existente:
FileExistsSelectAction=Selecteaz� ac�iunea
FileExists2=Fila exist� deja.
FileExistsOverwriteExisting=&Suprascrie fila existent�
FileExistsKeepExisting=&P�streaz� fila existent�
FileExistsOverwriteOrKeepAll=&F� la fel pentru conflictele urm�toare
ExistingFileNewerSelectAction=Selecteaz� ac�iunea
ExistingFileNewer2=Fila existent� e mai nou� dec�t cea pe care �ncearc� Instalatorul s-o instaleze.
ExistingFileNewerOverwriteExisting=&Suprascrie fila existent�
ExistingFileNewerKeepExisting=&P�streaz� fila existent� (recomandat)
ExistingFileNewerOverwriteOrKeepAll=&F� la fel pentru conflictele urm�toare
ErrorChangingAttr=A ap�rut o eroare �n timpul schimb�rii atributelor filei deja existente:
ErrorCreatingTemp=A ap�rut o eroare �n timpul cre�rii filei �n dosarul de destina�ie:
ErrorReadingSource=A ap�rut o eroare �n timpul citirii filei surs�:
ErrorCopying=A ap�rut o eroare �n timpul copierii filei:
ErrorReplacingExistingFile=A ap�rut o eroare �n timpul �nlocuirii filei deja existente:
ErrorRestartReplace=Repornirea/�nlocuirea a e�uat:
ErrorRenamingTemp=A ap�rut o eroare �n timpul renumirii unei file din dosarul de destina�ie:
ErrorRegisterServer=Nu pot �nregistra DLL/OCX: %1
ErrorRegSvr32Failed=RegSvr32 a e�uat, av�nd codul de ie�ire %1
ErrorRegisterTypeLib=Nu pot �nregistra biblioteca de tipuri: %1

; *** Uninstall display name markings
; used for example as 'My Program (32-bit)'
UninstallDisplayNameMark=%1 (%2)
; used for example as 'My Program (32-bit, All users)'
UninstallDisplayNameMarks=%1 (%2, %3)
UninstallDisplayNameMark32Bit=32-bi�i
UninstallDisplayNameMark64Bit=64-bi�i
UninstallDisplayNameMarkAllUsers=To�i utilizatorii
UninstallDisplayNameMarkCurrentUser=Utilizatorul curent

; *** Post-installation errors
ErrorOpeningReadme=A ap�rut o eroare la deschiderea filei de informare (README).
ErrorRestartingComputer=Instalatorul nu a putut reporni calculatorul. Va trebui s�-l reporne�ti manual.

; *** Uninstaller messages
UninstallNotFound=Fila "%1" nu exist�. Dezinstalarea nu poate fi f�cut�.
UninstallOpenError=Fila "%1" nu poate fi deschis�. Dezinstalarea nu poate fi f�cut�
UninstallUnsupportedVer=Fila "%1" ce con�ine jurnalul de dezinstalare este �ntr-un format nerecunoscut de aceast� versiune a dezinstalatorului. Dezinstalarea nu poate fi f�cut�
UninstallUnknownEntry=A fost �nt�lnit� o intrare necunoscut� (%1) �n jurnalul de dezinstalare
ConfirmUninstall=Sigur vrei s� �nl�turi complet %1 �i componentele sale?
UninstallOnlyOnWin64=Aceast� instalare poate fi dezinstalat� doar pe un sistem Windows 64-bi�i.
OnlyAdminCanUninstall=Aceast� instalare poate fi dezinstalat� doar de c�tre un utilizator cu drepturi de Administrator.
UninstallStatusLabel=A�teapt� ca %1 s� fie �nl�turat de pe calculator.
UninstalledAll=%1 a fost �nl�turat cu succes de pe calculator.
UninstalledMost=Dezinstalare complet� a %1.%n%nAnumite elemente nu au putut fi �nl�turate. Acestea pot fi �nl�turate manual.
UninstalledAndNeedsRestart=Pentru a termina dezinstalarea %1, calculatorul trebuie repornit.%n%nVrei s� fie repornit acum?
UninstallDataCorrupted=Fila "%1" este stricat� (corupt�). Dezinstalarea nu poate fi f�cut�

; *** Uninstallation phase messages
ConfirmDeleteSharedFileTitle=�terg Fila Partajat�?
ConfirmDeleteSharedFile2=Sistemul indic� faptul c� fila partajat� urm�toare pare s� nu mai fie folosit� de vreun alt program. Vrei ca Dezinstalatorul s� �tearg� aceast� fil� partajat�?%n%nDac� totu�i mai exist� programe care folosesc fila �i ea este �tears�, acele programe ar putea s� func�ioneze gre�it. Dac� nu e�ti sigur, alege Nu. L�sarea filei �n sistem nu va produce nici o nepl�cere.
SharedFileNameLabel=Nume Fil�:
SharedFileLocationLabel=Loc:
WizardUninstalling=Starea Dezinstal�rii
StatusUninstalling=Dezinstalez %1...

; *** Shutdown block reasons
ShutdownBlockReasonInstallingApp=Instalez %1.
ShutdownBlockReasonUninstallingApp=Dezinstalez %1.

; The custom messages below aren't used by Setup itself, but if you make
; use of them in your scripts, you'll want to translate them.

[CustomMessages]

NameAndVersion=%1 versiunea %2
AdditionalIcons=Scurt�turi suplimentare:
CreateDesktopIcon=Creeaz� o scurt�tur� pe &Birou ("Desktop")
CreateQuickLaunchIcon=Creeaz� o scurt�tur� �n Bara de &Lansare Rapid� ("Quick Launch")
ProgramOnTheWeb=%1 pe internet
UninstallProgram=Dezinstaleaz� %1
LaunchProgram=Lanseaz� %1
AssocFileExtension=&Asociaz� %1 cu extensia de file %2
AssocingFileExtension=Asociez %1 cu extensia de file %2...
AutoStartProgramGroupDescription=Pornire:
AutoStartProgram=Porne�te automat %1
AddonHostProgramNotFound=%1 nu poate fi g�sit �n dosarul selectat.%n%nVrei s� continui oricum?
