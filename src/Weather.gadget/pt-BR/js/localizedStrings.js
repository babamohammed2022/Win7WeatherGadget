////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Portuguese (Brazil).
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
L_localizedStrings_Text['DefaultCity'] = 'São Paulo, Brasil';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '-23.5505,-46.6333|São Paulo';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Obtendo dados...';
L_localizedStrings_Text['LocationDontExist'] = 'Local não encontrado';
L_localizedStrings_Text['Searching'] = 'Pesquisando...';
L_localizedStrings_Text['NoSearchQuery'] = 'Nenhum termo de pesquisa especificado.';
L_localizedStrings_Text['NoResults'] = 'Nenhum resultado encontrado.';

L_localizedStrings_Text['Night-New'] = 'Lua nova';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Lua crescente';
L_localizedStrings_Text['Night-First-Quarter'] = 'Quarto crescente';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Crescente gibosa';
L_localizedStrings_Text['Night-Full'] = 'Lua cheia';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Minguante gibosa';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Quarto minguante';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Lua minguante';

L_localizedStrings_Text['SensorIconRed'] = 'Não é possível obter o local atual';
L_localizedStrings_Text['SensorIconGreen'] = 'Seu local foi detectado';
L_localizedStrings_Text['SensorIconGray'] = 'Um sensor de localização está disponível';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Nenhum sensor de localização conectado';
L_localizedStrings_Text['GettingLocation'] = 'Obtendo o local atual...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Mostrar temperatura em:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Celsius';
L_localizedStrings_Text['Search'] = 'Pesquisar';
L_localizedStrings_Text['CurrentCity'] = 'Local atual:';
L_localizedStrings_Text['EnterACityName'] = 'Pesquisar local';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'local mais próximo de';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'local mais próximo:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '"%1" encontrado.\nClique em OK para aplicar.';

L_localizedStrings_Text['SelectLocation'] = 'Selecionar o local atual';
L_localizedStrings_Text['Automatically'] = 'Localizar automaticamente';
L_localizedStrings_Text['Refresh'] = 'Atualizar';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Como o Windows encontra meu local automaticamente?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Nenhum sensor de localização disponível';
L_localizedStrings_Text['EC4'] = 'Nenhuma informação meteorológica para o local atual';

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
L_localizedStrings_Text['day'] = 'dia';
L_localizedStrings_Text['days'] = 'dias';
L_localizedStrings_Text['ageStampMessage'] = 'há %1 %2';
L_localizedStrings_Text['ageStampMessageForecastedData'] = 'Previsão feita há %1 %2';
L_localizedStrings_Text['DataExpired'] = 'Dados expirados';
L_localizedStrings_Text['Forecasted'] = 'Previsão';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Conecte-se à Internet para obter dados atualizados';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Não é possível conectar ao serviço';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Serviço não disponível em sua região.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'pt';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'pt';
L_localizedStrings_Text['Attribution'] = 'Dados: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Local atual';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Domingo';
L_localizedStrings_Text['Day-Monday'] = 'Segunda-feira';
L_localizedStrings_Text['Day-Tuesday'] = 'Terça-feira';
L_localizedStrings_Text['Day-Wednesday'] = 'Quarta-feira';
L_localizedStrings_Text['Day-Thursday'] = 'Quinta-feira';
L_localizedStrings_Text['Day-Friday'] = 'Sexta-feira';
L_localizedStrings_Text['Day-Saturday'] = 'Sábado';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Trovoadas';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Trovoadas com granizo';
L_localizedStrings_Text['SkyText-Hail'] = 'Granizo';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Chuva congelante';
L_localizedStrings_Text['SkyText-LightRain'] = 'Chuva fraca';
L_localizedStrings_Text['SkyText-Rain'] = 'Chuva';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Chuva forte';
L_localizedStrings_Text['SkyText-Snow'] = 'Neve';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Neve forte';
L_localizedStrings_Text['SkyText-Fog'] = 'Nevoeiro';
L_localizedStrings_Text['SkyText-Windy'] = 'Ventoso';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Nublado';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Parcialmente nublado';
L_localizedStrings_Text['SkyText-Clear'] = 'Céu limpo';
L_localizedStrings_Text['SkyText-Sunny'] = 'Ensolarado';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Predominantemente limpo';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Predominantemente ensolarado';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Pancadas de chuva isoladas';
L_localizedStrings_Text['SkyText-Showers'] = 'Pancadas de chuva';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Pancadas de neve';
