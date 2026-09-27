; ============================================================================
;  Windows 7 Weather Gadget installer - custom messages: French
;
;  Messages specific to this installer, used through {cm:...} in Setup.iss.
;  The standard wizard text comes from Languages\French.isl.
;  English (Custom\English.isl) is loaded first for every installer language,
;  so a missing message falls back to English.
;  Encoding: UTF-8 with BOM. %n is a line break.
; ============================================================================

[CustomMessages]
WGRuntimeTitle=Environnement d'exécution des gadgets
WGRuntimeDesc=Windows 10 et Windows 11 n'incluent plus le programme qui exécute les gadgets du Bureau.
WGRuntimeText=Le gadget Météo fonctionne dans un environnement d'exécution pour gadgets du Bureau (la « barre latérale »), qui n'a pas été trouvé sur cet ordinateur.%n%nVous pouvez l'installer maintenant : l'environnement (environ 5 Mo) est téléchargé depuis gadgetsrevived.com uniquement si vous cliquez sur le bouton ci-dessous, et sa somme de contrôle est vérifiée avant son exécution. Son installation peut demander des droits d'administrateur. Vous pouvez aussi continuer et l'installer plus tard.
WGRuntimeDownloadBtn=Télécharger et installer l'environnement des gadgets
WGRuntimePageBtn=Ouvrir la page de téléchargement
WGRuntimeRecheckBtn=Vérifier à nouveau
WGRuntimeFound=L'environnement d'exécution des gadgets est installé. Cliquez sur Suivant pour continuer.
WGRuntimeNotFound=L'environnement d'exécution des gadgets n'est pas installé.
WGRuntimeDownloadFailed=Le téléchargement a échoué ou le fichier ne correspond pas à la somme de contrôle attendue ; rien n'a été exécuté.%n%nUtilisez « Ouvrir la page de téléchargement » pour installer l'environnement manuellement.
WGRuntimeExtractFailed=Impossible d'extraire l'archive téléchargée.%n%nUtilisez « Ouvrir la page de téléchargement » pour installer l'environnement manuellement.
WGRuntimeLaunchFailed=Impossible de démarrer l'installation de l'environnement.
WGRuntimeStillMissing=L'environnement d'exécution des gadgets est toujours introuvable. Le gadget sera installé, mais il n'apparaîtra pas tant que l'environnement ne sera pas installé.
WGContinueAnyway=Continuer quand même ?
WGShowGadgets=Ouvrir la galerie de gadgets
WGNativeTitle=Plateforme de gadgets Windows
WGNativeDesc=Windows 7 inclut la plateforme des gadgets du Bureau, mais elle est désactivée sur cet ordinateur.
WGNativeText=Le gadget Météo fonctionne dans la plateforme des gadgets du Bureau (la "barre latérale"), qui fait partie de Windows 7 : il n'y a rien à télécharger, il suffit de la réactiver.%n%n- Si la fonctionnalité Plateforme de gadgets Windows est désactivée : ouvrez Panneau de configuration > Programmes > Activer ou désactiver des fonctionnalités Windows, cochez "Plateforme de gadgets Windows" et cliquez sur OK.%n- Si les gadgets ont été désactivés par une stratégie (par exemple avec Microsoft Fix it 50906) : supprimez la stratégie TurnOffSidebar (Microsoft Fix it 50907 le fait) ou adressez-vous à votre administrateur.%n%nCliquez ensuite sur "Vérifier à nouveau". Vous pouvez aussi continuer maintenant : le gadget est installé et apparaîtra dès que la plateforme sera activée.
WGNativeFound=La plateforme de gadgets Windows est activée. Cliquez sur Suivant pour continuer.
WGNativePolicyOff=Les gadgets sont désactivés par une stratégie (TurnOffSidebar).
WGNativeFeatureOff=La fonctionnalité Plateforme de gadgets Windows est désactivée.
WGNativeStillOff=La plateforme de gadgets Windows est toujours désactivée. Le gadget sera installé, mais il n'apparaîtra pas tant que la plateforme ne sera pas activée.
WGNativeNoteTitle=Windows 7
WGNativeNoteDesc=La plateforme des gadgets fait partie de Windows : aucun logiciel supplémentaire n'est nécessaire.
WGNativeNoteText=Windows 7 inclut aussi le gadget Météo d'origine de Microsoft, qui ne reçoit plus aucune donnée météo. Après l'installation, la galerie de gadgets peut donc afficher deux gadgets Météo avec la même icône.%n%nPour choisir le bon, sélectionnez un gadget Météo dans la galerie et cliquez sur "Afficher les détails" : la description de celui-ci se termine par "Données météo fournies par Open-Meteo."%n%nSi le gadget Météo d'origine est sur votre Bureau, fermez-le et ajoutez celui-ci depuis la galerie, puis choisissez de nouveau votre ville.
