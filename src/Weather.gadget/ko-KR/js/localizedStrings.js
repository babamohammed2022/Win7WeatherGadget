////////////////////////////////////////////////////////////////////////////////
//
// Localized strings: Korean (Korea).
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
L_localizedStrings_Text['DefaultCity'] = '서울, 대한민국';
// PATCH (Windows 10/11 port): MSN codes (e.g. "wc:USWA0367") are no longer usable;
// use "latitude,longitude|label" as understood by wlservices_shim.js.
L_localizedStrings_Text['DefaultLocationCode'] = '37.5665,126.9780|서울';
L_localizedStrings_Text['DefaultUnit'] = 'Celsius';

////////////////////////////////////////////////////////////////////////////////
//
// GADGET
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['GettingData'] = '데이터를 가져오는 중...';
L_localizedStrings_Text['LocationDontExist'] = '위치를 찾을 수 없습니다.';
L_localizedStrings_Text['Searching'] = '검색 중...';
L_localizedStrings_Text['NoSearchQuery'] = '검색어를 지정하지 않았습니다.';
L_localizedStrings_Text['NoResults'] = '결과가 없습니다.';

L_localizedStrings_Text['Night-New'] = '신월';
L_localizedStrings_Text['Night-Waxing-Crescent'] = '초승달';
L_localizedStrings_Text['Night-First-Quarter'] = '상현달';
L_localizedStrings_Text['Night-Waxing-Gibbous'] = '차오르는 달';
L_localizedStrings_Text['Night-Full'] = '보름달';
L_localizedStrings_Text['Night-Waning-Gibbous'] = '기우는 달';
L_localizedStrings_Text['Night-Last-Quarter'] = '하현달';
L_localizedStrings_Text['Night-Waning-Crescent'] = '그믐달';

L_localizedStrings_Text['SensorIconRed'] = '현재 위치를 가져올 수 없습니다.';
L_localizedStrings_Text['SensorIconGreen'] = '위치가 감지되었습니다.';
L_localizedStrings_Text['SensorIconGray'] = '위치 센서를 사용할 수 있습니다.';
L_localizedStrings_Text['SensorIconNotConnected'] = '연결된 위치 센서가 없습니다.';
L_localizedStrings_Text['GettingLocation'] = '현재 위치를 가져오는 중...';

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['DisplayTemperatureIn'] = '온도 표시 단위:';
L_localizedStrings_Text['Fahrenheit'] = '화씨';
L_localizedStrings_Text['Celsius'] = '섭씨';
L_localizedStrings_Text['Search'] = '검색';
L_localizedStrings_Text['CurrentCity'] = '현재 위치:';
L_localizedStrings_Text['EnterACityName'] = '위치 검색';
L_localizedStrings_Text['SearchNearbyDisambiguation'] = '검색어와 가장 가까운 위치:';
L_localizedStrings_Text['SearchFuzzyDisambiguation'] = '가장 가까운 위치:';
L_localizedStrings_Text['SearchedLocationFoundClickOK'] = '"%1"을(를) 찾았습니다.\n적용하려면 [확인]을 클릭하십시오.';

L_localizedStrings_Text['SelectLocation'] = '현재 위치 선택';
L_localizedStrings_Text['Automatically'] = '자동으로 위치 찾기';
L_localizedStrings_Text['Refresh'] = '새로 고침';
L_localizedStrings_Text['HelperArticleLinkText'] = 'Windows에서 내 위치를 자동으로 찾는 방법';
L_localizedStrings_Text['HelperArticleLink'] = 'http://go.microsoft.com/fwlink/?LinkId=128457';

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION API ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['EC1'] = '사용할 수 있는 위치 센서가 없습니다.';
L_localizedStrings_Text['EC4'] = '현재 위치에 대한 날씨 정보가 없습니다.';

////////////////////////////////////////////////////////////////////////////////
//
// CACHED DATA AGE STAMP
//
// For string with localized tokens composed ( ageStampMessage , ageStampMessageForecastedData )
// %1 => represents a numeric value
// %2 => represents the unit (one of min, hr, hrs, day, days)
// eg: ageStampMessage can be '3 hrs ago' or '2 days ago' for en-US
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['min'] = '분';
L_localizedStrings_Text['hr'] = '시간';
L_localizedStrings_Text['hrs'] = '시간';
L_localizedStrings_Text['day'] = '일';
L_localizedStrings_Text['days'] = '일';
L_localizedStrings_Text['ageStampMessage'] = '%1%2 전';
L_localizedStrings_Text['ageStampMessageForecastedData'] = '%1%2 전 예보';
L_localizedStrings_Text['DataExpired'] = '데이터 만료됨';
L_localizedStrings_Text['Forecasted'] = '예보';

////////////////////////////////////////////////////////////////////////////////
//
// ACTIVEX WRAPPER ERROR MESSAGES
//
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['ConnectToInternetToGetData'] = '최신 데이터를 가져오려면 인터넷에 연결하십시오.';
L_localizedStrings_Text['ServiceNotAvailable'] = '서비스에 연결할 수 없습니다.';
L_localizedStrings_Text['ServiceNotAvailableInYourArea'] = '해당 지역에서는 서비스를 사용할 수 없습니다.';

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
L_localizedStrings_Text['GeocodingLanguage'] = 'ko';
L_localizedStrings_Text['ReverseGeocodingLanguage'] = 'ko';
L_localizedStrings_Text['Attribution'] = '데이터: Open-Meteo.com';
L_localizedStrings_Text['CurrentLocation'] = '현재 위치';

////////////////////////////////////////////////////////////////////////////////
//
// DAY NAMES (Windows 10/11 port)
//
// Forecast day names, from Sunday to Saturday.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['Day-Sunday'] = '일요일';
L_localizedStrings_Text['Day-Monday'] = '월요일';
L_localizedStrings_Text['Day-Tuesday'] = '화요일';
L_localizedStrings_Text['Day-Wednesday'] = '수요일';
L_localizedStrings_Text['Day-Thursday'] = '목요일';
L_localizedStrings_Text['Day-Friday'] = '금요일';
L_localizedStrings_Text['Day-Saturday'] = '토요일';

////////////////////////////////////////////////////////////////////////////////
//
// WEATHER CONDITIONS (Windows 10/11 port)
//
// Condition texts shown for the current weather and as forecast tooltips.
////////////////////////////////////////////////////////////////////////////////
L_localizedStrings_Text['SkyText-Thunderstorms'] = '뇌우';
L_localizedStrings_Text['SkyText-ThunderstormsWithHail'] = '우박을 동반한 뇌우';
L_localizedStrings_Text['SkyText-Hail'] = '우박';
L_localizedStrings_Text['SkyText-FreezingRain'] = '어는 비';
L_localizedStrings_Text['SkyText-LightRain'] = '약한 비';
L_localizedStrings_Text['SkyText-Rain'] = '비';
L_localizedStrings_Text['SkyText-HeavyRain'] = '강한 비';
L_localizedStrings_Text['SkyText-Snow'] = '눈';
L_localizedStrings_Text['SkyText-HeavySnow'] = '폭설';
L_localizedStrings_Text['SkyText-Fog'] = '안개';
L_localizedStrings_Text['SkyText-Windy'] = '바람 강함';
L_localizedStrings_Text['SkyText-Cloudy'] = '흐림';
L_localizedStrings_Text['SkyText-PartlyCloudy'] = '구름 조금';
L_localizedStrings_Text['SkyText-Clear'] = '맑음';
L_localizedStrings_Text['SkyText-Sunny'] = '맑음';
L_localizedStrings_Text['SkyText-MostlyClear'] = '대체로 맑음';
L_localizedStrings_Text['SkyText-MostlySunny'] = '대체로 맑음';
L_localizedStrings_Text['SkyText-ScatteredShowers'] = '곳에 따라 소나기';
L_localizedStrings_Text['SkyText-Showers'] = '소나기';
L_localizedStrings_Text['SkyText-SnowShowers'] = '소낙눈';
