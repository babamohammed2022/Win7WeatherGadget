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
