////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Swedish (Sweden).
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
L_localizedStrings_Text['DefaultCity'] = 'Stockholm, Sverige';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '59.3293,18.0686|Stockholm';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Hämtar data...';
L_localizedStrings_Text['LocationDontExist'] = 'Platsen hittades inte';
L_localizedStrings_Text['Searching'] = 'Söker...';
L_localizedStrings_Text['NoSearchQuery'] = 'Ingen sökfråga angavs.';
L_localizedStrings_Text['NoResults'] = 'Inga resultat hittades.';

L_localizedStrings_Text['Night-New'] = 'Nymåne';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Tilltagande månskära';
L_localizedStrings_Text['Night-First-Quarter'] = 'Första kvarteret';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Tilltagande måne';
L_localizedStrings_Text['Night-Full'] = 'Fullmåne';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Avtagande måne';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Sista kvarteret';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Avtagande månskära';

L_localizedStrings_Text['SensorIconRed'] = 'Det går inte att hämta aktuell plats';
L_localizedStrings_Text['SensorIconGreen'] = 'Din plats har identifierats';
L_localizedStrings_Text['SensorIconGray'] = 'En platssensor är tillgänglig';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Inga platssensorer är anslutna';
L_localizedStrings_Text['GettingLocation'] = 'Hämtar aktuell plats...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Visa temperatur i:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Sök';
L_localizedStrings_Text['CurrentCity'] = 'Aktuell plats:';
L_localizedStrings_Text['EnterACityName'] = 'Sök efter plats';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'närmaste plats för';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'närmaste plats:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '"%1" hittades.\nKlicka på OK för att verkställa.';

L_localizedStrings_Text['SelectLocation'] = 'Välj aktuell plats';
L_localizedStrings_Text['Automatically'] = 'Hitta plats automatiskt';
L_localizedStrings_Text['Refresh'] = 'Uppdatera';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Hur hittar Windows min plats automatiskt?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Det finns ingen tillgänglig platssensor';
L_localizedStrings_Text['EC4'] = 'Ingen väderinformation för aktuell plats';

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
L_localizedStrings_Text['hr'] = 'tim';
L_localizedStrings_Text['hrs'] = 'tim';
L_localizedStrings_Text['day'] = 'dag';
L_localizedStrings_Text['days'] = 'dagar';
L_localizedStrings_Text['ageStampMessage'] = 'för %1 %2 sedan';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Prognos, för %1 %2 sedan';
L_localizedStrings_Text['DataExpired'] = 'Inaktuella data';
L_localizedStrings_Text['Forecasted'] = 'Prognos';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Anslut till internet för att få aktuella data';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Det går inte att ansluta till tjänsten';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Tjänsten är inte tillgänglig i din region.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'sv';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'sv';
L_localizedStrings_Text['Attribution'] = 'Data: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Aktuell plats';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Söndag';
L_localizedStrings_Text['Day-Monday'] = 'Måndag';
L_localizedStrings_Text['Day-Tuesday'] = 'Tisdag';
L_localizedStrings_Text['Day-Wednesday'] = 'Onsdag';
L_localizedStrings_Text['Day-Thursday'] = 'Torsdag';
L_localizedStrings_Text['Day-Friday'] = 'Fredag';
L_localizedStrings_Text['Day-Saturday'] = 'Lördag';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Åska';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Åska med hagel';
L_localizedStrings_Text['SkyText-Hail'] = 'Hagel';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Underkylt regn';
L_localizedStrings_Text['SkyText-LightRain'] = 'Lätt regn';
L_localizedStrings_Text['SkyText-Rain'] = 'Regn';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Kraftigt regn';
L_localizedStrings_Text['SkyText-Snow'] = 'Snö';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Kraftigt snöfall';
L_localizedStrings_Text['SkyText-Fog'] = 'Dimma';
L_localizedStrings_Text['SkyText-Windy'] = 'Blåsigt';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Mulet';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Halvklart';
L_localizedStrings_Text['SkyText-Clear'] = 'Klart';
L_localizedStrings_Text['SkyText-Sunny'] = 'Soligt';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Mestadels klart';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Mestadels soligt';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Spridda skurar';
L_localizedStrings_Text['SkyText-Showers'] = 'Regnskurar';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Snöbyar';
