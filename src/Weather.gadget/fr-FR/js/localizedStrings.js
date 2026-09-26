////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: French (France).
//
// The key names, the file layout and LOCNAME_ARRAY come from Microsoft's
// original localizedStrings.js (Copyright (c) 2009 Microsoft Corporation).
// The translated text was written for the Windows 7 Weather Gadget project.
// Keep every key in sync with the English master file (js/localizedStrings.js
// in the gadget root); the test suite fails if a key is missing.
//
////////////////////////////////////////////////////////////////////////////////

var L_localizedStrings_Text = [];

////////////////////////////////////////////////////////////////////////////////
//
// Localized City Names ( for defualt city based on OS Locale Setting )
//
////////////////////////////////////////////////////////////////////////////////
var LOCNAME_ARRAY = new Array('المملكة العربية السعودية‎ / الرياض‎  ','台北','Praha','København','Berlin','Αθήνα','New York, NY','Helsinki','Paris','ירושלים','Budapest','Reykjavík','Roma','東京','서울','Amsterdam','Oslo','Warszawa, Mazowieckie','São Paulo','Cuira','Bucureşti','Москва','Zagreb','Bratislava','Stockholm','กรุงเทพมหานคร','İstanbul','كراچى','Jakarta, Indonesia','Київ','Ljubljana','Tallinn','Rīga','Vilnius','Bakı','Budyšin','Tórshavn','नई दिल्ली','Guovdageaidnu','Caerdydd','ᐃᖃᓗᐃᑦ, ᓄᓇᕗᑦ','Amsterdam','Kalakhang Maynila','La Paz','Lëtzebuerg','Nuuk','Santiago','Wellington','Ciudad de Guatemala','العراق / بغداد','北京','Zürich','London','Ciudad de Mexico','Bruxelles','Lugano','Brussel','Oslo','Lisboa','Beograd','Баку','Chóśebuz','Jiellevárri (closest location: Luleå)','Baile Átha Cliath','Iqaluit, NU','Quito','جمهورية مصر العربية / القاهره','香港','Wien','Canberra','Madrid','Québec, QC','Београд','Anár','Lima','الجماهيرية العربية الليبية /  طرابلس','Singapore, Singapore','Luxemburg','Ottawa, ON','Ciudad de Guatemala','Genève','Bodø','الجزائر /  مدينة الجزائر','Vaduz','Wellington','San José','Luxembourg','Sarajevo','Luleå','المملكة المغربية / الرباط','Dublin','Ciudad de Panama','Monaco-Ville, Monaco','Snåase (closest location: Namsos)','الجمهورية التونسية / تونس','Johannesburg/Gauteng','Santo Domingo','Östersund','سلطنة عُمان /  مسقط','Caracas','Сарајево','Aanar','اليمن / صنعاء','Bogotá','Aanaar','الجمهورية العربية السورية / دمشق','Lima','الأردن / عمّان','Buenos Aires','لبنان / بيروت','Quito','الكويت','Kalakhang Maynila','Santiago','الإمارات العربية المتحدة / دبيّ‎','البحرين /  المنامه','Asunción','قطر /  الدوحة‎','New Delhi','La Paz','Kuala Lumpur','San Salvador','Singapore, Singapore','Tegucigalpa','Managua','San Juan','Los Ángeles, CA','Ciudad de México','Redmond, USA','دبيّ‎','دبيّ‎');

////////////////////////////////////////////////////////////////////////////////
//
// Default values for this locale
//
// DefaultUnit must be exactly 'Celsius' or 'Fahrenheit' (not translated).
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DefaultCity'] = 'Paris, France';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '48.8566,2.3522|Paris';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Récupération des données...';
L_localizedStrings_Text['LocationDontExist'] = 'Lieu introuvable';
L_localizedStrings_Text['Searching'] = 'Recherche en cours...';
L_localizedStrings_Text['NoSearchQuery'] = 'Aucun critère de recherche spécifié.';
L_localizedStrings_Text['NoResults'] = 'Aucun résultat.';

L_localizedStrings_Text['Night-New'] = 'Nouvelle lune';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Premier croissant';
L_localizedStrings_Text['Night-First-Quarter'] = 'Premier quartier';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Lune gibbeuse croissante';
L_localizedStrings_Text['Night-Full'] = 'Pleine lune';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Lune gibbeuse décroissante';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Dernier quartier';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Dernier croissant';

L_localizedStrings_Text['SensorIconRed'] = 'Impossible d\'obtenir la position actuelle';
L_localizedStrings_Text['SensorIconGreen'] = 'Votre position a été détectée';
L_localizedStrings_Text['SensorIconGray'] = 'Un capteur de position est disponible';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Aucun capteur de position connecté';
L_localizedStrings_Text['GettingLocation'] = 'Recherche de la position actuelle...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Afficher la température en\u00a0:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Rechercher';
L_localizedStrings_Text['CurrentCity'] = 'Lieu actuel\u00a0:';
L_localizedStrings_Text['EnterACityName'] = 'Rechercher un lieu';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'lieu le plus proche de';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'lieu le plus proche\u00a0:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '«\u00a0%1\u00a0» trouvé.\nCliquez sur OK pour appliquer.';

L_localizedStrings_Text['SelectLocation'] = 'Sélectionner le lieu actuel';
L_localizedStrings_Text['Automatically'] = 'Rechercher le lieu automatiquement';
L_localizedStrings_Text['Refresh'] = 'Actualiser';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Comment Windows détermine-t-il automatiquement ma position\u00a0?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Aucun capteur de position disponible';
L_localizedStrings_Text['EC4'] = 'Aucune information météo pour la position actuelle';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = 'min';
L_localizedStrings_Text['hr'] = 'h';
L_localizedStrings_Text['hrs'] = 'h';
L_localizedStrings_Text['day'] = 'jour';
L_localizedStrings_Text['days'] = 'jours';
L_localizedStrings_Text['ageStampMessage'] = 'il y a %1 %2';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Prévisions d\'il y a %1 %2';
L_localizedStrings_Text['DataExpired'] = 'Données expirées';
L_localizedStrings_Text['Forecasted'] = 'Prévisions';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Connectez-vous à Internet pour obtenir des données à jour';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Impossible de se connecter au service';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Service non disponible dans votre région.';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER SERVICE (Windows 10/11 port)
//
// Strings used by js/wlservices_shim.js. The MSN service used to return these
// texts already translated; the shim now reads them from this file.
// GeocodingLanguage:        language code sent to the Open-Meteo geocoding API.
// ReverseGeocodingLanguage: language code sent to the BigDataCloud reverse geocoding API.
// These two values are API parameters, not display text.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GeocodingLanguage'] = 'fr';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'fr';
L_localizedStrings_Text['Attribution'] = 'Données\u00a0: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Position actuelle';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Dimanche';
L_localizedStrings_Text['Day-Monday'] = 'Lundi';
L_localizedStrings_Text['Day-Tuesday'] = 'Mardi';
L_localizedStrings_Text['Day-Wednesday'] = 'Mercredi';
L_localizedStrings_Text['Day-Thursday'] = 'Jeudi';
L_localizedStrings_Text['Day-Friday'] = 'Vendredi';
L_localizedStrings_Text['Day-Saturday'] = 'Samedi';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Orages';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Orages avec grêle';
L_localizedStrings_Text['SkyText-Hail'] = 'Grêle';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Pluie verglaçante';
L_localizedStrings_Text['SkyText-LightRain'] = 'Pluie faible';
L_localizedStrings_Text['SkyText-Rain'] = 'Pluie';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Forte pluie';
L_localizedStrings_Text['SkyText-Snow'] = 'Neige';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Fortes chutes de neige';
L_localizedStrings_Text['SkyText-Fog'] = 'Brouillard';
L_localizedStrings_Text['SkyText-Windy'] = 'Venteux';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Nuageux';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Partiellement nuageux';
L_localizedStrings_Text['SkyText-Clear'] = 'Dégagé';
L_localizedStrings_Text['SkyText-Sunny'] = 'Ensoleillé';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Plutôt dégagé';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Plutôt ensoleillé';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Averses éparses';
L_localizedStrings_Text['SkyText-Showers'] = 'Averses';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Averses de neige';
