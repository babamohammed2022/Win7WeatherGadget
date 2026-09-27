; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: ChineseTraditional
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\ChineseTraditional.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=小工具執行環境
WGRuntimeDesc=Windows 10 和 Windows 11 不再包含執行桌面小工具的程式。
WGRuntimeText=天氣小工具需要在桌面小工具執行環境（側邊欄）中執行，但在這部電腦上找不到該環境。%n%n您可以立即安裝：只有在您按一下下方的按鈕時，才會從 gadgetsrevived.com 下載執行環境（約 5 MB），並在執行前驗證其總和檢查碼。其安裝程式可能會要求系統管理員權限。您也可以繼續，稍後再安裝。
WGRuntimeDownloadBtn=下載並安裝小工具執行環境
WGRuntimePageBtn=開啟下載頁面
WGRuntimeRecheckBtn=重新檢查
WGRuntimeFound=已安裝小工具執行環境。按一下 [下一步] 繼續。
WGRuntimeNotFound=未安裝小工具執行環境。
WGRuntimeDownloadFailed=下載失敗，或檔案與預期的總和檢查碼不符，因此未執行任何程式。%n%n請使用 [開啟下載頁面] 手動安裝執行環境。
WGRuntimeExtractFailed=無法解壓縮下載的封存檔。%n%n請使用 [開啟下載頁面] 手動安裝執行環境。
WGRuntimeLaunchFailed=無法啟動執行環境的安裝程式。
WGRuntimeStillMissing=仍然找不到小工具執行環境。小工具將會安裝，但在安裝執行環境之前不會顯示。
WGContinueAnyway=仍要繼續嗎？
WGShowGadgets=開啟小工具庫
WGNativeTitle=Windows 小工具平台
WGNativeDesc=Windows 7 內建桌面小工具平台，但在這部電腦上已關閉。
WGNativeText=天氣小工具在桌面小工具平台（「側邊欄」）中執行，該平台是 Windows 7 的一部分：不需要下載任何內容，只要重新開啟平台即可。%n%n- 如果「Windows 小工具平台」功能已關閉：開啟「控制台 > 程式集 > 開啟或關閉 Windows 功能」，勾選「Windows 小工具平台」，然後按一下「確定」。%n- 如果小工具已被原則關閉（例如透過 Microsoft Fix it 50906）：移除 TurnOffSidebar 原則（Microsoft Fix it 50907 可完成此操作），或洽詢系統管理員。%n%n然後按一下「重新檢查」。您也可以現在繼續：小工具會先安裝，並在平台開啟後立即顯示。
WGNativeFound=Windows 小工具平台已開啟。按一下「下一步」繼續。
WGNativePolicyOff=小工具已被原則（TurnOffSidebar）關閉。
WGNativeFeatureOff=「Windows 小工具平台」功能已關閉。
WGNativeStillOff=Windows 小工具平台仍處於關閉狀態。小工具將會安裝，但在平台開啟之前不會顯示。
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=小工具平台是 Windows 的一部分：不需要其他軟體。
WGNativeNoteText=Windows 7 也內建 Microsoft 原本的天氣小工具，但它已無法再取得天氣資料。因此，安裝後小工具庫中可能會顯示兩個圖示相同的天氣小工具。%n%n若要選擇正確的那一個，請在小工具庫中選取天氣小工具，然後按一下「顯示詳細資料」：本小工具的描述以「天氣資料由 Open-Meteo 提供。」結尾。%n%n如果原本的天氣小工具在桌面上，請將它關閉，從小工具庫新增本小工具，然後重新選擇您的城市。
