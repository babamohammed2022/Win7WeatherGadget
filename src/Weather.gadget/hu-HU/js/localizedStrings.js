////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Hungarian (Hungary).
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
L_localizedStrings_Text['DefaultCity'] = 'Budapest, Magyarország';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '47.4979,19.0402|Budapest';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Adatok lekérése...';
L_localizedStrings_Text['LocationDontExist'] = 'A hely nem található';
L_localizedStrings_Text['Searching'] = 'Keresés...';
L_localizedStrings_Text['NoSearchQuery'] = 'Nincs megadva keresőkifejezés.';
L_localizedStrings_Text['NoResults'] = 'Nincs találat.';

L_localizedStrings_Text['Night-New'] = 'Újhold';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Növő holdsarló';
L_localizedStrings_Text['Night-First-Quarter'] = 'Első negyed';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Növő hold';
L_localizedStrings_Text['Night-Full'] = 'Telihold';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Fogyó hold';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Utolsó negyed';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Fogyó holdsarló';

L_localizedStrings_Text['SensorIconRed'] = 'Az aktuális hely nem kérhető le';
L_localizedStrings_Text['SensorIconGreen'] = 'A tartózkodási helye észlelve';
L_localizedStrings_Text['SensorIconGray'] = 'Helyérzékelő érhető el';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Nincs csatlakoztatott helyérzékelő';
L_localizedStrings_Text['GettingLocation'] = 'Az aktuális hely lekérése...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Hőmérséklet megjelenítése:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Keresés';
L_localizedStrings_Text['CurrentCity'] = 'Aktuális hely:';
L_localizedStrings_Text['EnterACityName'] = 'Hely keresése';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'legközelebbi hely ehhez:';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'legközelebbi hely:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '„%1” megtalálva.\nAz alkalmazáshoz kattintson az OK gombra.';

L_localizedStrings_Text['SelectLocation'] = 'Aktuális hely kiválasztása';
L_localizedStrings_Text['Automatically'] = 'Hely automatikus meghatározása';
L_localizedStrings_Text['Refresh'] = 'Frissítés';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Hogyan határozza meg a Windows automatikusan a helyemet?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Nem érhető el helyérzékelő';
L_localizedStrings_Text['EC4'] = 'Nincs időjárási információ az aktuális helyhez';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = 'perce';
L_localizedStrings_Text['hr'] = 'órája';
L_localizedStrings_Text['hrs'] = 'órája';
L_localizedStrings_Text['day'] = 'napja';
L_localizedStrings_Text['days'] = 'napja';
L_localizedStrings_Text['ageStampMessage'] = '%1 %2';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Előrejelzés, %1 %2';
L_localizedStrings_Text['DataExpired'] = 'Elavult adatok';
L_localizedStrings_Text['Forecasted'] = 'Előrejelzés';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Friss adatokért csatlakozzon az internethez';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Nem lehet csatlakozni a szolgáltatáshoz';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'A szolgáltatás nem érhető el az Ön régiójában.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'hu';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'hu';
L_localizedStrings_Text['Attribution'] = 'Adatok: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Aktuális hely';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Vasárnap';
L_localizedStrings_Text['Day-Monday'] = 'Hétfő';
L_localizedStrings_Text['Day-Tuesday'] = 'Kedd';
L_localizedStrings_Text['Day-Wednesday'] = 'Szerda';
L_localizedStrings_Text['Day-Thursday'] = 'Csütörtök';
L_localizedStrings_Text['Day-Friday'] = 'Péntek';
L_localizedStrings_Text['Day-Saturday'] = 'Szombat';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Zivatar';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Zivatar jégesővel';
L_localizedStrings_Text['SkyText-Hail'] = 'Jégeső';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Ónos eső';
L_localizedStrings_Text['SkyText-LightRain'] = 'Gyenge eső';
L_localizedStrings_Text['SkyText-Rain'] = 'Eső';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Erős eső';
L_localizedStrings_Text['SkyText-Snow'] = 'Havazás';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Erős havazás';
L_localizedStrings_Text['SkyText-Fog'] = 'Köd';
L_localizedStrings_Text['SkyText-Windy'] = 'Szeles';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Felhős';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Közepesen felhős';
L_localizedStrings_Text['SkyText-Clear'] = 'Derült';
L_localizedStrings_Text['SkyText-Sunny'] = 'Napos';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Többnyire derült';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Többnyire napos';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Szórványos záporok';
L_localizedStrings_Text['SkyText-Showers'] = 'Záporok';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Hózáporok';
