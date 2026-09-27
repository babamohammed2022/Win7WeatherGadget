////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Danish (Denmark).
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
L_localizedStrings_Text['DefaultCity'] = 'København, Danmark';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '55.6761,12.5683|København';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Henter data...';
L_localizedStrings_Text['LocationDontExist'] = 'Stedet blev ikke fundet';
L_localizedStrings_Text['Searching'] = 'Søger...';
L_localizedStrings_Text['NoSearchQuery'] = 'Der er ikke angivet noget søgeord.';
L_localizedStrings_Text['NoResults'] = 'Ingen resultater.';

L_localizedStrings_Text['Night-New'] = 'Nymåne';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Tiltagende månesegl';
L_localizedStrings_Text['Night-First-Quarter'] = 'Første kvarter';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Tiltagende måne';
L_localizedStrings_Text['Night-Full'] = 'Fuldmåne';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Aftagende måne';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Sidste kvarter';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Aftagende månesegl';

L_localizedStrings_Text['SensorIconRed'] = 'Den aktuelle placering kan ikke hentes';
L_localizedStrings_Text['SensorIconGreen'] = 'Din placering er registreret';
L_localizedStrings_Text['SensorIconGray'] = 'En placeringssensor er tilgængelig';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Der er ikke tilsluttet nogen placeringssensorer';
L_localizedStrings_Text['GettingLocation'] = 'Henter aktuel placering...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Vis temperatur i:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Søg';
L_localizedStrings_Text['CurrentCity'] = 'Aktuel placering:';
L_localizedStrings_Text['EnterACityName'] = 'Søg efter placering';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'nærmeste placering for';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'nærmeste placering:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '"%1" blev fundet.\nKlik på OK for at anvende.';

L_localizedStrings_Text['SelectLocation'] = 'Vælg aktuel placering';
L_localizedStrings_Text['Automatically'] = 'Find placering automatisk';
L_localizedStrings_Text['Refresh'] = 'Opdater';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Hvordan finder Windows automatisk min placering?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Der er ingen tilgængelig placeringssensor';
L_localizedStrings_Text['EC4'] = 'Ingen vejroplysninger for den aktuelle placering';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = 'min.';
L_localizedStrings_Text['hr'] = 't.';
L_localizedStrings_Text['hrs'] = 't.';
L_localizedStrings_Text['day'] = 'dag';
L_localizedStrings_Text['days'] = 'dage';
L_localizedStrings_Text['ageStampMessage'] = 'for %1 %2 siden';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Prognose, for %1 %2 siden';
L_localizedStrings_Text['DataExpired'] = 'Forældede data';
L_localizedStrings_Text['Forecasted'] = 'Prognose';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Opret forbindelse til internettet for at få aktuelle data';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Der kan ikke oprettes forbindelse til tjenesten';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Tjenesten er ikke tilgængelig i dit område.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'da';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'da';
L_localizedStrings_Text['Attribution'] = 'Data: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Aktuel placering';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Søndag';
L_localizedStrings_Text['Day-Monday'] = 'Mandag';
L_localizedStrings_Text['Day-Tuesday'] = 'Tirsdag';
L_localizedStrings_Text['Day-Wednesday'] = 'Onsdag';
L_localizedStrings_Text['Day-Thursday'] = 'Torsdag';
L_localizedStrings_Text['Day-Friday'] = 'Fredag';
L_localizedStrings_Text['Day-Saturday'] = 'Lørdag';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Tordenvejr';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Tordenvejr med hagl';
L_localizedStrings_Text['SkyText-Hail'] = 'Hagl';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Underafkølet regn';
L_localizedStrings_Text['SkyText-LightRain'] = 'Let regn';
L_localizedStrings_Text['SkyText-Rain'] = 'Regn';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Kraftig regn';
L_localizedStrings_Text['SkyText-Snow'] = 'Sne';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Kraftigt snefald';
L_localizedStrings_Text['SkyText-Fog'] = 'Tåge';
L_localizedStrings_Text['SkyText-Windy'] = 'Blæsende';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Overskyet';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Delvis skyet';
L_localizedStrings_Text['SkyText-Clear'] = 'Klart';
L_localizedStrings_Text['SkyText-Sunny'] = 'Solrigt';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Overvejende klart';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Overvejende solrigt';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Spredte byger';
L_localizedStrings_Text['SkyText-Showers'] = 'Byger';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Snebyger';
