; *** Inno Setup version 5.1.11+ Occitan messages ***
;
; To download user-contributed translations of this file, go to:
;   http://www.jrsoftware.org/is3rdparty.php
;
; Note: When translating this text, do not add periods (.) to the end of
; messages that didn't have them already, because on those messages Inno
; Setup adds the periods automatically (appending a period would result in
; two periods being displayed).
;
; Translated by David Gimeno i Ayuso, info@sima.cat, 2007/03/18

[LangOptions]
LanguageName=Occit<00E0>n
LanguageID=$0482
LanguageCodePage=0
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
SetupAppTitle=Installacion
SetupWindowTitle=Installacion - %1
UninstallAppTitle=Desinstallacion
UninstallAppFullTitle=Desinstallar %1

; *** Misc. common
InformationTitle=Informacion
ConfirmTitle=Confirmacion
ErrorTitle=Error

; *** SetupLdr messages
SetupLdrStartupMessage=Aguest programa installar� %1. Voletz continuar?
LdrCannotCreateTemp=Non s'a pogut crear un fich�r temporau. Installacion cancellada
LdrCannotExecTemp=Non s'a pogut executar eth fich�r ara carpeta temporau. Installacion cancellada

; *** Startup error messages
LastErrorMessage=%1.%n%nError %2: %3
SetupFileMissing=Eth fich�r %1 non se trapa ara carpeta d'installacion. Resolvatz eth problema o obtietz ua naua c�pia deth programa.
SetupFileCorrupt=Es fich�rs d'installacion estan corrompudi. Obtietz ua naua c�pia deth programa.
SetupFileCorruptOrWrongVer=Es fich�rs d'installacion estan espatladi, o son incompatibles damb aguesta version deth programa. Resolvatz eth problema o obtietz ua naua c�pia deth programa.
NotOnThisPlatform=Aguest programa non foncionar� jos %1.
OnlyOnThisPlatform=Aguest programa sonque se p�t executar jos %1.
OnlyOnTheseArchitectures=Aguest programa sonque se p�t installar a versions de Windows dessenhades ent�s seg�entes arquitectures de processador:%n%n%1
MissingWOW64APIs=Era version de Windows qu'auetz non includ�s ua foncionalitat requerida per Setup ent� efectuar ua installacion de 64 bits. Ent� corregir aguest probl�ma, installatz eth Service Pack %1.
WinVersionTooLowError=Aguest programa requer�s %1 version %2 o posteriora.
WinVersionTooHighError=Aguest programa non se p�t installar jos %1 version %2 o posteriora.
AdminPrivilegesRequired=Cau qu'ajatz privil�gis d'administrador ent� poder installar aguest programa.
PowerUserPrivilegesRequired=Cau que acceditz coma administrador o coma membre deth grop Power Users en installar aguest programa.
SetupAppRunningError=Eth programa d'installacion a detectat que %1 s'execute actuaument.%n%nBarratz eth programa e premetz Seg�ent ent� continuar o Cancellar ent� g�sser.
UninstallAppRunningError=Eth programa de desinstallacion a detectat que %1 s'execute en aguest moment.%n%nBarratz eth programa e premetz Seg�ent ent� continuar o Cancellar ent� g�sser.

; *** Misc. errors
ErrorCreatingDir=Eth programa d'installacion non a pogut crear era carpeta "%1"
ErrorTooManyFilesInDir=Non s'a pogut crear un fich�r ara carpeta "%1" pr'amor que conten massa fich�rs

; *** Setup common messages
ExitSetupTitle=G�sser
ExitSetupMessage=Era installacion non s'a completat. Se gessetz ara, eth programa non ser� installat.%n%nEnta completar-la poderatz tornar a executar eth programa d'installacion quan volgatz.%n%nVolgatz g�sser-ne?
AboutSetupMenuItem=&Sus era installacion...
AboutSetupTitle=Sus era installacion
AboutSetupMessage=%1 version %2%n%3%n%nPagina web de %1:%n%4
AboutSetupNote=
TranslatorNote=Occitan translation maintained by David Gimeno i Ayuso (info@sima.cat)

; *** Buttons
ButtonBack=< &Tornar
ButtonNext=&Seg�ent >
ButtonInstall=&Installar
ButtonOK=Corr�cte
ButtonCancel=Cancellar
ButtonYes=�&c
ButtonYesToAll=�c a &Tot
ButtonNo=&Non
ButtonNoToAll=N&on a tot
ButtonFinish=&Finalizar
ButtonBrowse=&Explorar...
ButtonWizardBrowse=E&xplorar...
ButtonNewFolder=&Crear ua carpeta naua

; *** "Select Language" dialog messages
SelectLanguageTitle=Seleccionatz idi�ma
SelectLanguageLabel=Seleccionatz er idi�ma d'installacion:

; *** Common wizard text
ClickNext=Premetz Seg�ent ent� continuar o Cancellar ent� abandonar era installacion.
BeveledLabel=
BrowseDialogTitle=Explorar ua carpeta
BrowseDialogLabel=Seleccionatz ua carpeta dera lista seg�enta e clicatz Corr�cte.
NewFolderName=Carpeta naua

; *** "Welcome" wizard page
WelcomeLabel1=Benvengut ar assistent d'installacion de [name]
WelcomeLabel2=Aguest programa installar� [name/ver] ath v�ste ordinador.%n%nEi recomanable que abantes de continuar barratz toti es autes programes dub�rti, per tau d'evitar conflictes pendent eth proc�s d'installacion.

; *** "Password" wizard page
WizardPassword=C�di d'acc�s
PasswordLabel1=Aguesta installacion est� protegida damb un c�di d'acc�s.
PasswordLabel3=Indicatz eth c�di d'acc�s e premetz Seg�ent ent� continuar. Aguest c�di distingu�s entre majuscules e minuscules.
PasswordEditLabel=&C�di:
IncorrectPassword=Eth c�di introdusit non ei corr�cte. Tornatz a intentar-ac.

; *** "License Agreement" wizard page
WizardLicense=Acceptacion dera lic�ncia d'emplec.
LicenseLabel=Cau que liegetz aguesta informacion abantes de continuar.
LicenseLabel3=Liegetz-vos er Acord de Lic�ncia seg�ent. Cau que n'acceptatz es t�rmes abantes de continuar damb era installacion.
LicenseAccepted=&Accepti er ac�rd
LicenseNotAccepted=&Non accepti er ac�rd

; *** "Information" wizard pages
WizardInfoBefore=Informacion
InfoBeforeLabel=Liegetz-vos era informacion seg�enta abantes de continuar.
InfoBeforeClickLabel=Quan estetz preparat ent� continuar, premetz Seg�ent
WizardInfoAfter=Informacion
InfoAfterLabel=Liegetz-vos era informacion seg�enta abantes de continuar.
InfoAfterClickLabel=Quan estetz preparat ent� continuar, premetz Seg�ent

; *** "User Information" wizard page
WizardUserInfo=Informacion sus er usatg�r
UserInfoDesc=Entratz-i era v�sta informacion.
UserInfoName=&N�m der usatg�r:
UserInfoOrg=&Organizacion
UserInfoSerial=&Numer� de s�rie:
UserInfoNameRequired=Cau que i entratz un n�m

; *** "Select Destination Directory" wizard page
WizardSelectDir=Escuelhetz Carpeta de Destinacion
SelectDirDesc=A on s'a d'installar [name]?
SelectDirLabel3=Escuelhetz era carpeta a on voletz installar [name].
SelectDirBrowseLabel=Premetz Seg�ent ent� continuar. Se en voletz seleccionar ua de diferenta, premetz Explorar.
DiskSpaceMBLabel=Aguest programa a de besonh un minim de [mb] MB d'espaci a disc.
ToUNCPathname=Era installacion non p�t installar eth programa en ua carpeta UNC. Se estatz en tot provar d'installar-lo en hilat, auratz d'assignar ua letra (D:, E:, etc...) ath disc de destinacion.
InvalidPath=Cau dar ua rota completa damb letra d'unitat, per exemple:%n%nC:\Aplicacion%n%non ben ua rota UNC en era forma:%n%n\\servidor\compartit
InvalidDrive=Eth disc o rota de hilat seleccionat non exist�s, escuelhetz-ne un aute.
DiskSpaceWarningTitle=Non i a pro espaci ath disc
DiskSpaceWarning=Eth programa d'installacion a de besonh coma minim %1 KB d'espaci liure, m�s eth disc seleccionat sonque a %2 KB disponibles.%n%nTot e damb a��, desiratz continuar?
DirNameTooLong=Era rota o n�m dera carpeta ei massa long.
InvalidDirName=Eth n�m dera carpeta ei incorr�cte.
BadDirName32=Un n�m de carpeta non p�t contier cap des caract�rs seg�ents:%n%n%1
DirExistsTitle=Era carpeta exist�s
DirExists=Era carpeta:%n%n%1%n%nja exist�s. Volgatz installar igualament eth programa en aguesta carpeta?
DirDoesntExistTitle=Era Carpeta Non Exist�s
DirDoesntExist=Era carpeta:%n%n%1%n%nnon exist�s. Volgatz que sigue creada?

; *** "Select Program Group" wizard page
WizardSelectComponents=Escuelhetz Components
SelectComponentsDesc=Quini components cau installar?
SelectComponentsLabel2=Seleccionatz es components que voletz installar; eliminatz es components que non voletz installar. Premetz Seg�ent ent� continuar.
FullInstallation=Installacion completa
; if possible don't translate 'Compact' as 'Minimal' (I mean 'Minimal' in your language)
CompactInstallation=Installacion compacta
CustomInstallation=Installacion personalizada
NoUninstallWarningTitle=Es components Existissen
NoUninstallWarning=Eth programa d'installacion a detectat qu'es components seg�ents ja se trapen ath v�ste ordinador:%n%n%1%n%nSe non estan seleccionadi non seran desinstalladi.%n%nVolgatz continuar igualament?
ComponentSize1=%1 Kb
ComponentSize2=%1 Mb
ComponentsDiskSpaceMBLabel=Aguesta seleccion requer�s un minim de [mb] Mb d'espaci ath disc.

; *** "Select Additional Tasks" wizard page
WizardSelectTasks=Escuelhetz pr�tzh�ts addicionaus
SelectTasksDesc=Quini pr�tzh�ts addicionaus cau executar?
SelectTasksLabel2=Escuelhetz es pr�tzh�ts addicionaus que voletz que siguen executadi mentre s'installa [name], e demp�s premetz Seg�ent.

; *** "Select Start Menu Folder" wizard page
WizardSelectProgramGroup=Escuelhetz era carpeta deth Menu Inici
SelectStartMenuFolderDesc=A on cau pla�ar es ligams deth programa?
SelectStartMenuFolderLabel3=Escuelhetz era carpeta deth Menu Inici a on voletz qu'eth programa d'installacion cree es ligams.
SelectStartMenuFolderBrowseLabel=Premetz Seg�ent ent� continuar. S'en voletz seleccionar ua de diferenta, premetz Explorar.
MustEnterGroupName=Cau que i entratz un n�m de carpeta.
GroupNameTooLong=Era rota o n�m dera carpeta ei massa long.
InvalidGroupName=Eth n�m dera carpeta ei incorr�cte.
BadGroupName=Eth n�m deth grop non p�t contier cap des caract�rs seg�ents:%n%n%1
NoProgramGroupCheck2=&Non crear ua carpeta ath Menu Inici

; *** "Ready to Install" wizard page
WizardReady=Preparat ent� installar
ReadyLabel1=Eth programa d'installacion est� preparat ent� iniciar era installacion de [name] ath v�ste ordinador.
ReadyLabel2a=Premetz Installar ent� continuar damb era installacion, o Tornar se voletz revisar o modificar es opcions d'installacion.
ReadyLabel2b=Premetz Installar ent� continuar damb era installacion.
ReadyMemoUserInfo=Informacion der usatg�r:
ReadyMemoDir=Carpeta de destinacion:
ReadyMemoType=Tipe d'installacion:
ReadyMemoComponents=Components seleccionadi:
ReadyMemoGroup=Carpeta deth Menu Inici:
ReadyMemoTasks=Pr�tzh�ts addicionaus:

; *** "Preparing to Install" wizard page
WizardPreparing=Se preman�s era installacion
PreparingDesc=Se preman�s era installacion de [name] ath v�ste ordinador.
PreviousInstallNotCompleted=Era installacion o desinstallacion anteriora non s'a amiat a t�rme. Caler� que reiniciatz er ordinador ent� finalizar aguesta installacion.%n%nDemp�s de reiniciar er ordinador, executatz aguest programa de nau ent� completar era installacion de [name].
CannotContinue=Era installacion non p�t continuar. Premetz Cancellar ent� g�sser.

; *** "Installing" wizard page
WizardInstalling=S'installe
InstallingLabel=Esperatz-vos mentre s'installe [name] ath v�ste ordinador.

; *** "Setup Completed" wizard page
FinishedHeadingLabel=Se complete er assistent d'installacion de [name]
FinishedLabelNoIcons=Eth programa a finalizat era installacion de [name] ath v�ste ordinador.
FinishedLabel=Eth programa a finalizat era installacion de [name] ath v�ste ordinador. Era aplicacion se p�t iniciar en tot seleccionar es ic�nes installades.
ClickFinish=Premetz Finalizar ent� g�sser dera installacion.
FinishedRestartLabel=Ent� completar era installacion de [name] cau reiniciar er ordinador. Volgatz h�r-ac ara?
FinishedRestartMessage=Ent� completar era installacion de [name] cau reiniciar er ordinador. Volgatz h�r-ac ara?
ShowReadmeCheck=�c, voi visualizar eth fich�r LIEGETZ.TXT
YesRadio=�&c, reiniciar er ordinador ara
NoRadio=&Non, reiniciar� er ordinador m�s tard
; used for example as 'Run MyProg.exe'
RunEntryExec=Executar %1
; used for example as 'View Readme.txt'
RunEntryShellExec=Visualizar %1

; *** "Setup Needs the Next Disk" stuff
ChangeDiskTitle=Eth programa d'installacion a de besonh eth disc seg�ent
SelectDiskLabel2=Introdusitz eth disc %1 e premetz Continuar.%n%nSe es fich�rs d'aguest disc se p�den trapar en ua carpeta diferenta dera indicada tot seguit, entratz-ne era rota corr�cta o ben premetz Explorar.
PathLabel=&Rota:
FileNotInDir2=Eth fich�r "%1" non s'a pogut trapar a "%2". Introdusitz eth disc corr�cte o escuelhetz ua auta carpeta.
SelectDirectoryLabel=Indicatz a on se trapa eth disc seg�ent.

; *** Installation phase messages
SetupAborted=Era installacion non s'a completat.%n%n%Resolvatz eth problema e executatz de nau eth programa d'installacion.
EntryAbortRetryIgnore=Premetz Reintentar ent� intentar-ac de nau, Ignorar ent� continuar igualament, o Cancellar ent� abandonar era installacion.

; *** Installation status messages
StatusCreateDirs=Se creen carpetes...
StatusExtractFiles=S'extr�n fich�rs...
StatusCreateIcons=Se creen ic�nes de programa...
StatusCreateIniEntries=Se creen entrades ath fich�r INI...
StatusCreateRegistryEntries=Se creen entrades de registre...
StatusRegisterFiles=Se registren fich�rs...
StatusSavingUninstall=Se plegue informacion de desinstallacion...
StatusRunProgram=Se finalize era installacion...
StatusRollback=Se des�h�n es cambis...

; *** Misc. errors
ErrorInternal2=Error intern: %1
ErrorFunctionFailedNoCode=%1 a mancat
ErrorFunctionFailed=%1 a mancat; c�di %2
ErrorFunctionFailedWithMessage=%1 a mancat; c�di %2.%n%3
ErrorExecutingProgram=Non se p�t executar eth fich�r:%n%1

; *** Registry errors
ErrorRegOpenKey=Error en daurir era clau de registre:%n%1\%2
ErrorRegCreateKey=Error en crear era clau de registre:%n%1\%2
ErrorRegWriteKey=Error en escr�uer ara clau de registre:%n%1\%2

; *** INI errors
ErrorIniEntry=Error en crear era entrada INI ath fich�r "%1".

; *** File copying errors
FileAbortRetryIgnore=Premetz Reintentar ent� intentar-ac de nau, Ignorar ent� sautar-se aguest fich�r (non recomanat), o Cancellar ent� abandonar era installacion.
FileAbortRetryIgnore2=Premetz Reintentar ent� intentar-ac de nau, Ignorar ent� continuar igualament (non recomanat), o Cancellar ent� abandonar era installacion.
SourceIsCorrupted=Eth fich�r d'origina est� corromput
SourceDoesntExist=Eth fich�r d'origina "%1" non exist�s
ExistingFileReadOnly=Eth fich�r ei de sonque lectura.%n%nPremetz Reintentar ent� tr�ir-li er atribut de sonque lectura e tornar-ac a intentar; Om�ter ent� sautar-se-lo (non recomanat), o Anullar ent� abandonar era installacion.
ErrorReadingExistingDest=S'a produsit un error en li�ger eth fich�r:
FileExists=Eth fich�r ja exist�s.%n%nVolgatz que sigue sus-escrit?
ExistingFileNewer=Eth fich�r existent ei m�s nau qu'eth que s'intenta installar. Se recomana mantier eth fich�r existent.%n%nVolgatz mantier-lo?
ErrorChangingAttr=I a agut un error en cambiar es atributs deth fich�r:
ErrorCreatingTemp=I a agut un error en crear un fich�r ara carpeta de destinacion:
ErrorReadingSource=I a agut un error en li�ger eth fich�r d'origina:
ErrorCopying=I a agut un error en copiar un fich�r:
ErrorReplacingExistingFile=I a agut un error en rempla�ar eth fich�r existent:
ErrorRestartReplace=A mancat rempla�ar:
ErrorRenamingTemp=I a agut un error en renomentar un fich�r ara carpeta de destinacion:
ErrorRegisterServer=Non s'a pogut registrar eth DLL/OCX: %1
ErrorRegSvr32Failed=A mancat RegSvr32 damb c�di de gessuda %1
ErrorRegisterTypeLib=Non s'a pogut registrar era bibliot�ca de tipe: %1

; *** Post-installation errors
ErrorOpeningReadme=I a agut un error en daurir eth fich�r LIEGETZ.TXT.
ErrorRestartingComputer=Eth programa d'installacion non a pogut reiniciar er ordinador. Hetz-ac manualament.

; *** Uninstaller messages
UninstallNotFound=Eth fich�r "%1" non exist�s. Non se p�t desinstallar.
UninstallOpenError=Eth fich�r "%1" non se p�t daurir. Non se p�t desinstallar.
UninstallUnsupportedVer=Eth fich�r de desinstallacion "%1" est� en un format non reconeishut ent� aguesta version deth desinstallador. Non se p�t desinstallar
UninstallUnknownEntry=S'a trapat ua entrada desconeishuda (%1) ath fich�r de desinstallacion.
ConfirmUninstall=Estatz segur de voler eliminar completament %1 e toti es s�ns components?
UninstallOnlyOnWin64=Aguest programa sonque se p�t desinstallar a Windows de 64 bits.
OnlyAdminCanUninstall=Aguest programa sonque se p�t desinstallar ent� un usatg�r damb privilegis d'administrador.
UninstallStatusLabel=Esperatz-vos mentre s'elimine %1 deth v�ste ordinador.
UninstalledAll=%1 a estat desinstallat correctament deth v�ste ordinador.
UninstalledMost=Desinstallacion de %1 completada.%n%nQuauqui elements non s'an pogut eliminar. P�den �ster eliminadi manualament.
UninstalledAndNeedsRestart=Ent� completar era installacion de %1, cau reiniciar eth v�ste ordinador.%n%nVolgatz h�r-ac ara?
UninstallDataCorrupted=Eth fich�r "%1" est� corromput. Non se p�t desinstallar.

; *** Uninstallation phase messages
ConfirmDeleteSharedFileTitle=Eliminar fich�r compartit?
ConfirmDeleteSharedFile2=Eth sistema indica qu'eth fich�r compartit seg�ent ja non ei emplegat per cap aute programa. Volgatz qu'era desinstallacion elimine aguest fich�r?%n%nSe quauque programa encara lo emplegue e ei eliminat, poderia non foncionar correctament. Se non n'estatz segur, escuelhetz Non. Deishar eth fich�r ath sistema non har� cap mau.
SharedFileNameLabel=N�m deth fich�r:
SharedFileLocationLabel=Localizacion:
WizardUninstalling=Estat dera desinstallacion
StatusUninstalling=Se desinstalle %1...

; The custom messages below aren't used by Setup itself, but if you make
; use of them in your scripts, you'll want to translate them.

[CustomMessages]

NameAndVersion=%1 version %2
AdditionalIcons=Ic�nes addicionaus:
CreateDesktopIcon=Crear ua icona ar &escript�ri
CreateQuickLaunchIcon=Crear ua icona d'execucion &rapida
ProgramOnTheWeb=%1 ath hilat
UninstallProgram=Desinstallar %1
LaunchProgram=Iniciar %1
AssocFileExtension=&Associar %1 damb era extension %2
AssocingFileExtension=S'ass�cie %1 damb era extension %2...
