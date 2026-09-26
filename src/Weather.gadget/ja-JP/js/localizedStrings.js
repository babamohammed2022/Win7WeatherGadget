////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Japanese (Japan).
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
L_localizedStrings_Text['DefaultCity'] = '東京, 日本';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '35.6762,139.6503|東京';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = 'データを取得しています...';
L_localizedStrings_Text['LocationDontExist'] = '場所が見つかりません';
L_localizedStrings_Text['Searching'] = '検索しています...';
L_localizedStrings_Text['NoSearchQuery'] = '検索する語句が指定されていません。';
L_localizedStrings_Text['NoResults'] = '結果が見つかりませんでした。';

L_localizedStrings_Text['Night-New'] = '新月';
L_localizedStrings_Text['Night-Waxing-Crescent'] = '三日月';
L_localizedStrings_Text['Night-First-Quarter'] = '上弦の月';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = '満ちていく月';
L_localizedStrings_Text['Night-Full'] = '満月';
L_localizedStrings_Text['Night-Waning-Gibbous'] = '欠けていく月';
L_localizedStrings_Text['Night-Last-Quarter'] = '下弦の月';
L_localizedStrings_Text['Night-Waning-Crescent'] = '有明の月';

L_localizedStrings_Text['SensorIconRed'] = '現在地を取得できません';
L_localizedStrings_Text['SensorIconGreen'] = '現在地が検出されました';
L_localizedStrings_Text['SensorIconGray'] = '位置センサーを利用できます';
L_localizedStrings_Text['SensorIconNotConnected'] = '位置センサーが接続されていません';
L_localizedStrings_Text['GettingLocation'] = '現在地を取得しています...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = '温度の表示単位:';
L_localizedStrings_Text['Fahrenheit'] = '華氏';
L_localizedStrings_Text['Celsius'] = '摂氏';
L_localizedStrings_Text['Search'] = '検索';
L_localizedStrings_Text['CurrentCity'] = '現在の場所:';
L_localizedStrings_Text['EnterACityName'] = '場所を検索';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = '検索語に最も近い場所:';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = '最も近い場所:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '「%1」が見つかりました。\n[OK] をクリックして適用してください。';

L_localizedStrings_Text['SelectLocation'] = '現在の場所を選択';
L_localizedStrings_Text['Automatically'] = '場所を自動的に検出する';
L_localizedStrings_Text['Refresh'] = '最新の情報に更新';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Windows で現在地を自動的に検出するしくみ';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = '利用できる位置センサーがありません';
L_localizedStrings_Text['EC4'] = '現在地の気象情報がありません';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = '分';
L_localizedStrings_Text['hr'] = '時間';
L_localizedStrings_Text['hrs'] = '時間';
L_localizedStrings_Text['day'] = '日';
L_localizedStrings_Text['days'] = '日';
L_localizedStrings_Text['ageStampMessage'] = '%1%2前';
L_localizedStrings_Text['ageStampMessageForecastedData'] = '%1%2前の予報';
L_localizedStrings_Text['DataExpired'] = 'データの有効期限切れ';
L_localizedStrings_Text['Forecasted'] = '予報';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = '最新のデータを取得するにはインターネットに接続してください';
L_localizedStrings_Text['ServiceNotAvailable'] = 'サービスに接続できません';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = 'お住まいの地域ではこのサービスを利用できません。';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'ja';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'ja';
L_localizedStrings_Text['Attribution'] = 'データ: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = '現在地';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = '日曜日';
L_localizedStrings_Text['Day-Monday'] = '月曜日';
L_localizedStrings_Text['Day-Tuesday'] = '火曜日';
L_localizedStrings_Text['Day-Wednesday'] = '水曜日';
L_localizedStrings_Text['Day-Thursday'] = '木曜日';
L_localizedStrings_Text['Day-Friday'] = '金曜日';
L_localizedStrings_Text['Day-Saturday'] = '土曜日';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = '雷雨';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = 'ひょうを伴う雷雨';
L_localizedStrings_Text['SkyText-Hail'] = 'ひょう';
L_localizedStrings_Text['SkyText-FreezingRain'] = '着氷性の雨';
L_localizedStrings_Text['SkyText-LightRain'] = '小雨';
L_localizedStrings_Text['SkyText-Rain'] = '雨';
L_localizedStrings_Text['SkyText-HeavyRain'] = '大雨';
L_localizedStrings_Text['SkyText-Snow'] = '雪';
L_localizedStrings_Text['SkyText-HeavySnow'] = '大雪';
L_localizedStrings_Text['SkyText-Fog'] = '霧';
L_localizedStrings_Text['SkyText-Windy'] = '風が強い';
L_localizedStrings_Text['SkyText-Cloudy'] = '曇り';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = '晴れ時々曇り';
L_localizedStrings_Text['SkyText-Clear'] = '晴れ';
L_localizedStrings_Text['SkyText-Sunny'] = '晴れ';
L_localizedStrings_Text['SkyText-MostlyClear'] = 'おおむね晴れ';
L_localizedStrings_Text['SkyText-MostlySunny'] = 'おおむね晴れ';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = '所によりにわか雨';
L_localizedStrings_Text['SkyText-Showers'] = 'にわか雨';
L_localizedStrings_Text['SkyText-SnowShowers'] = 'にわか雪';
