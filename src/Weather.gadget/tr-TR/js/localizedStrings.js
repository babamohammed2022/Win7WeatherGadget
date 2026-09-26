////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Turkish (Turkey).
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
L_localizedStrings_Text['DefaultCity'] = 'İstanbul, Türkiye';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '41.0082,28.9784|İstanbul';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'Veriler alınıyor...';
L_localizedStrings_Text['LocationDontExist'] = 'Konum bulunamadı';
L_localizedStrings_Text['Searching'] = 'Aranıyor...';
L_localizedStrings_Text['NoSearchQuery'] = 'Arama sorgusu belirtilmedi.';
L_localizedStrings_Text['NoResults'] = 'Sonuç bulunamadı.';

L_localizedStrings_Text['Night-New'] = 'Yeni ay';
L_localizedStrings_Text['Night-Waxing-Crescent'] = 'Büyüyen hilal';
L_localizedStrings_Text['Night-First-Quarter'] = 'İlk dördün';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = 'Büyüyen şişkin ay';
L_localizedStrings_Text['Night-Full'] = 'Dolunay';
L_localizedStrings_Text['Night-Waning-Gibbous'] = 'Küçülen şişkin ay';
L_localizedStrings_Text['Night-Last-Quarter'] = 'Son dördün';
L_localizedStrings_Text['Night-Waning-Crescent'] = 'Küçülen hilal';

L_localizedStrings_Text['SensorIconRed'] = 'Geçerli konum alınamıyor';
L_localizedStrings_Text['SensorIconGreen'] = 'Konumunuz algılandı';
L_localizedStrings_Text['SensorIconGray'] = 'Bir konum algılayıcısı kullanılabilir';
L_localizedStrings_Text['SensorIconNotConnected'] = 'Bağlı konum algılayıcısı yok';
L_localizedStrings_Text['GettingLocation'] = 'Geçerli konum alınıyor...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = 'Sıcaklık birimi:';
L_localizedStrings_Text['Fahrenheit'] = 'Fahrenheit';
L_localizedStrings_Text['Celsius'] = 'Santigrat';
L_localizedStrings_Text['Search'] = 'Ara';
L_localizedStrings_Text['CurrentCity'] = 'Geçerli konum:';
L_localizedStrings_Text['EnterACityName'] = 'Konum ara';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = 'arama için en yakın konum:';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = 'en yakın konum:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '"%1" bulundu.\nUygulamak için Tamam\'a tıklayın.';

L_localizedStrings_Text['SelectLocation'] = 'Geçerli konumu seçin';
L_localizedStrings_Text['Automatically'] = 'Konumu otomatik olarak bul';
L_localizedStrings_Text['Refresh'] = 'Yenile';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Windows konumumu otomatik olarak nasıl buluyor?';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = 'Kullanılabilir konum algılayıcısı yok';
L_localizedStrings_Text['EC4'] = 'Geçerli konum için hava durumu bilgisi yok';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = 'dk';
L_localizedStrings_Text['hr'] = 'saat';
L_localizedStrings_Text['hrs'] = 'saat';
L_localizedStrings_Text['day'] = 'gün';
L_localizedStrings_Text['days'] = 'gün';
L_localizedStrings_Text['ageStampMessage'] = '%1 %2 önce';
L_localizedStrings_Text['ageStampMessageForecastedData'] = '%1 %2 önceki tahmin';
L_localizedStrings_Text['DataExpired'] = 'Verilerin süresi doldu';
L_localizedStrings_Text['Forecasted'] = 'Tahmin';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = 'Güncel veriler için İnternet\'e bağlanın';
L_localizedStrings_Text['ServiceNotAvailable'] = 'Hizmete bağlanılamıyor';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'Hizmet bölgenizde kullanılamıyor.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'tr';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'tr';
L_localizedStrings_Text['Attribution'] = 'Veri: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = 'Geçerli konum';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = 'Pazar';
L_localizedStrings_Text['Day-Monday'] = 'Pazartesi';
L_localizedStrings_Text['Day-Tuesday'] = 'Salı';
L_localizedStrings_Text['Day-Wednesday'] = 'Çarşamba';
L_localizedStrings_Text['Day-Thursday'] = 'Perşembe';
L_localizedStrings_Text['Day-Friday'] = 'Cuma';
L_localizedStrings_Text['Day-Saturday'] = 'Cumartesi';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = 'Gök gürültülü sağanak';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'Dolu ve gök gürültülü sağanak';
L_localizedStrings_Text['SkyText-Hail'] = 'Dolu';
L_localizedStrings_Text['SkyText-FreezingRain'] = 'Dondurucu yağmur';
L_localizedStrings_Text['SkyText-LightRain'] = 'Hafif yağmur';
L_localizedStrings_Text['SkyText-Rain'] = 'Yağmur';
L_localizedStrings_Text['SkyText-HeavyRain'] = 'Kuvvetli yağmur';
L_localizedStrings_Text['SkyText-Snow'] = 'Kar';
L_localizedStrings_Text['SkyText-HeavySnow'] = 'Yoğun kar';
L_localizedStrings_Text['SkyText-Fog'] = 'Sis';
L_localizedStrings_Text['SkyText-Windy'] = 'Rüzgârlı';
L_localizedStrings_Text['SkyText-Cloudy'] = 'Bulutlu';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = 'Parçalı bulutlu';
L_localizedStrings_Text['SkyText-Clear'] = 'Açık';
L_localizedStrings_Text['SkyText-Sunny'] = 'Güneşli';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'Çoğunlukla açık';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'Çoğunlukla güneşli';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = 'Yer yer sağanak';
L_localizedStrings_Text['SkyText-Showers'] = 'Sağanak';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'Kar sağanağı';
