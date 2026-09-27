; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: BrazilianPortuguese
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\BrazilianPortuguese.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Ambiente de execução de gadgets
WGRuntimeDesc=O Windows 10 e o Windows 11 não incluem mais o programa que executa os gadgets da área de trabalho.
WGRuntimeText=O gadget Clima é executado em um ambiente para gadgets da área de trabalho (a "barra lateral"), que não foi encontrado neste computador.%n%nVocê pode instalá-lo agora: o ambiente (cerca de 5 MB) é baixado de gadgetsrevived.com somente se você clicar no botão abaixo, e sua soma de verificação é conferida antes da execução. A instalação pode solicitar direitos de administrador. Você também pode continuar e instalá-lo mais tarde.
WGRuntimeDownloadBtn=Baixar e instalar o ambiente de gadgets
WGRuntimePageBtn=Abrir a página de download
WGRuntimeRecheckBtn=Verificar novamente
WGRuntimeFound=O ambiente de execução de gadgets está instalado. Clique em Avançar para continuar.
WGRuntimeNotFound=O ambiente de execução de gadgets não está instalado.
WGRuntimeDownloadFailed=O download falhou ou o arquivo não corresponde à soma de verificação esperada; nada foi executado.%n%nUse "Abrir a página de download" para instalar o ambiente manualmente.
WGRuntimeExtractFailed=Não foi possível extrair o arquivo baixado.%n%nUse "Abrir a página de download" para instalar o ambiente manualmente.
WGRuntimeLaunchFailed=Não foi possível iniciar a instalação do ambiente.
WGRuntimeStillMissing=O ambiente de execução de gadgets ainda não foi encontrado. O gadget será instalado, mas só aparecerá depois que o ambiente for instalado.
WGContinueAnyway=Deseja continuar mesmo assim?
WGShowGadgets=Abrir a galeria de gadgets
WGNativeTitle=Plataforma de gadgets do Windows
WGNativeDesc=O Windows 7 inclui a plataforma de gadgets da área de trabalho, mas ela está desativada neste computador.
WGNativeText=O gadget Clima funciona na plataforma de gadgets da área de trabalho (a "barra lateral"), que faz parte do Windows 7: não é preciso baixar nada, basta reativá-la.%n%n- Se o recurso Plataforma de Gadgets do Windows estiver desativado: abra Painel de Controle > Programas > Ativar ou desativar recursos do Windows, marque "Plataforma de Gadgets do Windows" e clique em OK.%n- Se os gadgets foram desativados por uma política (por exemplo, com o Microsoft Fix it 50906): remova a política TurnOffSidebar (o Microsoft Fix it 50907 faz isso) ou fale com o administrador.%n%nDepois clique em "Verificar novamente". Você também pode continuar agora: o gadget é instalado e aparecerá assim que a plataforma for ativada.
WGNativeFound=A plataforma de gadgets do Windows está ativada. Clique em Avançar para continuar.
WGNativePolicyOff=Os gadgets estão desativados por uma política (TurnOffSidebar).
WGNativeFeatureOff=O recurso Plataforma de Gadgets do Windows está desativado.
WGNativeStillOff=A plataforma de gadgets do Windows ainda está desativada. O gadget será instalado, mas só aparecerá quando a plataforma for ativada.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=A plataforma de gadgets faz parte do Windows: nenhum software adicional é necessário.
WGNativeNoteText=O Windows 7 também inclui o gadget Clima original da Microsoft, que não recebe mais dados meteorológicos. Após a instalação, a galeria de gadgets pode mostrar dois gadgets Clima com o mesmo ícone.%n%nPara escolher o certo, selecione um gadget Clima na galeria e clique em "Mostrar detalhes": a descrição deste termina com "Dados meteorológicos da Open-Meteo."%n%nSe o gadget Clima original estiver na área de trabalho, feche-o e adicione este pela galeria; depois escolha sua cidade novamente.
