/*
 * Installa-Meteo-Windows7 -- launcher/installer for Windows
 *
 * Self-extracting executable: the payload (a ZIP archive) is appended to the
 * end of this file, after a recognition trailer (magic + length).
 *
 * What it does:
 *   1. shows a welcome window;
 *   2. extracts the payload to
 *        %LOCALAPPDATA%\Programs\Gadget Meteo Windows 7
 *   3. runs Installa.ps1 (the graphical installer) and waits for it;
 *   4. reports the outcome.
 *
 * It needs no administrator rights and modifies no system files.
 *
 * NOTE: this is the original, hand-written launcher. It still works and is
 * kept as a ready-to-use option, but the canonical installer for this project
 * is the Inno Setup script in ../Setup.iss, which is reproducible from source
 * and builds on GitHub Actions.
 */

#define UNICODE
#define _UNICODE
#define WIN32_LEAN_AND_MEAN
#include <windows.h>
#include <shlobj.h>
#include <stdint.h>
#include <wchar.h>

#include "icon_data.h"

#define IDC_INSTALL 1001
#define IDC_STATUS  1003

#define MAGIC      "MWXINSTALL1"
#define MAGIC_LEN  11
#define TRAILER    32          /* magic(11) + padding + uint64 length */

#define WIN_W 560
#define WIN_H 420

static HINSTANCE g_hInst;
static HWND  g_hwnd, g_btn, g_status;
static HFONT g_font, g_fontBold;
static wchar_t g_exe[MAX_PATH];
static wchar_t g_target[MAX_PATH];
static wchar_t g_zip[MAX_PATH];
static float  g_scale = 1.0f;
static int    g_done = 0;

/* ------------------------------------------------------------------ helpers */

static void SetStatus(const wchar_t *txt)
{
    SetWindowTextW(g_status, txt);
    UpdateWindow(g_status);
}

/* Runs a command line with no visible window and waits for it to finish. */
static int RunHidden(wchar_t *cmdline, DWORD *exitCode)
{
    STARTUPINFOW si;
    PROCESS_INFORMATION pi;
    ZeroMemory(&si, sizeof(si));
    si.cb = sizeof(si);
    si.dwFlags = STARTF_USESHOWWINDOW;
    si.wShowWindow = SW_HIDE;
    ZeroMemory(&pi, sizeof(pi));

    if (!CreateProcessW(NULL, cmdline, NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi))
        return 0;

    WaitForSingleObject(pi.hProcess, INFINITE);
    if (exitCode) GetExitCodeProcess(pi.hProcess, exitCode);
    CloseHandle(pi.hProcess);
    CloseHandle(pi.hThread);
    return 1;
}

/* Extracts the ZIP appended to the end of this executable. */
static int ExtractPayload(void)
{
    HANDLE h, hOut;
    LARGE_INTEGER size, pos;
    DWORD got, wrote, toRead;
    BYTE trailer[TRAILER];
    uint64_t payloadLen = 0;
    BYTE buf[65536];
    ULONGLONG remaining;
    wchar_t tmp[MAX_PATH];

    h = CreateFileW(g_exe, GENERIC_READ, FILE_SHARE_READ, NULL, OPEN_EXISTING,
                    FILE_ATTRIBUTE_NORMAL, NULL);
    if (h == INVALID_HANDLE_VALUE) return 0;
    if (!GetFileSizeEx(h, &size)) { CloseHandle(h); return 0; }
    if (size.QuadPart < (LONGLONG)(TRAILER + 1024)) { CloseHandle(h); return 0; }

    pos.QuadPart = size.QuadPart - TRAILER;
    if (!SetFilePointerEx(h, pos, NULL, FILE_BEGIN)) { CloseHandle(h); return 0; }
    if (!ReadFile(h, trailer, TRAILER, &got, NULL) || got != TRAILER) { CloseHandle(h); return 0; }
    if (memcmp(trailer, MAGIC, MAGIC_LEN) != 0) { CloseHandle(h); return 0; }

    for (int i = 0; i < 8; i++)
        payloadLen |= ((uint64_t)trailer[MAGIC_LEN + i]) << (8 * i);
    if (payloadLen == 0 || payloadLen > (uint64_t)size.QuadPart) { CloseHandle(h); return 0; }

    pos.QuadPart = size.QuadPart - TRAILER - (LONGLONG)payloadLen;
    if (!SetFilePointerEx(h, pos, NULL, FILE_BEGIN)) { CloseHandle(h); return 0; }

    GetTempPathW(MAX_PATH, tmp);
    wsprintfW(g_zip, L"%smeteo-payload.zip", tmp);

    hOut = CreateFileW(g_zip, GENERIC_WRITE, 0, NULL, CREATE_ALWAYS,
                       FILE_ATTRIBUTE_NORMAL, NULL);
    if (hOut == INVALID_HANDLE_VALUE) { CloseHandle(h); return 0; }

    remaining = payloadLen;
    while (remaining > 0) {
        toRead = (remaining > sizeof(buf)) ? sizeof(buf) : (DWORD)remaining;
        if (!ReadFile(h, buf, toRead, &got, NULL) || got == 0) {
            CloseHandle(h); CloseHandle(hOut); return 0;
        }
        if (!WriteFile(hOut, buf, got, &wrote, NULL) || wrote != got) {
            CloseHandle(h); CloseHandle(hOut); return 0;
        }
        remaining -= got;
    }
    CloseHandle(h);
    CloseHandle(hOut);
    return 1;
}

static void ShowError(const wchar_t *what)
{
    wchar_t buf[2048];
    wsprintfW(buf,
        L"%s\n\n"
        L"Manual method: open the folder of the archive you downloaded and\n"
        L"double-click  Install.cmd",
        what);
    MessageBoxW(g_hwnd, buf, L"Installation error", MB_OK | MB_ICONERROR);
}

/* Worker thread: extracts the payload and launches the PowerShell installer. */
static DWORD WINAPI InstallThread(LPVOID param)
{
    wchar_t cmd[4096];
    DWORD ec = 0;

    SetStatus(L"Preparing...");
    CreateDirectoryW(g_target, NULL);

    SetStatus(L"Extracting files...");
    if (!ExtractPayload()) {
        ShowError(L"Cannot read the installer's internal package.");
        g_done = 1;
        return 1;
    }

    wsprintfW(cmd,
        L"powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "
        L"\"Expand-Archive -LiteralPath '%s' -DestinationPath '%s' -Force\"",
        g_zip, g_target);
    if (!RunHidden(cmd, &ec) || ec != 0) {
        ShowError(L"File extraction failed.");
        g_done = 1;
        return 1;
    }
    DeleteFileW(g_zip);

    SetStatus(L"Guided installation in progress...");

    wsprintfW(cmd,
        L"powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File \"%s\\Installa.ps1\"",
        g_target);
    if (!RunHidden(cmd, &ec)) {
        wchar_t m[2048];
        wsprintfW(m,
            L"Cannot start the installer.\n\n"
            L"Open the folder\n  %s\nand double-click Install.cmd", g_target);
        MessageBoxW(g_hwnd, m, L"Error", MB_OK | MB_ICONERROR);
        g_done = 1;
        return 1;
    }

    g_done = 1;
    SetStatus(ec == 0 ? L"Installation complete." : L"Installation not completed.");

    if (ec == 0) {
        wchar_t m[2048];
        wsprintfW(m,
            L"Done!\n\n"
            L"The Weather gadget is installed.\n\n"
            L"If the gadget panel did not open by itself:\n"
            L"  right-click the desktop  ->  Gadgets  ->  double-click \"Meteo\"\n\n"
            L"To uninstall later, open the folder\n  %s\nand double-click Uninstall.cmd",
            g_target);
        MessageBoxW(g_hwnd, m, L"Installation complete", MB_OK | MB_ICONINFORMATION);
        SetWindowTextW(g_btn, L"Close");
        EnableWindow(g_btn, TRUE);
    } else {
        wchar_t m[2048];
        wsprintfW(m,
            L"The installation did not complete successfully.\n\n"
            L"Open the folder\n  %s\nand double-click Install.cmd to finish it manually.",
            g_target);
        MessageBoxW(g_hwnd, m, L"Warning", MB_OK | MB_ICONWARNING);
        SetWindowTextW(g_btn, L"Close");
        EnableWindow(g_btn, TRUE);
    }
    return 0;
}

/* ----------------------------------------------------------------- interface */

static void ApplyFont(HWND parent, HFONT font)
{
    HWND c = GetWindow(parent, GW_CHILD);
    while (c) {
        SendMessageW(c, WM_SETFONT, (WPARAM)font, TRUE);
        c = GetWindow(c, GW_HWNDNEXT);
    }
}

/* Writes the embedded .ico to the temp folder and uses it as the window icon. */
static void LoadAppIcon(HWND hwnd)
{
    wchar_t path[MAX_PATH], tmp[MAX_PATH];
    HANDLE h;
    DWORD wrote;
    HICON big, small;

    GetTempPathW(MAX_PATH, tmp);
    wsprintfW(path, L"%smeteo-install-icon.ico", tmp);
    h = CreateFileW(path, GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL);
    if (h == INVALID_HANDLE_VALUE) return;
    WriteFile(h, ICON_DATA, ICON_DATA_LEN, &wrote, NULL);
    CloseHandle(h);

    big = (HICON)LoadImageW(NULL, path, IMAGE_ICON,
        GetSystemMetrics(SM_CXICON), GetSystemMetrics(SM_CYICON),
        LR_LOADFROMFILE);
    small = (HICON)LoadImageW(NULL, path, IMAGE_ICON,
        GetSystemMetrics(SM_CXSMICON), GetSystemMetrics(SM_CYSMICON),
        LR_LOADFROMFILE);
    if (big)   SendMessageW(hwnd, WM_SETICON, ICON_BIG, (LPARAM)big);
    if (small) SendMessageW(hwnd, WM_SETICON, ICON_SMALL, (LPARAM)small);
}

static LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wp, LPARAM lp)
{
    switch (msg) {
    case WM_CREATE: {
        int x = (int)(24 * g_scale);
        int y = (int)(18 * g_scale);
        int w = WIN_W - (int)(48 * g_scale);
        HWND heading, status;

        LoadAppIcon(hwnd);

        heading = CreateWindowExW(0, L"STATIC", L"Windows 7 Weather Gadget",
            WS_CHILD | WS_VISIBLE, x, y, w, (int)(26 * g_scale),
            hwnd, NULL, g_hInst, NULL);

        y += (int)(34 * g_scale);
        CreateWindowExW(0, L"STATIC",
            L"This program installs the original Windows 7 Weather gadget\r\n"
            L"on Windows 10 or Windows 11, keeping the original graphics,\r\n"
            L"icons, animations and behaviour.\r\n"
            L"\r\n"
            L"It will install:\r\n"
            L"   -  the Weather gadget (original Microsoft files);\r\n"
            L"   -  a component that fetches the weather data online;\r\n"
            L"   -  an uninstaller.\r\n"
            L"\r\n"
            L"No Windows system file is modified.\r\n"
            L"If the Gadgets runtime is not installed yet, the installer\r\n"
            L"will guide you through installing it (that step needs\r\n"
            L"administrator rights).",
            WS_CHILD | WS_VISIBLE, x, y, w, (int)(190 * g_scale),
            hwnd, NULL, g_hInst, NULL);

        y += (int)(196 * g_scale);
        status = CreateWindowExW(0, L"STATIC", L"",
            WS_CHILD | WS_VISIBLE, x, y, w, (int)(20 * g_scale),
            hwnd, (HMENU)IDC_STATUS, g_hInst, NULL);
        g_status = status;

        y += (int)(32 * g_scale);
        CreateWindowExW(0, L"STATIC", L"Installation folder:",
            WS_CHILD | WS_VISIBLE, x, y, w, (int)(18 * g_scale),
            hwnd, NULL, g_hInst, NULL);
        y += (int)(18 * g_scale);
        CreateWindowExW(0, L"STATIC", g_target,
            WS_CHILD | WS_VISIBLE, x, y, w, (int)(18 * g_scale),
            hwnd, NULL, g_hInst, NULL);

        g_btn = CreateWindowExW(0, L"BUTTON", L"Install",
            WS_CHILD | WS_VISIBLE | BS_DEFPUSHBUTTON,
            WIN_W - (int)(190 * g_scale), WIN_H - (int)(58 * g_scale),
            (int)(75 * g_scale), (int)(25 * g_scale),
            hwnd, (HMENU)IDC_INSTALL, g_hInst, NULL);
        CreateWindowExW(0, L"BUTTON", L"Cancel",
            WS_CHILD | WS_VISIBLE,
            WIN_W - (int)(108 * g_scale), WIN_H - (int)(58 * g_scale),
            (int)(75 * g_scale), (int)(25 * g_scale),
            hwnd, (HMENU)IDCANCEL, g_hInst, NULL);

        ApplyFont(hwnd, g_font);
        SendMessageW(heading, WM_SETFONT, (WPARAM)g_fontBold, TRUE);
        SendMessageW(g_btn, WM_SETFONT, (WPARAM)g_font, TRUE);
        SetFocus(g_btn);
        return 0;
    }

    case WM_COMMAND:
        if (LOWORD(wp) == IDC_INSTALL) {
            if (g_done) { DestroyWindow(hwnd); return 0; }
            EnableWindow(g_btn, FALSE);
            CreateThread(NULL, 0, InstallThread, NULL, 0, NULL);
            return 0;
        }
        if (LOWORD(wp) == IDCANCEL) { DestroyWindow(hwnd); return 0; }
        break;

    case WM_DESTROY:
        PostQuitMessage(0);
        return 0;
    }
    return DefWindowProcW(hwnd, msg, wp, lp);
}

int WINAPI WinMain(HINSTANCE hInst, HINSTANCE prev, LPSTR cmdlineA, int show)
{
    WNDCLASSEXW wc;
    MSG msg;
    int cx, cy, w, h;
    HDC hdc;
    float dpi;
    wchar_t local[MAX_PATH];
    PWSTR folder = NULL;

    (void)prev; (void)cmdlineA;
    g_hInst = hInst;
    SetProcessDPIAware();

    GetModuleFileNameW(NULL, g_exe, MAX_PATH);

    if (SUCCEEDED(SHGetKnownFolderPath(&FOLDERID_LocalAppData, 0, NULL, &folder)) && folder) {
        lstrcpyW(local, folder);
        CoTaskMemFree(folder);
    } else {
        GetEnvironmentVariableW(L"LOCALAPPDATA", local, MAX_PATH);
    }
    wsprintfW(g_target, L"%s\\Programs\\Gadget Meteo Windows 7", local);

    hdc = GetDC(NULL);
    dpi = (float)GetDeviceCaps(hdc, LOGPIXELSX);
    ReleaseDC(NULL, hdc);
    if (dpi < 96.0f) dpi = 96.0f;
    g_scale = dpi / 96.0f;

    g_font = CreateFontW(-(int)(13 * g_scale), 0, 0, 0, FW_NORMAL, 0, 0, 0,
        DEFAULT_CHARSET, OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS,
        CLEARTYPE_QUALITY, DEFAULT_PITCH, L"Segoe UI");
    g_fontBold = CreateFontW(-(int)(16 * g_scale), 0, 0, 0, FW_SEMIBOLD, 0, 0, 0,
        DEFAULT_CHARSET, OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS,
        CLEARTYPE_QUALITY, DEFAULT_PITCH, L"Segoe UI");
    if (!g_font) g_font = (HFONT)GetStockObject(DEFAULT_GUI_FONT);
    if (!g_fontBold) g_fontBold = g_font;

    ZeroMemory(&wc, sizeof(wc));
    wc.cbSize = sizeof(wc);
    wc.lpfnWndProc = WndProc;
    wc.hInstance = hInst;
    wc.hbrBackground = (HBRUSH)(COLOR_BTNFACE + 1);
    wc.lpszClassName = L"MeteoInstallWnd";
    wc.hCursor = LoadCursorW(NULL, IDC_ARROW);
    wc.hIcon = LoadIconW(NULL, IDI_APPLICATION);
    RegisterClassExW(&wc);

    w = (int)(WIN_W * g_scale);
    h = (int)(WIN_H * g_scale);
    cx = GetSystemMetrics(SM_CXSCREEN) / 2 - w / 2;
    cy = GetSystemMetrics(SM_CYSCREEN) / 3 - h / 4;

    g_hwnd = CreateWindowExW(WS_EX_DLGMODALFRAME, L"MeteoInstallWnd",
        L"Weather Gadget installation - Windows 7",
        WS_OVERLAPPED | WS_CAPTION | WS_SYSMENU | WS_MINIMIZEBOX,
        cx, cy, w, h, NULL, NULL, hInst, NULL);

    ShowWindow(g_hwnd, show);
    UpdateWindow(g_hwnd);

    while (GetMessageW(&msg, NULL, 0, 0)) {
        if (!IsDialogMessageW(g_hwnd, &msg)) {
            TranslateMessage(&msg);
            DispatchMessageW(&msg);
        }
    }
    return (int)msg.wParam;
}
