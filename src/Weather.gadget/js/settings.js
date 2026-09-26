////////////////////////////////////////////////////////////////////////////////
//
//	THIS CODE IS NOT APPROVED FOR USE IN/ON ANY OTHER UI ELEMENT OR PRODUCT COMPONENT.
//	Copyright (c) 2009 Microsoft Corporation.	All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////

var gDefaultWeatherLocation = getLocalizedString('DefaultCity');
var gDefaultWeatherLocationCode = getLocalizedString('DefaultLocationCode');
var gDefaultDisplayDegreesIn = getLocalizedString('DefaultUnit');
var gDefaultInputHelperString = getLocalizedString('EnterACityName');

var MicrosoftGadget	= new Object();
MicrosoftGadget.currentState = LOCATION_SENSING_STATE_DISABLED;// if state is not saved / not known, do not allow calls to api as default setting


if ( gDefaultDisplayDegreesIn !== 'Celsius' )
{
		gDefaultDisplayDegreesIn = 'Fahrenheit';
}

////////////////////////////////////////////////////////////////////////////////
//
// onAPIStatusChange( status )	- disables Find my location automatically
//	radio box and labelif location reports cannot be retrieved
//	(no change to selected radio box option)
////////////////////////////////////////////////////////////////////////////////
MicrosoftGadget.onAPIStatusChange = function ( status )
{
	if ( status == 4 )
	{
		try
		{
			var report = getAPILatLongReport( this );
			radioAutomatically.disabled = false;
			LabelAutomatically.disabled = false;
			return;
		}
		catch(err)
		{
			System.Debug.outputString( "Error getting geo-coordinates from Location API");
			System.Debug.outputString( "Error Description: " + err.description + "");
		}
	}
	radioAutomatically.disabled = true;
	LabelAutomatically.disabled = true;
}


////////////////////////////////////////////////////////////////////////////////
//
// disableAutomaticallyOption( )	- disables automatically radio box and label
//	also checks Manually option
////////////////////////////////////////////////////////////////////////////////
function disableAutomaticallyOption()
{
	radioAutomatically.disabled = true;
	LabelAutomatically.disabled = true;
	radioManually.checked = true;
}

////////////////////////////////////////////////////////////////////////////////
//
// reConfigManual() - triggered when focus set on manual radio box or text field
//
////////////////////////////////////////////////////////////////////////////////
function reConfigManual( ) 
{
	if ( !radioManually.checked )
	{
		radioManually.checked = true;
	}
}

////////////////////////////////////////////////////////////////////////////////
//
// reConfigAuto() - triggered when focus set on automatically
//
////////////////////////////////////////////////////////////////////////////////
function reConfigAuto( ) 
{

	if ( !radioAutomatically.checked )
	{
		radioAutomatically.checked = true;
	}
}

////////////////////////////////////////////////////////////////////////////////
//
// setup() - triggered by body.onload event
//
////////////////////////////////////////////////////////////////////////////////
function setup() 
{
	// If we are in BIDI Mode, apply some special css 
	// to help folks read things Right to Left
	if (gBIDIMode) 
	{
		document.body.className = 'BIDI'; 
	}

	// Fetch and place all of the localized strings
	document.getElementById('txtInputPlace').innerText	= gDefaultInputHelperString;
	document.getElementById('lblFahrenheit').innerHTML = getLocalizedString('Fahrenheit');
	document.getElementById('lblCelsius').innerHTML = getLocalizedString('Celsius');
	document.getElementById('lgdDisplayTemperatureIn').innerHTML = getLocalizedString('DisplayTemperatureIn');

	document.getElementById('LabelSelectLocation').innerHTML = getLocalizedString('SelectLocation');
	document.getElementById('LabelAutomatically').innerHTML = getLocalizedString('Automatically');
	document.getElementById('privacyArticleLink').href = getLocalizedString('HelperArticleLink');
	document.getElementById('privacyArticleLink').innerText = getLocalizedString('HelperArticleLinkText');
	document.getElementById('btnSearchForPlace').title = getLocalizedString('Search');
	document.getElementById('radioManuallyAccName').innerText = getLocalizedString('EnterACityName');
	document.getElementById('txtInputPlaceAccName').innerText = getLocalizedString('EnterACityName');

	document.getElementById('lblFahrenheit').innerHTML = getLocalizedString('Fahrenheit');

	document.getElementById('radioManually').tabIndex = 1;
	document.getElementById('txtInputPlace').tabIndex = 2;
	document.getElementById('btnSearchForPlace').tabIndex = 3;
	document.getElementById('radioAutomatically').tabIndex = 4;
	document.getElementById('privacyArticleLink').tabIndex = 5;
	document.getElementById('radioFahrenheit').tabIndex = 6;
	document.getElementById('radioCelsius').tabIndex = 7;


	MicrosoftGadget.factory = document.getElementById("factory").object;

	loadAndApplySettingsToPage();

	// If we are in "Gadget Mode" then hook the OnSettingsClosing event 
	// (triggered when user clicks "OK" from the Settings Pane) to our 
	// custom "Save Settings" function
	if (gGadgetMode) 
	{
		System.Gadget.onSettingsClosing	= function(event) 
		{ 
			if (event.closeAction == event.Action.commit) 
			{

			// If search field has some content, then settings dialog will not dismiss on pressing OK.
				if(document.getElementById('txtInputPlace').value!=gDefaultInputHelperString && radioManually.checked )
				{
						doMouseUpSearchButton();
						event.cancel=true;
				}
				else
				{
						extractAndSaveSettingsFromPage(); 
				}
			}
		}
	}
	document.body.attachEvent('onclick', function() { showSearchStatus(false, false, ''); });
	if ( radioManually.checked )
	{
		doResetHelperText();
	}
}

////////////////////////////////////////////////////////////////////////////////
//
// loadAndApplySettingsToPage() - Loads settings and applies them to page 
//
////////////////////////////////////////////////////////////////////////////////
function loadAndApplySettingsToPage() 
{
	// Load Settings
	var theWeatherLocation	= unescape(readSetting("WeatherLocation")) || gDefaultWeatherLocation;
	var theWeatherLocationCode	= readSetting("WeatherLocationCode") || gDefaultWeatherLocationCode;
	var theDisplayDegreesIn	= readSetting("DisplayDegreesIn")	|| gDefaultDisplayDegreesIn;

	var LocationAPIAvailable = readSetting ( "LocationAPIAvailable" ) || false;

	if ( LocationAPIAvailable && MicrosoftGadget.factory !== null )
	{
		MicrosoftGadget.currentState = readSetting( "CurrentState" ) || LOCATION_SENSING_STATE_ERROR_MANUAL;
		MicrosoftGadget.currentState = parseInt( MicrosoftGadget.currentState );

		if ( LOCATION_SENSING_AUTO_STATES_ARRAY.exists( MicrosoftGadget.currentState ) )
		{
			radioAutomatically.checked = true;
		}
		else
		{
			radioManually.checked = true;
			txtInputPlace.focus();
		}
		MicrosoftGadget.onAPIStatusChange( getAPIStatus( MicrosoftGadget ) );
	}
	else
	{
		disableAutomaticallyOption();
	}


	// Apply Settings
	document.getElementById("PlaceTitle").innerHTML = getLocalizedString('CurrentCity');
	document.getElementById("PlaceCurrent").innerText = theWeatherLocation;
	document.getElementById("radio" + theDisplayDegreesIn).checked="checked";
	document.getElementById('WeatherLocation').value = theWeatherLocation;
	document.getElementById('WeatherLocationCode').value = theWeatherLocationCode;

	// Create instance of MSNServices.dll and attach to our Global Object
	// PATCH (Windows 10/11 port): was new ActiveXObject("wlsrvc.WLServices"),
	// replaced by the drop-in shim in js/wlservices_shim.js.
	var oMSN = new WLServicesShim();
	MicrosoftGadget.oMSN = oMSN.GetService("weather"); 
	MicrosoftGadget.bPlacePossibilitiesDisplayed = false;
	MicrosoftGadget.bHaveSearched =false;
	MicrosoftGadget.buttonState = 'btnSearch';
	MicrosoftGadget.bInputBoxHasFocus=true; 
	MicrosoftGadget.spinner = new getSpinner( "PleaseWaitLoadingSpinner" );	
	MicrosoftGadget.spinner.hide();
}
////////////////////////////////////////////////////////////////////////////////
//
// extractAndSaveSettingsFromPage() - Extracts values from page and saves them
//
////////////////////////////////////////////////////////////////////////////////
function extractAndSaveSettingsFromPage() 
{
	// Extract Settings
	var theWeatherLocation	= document.getElementById('WeatherLocation').value;
	// PATCH (Windows 10/11 port): the location code is now "lat,lon|label"
	// (wlservices_shim.js uses coordinates instead of the MSN "wc:..." codes).
	// The value is no longer cut at the first "|", otherwise the location name
	// would be lost.
	var theWeatherLocationCode	= document.getElementById('WeatherLocationCode').value;
	var theDisplayDegreesIn	= "Fahrenheit";

	if (document.getElementById("radioCelsius").checked) 
	{
		theDisplayDegreesIn	= "Celsius";
	}


	if ( MicrosoftGadget.currentState != LOCATION_SENSING_STATE_DISABLED && LOCATION_SENSING_VALID_STATES_ARRAY.exists( MicrosoftGadget.currentState ) )
	{
		if ( !radioManually.checked && ( LOCATION_SENSING_MANUAL_STATES_ARRAY.exists( MicrosoftGadget.currentState ) ) )
		{
			switch( MicrosoftGadget.currentState )
			{
				case LOCATION_SENSING_STATE_ERROR_MANUAL:
					MicrosoftGadget.currentState = LOCATION_SENSING_STATE_ERROR_AUTO;
				break;

				case LOCATION_SENSING_STATE_OK_MANUAL:
					MicrosoftGadget.currentState = LOCATION_SENSING_STATE_OK_AUTO;
				break;

				case LOCATION_SENSING_STATE_DISCONNECTED_MANUAL:
					MicrosoftGadget.currentState = LOCATION_SENSING_STATE_DISCONNECTED_AUTO;
				break;
			}
		}
		else if ( radioManually.checked && ( LOCATION_SENSING_AUTO_STATES_ARRAY.exists( MicrosoftGadget.currentState ) ) )
		{
			switch( MicrosoftGadget.currentState )
			{
				case LOCATION_SENSING_STATE_ERROR_AUTO:
					MicrosoftGadget.currentState = LOCATION_SENSING_STATE_ERROR_MANUAL;
				break;

				case LOCATION_SENSING_STATE_OK_AUTO:
					MicrosoftGadget.currentState = LOCATION_SENSING_STATE_OK_MANUAL;
				break;

				case LOCATION_SENSING_STATE_DISCONNECTED_AUTO:
					MicrosoftGadget.currentState = LOCATION_SENSING_STATE_DISCONNECTED_MANUAL;
				break;
			}
		}
	}

	// Save Settings
	saveSetting("WeatherLocation", theWeatherLocation);
	saveSetting("WeatherLocationCode", theWeatherLocationCode);
	saveSetting("DisplayDegreesIn", theDisplayDegreesIn); 
	saveSetting("CurrentState", MicrosoftGadget.currentState ); 
}
////////////////////////////////////////////////////////////////////////////////
//
// doSetHelperText() - sets input box to looks "Active" for further input
//
////////////////////////////////////////////////////////////////////////////////
function doSetHelperText() 
{
	if ( document.getElementById('txtInputPlace').value == gDefaultInputHelperString ) {
		document.getElementById('txtInputPlace').className = 'TextInputInactiveDefaultText';
	} 
	else 
	{
		document.getElementById('txtInputPlace').className = 'TextInputActive';
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// doResetHelperText() - resets Helper text to default "Enter Location here" 
//	and also resets the className of the input box
//
////////////////////////////////////////////////////////////////////////////////
function doResetHelperText() 
{
	var theInputElement = document.getElementById('txtInputPlace');

	if ( isEmpty() ) 
	{
		theInputElement.value = gDefaultInputHelperString;
		theInputElement.className = 'TextInputInactiveDefaultText';
		document.getElementById('btnSearchForPlace').className = 'btnSearch';
		if ( MicrosoftGadget.bInputBoxHasFocus ) 
		{
			setCaretPos( theInputElement, 0, 0 );
		}
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// doMouseOverSearchButton() - set mouseover image for Search Button
//
////////////////////////////////////////////////////////////////////////////////
function doMouseOverSearchButton() 
{
	if ( !radioManually.checked )
	{
		return;
	}
	var theClassName = 'btnClearOver';
	if ( MicrosoftGadget.buttonState=='btnSearch' ) 
	{
		theClassName = 'btnSearchOver'; 
	}
	document.getElementById('btnSearchForPlace').className = theClassName;	
}
////////////////////////////////////////////////////////////////////////////////
//
// doMouseOutSearchButton() - sets mouseout image for Search Button
//
////////////////////////////////////////////////////////////////////////////////
function doMouseOutSearchButton() 
{
	if ( !radioManually.checked )
	{
		return;
	}
	if (MicrosoftGadget.bInputBoxHasFocus == true) 
	{
		if ( MicrosoftGadget.buttonState=='btnSearch' )
		{
			document.getElementById('btnSearchForPlace').className = 'btnSearchInsertionPoint';
		}
		else
		{
			document.getElementById('btnSearchForPlace').className = 'btnClearInsertionPoint';
		}
	} 
	else 
	{
		if ( MicrosoftGadget.buttonState=='btnSearch' )
		{
			document.getElementById('btnSearchForPlace').className = 'btnSearch';
		}
		else
		{
			document.getElementById('btnSearchForPlace').className = 'btnClear';
		}
		
	}
}

////////////////////////////////////////////////////////////////////////////////
//
// doMouseDownSearchButton() - sets mousedown image for Search Button
//
////////////////////////////////////////////////////////////////////////////////
function doMouseDownSearchButton() 
{
	if ( !radioManually.checked )
	{
		return;
	}
	if ( MicrosoftGadget.buttonState=='btnSearch' )
	{
		document.getElementById('btnSearchForPlace').className = 'btnSearchDown';	
	}
	else
	{
		document.getElementById('btnSearchForPlace').className = 'btnClearDown';	
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// doMouseUpSearchButton() - sets mouseup image for Search Button
//
////////////////////////////////////////////////////////////////////////////////
function doMouseUpSearchButton() 
{
	if ( !radioManually.checked )
	{
		return;
	}
	if (MicrosoftGadget.buttonState == 'btnSearch') 
	{
		doSearch();
	} 
	else if (MicrosoftGadget.buttonState == 'btnClear') 
	{
		var theInputElement = document.getElementById('txtInputPlace');
		theInputElement.value = '';
		doResetHelperText();
		showSearchStatus(false, false, '');
		MicrosoftGadget.buttonState='btnSearch';
	}
	
	if ( MicrosoftGadget.buttonState=='btnSearch' )
	{
		document.getElementById('btnSearchForPlace').className = 'btnSearchOver';	
	}
	else
	{
		document.getElementById('btnSearchForPlace').className = 'btnClearOver';	
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// doFocusInputBox() - sets image for Search Button based on keyboard focus
//
////////////////////////////////////////////////////////////////////////////////
function doFocusInputBox() 
{
	document.getElementById('txtSearchedLocationFoundOnDialogDismiss').innerText = "";
	showOrHide('txtSearchedLocationFoundOnDialogDismiss', false);
	
	MicrosoftGadget.bInputBoxHasFocus = true;
	setCaretPos( document.getElementById('txtInputPlace'), 0, 0 );
	if ( MicrosoftGadget.buttonState=='btnClear' ) 
	{
		document.getElementById('btnSearchForPlace').className = 'btnClearInsertionPoint';
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// doBlurInputBox() - sets image for Search Button when mouse leaves input box
//
////////////////////////////////////////////////////////////////////////////////
function doBlurInputBox() 
{
	MicrosoftGadget.bInputBoxHasFocus = false; 
	if ( MicrosoftGadget.buttonState=='btnSearch' )
	{
		document.getElementById('btnSearchForPlace').className = 'btnSearch';
	}
	else
	{
		document.getElementById('btnSearchForPlace').className = 'btnClear';
	}
	doResetHelperText();	
}
////////////////////////////////////////////////////////////////////////////////
//
// isEmpty() - indicates whether a value has been entered into the search box
//
////////////////////////////////////////////////////////////////////////////////
function isEmpty() 
{
	var theInputElement = document.getElementById('txtInputPlace');
	return	((theInputElement.value == '') || (theInputElement.value==gDefaultInputHelperString));
}
////////////////////////////////////////////////////////////////////////////////
//
// possiblyResetPlacePossibilities() - reset the PlacePossibilities DIV 
// if we have an error state or otherwise no meaningful data to display
//
////////////////////////////////////////////////////////////////////////////////
function possiblyResetPlacePossibilities() 
{
	if ((document.getElementById('txtInputPlace').value == gDefaultInputHelperString) || (document.getElementById('PlacePossibilities').innerHTML == getLocalizedString("LocationDontExist")) || (document.getElementById('PlacePossibilities').innerHTML == getLocalizedString("ServiceNotAvailable"))) 
	{
		showSearchStatus(false, false, '');
	}	
}
////////////////////////////////////////////////////////////////////////////////
//
// doBeginInput() - triggered when a user clicks in the input box.	
//	Blanks out Helper text.	
//
////////////////////////////////////////////////////////////////////////////////
function doBeginInput() 
{
	var theInputElement = document.getElementById('txtInputPlace');

	document.getElementById('txtSearchedLocationFoundOnDialogDismiss').innerText = "";
	showOrHide('txtSearchedLocationFoundOnDialogDismiss', false);
	possiblyResetPlacePossibilities();
	
	if (theInputElement.value == gDefaultInputHelperString) 
	{
		theInputElement.value = '';
		theInputElement.className = 'TextInputActive';
	}
	MicrosoftGadget.buttonState='btnSearch';
	document.getElementById('btnSearchForPlace').className = 'btnSearchInsertionPoint';
}
////////////////////////////////////////////////////////////////////////////////
//
// doSearch() - triggered when user clicks "Search" button
//
////////////////////////////////////////////////////////////////////////////////
function doSearch() 
{
	showSearchStatus(false, false, '');
	MicrosoftGadget.bHaveSearched = false;
	// Store original request for later use in disambiguating search results
	MicrosoftGadget.locationSearched = document.getElementById('txtInputPlace').value;	

	// If we have something meaningful to search for, go ahead...
	if ( !isEmpty() )
	{
		searchForLocation();
		MicrosoftGadget.buttonState = 'btnClear';
	} 
	else 
	{
		showSearchStatus(true, true, getLocalizedString('NoSearchQuery'));
		document.getElementById('txtInputPlace').focus();
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// searchForLocation() - searches for location string set in locationsearched property
//
////////////////////////////////////////////////////////////////////////////////
function searchForLocation( ) 
{
	MicrosoftGadget.bHaveSearched = true;
	// Map event handler to refresh display(s) when fresh data received
	MicrosoftGadget.oMSN.OnDataReady = doDisplayPlacePossibilities;
	showSearchStatus(true, true, getLocalizedString("Searching"));
	// Trigger Search by Location
	MicrosoftGadget.oMSN.SearchByLocation( encodeURIComponent( MicrosoftGadget.locationSearched ) );	
}
////////////////////////////////////////////////////////////////////////////////
//
// showSearchStatus(bool bVisible, bool bBorder, string sMessage) - 
//	bVisible == Show/Hide Search Status Box, 
//	bBorder == special state with borders around Status Box (for error states), 
//	sMessage == Message to display 
//	*Note that sending in default value of "Searching" for sMessage 
//	results in display of Spinner animation.
//
////////////////////////////////////////////////////////////////////////////////
function showSearchStatus(bVisible, bBorder, sMessage) 
{
	showOrHide('PlacePossibilities', bVisible);

	if (sMessage == getLocalizedString("Searching")) 
	{ 
		MicrosoftGadget.spinner.show();
		MicrosoftGadget.spinner.start();
		sMessage = "      " + sMessage;
	} 
	else 
	{
		MicrosoftGadget.spinner.hide();
		MicrosoftGadget.spinner.stop();
	}
	
	document.getElementById('PlacePossibilities').innerText = sMessage;
	if(bVisible && bBorder && sMessage == '' && radioManually.checked )
	{
		document.getElementById('txtInputPlace').focus();
		document.getElementById('txtInputPlace').select();
	}

	if(bBorder) 
	{
		document.getElementById('PlacePossibilities').className = "border";
	} 
	else 
	{
		document.getElementById('PlacePossibilities').className = '';
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// doDisplayPlacePossibilities(object data) - this is the callback function 
// triggered by the .DLL that will be called when we have data returned
//
////////////////////////////////////////////////////////////////////////////////
function doDisplayPlacePossibilities(data) 
{
	if (data.Count && (data.Count > 0)) 
	{
		showSearchStatus(true, false, '');

		if (data.Count > 1) 
		{
			var oSelect = document.createElement("SELECT");
			oSelect.id = "selectPlace";
			oSelect.size = 5;
			oSelect.onclick = function() {setSelectedPlace(this)}
			oSelect.onkeydown = function() {onKeyDown(event, this)}
			for (var i=0; i<data.count; i++) 
			{
				var theDisambiguatedLocation = disambiguatedLocation( data.item(i), data.Count );
				var oOption = document.createElement("OPTION");
				oOption.value = data.item(i).LocationCode + '|' + data.item(i).ZipCode;
				oOption.innerText = theDisambiguatedLocation;
				oSelect.appendChild(oOption); 
			}
			document.getElementById('PlacePossibilities').appendChild(oSelect);
			setTimeout("if (document.getElementById('selectPlace')) {		document.getElementById('selectPlace').focus(); }",150);
			MicrosoftGadget.bPlacePossibilitiesDisplayed = true;
		} 
		else 
		{	
			// We have an exact "hit", so auto-select it
			showOrHide('PlacePossibilities', false);
			var theWeatherLocationCode = data.item(0).LocationCode + '|' + data.item(0).ZipCode; 
			var theWeatherLocation = disambiguatedLocation( data.item(0), 1 );

			document.getElementById('txtSearchedLocationFoundOnDialogDismiss').innerText = '\n' + getLocalizedString('SearchedLocationFoundClickOK').replace("%1",theWeatherLocation);
			showOrHide('txtSearchedLocationFoundOnDialogDismiss', true);

			// Reset the "currently Selected Location" string
			document.getElementById("PlaceCurrent").innerText = theWeatherLocation;	
			// Reset Search Box value
			document.getElementById('txtInputPlace').value = '';	
			doResetHelperText();

			document.getElementById('WeatherLocation').value = theWeatherLocation;
			document.getElementById('WeatherLocationCode').value = theWeatherLocationCode;
			
			MicrosoftGadget.buttonState='btnSearch';
			// Mimic Vista behavior of moving to next tabIndex element 
			document.getElementById('txtInputPlace').blur();
		}
	} 
	else 
	{
		showSearchStatus(true, true, '');
		if ( data.RetCode != 200 ) 
		{
			document.getElementById('PlacePossibilities').innerHTML = getLocalizedString("ServiceNotAvailable");
		} 
		else 
		{
			if ( radioAutomatically.checked )
			{
				document.getElementById('PlacePossibilities').innerHTML = getLocalizedString("EC4");
			}
			else
			{
				document.getElementById('PlacePossibilities').innerHTML = getLocalizedString("LocationDontExist");
			}
		}
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// disambiguatedLocation( obj oMSNWeatherLocation ) - returns an unambiguous 
// location when result does not obviously relate to search term. This happens
// when a weather observation point is at a distance (ie in a nearby city).
// 
////////////////////////////////////////////////////////////////////////////////
function disambiguatedLocation( oMSNWeatherLocation, theCount ) {
	var retVal = oMSNWeatherLocation.Location;
	var theLocationSearched = MicrosoftGadget.locationSearched.toLowerCase();
	var bShowDisambiguation = true;

	// Determine if we have an "Exact Match" (ie disambiguation NOT required)
	if	
	( //	a) A Zip Code was entered in the search box and Location has matching
		( theLocationSearched == oMSNWeatherLocation.ZipCode )	|| 
		//	b) Location Fullname contains the exact string entered into search box
		( oMSNWeatherLocation.Fullname.toLowerCase().indexOf( theLocationSearched ) > -1 ) ||
		//	c) Search Distance is "0"
		( parseFloat( oMSNWeatherLocation.SearchDistance ) == 0 ) 
	)
	{ 
		bShowDisambiguation = false; 
	}	
	if ( bShowDisambiguation ) 
	{ 
		if (( parseFloat(oMSNWeatherLocation.SearchScore) > .94 ) && ( theCount==1 ))
		{
			// example (search=="Newcastle,wa"), return="Bryn Mawr, WA (closest location for Newcastle, King, Washington, United States)"
			retVal = oMSNWeatherLocation.Location + ' (' + getLocalizedString('SearchNearbyDisambiguation') + ' ' + oMSNWeatherLocation.SearchLocation + ')';
		}
		else
		{
			// example: search="mkul", return="Mukkul [Mukgul], South Chungcheong, South Korea (closest location: Boryeong, KOR)" 
			retVal = oMSNWeatherLocation.SearchLocation + ' (' + getLocalizedString('SearchFuzzyDisambiguation') + ' ' + oMSNWeatherLocation.Location + ')';
		}
	}
	// an exact match was found. Return (full) weather location
	else
	{ 
		if ( oMSNWeatherLocation.Fullname && (oMSNWeatherLocation.Fullname.length > 0) )
		{
			retVal = oMSNWeatherLocation.Fullname;
		}
	}
	return retVal;
}
////////////////////////////////////////////////////////////////////////////////
//
// onKeyDown(event, obj) - used by PlacePossibilities Select list 
//	to handle keyboard navigation and selection
//
////////////////////////////////////////////////////////////////////////////////
function onKeyDown(event, obj) 
{
	if (event.keyCode==13) 
	{ 
		// Enter 
		setSelectedPlace(obj); 
	} 
	else if (event.keyCode==27) 
	{ 
		// escape
		showSearchStatus(false, false, '');
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// textBoxSearch() - Monitors keypresses while typing in the Search box.
//
////////////////////////////////////////////////////////////////////////////////
function textBoxSearch() 
{
	if (event.keyCode==9)
	{	
		return true;
	}

	if ( !radioManually.checked )
	{
		reConfigManual();
	}
	doSetHelperText();
	doBeginInput();
	var retVal = true;
	if ( ( event.keyCode == 13 ) || ( event.srcElement.id == "btnSearchForPlace" && event.keyCode == 32 ) )
	{	
		// Enter Key 
		MicrosoftGadget.buttonState = 'btnSearch';
		doSearch();
		if ( MicrosoftGadget.buttonState=='btnSearch' )
		{
			document.getElementById('btnSearchForPlace').className = 'btnSearch';	
		}
		else
		{
			document.getElementById('btnSearchForPlace').className = 'btnClear';	
		}
		// Prevent this keyboard event from bubbling out of the HTML window 
		// the "ENTER" key has special meaning to SideBar
		retVal = false; 
	}
	
	if (event.keyCode == 27) 
	{	
		// Escape Key
		showSearchStatus(false, false, '');
		// "ESC" key has special meaning to SideBar, 
		// so prevent this event from bubbling out of the HTML window
		retVal = false; 
	}
	
	// Limit input to 125 characters
	var theInputString = document.getElementById('txtInputPlace');
	if ( theInputString.value.length>125 ) 
	{
		theInputString.value=theInputString.value.substring(0,125);
	}

	return retVal;
}
////////////////////////////////////////////////////////////////////////////////
//
// setSelectedPlace(oHTMLElement Select aPickList) -- extracts selected element
// from (programmatically generated) Select list.	
// Saves off these values to hidden form elements.
//
////////////////////////////////////////////////////////////////////////////////
function setSelectedPlace(aPickList) 
{
	if(aPickList.selectedIndex > -1) 
	{
		if(aPickList.selectedIndex > 0)
		{
			radioManually.checked = true;

			reConfigManual();

		}
		var theWeatherLocationCode = aPickList(aPickList.selectedIndex).value;
		var theWeatherLocation = aPickList(aPickList.selectedIndex).text;
		// Clear out old Select Statement
		document.getElementById('PlacePossibilities').innerHTML = "";
		// Hide the PlacePossibilities Area
		showOrHide('PlacePossibilities', false);	

		// Reset the "currently Selected Location" string
		document.getElementById("PlaceCurrent").innerText = theWeatherLocation;	

		// Set hidden form field values for later use when saving off values
		document.getElementById('WeatherLocation').value = theWeatherLocation;
		document.getElementById('WeatherLocationCode').value = theWeatherLocationCode;
		MicrosoftGadget.bPlacePossibilitiesDisplayed = false;

		if ( radioManually.checked == true )
		{
			// Reset Search Box value
			document.getElementById('txtInputPlace').value	= '';	
			doResetHelperText();
			MicrosoftGadget.buttonState = 'btnSearch';	
		}
	}
}

