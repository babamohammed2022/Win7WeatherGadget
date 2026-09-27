; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: Japanese
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\Japanese.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=ガジェット ランタイム
WGRuntimeDesc=Windows 10 と Windows 11 には、デスクトップ ガジェットを実行するプログラムが含まれていません。
WGRuntimeText=天気ガジェットは、デスクトップ ガジェット ランタイム (サイドバー) 上で動作しますが、このコンピューターには見つかりませんでした。%n%n今すぐインストールできます。ランタイム (約 5 MB) は下のボタンをクリックした場合にのみ gadgetsrevived.com からダウンロードされ、実行前にチェックサムが検証されます。セットアップで管理者権限を求められる場合があります。後でインストールすることもできます。
WGRuntimeDownloadBtn=ガジェット ランタイムをダウンロードしてインストール
WGRuntimePageBtn=ダウンロード ページを開く
WGRuntimeRecheckBtn=再確認
WGRuntimeFound=ガジェット ランタイムはインストールされています。[次へ] をクリックして続行してください。
WGRuntimeNotFound=ガジェット ランタイムはインストールされていません。
WGRuntimeDownloadFailed=ダウンロードに失敗したか、ファイルが想定されたチェックサムと一致しないため、何も実行されませんでした。%n%n[ダウンロード ページを開く] を使用して、ランタイムを手動でインストールしてください。
WGRuntimeExtractFailed=ダウンロードしたアーカイブを展開できませんでした。%n%n[ダウンロード ページを開く] を使用して、ランタイムを手動でインストールしてください。
WGRuntimeLaunchFailed=ランタイムのセットアップを開始できませんでした。
WGRuntimeStillMissing=ガジェット ランタイムがまだ見つかりません。ガジェットはインストールされますが、ランタイムをインストールするまで表示されません。
WGContinueAnyway=このまま続行しますか?
WGShowGadgets=ガジェット ギャラリーを開く
WGNativeTitle=Windows ガジェット プラットフォーム
WGNativeDesc=Windows 7 にはデスクトップ ガジェットのプラットフォームが含まれていますが、このコンピューターでは無効になっています。
WGNativeText=天気ガジェットは、Windows 7 の一部であるデスクトップ ガジェットのプラットフォーム (「サイドバー」) で動作します。ダウンロードは不要で、プラットフォームを再び有効にするだけです。%n%n- Windows ガジェット プラットフォームの機能が無効な場合: コントロール パネル > プログラム > Windows の機能の有効化または無効化 を開き、「Windows ガジェット プラットフォーム」を選択して [OK] をクリックします。%n- ガジェットがポリシーで無効にされている場合 (例: Microsoft Fix it 50906): TurnOffSidebar ポリシーを削除する (Microsoft Fix it 50907 で実行できます) か、管理者に問い合わせてください。%n%nその後 [再確認] をクリックします。このまま続行することもできます。ガジェットはインストールされ、プラットフォームが有効になるとすぐに表示されます。
WGNativeFound=Windows ガジェット プラットフォームは有効です。[次へ] をクリックして続行してください。
WGNativePolicyOff=ガジェットはポリシー (TurnOffSidebar) によって無効にされています。
WGNativeFeatureOff=Windows ガジェット プラットフォームの機能が無効になっています。
WGNativeStillOff=Windows ガジェット プラットフォームはまだ無効です。ガジェットはインストールされますが、プラットフォームが有効になるまで表示されません。
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=ガジェット プラットフォームは Windows の一部です。追加のソフトウェアは必要ありません。
WGNativeNoteText=Windows 7 には Microsoft の元の天気ガジェットも含まれていますが、こちらはもう気象データを受信できません。そのため、インストール後にガジェット ギャラリーに同じアイコンの天気ガジェットが 2 つ表示されることがあります。%n%n正しい方を選ぶには、ギャラリーで天気ガジェットを選択して [詳細の表示] をクリックします。このガジェットの説明の末尾は「気象データ提供: Open-Meteo。」です。%n%n元の天気ガジェットがデスクトップにある場合は閉じて、ギャラリーからこのガジェットを追加し、もう一度地域を選択してください。
