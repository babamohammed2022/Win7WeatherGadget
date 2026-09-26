; ============================================================================
;  Windows 7 Weather Gadget - installer
;  Inno Setup 6 script (tested with Inno Setup 6.7.3)
;
;  Output: Win7WeatherGadget-Setup.exe
;
;  Wizard: Welcome -> Information -> [Gadget runtime, only if missing]
;          -> Installing -> Finish
;
;  What it does
;  ------------
;  * Copies the gadget to the per-user folder used by the gadget platform:
;      %LOCALAPPDATA%\Microsoft\Windows Sidebar\Gadgets\Weather.gadget
;  * Copies the documentation and the settings clean-up script to
;      %LOCALAPPDATA%\Programs\Windows 7 Weather Gadget
;  * Registers a per-user uninstaller (Settings > Apps).
;  It needs no administrator rights, changes no system file and downloads
;  nothing by itself. The gadget runtime (a separate program) is downloaded
;  only if the user clicks the button on the "Gadget runtime" page, and the
;  download is verified with a pinned SHA-256 checksum before it is run.
;
;  How to build
;  ------------
;  Normally via "python scripts/build.py", which stages the gadget into
;  dist\stage (converting the text files to the UTF-16LE format used by the
;  original gadget) and then runs ISCC. Manual build after staging:
;      ISCC.exe installer\Setup.iss
;  Optional defines: /DMyAppVersion=x.y.z  /DMyAppURL=https://...
;                    /DStageDir=<absolute path of the staging folder>
; ============================================================================

#define MyAppName "Windows 7 Weather Gadget"
#ifndef MyAppVersion
  ; VERSION (repository root) is the single source of truth for the version.
  #define VersionFile FileOpen(AddBackslash(SourcePath) + "..\VERSION")
  #define MyAppVersion Trim(FileRead(VersionFile))
  #expr FileClose(VersionFile)
#endif
#define MyAppPublisher "Windows 7 Weather Gadget project"
#ifndef MyAppURL
  #define MyAppURL "https://github.com/"
#endif
#ifndef StageDir
  #define StageDir "..\dist\stage"
#endif
#define GadgetFolder "Weather.gadget"

; Official download page of the Desktop Gadgets runtime (Gadgets Revived).
#define RuntimePageURL "https://gadgetsrevived.com/download-sidebar/"
; Direct link to the ZIP that contains the runtime installer, and its SHA-256
; (verified on 2026-09-26). If the file on the server changes, the download is
; rejected and the user is sent to the download page instead.
#define RuntimeZipURL "https://gadgetsrevived.com/wp-content/uploads/2013/10/DesktopGadgetsInstaller.zip"
#define RuntimeZipSHA256 "ea740299619747e5aef1e667cd86b14f75ce0db7a35883e2312b4eeeb68ed511"

[Setup]
; ---- identity (AppId must never change: it links upgrades and uninstall) ---
AppId={{27597258-B883-4963-96DA-901C49BCA9EA}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppVerName={#MyAppName} {#MyAppVersion}
VersionInfoVersion={#MyAppVersion}
VersionInfoProductName={#MyAppName}
VersionInfoDescription={#MyAppName} Setup
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
AppComments=Restores the Windows 7 Weather gadget on Windows 10 and Windows 11

; ---- location --------------------------------------------------------------
; The gadget itself always goes to the fixed per-user folder expected by the
; gadget platform (see [Files]). {app} only holds documentation, the settings
; clean-up script and the uninstaller.
DefaultDirName={localappdata}\Programs\Windows 7 Weather Gadget
DisableDirPage=yes
DisableProgramGroupPage=yes
CreateAppDir=yes

; ---- privileges ------------------------------------------------------------
; Per-user installation: no administrator rights, no HKLM, no system files.
PrivilegesRequired=lowest

; ---- wizard pages ----------------------------------------------------------
DisableWelcomePage=no
InfoBeforeFile=README.txt
DisableReadyPage=yes
DisableFinishedPage=no
ShowLanguageDialog=auto
LanguageDetectionMethod=uilanguage
WizardStyle=modern
SetupIconFile=icon.ico
UninstallDisplayIcon={app}\icon.ico

; ---- output ----------------------------------------------------------------
OutputDir=..\dist
OutputBaseFilename=Win7WeatherGadget-Setup
Compression=lzma2/max
SolidCompression=yes

[Languages]
; ---------------------------------------------------------------------------
;  Installer languages (78: English + the 77 translation files in Languages\).
;  These are the languages of the SETUP WIZARD only; the gadget has its own
;  20 interface languages (see docs/LOCALIZATION.md).
;
;  Each entry loads, in order:
;    1. compiler:Default.isl        - English base, so that any message missing
;                                     from an older translation file falls back
;                                     to English instead of failing the build;
;    2. Languages\<Language>.isl    - the standard wizard translation;
;    3. Languages\Custom\English.isl - English text of the messages specific
;                                     to this installer ([CustomMessages]);
;    4. Languages\Custom\<Language>.isl - translation of those messages, for
;                                     the 20 languages the gadget supports.
;  Later files override earlier ones.
; ---------------------------------------------------------------------------
Name: "en";   MessagesFile: "compiler:Default.isl,Languages\Custom\English.isl"
Name: "ab";   MessagesFile: "compiler:Default.isl,Languages\Abkhazian.isl,Languages\Custom\English.isl"
Name: "af";   MessagesFile: "compiler:Default.isl,Languages\Afrikaans.isl,Languages\Custom\English.isl"
Name: "sq";   MessagesFile: "compiler:Default.isl,Languages\Albanian.isl,Languages\Custom\English.isl"
Name: "ar";   MessagesFile: "compiler:Default.isl,Languages\Arabic.isl,Languages\Custom\English.isl"
Name: "hy";   MessagesFile: "compiler:Default.isl,Languages\Armenian.isl,Languages\Custom\English.isl"
Name: "ast";  MessagesFile: "compiler:Default.isl,Languages\Asturian.isl,Languages\Custom\English.isl"
Name: "az";   MessagesFile: "compiler:Default.isl,Languages\Azerbaijan.isl,Languages\Custom\English.isl"
Name: "eu";   MessagesFile: "compiler:Default.isl,Languages\Basque.isl,Languages\Custom\English.isl"
Name: "be";   MessagesFile: "compiler:Default.isl,Languages\Belarusian.isl,Languages\Custom\English.isl"
Name: "bn";   MessagesFile: "compiler:Default.isl,Languages\Bengali.islu,Languages\Custom\English.isl"
Name: "bs";   MessagesFile: "compiler:Default.isl,Languages\Bosnian.isl,Languages\Custom\English.isl"
Name: "ptbr"; MessagesFile: "compiler:Default.isl,Languages\BrazilianPortuguese.isl,Languages\Custom\English.isl,Languages\Custom\BrazilianPortuguese.isl"
Name: "bg";   MessagesFile: "compiler:Default.isl,Languages\Bulgarian.isl,Languages\Custom\English.isl"
Name: "ca";   MessagesFile: "compiler:Default.isl,Languages\Catalan.isl,Languages\Custom\English.isl"
Name: "zhcn"; MessagesFile: "compiler:Default.isl,Languages\ChineseSimplified.isl,Languages\Custom\English.isl,Languages\Custom\ChineseSimplified.isl"
Name: "zhtw"; MessagesFile: "compiler:Default.isl,Languages\ChineseTraditional.isl,Languages\Custom\English.isl,Languages\Custom\ChineseTraditional.isl"
Name: "co";   MessagesFile: "compiler:Default.isl,Languages\Corsican.isl,Languages\Custom\English.isl"
Name: "hr";   MessagesFile: "compiler:Default.isl,Languages\Croatian.isl,Languages\Custom\English.isl"
Name: "cs";   MessagesFile: "compiler:Default.isl,Languages\Czech.isl,Languages\Custom\English.isl,Languages\Custom\Czech.isl"
Name: "da";   MessagesFile: "compiler:Default.isl,Languages\Danish.isl,Languages\Custom\English.isl,Languages\Custom\Danish.isl"
Name: "nl";   MessagesFile: "compiler:Default.isl,Languages\Dutch.isl,Languages\Custom\English.isl,Languages\Custom\Dutch.isl"
Name: "engb"; MessagesFile: "compiler:Default.isl,Languages\EnglishBritish.isl,Languages\Custom\English.isl"
Name: "eo";   MessagesFile: "compiler:Default.isl,Languages\Esperanto.isl,Languages\Custom\English.isl"
Name: "et";   MessagesFile: "compiler:Default.isl,Languages\Estonian.isl,Languages\Custom\English.isl"
Name: "ee";   MessagesFile: "compiler:Default.isl,Languages\Ewe.isl,Languages\Custom\English.isl"
Name: "fa";   MessagesFile: "compiler:Default.isl,Languages\Farsi.isl,Languages\Custom\English.isl"
Name: "fi";   MessagesFile: "compiler:Default.isl,Languages\Finnish.isl,Languages\Custom\English.isl,Languages\Custom\Finnish.isl"
Name: "fr";   MessagesFile: "compiler:Default.isl,Languages\French.isl,Languages\Custom\English.isl,Languages\Custom\French.isl"
Name: "gl";   MessagesFile: "compiler:Default.isl,Languages\Galician.isl,Languages\Custom\English.isl"
Name: "ka";   MessagesFile: "compiler:Default.isl,Languages\Georgian.isl,Languages\Custom\English.isl"
Name: "de";   MessagesFile: "compiler:Default.isl,Languages\German.isl,Languages\Custom\English.isl,Languages\Custom\German.isl"
Name: "el";   MessagesFile: "compiler:Default.isl,Languages\Greek.isl,Languages\Custom\English.isl"
Name: "he";   MessagesFile: "compiler:Default.isl,Languages\Hebrew.isl,Languages\Custom\English.isl"
Name: "hi";   MessagesFile: "compiler:Default.isl,Languages\Hindi.islu,Languages\Custom\English.isl"
Name: "hu";   MessagesFile: "compiler:Default.isl,Languages\Hungarian.isl,Languages\Custom\English.isl,Languages\Custom\Hungarian.isl"
Name: "is";   MessagesFile: "compiler:Default.isl,Languages\Icelandic.isl,Languages\Custom\English.isl"
Name: "id";   MessagesFile: "compiler:Default.isl,Languages\Indonesian.isl,Languages\Custom\English.isl"
Name: "it";   MessagesFile: "compiler:Default.isl,Languages\Italian.isl,Languages\Custom\English.isl,Languages\Custom\Italian.isl"; InfoBeforeFile: "README.it.txt"
Name: "ja";   MessagesFile: "compiler:Default.isl,Languages\Japanese.isl,Languages\Custom\English.isl,Languages\Custom\Japanese.isl"
Name: "kk";   MessagesFile: "compiler:Default.isl,Languages\Kazakh.islu,Languages\Custom\English.isl"
Name: "ko";   MessagesFile: "compiler:Default.isl,Languages\Korean.isl,Languages\Custom\English.isl,Languages\Custom\Korean.isl"
Name: "ku";   MessagesFile: "compiler:Default.isl,Languages\Kurdish.isl,Languages\Custom\English.isl"
Name: "lv";   MessagesFile: "compiler:Default.isl,Languages\Latvian.isl,Languages\Custom\English.isl"
Name: "lij";  MessagesFile: "compiler:Default.isl,Languages\Ligurian.isl,Languages\Custom\English.isl"
Name: "lt";   MessagesFile: "compiler:Default.isl,Languages\Lithuanian.isl,Languages\Custom\English.isl"
Name: "lb";   MessagesFile: "compiler:Default.isl,Languages\Luxemburgish.isl,Languages\Custom\English.isl"
Name: "mk";   MessagesFile: "compiler:Default.isl,Languages\Macedonian.isl,Languages\Custom\English.isl"
Name: "ms";   MessagesFile: "compiler:Default.isl,Languages\Malaysian.isl,Languages\Custom\English.isl"
Name: "mr";   MessagesFile: "compiler:Default.isl,Languages\Marathi.islu,Languages\Custom\English.isl"
Name: "mn";   MessagesFile: "compiler:Default.isl,Languages\Mongolian.isl,Languages\Custom\English.isl"
Name: "cnr";  MessagesFile: "compiler:Default.isl,Languages\Montenegrin.isl,Languages\Custom\English.isl"
Name: "ne";   MessagesFile: "compiler:Default.isl,Languages\Nepali.islu,Languages\Custom\English.isl"
Name: "no";   MessagesFile: "compiler:Default.isl,Languages\Norwegian.isl,Languages\Custom\English.isl,Languages\Custom\Norwegian.isl"
Name: "nn";   MessagesFile: "compiler:Default.isl,Languages\NorwegianNynorsk.isl,Languages\Custom\English.isl"
Name: "oc";   MessagesFile: "compiler:Default.isl,Languages\Occitan.isl,Languages\Custom\English.isl"
Name: "pl";   MessagesFile: "compiler:Default.isl,Languages\Polish.isl,Languages\Custom\English.isl,Languages\Custom\Polish.isl"
Name: "pt";   MessagesFile: "compiler:Default.isl,Languages\Portuguese.isl,Languages\Custom\English.isl"
Name: "ro";   MessagesFile: "compiler:Default.isl,Languages\Romanian.isl,Languages\Custom\English.isl"
Name: "ru";   MessagesFile: "compiler:Default.isl,Languages\Russian.isl,Languages\Custom\English.isl,Languages\Custom\Russian.isl"
Name: "gd";   MessagesFile: "compiler:Default.isl,Languages\ScottishGaelic.isl,Languages\Custom\English.isl"
Name: "sr";   MessagesFile: "compiler:Default.isl,Languages\SerbianCyrillic.isl,Languages\Custom\English.isl"
Name: "srl";  MessagesFile: "compiler:Default.isl,Languages\SerbianLatin.isl,Languages\Custom\English.isl"
Name: "si";   MessagesFile: "compiler:Default.isl,Languages\Sinhala.islu,Languages\Custom\English.isl"
Name: "sk";   MessagesFile: "compiler:Default.isl,Languages\Slovak.isl,Languages\Custom\English.isl"
Name: "sl";   MessagesFile: "compiler:Default.isl,Languages\Slovenian.isl,Languages\Custom\English.isl"
Name: "es";   MessagesFile: "compiler:Default.isl,Languages\Spanish.isl,Languages\Custom\English.isl,Languages\Custom\Spanish.isl"
Name: "sv";   MessagesFile: "compiler:Default.isl,Languages\Swedish.isl,Languages\Custom\English.isl,Languages\Custom\Swedish.isl"
Name: "ta";   MessagesFile: "compiler:Default.isl,Languages\Tamil.isl,Languages\Custom\English.isl"
Name: "tt";   MessagesFile: "compiler:Default.isl,Languages\Tatar.isl,Languages\Custom\English.isl"
Name: "th";   MessagesFile: "compiler:Default.isl,Languages\Thai.isl,Languages\Custom\English.isl"
Name: "tr";   MessagesFile: "compiler:Default.isl,Languages\Turkish.isl,Languages\Custom\English.isl,Languages\Custom\Turkish.isl"
Name: "ug";   MessagesFile: "compiler:Default.isl,Languages\Uyghur.islu,Languages\Custom\English.isl"
Name: "uk";   MessagesFile: "compiler:Default.isl,Languages\Ukrainian.isl,Languages\Custom\English.isl"
Name: "ur";   MessagesFile: "compiler:Default.isl,Languages\Urdu.isl,Languages\Custom\English.isl"
Name: "uz";   MessagesFile: "compiler:Default.isl,Languages\Uzbek.isl,Languages\Custom\English.isl"
Name: "va";   MessagesFile: "compiler:Default.isl,Languages\Valencian.isl,Languages\Custom\English.isl"
Name: "vi";   MessagesFile: "compiler:Default.isl,Languages\Vietnamese.isl,Languages\Custom\English.isl"

[InstallDelete]
; Start from a clean gadget folder so that no file from an older version is
; left behind. The folder only contains program files: the user's settings
; (city, units) live in the sidebar's settings.ini, which is not touched.
Type: filesandordirs; Name: "{localappdata}\Microsoft\Windows Sidebar\Gadgets\{#GadgetFolder}"

[Files]
; ---- the gadget: straight into the folder the gadget platform expects -----
Source: "{#StageDir}\gadget\{#GadgetFolder}\*"; \
    DestDir: "{localappdata}\Microsoft\Windows Sidebar\Gadgets\{#GadgetFolder}"; \
    Flags: recursesubdirs createallsubdirs ignoreversion

; ---- documentation and the settings clean-up script (used on uninstall) ---
Source: "{#StageDir}\docs\README.txt";    DestDir: "{app}"; Flags: ignoreversion
Source: "{#StageDir}\docs\README.it.txt"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#StageDir}\docs\LICENSE.txt";   DestDir: "{app}"; Flags: ignoreversion
Source: "{#StageDir}\docs\NOTICE.md";     DestDir: "{app}"; Flags: ignoreversion
Source: "{#StageDir}\docs\CHANGELOG.md";  DestDir: "{app}"; Flags: ignoreversion
Source: "{#StageDir}\tools\CleanGadgetSettings.ps1"; DestDir: "{app}\tools"; Flags: ignoreversion
Source: "icon.ico"; DestDir: "{app}"; Flags: ignoreversion

[Run]
; Finish page: optional, pre-checked, only offered when a runtime was found.
Filename: "{code:GetSidebarExe}"; Parameters: "{code:GetSidebarParams}"; \
    Description: "{cm:WGShowGadgets}"; \
    Flags: postinstall nowait skipifsilent skipifdoesntexist; Check: CanShowGadgets

[UninstallDelete]
; Remove the gadget folder completely, including any file created at run time.
Type: filesandordirs; Name: "{localappdata}\Microsoft\Windows Sidebar\Gadgets\{#GadgetFolder}"

[Code]
{ ------------------------------------------------------------------------- }
{ Everything below is defensive: any failure shows a readable message and   }
{ leaves the installer usable instead of stopping it.                       }
{ ------------------------------------------------------------------------- }

const
  RUNTIME_ZIP_URL    = '{#RuntimeZipURL}';
  RUNTIME_ZIP_SHA256 = '{#RuntimeZipSHA256}';
  RUNTIME_PAGE_URL   = '{#RuntimePageURL}';
  RUNTIME_ZIP_NAME   = 'DesktopGadgetsInstaller.zip';

var
  RuntimePage: TWizardPage;
  RuntimeStatus: TNewStaticText;
  RuntimeInfo: TNewStaticText;
  BtnInstallRuntime: TNewButton;
  BtnOpenPage: TNewButton;
  BtnRecheck: TNewButton;
  DownloadPage: TDownloadWizardPage;
  RuntimeOK: Boolean;
  SidebarWasRunning: Boolean;

{ ------------------------------------------------------------------------- }
{ Runtime detection                                                         }
{ ------------------------------------------------------------------------- }

{ Checks one candidate path; on success stores it in FoundPath. }
function TryPath(const Candidate: String; var FoundPath: String): Boolean;
begin
  Result := (Candidate <> '') and FileExists(Candidate);
  if Result then
    FoundPath := Candidate;
end;

{ Looks for "<Root>\<any folder>\sidebar.exe" one level below Root. }
function FindSidebarBelow(const Root: String; var FoundPath: String): Boolean;
var
  FindRec: TFindRec;
begin
  Result := False;
  if (Root = '') or (not DirExists(Root)) then
    Exit;
  if FindFirst(AddBackslash(Root) + '*', FindRec) then
  begin
    try
      repeat
        if ((FindRec.Attributes and FILE_ATTRIBUTE_DIRECTORY) <> 0) and
           (FindRec.Name <> '.') and (FindRec.Name <> '..') then
        begin
          if TryPath(AddBackslash(Root) + FindRec.Name + '\sidebar.exe', FoundPath) then
          begin
            Result := True;
            Exit;
          end;
        end;
      until not FindNext(FindRec);
    finally
      FindClose(FindRec);
    end;
  end;
end;

{ Returns the path of the gadget runtime executable (sidebar.exe, or
  8GadgetPack.exe), or '' when none is found. }
function FindSidebarExe(): String;
var
  PF, PF32: String;
begin
  Result := '';
  try
    PF := ExpandConstant('{commonpf}');
    PF32 := ExpandConstant('{commonpf32}');
    { Well-known locations first. }
    if TryPath(PF + '\Windows Sidebar\sidebar.exe', Result) then Exit;
    if TryPath(PF32 + '\Windows Sidebar\sidebar.exe', Result) then Exit;
    if TryPath(PF + '\Desktop Gadgets\sidebar.exe', Result) then Exit;
    if TryPath(PF32 + '\Desktop Gadgets\sidebar.exe', Result) then Exit;
    if TryPath(PF + '\Gadgets Revived\sidebar.exe', Result) then Exit;
    if TryPath(PF + '\8GadgetPack.exe', Result) then Exit;
    if TryPath(PF32 + '\8GadgetPack.exe', Result) then Exit;
    { Then any folder one level below Program Files. }
    if FindSidebarBelow(PF, Result) then Exit;
    if FindSidebarBelow(PF32, Result) then Exit;
  except
    Result := '';
  end;
end;

{ True when an installed program whose name mentions "Gadget" or "Sidebar" is
  registered for the whole machine (the runtimes install per machine). }
function RuntimeRegistered(): Boolean;
var
  Names: TArrayOfString;
  I: Integer;
  DisplayName, Lower: String;
  Key: String;
begin
  Result := False;
  Key := 'SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall';
  try
    if RegGetSubkeyNames(HKLM, Key, Names) then
      for I := 0 to GetArrayLength(Names) - 1 do
        if RegQueryStringValue(HKLM, Key + '\' + Names[I], 'DisplayName', DisplayName) then
        begin
          Lower := Lowercase(DisplayName);
          if ((Pos('gadget', Lower) > 0) or (Pos('sidebar', Lower) > 0)) and
             (DisplayName <> '{#MyAppName}') then
          begin
            Result := True;
            Exit;
          end;
        end;
    if IsWin64 and RegGetSubkeyNames(HKLM32, Key, Names) then
      for I := 0 to GetArrayLength(Names) - 1 do
        if RegQueryStringValue(HKLM32, Key + '\' + Names[I], 'DisplayName', DisplayName) then
        begin
          Lower := Lowercase(DisplayName);
          if ((Pos('gadget', Lower) > 0) or (Pos('sidebar', Lower) > 0)) and
             (DisplayName <> '{#MyAppName}') then
          begin
            Result := True;
            Exit;
          end;
        end;
  except
    Result := False;
  end;
end;

function RuntimeFound(): Boolean;
begin
  Result := (FindSidebarExe() <> '') or RuntimeRegistered();
end;

{ Used by [Run]: the "open the gadget gallery" option needs an executable. }
function CanShowGadgets(): Boolean;
begin
  Result := FindSidebarExe() <> '';
end;

function GetSidebarExe(Param: String): String;
begin
  Result := FindSidebarExe();
end;

{ sidebar.exe opens the gadget gallery with /showGadgets; 8GadgetPack.exe is
  started without arguments (same behavior as Install.cmd). }
function GetSidebarParams(Param: String): String;
begin
  if Pos('8gadgetpack.exe', Lowercase(FindSidebarExe())) > 0 then
    Result := ''
  else
    Result := '/showGadgets';
end;

function PowerShellPath(): String;
begin
  Result := ExpandConstant('{sys}\WindowsPowerShell\v1.0\powershell.exe');
  if not FileExists(Result) then
    Result := ExpandConstant('{syswow64}\WindowsPowerShell\v1.0\powershell.exe');
end;

{ ------------------------------------------------------------------------- }
{ Gadget runtime page (shown only when the runtime is missing)              }
{ ------------------------------------------------------------------------- }

procedure RefreshRuntimeStatus();
begin
  try
    RuntimeOK := RuntimeFound();
    if RuntimeOK then
    begin
      RuntimeStatus.Caption := ExpandConstant('{cm:WGRuntimeFound}');
      BtnInstallRuntime.Enabled := False;
      BtnOpenPage.Enabled := False;
    end
    else
    begin
      RuntimeStatus.Caption := ExpandConstant('{cm:WGRuntimeNotFound}');
      BtnInstallRuntime.Enabled := True;
      BtnOpenPage.Enabled := True;
    end;
    BtnRecheck.Enabled := True;
  except
    { Leave the page usable whatever happens. }
  end;
end;

procedure BtnOpenPageClick(Sender: TObject);
var
  ErrorCode: Integer;
begin
  { Opens the official page in the browser; the user decides there. }
  if not ShellExec('open', RUNTIME_PAGE_URL, '', '', SW_SHOWNORMAL, ewNoWait, ErrorCode) then
    MsgBox(RUNTIME_PAGE_URL, mbInformation, MB_OK);
end;

{ Downloads the runtime ZIP (verified against RUNTIME_ZIP_SHA256), extracts
  it with PowerShell and runs the runtime setup. Only runs on a button click. }
procedure BtnInstallRuntimeClick(Sender: TObject);
var
  ZipPath, ExtDir, ExePath, Ps: String;
  FindRec: TFindRec;
  ResultCode: Integer;
  Downloaded: Boolean;
begin
  BtnInstallRuntime.Enabled := False;
  BtnOpenPage.Enabled := False;
  BtnRecheck.Enabled := False;
  try
    { 1. download + checksum verification (Inno Setup deletes the file and
         raises an exception if the SHA-256 does not match). }
    Downloaded := False;
    DownloadPage.Clear;
    DownloadPage.Add(RUNTIME_ZIP_URL, RUNTIME_ZIP_NAME, RUNTIME_ZIP_SHA256);
    DownloadPage.Show;
    try
      try
        DownloadPage.Download;
        Downloaded := True;
      except
        Log('Runtime download failed: ' + GetExceptionMessage);
      end;
    finally
      DownloadPage.Hide;
    end;
    if not Downloaded then
    begin
      MsgBox(ExpandConstant('{cm:WGRuntimeDownloadFailed}'), mbError, MB_OK);
      Exit;
    end;

    { 2. extraction }
    ZipPath := ExpandConstant('{tmp}\') + RUNTIME_ZIP_NAME;
    ExtDir := ExpandConstant('{tmp}\gadget-runtime');
    Ps := PowerShellPath();
    if (not FileExists(Ps)) or
       (not Exec(Ps, '-NoProfile -ExecutionPolicy Bypass -Command "Expand-Archive -LiteralPath ''' +
                 ZipPath + ''' -DestinationPath ''' + ExtDir + ''' -Force"',
                 '', SW_HIDE, ewWaitUntilTerminated, ResultCode)) or (ResultCode <> 0) then
    begin
      MsgBox(ExpandConstant('{cm:WGRuntimeExtractFailed}'), mbError, MB_OK);
      Exit;
    end;

    { 3. run the runtime setup (it may ask for administrator rights) }
    ExePath := '';
    if FindFirst(ExtDir + '\*.exe', FindRec) then
    begin
      try
        ExePath := ExtDir + '\' + FindRec.Name;
      finally
        FindClose(FindRec);
      end;
    end;
    if (ExePath = '') or
       (not ShellExec('', ExePath, '', ExtDir, SW_SHOWNORMAL, ewWaitUntilTerminated, ResultCode)) then
    begin
      MsgBox(ExpandConstant('{cm:WGRuntimeLaunchFailed}'), mbError, MB_OK);
      Exit;
    end;
  finally
    RefreshRuntimeStatus();
  end;
end;

procedure BtnRecheckClick(Sender: TObject);
begin
  RefreshRuntimeStatus();
end;

procedure RuntimePageActivate(Sender: TWizardPage);
begin
  RefreshRuntimeStatus();
end;

procedure InitializeWizard();
begin
  RuntimeOK := RuntimeFound();

  DownloadPage := CreateDownloadPage(SetupMessage(msgWizardPreparing),
                                     SetupMessage(msgPreparingDesc), nil);

  RuntimePage := CreateCustomPage(wpInfoBefore,
                                  ExpandConstant('{cm:WGRuntimeTitle}'),
                                  ExpandConstant('{cm:WGRuntimeDesc}'));

  RuntimeInfo := TNewStaticText.Create(RuntimePage);
  RuntimeInfo.Parent := RuntimePage.Surface;
  RuntimeInfo.Left := 0;
  RuntimeInfo.Top := 0;
  RuntimeInfo.Width := RuntimePage.SurfaceWidth;
  { The height follows the text: some translations need twice the lines of
    English. AutoSize + WordWrap keeps the width and adjusts the height. }
  RuntimeInfo.WordWrap := True;
  RuntimeInfo.AutoSize := True;
  RuntimeInfo.Caption := ExpandConstant('{cm:WGRuntimeText}');

  BtnInstallRuntime := TNewButton.Create(RuntimePage);
  BtnInstallRuntime.Parent := RuntimePage.Surface;
  BtnInstallRuntime.Left := 0;
  BtnInstallRuntime.Top := RuntimeInfo.Top + RuntimeInfo.Height + ScaleY(8);
  BtnInstallRuntime.Width := RuntimePage.SurfaceWidth;
  BtnInstallRuntime.Height := ScaleY(25);
  BtnInstallRuntime.Caption := ExpandConstant('{cm:WGRuntimeDownloadBtn}');
  BtnInstallRuntime.OnClick := @BtnInstallRuntimeClick;

  BtnOpenPage := TNewButton.Create(RuntimePage);
  BtnOpenPage.Parent := RuntimePage.Surface;
  BtnOpenPage.Left := 0;
  BtnOpenPage.Top := BtnInstallRuntime.Top + BtnInstallRuntime.Height + ScaleY(6);
  BtnOpenPage.Width := (RuntimePage.SurfaceWidth - ScaleX(8)) div 2;
  BtnOpenPage.Height := ScaleY(25);
  BtnOpenPage.Caption := ExpandConstant('{cm:WGRuntimePageBtn}');
  BtnOpenPage.OnClick := @BtnOpenPageClick;

  BtnRecheck := TNewButton.Create(RuntimePage);
  BtnRecheck.Parent := RuntimePage.Surface;
  BtnRecheck.Left := BtnOpenPage.Width + ScaleX(8);
  BtnRecheck.Top := BtnOpenPage.Top;
  BtnRecheck.Width := BtnOpenPage.Width;
  BtnRecheck.Height := ScaleY(25);
  BtnRecheck.Caption := ExpandConstant('{cm:WGRuntimeRecheckBtn}');
  BtnRecheck.OnClick := @BtnRecheckClick;

  RuntimeStatus := TNewStaticText.Create(RuntimePage);
  RuntimeStatus.Parent := RuntimePage.Surface;
  RuntimeStatus.Left := 0;
  RuntimeStatus.Top := BtnRecheck.Top + BtnRecheck.Height + ScaleY(10);
  RuntimeStatus.Width := RuntimePage.SurfaceWidth;
  RuntimeStatus.AutoSize := False;
  RuntimeStatus.WordWrap := True;
  RuntimeStatus.Height := ScaleY(40);
  RuntimeStatus.Font.Style := [fsBold];
  RuntimeStatus.Caption := ExpandConstant('{cm:WGRuntimeNotFound}');

  RuntimePage.OnActivate := @RuntimePageActivate;
end;

{ The runtime page is skipped entirely when a runtime is already installed. }
function ShouldSkipPage(PageID: Integer): Boolean;
begin
  Result := False;
  if (RuntimePage <> nil) and (PageID = RuntimePage.ID) then
    Result := RuntimeOK;
end;

function NextButtonClick(CurPageID: Integer): Boolean;
begin
  Result := True;
  { Silent installations (/SILENT, /VERYSILENT) never stop here: the gadget
    files are installed and the runtime can be added later. }
  if (RuntimePage <> nil) and (CurPageID = RuntimePage.ID) and (not RuntimeOK)
     and (not WizardSilent()) then
  begin
    if SuppressibleMsgBox(ExpandConstant('{cm:WGRuntimeStillMissing}') + #13#10#13#10 +
              ExpandConstant('{cm:WGContinueAnyway}'),
              mbConfirmation, MB_YESNO, IDYES) = IDNO then
      Result := False;
  end;
end;

{ ------------------------------------------------------------------------- }
{ Uninstall                                                                 }
{ ------------------------------------------------------------------------- }

procedure CurUninstallStepChanged(CurUninstallStep: TUninstallStep);
var
  ResultCode: Integer;
  Ps, Script, Sidebar: String;
begin
  try
    if CurUninstallStep = usUninstall then
    begin
      { The sidebar keeps settings.ini in memory and rewrites it on exit, so it
        is closed before the gadget's settings are removed. It is restarted
        afterwards if it was running. }
      SidebarWasRunning := Exec(ExpandConstant('{sys}\taskkill.exe'), '/im sidebar.exe /f', '',
                                SW_HIDE, ewWaitUntilTerminated, ResultCode) and (ResultCode = 0);
      if SidebarWasRunning then
        Sleep(1500);

      { Remove the gadget's sections from settings.ini (a backup is kept),
        like Uninstall.cmd does. Only "Weather": the uninstaller removes only
        Weather.gadget, so an old Meteo.gadget keeps its settings. }
      Ps := PowerShellPath();
      Script := ExpandConstant('{app}\tools\CleanGadgetSettings.ps1');
      if FileExists(Ps) and FileExists(Script) then
        Exec(Ps, '-NoProfile -ExecutionPolicy Bypass -File "' + Script + '" -GadgetNames Weather',
             '', SW_HIDE, ewWaitUntilTerminated, ResultCode);
    end
    else if CurUninstallStep = usPostUninstall then
    begin
      if SidebarWasRunning then
      begin
        Sidebar := FindSidebarExe();
        if (Sidebar <> '') and (Pos('sidebar.exe', Lowercase(Sidebar)) > 0) then
          Exec(Sidebar, '', '', SW_SHOWNORMAL, ewNoWait, ResultCode);
      end;
    end;
  except
    { Never block the removal of the files. }
  end;
end;
