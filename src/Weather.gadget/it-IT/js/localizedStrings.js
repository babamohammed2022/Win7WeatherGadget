////////////////////////////////////////////////////////////////////////////////
//
// THIS CODE IS NOT APPROVED FOR USE IN/ON ANY OTHER UI ELEMENT OR PRODUCT COMPONENT.
// Copyright (c) 2009 Microsoft Corporation. All rights reserved.
//
// Localized strings: Italian (Italy).
// The keys marked "Windows 10/11 port" were added by the Windows 7 Weather
// Gadget project; see docs/LOCALIZATION.md.
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
L_localizedStrings_Text['DefaultCity'] = 'Roma, Italia';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '41.9028,12.4964|Roma';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Recupero dei dati in corso...';
L_localizedStrings_Text['LocationDontExist'] = 'Località non trovata';
L_localizedStrings_Text['Searching'] = 'Ricerca in corso...';
L_localizedStrings_Text['NoSearchQuery'] = 'Nessuna query di ricerca specificata.';
L_localizedStrings_Text['NoResults'] = 'Nessun risultato restituito.';

L_localizedStrings_Text['Night-New'] = 'Luna nuova';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Luna crescente';
L_localizedStrings_Text['Night-First-Quarter'] = 'Primo quarto di luna';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Luna crescente biconvessa';
L_localizedStrings_Text['Night-Full'] = 'Luna piena';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Luna calante biconvessa';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Ultimo quarto di luna';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Luna calante';

L_localizedStrings_Text['SensorIconRed'] = 'Impossibile ottenere la posizione attuale';
L_localizedStrings_Text['SensorIconGreen'] = 'La posizione è rilevata';
L_localizedStrings_Text['SensorIconGray'] = 'Un sensore di posizione è disponibile';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Nessun sensore di posizione connesso';
L_localizedStrings_Text['GettingLocation'] = 'Ricerca della posizione corrente in corso...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Mostra temperatura in:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius (centigradi)';
L_localizedStrings_Text['Search'] = 'Cerca';
L_localizedStrings_Text['CurrentCity'] = 'Località corrente:';
L_localizedStrings_Text['EnterACityName'] = 'Cerca una località';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'località più vicina per ';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'località più vicina:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '"%1" trovato.\nFare clic su OK per applicare.';

L_localizedStrings_Text['SelectLocation'] = 'Selezionare la posizione corrente';
L_localizedStrings_Text['Automatically'] = 'Trova la posizione automaticamente';
L_localizedStrings_Text['Refresh'] = 'Aggiorna';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Come trovare automaticamente la posizione corrente';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Nessun sensore di posizione disponibile';
L_localizedStrings_Text['EC4'] = 'Nessuna informazione meteo per la posizione corrente';

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
L_localizedStrings_Text['hr'] = 'ora';
L_localizedStrings_Text['hrs'] = 'ore';
L_localizedStrings_Text['day'] = 'giorno';
L_localizedStrings_Text['days'] = 'giorni';
L_localizedStrings_Text['ageStampMessage'] = '%1 %2 fa';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Previsti %1 %2 fa';
L_localizedStrings_Text['DataExpired'] = 'Dati scaduti';
L_localizedStrings_Text['Forecasted'] = 'Previsto';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Per i dati aggiornati, connettersi a Internet';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Impossibile connettersi al servizio';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Il servizio non è disponibile in questa regione.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'it';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'it';
L_localizedStrings_Text['Attribution'] = 'Dati: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Posizione attuale';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Domenica';
L_localizedStrings_Text['Day-Monday'] = 'Lunedì';
L_localizedStrings_Text['Day-Tuesday'] = 'Martedì';
L_localizedStrings_Text['Day-Wednesday'] = 'Mercoledì';
L_localizedStrings_Text['Day-Thursday'] = 'Giovedì';
L_localizedStrings_Text['Day-Friday'] = 'Venerdì';
L_localizedStrings_Text['Day-Saturday'] = 'Sabato';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Temporali';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Temporali con grandine';
L_localizedStrings_Text['SkyText-Hail'] = 'Grandine';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Pioggia gelata';
L_localizedStrings_Text['SkyText-LightRain'] = 'Pioggia debole';
L_localizedStrings_Text['SkyText-Rain'] = 'Pioggia';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Pioggia intensa';
L_localizedStrings_Text['SkyText-Snow'] = 'Neve';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Neve intensa';
L_localizedStrings_Text['SkyText-Fog'] = 'Nebbia';
L_localizedStrings_Text['SkyText-Windy'] = 'Ventoso';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Nuvoloso';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Parzialmente nuvoloso';
L_localizedStrings_Text['SkyText-Clear'] = 'Sereno';
L_localizedStrings_Text['SkyText-Sunny'] = 'Sereno';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Prevalentemente sereno';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Prevalentemente sereno';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Rovesci sparsi';
L_localizedStrings_Text['SkyText-Showers'] = 'Rovesci';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Rovesci di neve';
