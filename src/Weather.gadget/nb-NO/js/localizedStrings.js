////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Norwegian Bokmal (Norway).
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
L_localizedStrings_Text['DefaultCity'] = 'Oslo, Norge';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '59.9139,10.7522|Oslo';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Henter data...';
L_localizedStrings_Text['LocationDontExist'] = 'Finner ikke stedet';
L_localizedStrings_Text['Searching'] = 'Søker...';
L_localizedStrings_Text['NoSearchQuery'] = 'Det er ikke angitt noe søkeord.';
L_localizedStrings_Text['NoResults'] = 'Ingen resultater.';

L_localizedStrings_Text['Night-New'] = 'Nymåne';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Voksende månesigd';
L_localizedStrings_Text['Night-First-Quarter'] = 'Første kvarter';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Voksende måne';
L_localizedStrings_Text['Night-Full'] = 'Fullmåne';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Minkende måne';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Siste kvarter';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Minkende månesigd';

L_localizedStrings_Text['SensorIconRed'] = 'Kan ikke hente gjeldende posisjon';
L_localizedStrings_Text['SensorIconGreen'] = 'Posisjonen din er funnet';
L_localizedStrings_Text['SensorIconGray'] = 'En posisjonssensor er tilgjengelig';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Ingen posisjonssensorer er tilkoblet';
L_localizedStrings_Text['GettingLocation'] = 'Henter gjeldende posisjon...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Vis temperatur i:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Søk';
L_localizedStrings_Text['CurrentCity'] = 'Gjeldende sted:';
L_localizedStrings_Text['EnterACityName'] = 'Søk etter sted';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'nærmeste sted for';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'nærmeste sted:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = 'Fant "%1".\nKlikk OK for å bruke.';

L_localizedStrings_Text['SelectLocation'] = 'Velg gjeldende sted';
L_localizedStrings_Text['Automatically'] = 'Finn sted automatisk';
L_localizedStrings_Text['Refresh'] = 'Oppdater';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Hvordan finner Windows posisjonen min automatisk?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Ingen posisjonssensor er tilgjengelig';
L_localizedStrings_Text['EC4'] = 'Ingen værinformasjon for gjeldende posisjon';

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
L_localizedStrings_Text['hr'] = 't';
L_localizedStrings_Text['hrs'] = 't';
L_localizedStrings_Text['day'] = 'dag';
L_localizedStrings_Text['days'] = 'dager';
L_localizedStrings_Text['ageStampMessage'] = 'for %1 %2 siden';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Prognose, for %1 %2 siden';
L_localizedStrings_Text['DataExpired'] = 'Utdaterte data';
L_localizedStrings_Text['Forecasted'] = 'Prognose';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Koble til Internett for å få oppdaterte data';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Kan ikke koble til tjenesten';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Tjenesten er ikke tilgjengelig i din region.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'no';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'nb';
L_localizedStrings_Text['Attribution'] = 'Data: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Gjeldende posisjon';

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
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Tordenvær';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Tordenvær med hagl';
L_localizedStrings_Text['SkyText-Hail'] = 'Hagl';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Underkjølt regn';
L_localizedStrings_Text['SkyText-LightRain'] = 'Lett regn';
L_localizedStrings_Text['SkyText-Rain'] = 'Regn';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Kraftig regn';
L_localizedStrings_Text['SkyText-Snow'] = 'Snø';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Kraftig snøfall';
L_localizedStrings_Text['SkyText-Fog'] = 'Tåke';
L_localizedStrings_Text['SkyText-Windy'] = 'Vindfullt';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Skyet';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Delvis skyet';
L_localizedStrings_Text['SkyText-Clear'] = 'Klarvær';
L_localizedStrings_Text['SkyText-Sunny'] = 'Sol';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Stort sett klart';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Stort sett sol';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Spredte byger';
L_localizedStrings_Text['SkyText-Showers'] = 'Regnbyger';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Snøbyger';
