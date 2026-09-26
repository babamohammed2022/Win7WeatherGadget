////////////////////////////////////////////////////////////////////////////////
//
//	THIS CODE IS NOT APPROVED FOR USE IN/ON ANY OTHER UI ELEMENT OR PRODUCT COMPONENT.
//	Copyright (c) 2009 Microsoft Corporation.	All rights reserved.
//
////////////////////////////////////////////////////////////////////////////////


var gGadgetMode	= (window.System !== undefined);
var gBIDIMode	= (document.dir=='rtl');	

////////////////////////////////////////////////////////////////////////////////
//
// PICKLIST UTILITIES for use on SELECT Lists
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
// DoAdd(object oPickList, string anOptionValue, OPTIONAL string anOptionText)
//	Adds an Option to passed-in oPickList (SELECT Object)
//
////////////////////////////////////////////////////////////////////////////////
function DoAdd(oPickList, anOptionValue, anOptionText) 
{
	if (oPickList && anOptionValue.length) 
	{
		var anOption = new Option;
		anOption.value = anOptionValue;
		// If we've been given a display value different than the option value, use it
		if (anOptionText)
		{
			anOption.text	= anOptionText;
		}
		else
		{
			anOption.text	= anOptionValue;
		}
		
		if (oPickList.selectedIndex > -1) 
		{ // If something is selected, then insertion point is below that item
			// Insert new option above currently selected row
			oPickList.add(anOption, oPickList.selectedIndex);
			// Set selectedIndex of Picklist to newly inserted item
			oPickList.selectedIndex -= 1;
		} 
		else 
		{
			oPickList.add(anOption);
			oPickList.selectedIndex = DoFindIndex(oPickList, anOption.value);
		}
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// DoRemoveOption(object oPickList, OPTIONAL int anOptionIndex) 
// Removes option from passed-in Select List. Default is to remove Selected-
// Index but fn also accepts literal index in OPTIONAL param anOptionIndex
//
////////////////////////////////////////////////////////////////////////////////
function DoRemoveOption(oPickList, anOptionIndex) 
{
	var selectedItem	= anOptionIndex;
	if (anOptionIndex===undefined)
	{
		selectedItem	= oPickList.selectedIndex;
	}
	if (selectedItem > -1) 
	{
		oPickList.options[selectedItem] = null;
	}
	// Set selectedIndex of Picklist to item above the one just removed 
	// (or to the top of the list if we were already there)
	if (selectedItem>0)
	{
		oPickList.selectedIndex = selectedItem-1;
	}
	else
	{
		oPickList.selectedIndex = 0;
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// DoMoveUp(object oPickList) - Moves the currently selected option from 
//	passed-in Select List Up one line
//
////////////////////////////////////////////////////////////////////////////////
function DoMoveUp(oPickList) 
{
	var selectedItem	= oPickList.selectedIndex;
	if (selectedItem > 0) 
	{
		// If we're not already at the top of the list ...
		var theOption = oPickList[selectedItem];
		var theOptionB4 = oPickList[selectedItem-1];
		for (prop in theOption) 
		{
			if ((prop=="text") || (prop=="value")) 
			{
				// Swap the salient properties of the two options
				var theOptionProp = theOption[prop];
				theOption[prop] = theOptionB4[prop];
				theOptionB4[prop] = theOptionProp;
			}
		}
		oPickList.selectedIndex = selectedItem - 1;
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// DoMoveDown(object oPickList) - Moves the currently selected option from 
//	passed-in Select List Up one line
//
////////////////////////////////////////////////////////////////////////////////
function DoMoveDown(oPickList) 
{
	var selectedItem	= oPickList.selectedIndex;
	if ( (selectedItem > -1) && (selectedItem < oPickList.length-1) ) 
	{
		var theOption = oPickList[selectedItem];
		var theOptionB4 = oPickList[selectedItem+1];
		for (prop in theOption) 
		{
			if ((prop=="text") || (prop=="value")) 
			{
				// Swap the salient properties of the two options
				var theOptionProp = theOption[prop];
				theOption[prop] = theOptionB4[prop];
				theOptionB4[prop] = theOptionProp;
			}
		}
		oPickList.selectedIndex = selectedItem + 1;
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// DoFindIndex(object oPickList, string anOptionValue, string anOptionText)
// returns index value from a passed-in oPickList for either an 
// optionValue or optionText (both OPTIONAL)
//
////////////////////////////////////////////////////////////////////////////////
 function DoFindIndex(oPickList, anOptionValue, anOptionText) 
{
	var theIndex = -1;
	if (oPickList.length) 
	{
		for (var i=0; i<oPickList.length; i++) 
		{
			if (anOptionText!==undefined) 
			{
				// Search based on option.text if we have anOptionText
				if (oPickList[i].text == anOptionText) 
				{
					theIndex=i;
					break;
				}
			} 
			else 
			{
				// otherwise, search based on option.value
				if (oPickList[i].value == anOptionValue) 
				{
					theIndex=i;
					break;
				}
			}
		}
	}
	return theIndex;
 }

////////////////////////////////////////////////////////////////////////////////
//
// SETTINGS UTILITIES
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
// saveSetting(string theSettingName, string aSettingValue)- Saves a Setting
//
////////////////////////////////////////////////////////////////////////////////
function saveSetting(theSettingName, aSettingValue) 
{
	try
	{
		if (gGadgetMode) 
		{
			// If we are in "Gadget Mode", save off the value using that mechanism
			System.Gadget.Settings.write(theSettingName, aSettingValue);
		} 
		else 
		{
			// If we are in "development mode" - use a cookie instead
			writeCookie(theSettingName,aSettingValue);
		}
	}
	catch (objException) 
	{
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// readSetting(string theSettingName)- Reads a Setting
//
////////////////////////////////////////////////////////////////////////////////
function readSetting(theSettingName) 
{
	var retVal = "";
	try
	{
		if (gGadgetMode) 
		{
			// If we are in "Gadget Mode", read value using that mechanism
			retVal = System.Gadget.Settings.read(theSettingName);
		} 
		else 
		{
			// If we are in "development mode" - read from a cookie instead
			retVal = readCookie(theSettingName);
		}
	}
	catch (objException) 
	{
		retVal = null;
	}
	return retVal;
}
////////////////////////////////////////////////////////////////////////////////
//
// writeCookie(string theCookieName, string aCookieValue) - Writes a cookie
//
////////////////////////////////////////////////////////////////////////////////
function writeCookie(theCookieName, aCookieValue) 
{
	var theCookieExpirationDate = new Date ();
	// Set cookie to expire in 1 year
	theCookieExpirationDate.setYear(theCookieExpirationDate.getYear() + 1);
	// Convert to GMT
	theCookieExpirationDate = theCookieExpirationDate.toGMTString ();
	document.cookie = escape(theCookieName) + "=" + escape(aCookieValue) + "; expires=" + theCookieExpirationDate;
}
////////////////////////////////////////////////////////////////////////////////
//
// readCookie(string theCookieName) - Reads a cookie
//
////////////////////////////////////////////////////////////////////////////////
function readCookie(theCookieName) 
{
	var aCookieValue = "";
	var theCookies = ("" + document.cookie).split("; ");
	for (var i=0; i < theCookies.length; i++)
	{
		if (theCookies[i].indexOf("=") > -1) 
		{	
			// If we have a non-empty cookie, extract the Cookie Name
			var aCookieName = theCookies[i].split("=")[0];
			if (aCookieName == theCookieName) 
			{
				// If this is the one we're looking for, set that as our return value and get out
				aCookieValue = theCookies[i].split("=")[1];	
				break;
			}
		}
	}
	return aCookieValue; 
}

////////////////////////////////////////////////////////////////////////////////
//
// GENERAL UTILITIES
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
// showOrHide([object|string] oHTMLElement, boolean bShowOrHide)
//	Shows or Hides an HTMLElement.	
//	You can pass in the id to an object or the actual object
//
////////////////////////////////////////////////////////////////////////////////
function showOrHide(oHTMLElement, bShowOrHide) 
{
	try 
	{
		if (typeof(oHTMLElement)=="string") 
		{ 
			oHTMLElement = document.getElementById(oHTMLElement); 
		}
		if (oHTMLElement && oHTMLElement.style) 
		{
			if (bShowOrHide == 'inherit') 
			{
				oHTMLElement.style.visibility = 'inherit';
			} 
			else 
			{
				if (bShowOrHide)
				{
					oHTMLElement.style.visibility = 'visible';
				}
				else
				{
					oHTMLElement.style.visibility = 'hidden';
				}
				try 
				{
					if (bShowOrHide)
					{
						oHTMLElement.style.display = 'block';
					}
					else
					{
						oHTMLElement.style.display = 'none';
					}
				}
				catch (ex) 
				{
				}
			}
		}
	}
	catch (ex) 
	{
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// setImage(oHTMLElement, imageURL) - places an image into an element
//	applying alphaImageLoader as necessary
//
////////////////////////////////////////////////////////////////////////////////
function setImage(oHTMLElement, imageURL) {	
	if (typeof(oHTMLElement)=="string") 
	{ 
		oHTMLElement = document.getElementById(oHTMLElement); 
	}
	if (gGadgetMode) 
	{
		oHTMLElement.src = imageURL;
	} 
	else 
	{
		oHTMLElement.style.backgroundImage = "url(images/1px.gif)";
		oHTMLElement.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + imageURL + "',sizingMethod='scale')";
	}
}
////////////////////////////////////////////////////////////////////////////////
//
// getSpinner( string spinnerDivID ) - establishes a Spinner Object.
//
////////////////////////////////////////////////////////////////////////////////
function getSpinner( spinnerDivID ) 
{
	var self = this;
	this.id = spinnerDivID;
	this.parentDiv = document.getElementById( self.id );
	this.fps = 1000/30;	
	with ( this.parentDiv.style ) 
	{
		fontSize=0;
		posWidth=16;
		posHeight=16;
		backgroundImage = 'url("images/activity16v.png")';
		backgroundPositionY = 0;
	}
	this.hide	= function() 
	{ 
		self.parentDiv.style.display='none';	
	}
	this.show	= function() 
	{ 
		self.parentDiv.style.display='block'; 
	}
	this.stop	= function() 
	{ 
		clearInterval( self.animationInterval ); 
	}
	this.start = function() 
	{
		clearInterval( self.animationInterval );
		this.animationInterval = setInterval( 'animateSpinner(' + self.id + ')', 30 );
	}
} 
////////////////////////////////////////////////////////////////////////////////
//
// animateSpinner( oHTMLElement spinnerDiv ) - animates spinner image
//
////////////////////////////////////////////////////////////////////////////////
function animateSpinner(spinnerDiv) 
{
	spinnerDiv.style.backgroundPositionY=parseInt(spinnerDiv.style.backgroundPositionY)-16; 
}
////////////////////////////////////////////////////////////////////////////////
//
// isVisible([object|string] oHTMLElement) - boolean of if Object visible.
// You can pass in the id to an object or the actual object
//
////////////////////////////////////////////////////////////////////////////////
function isVisible(oHTMLElement) 
{
	var bIsVisible = true;
	if (typeof(oHTMLElement)=="string") 
	{ 
		oHTMLElement = document.getElementById(oHTMLElement); 
	}
	if (oHTMLElement && oHTMLElement.style) 
	{
		bIsVisible =	(oHTMLElement.style.display=='block');
	}
	return bIsVisible;
}
////////////////////////////////////////////////////////////////////////////////
//
// getLocalizedString(string key) - returns localized string.
//	Defaults to English version if not found
//
////////////////////////////////////////////////////////////////////////////////
function getLocalizedString(key) 
{
 var retVal = key;
 try 
 {
	retVal = L_localizedStrings_Text[key];
	if (retVal === undefined) 
	{
		retVal = key
	}
 }
 catch (ex) 
 {
 }
 return retVal;
}
////////////////////////////////////////////////////////////////////////////////
//
// commify(string aNumber) - returns a number properly "commified" 
//	with a comma every three digits nnn,nnn,nnn.nn
//
////////////////////////////////////////////////////////////////////////////////
function commify(aNumber) {
	var retVal = aNumber;
	var theDecimalValue="";
	var oRegExp = new RegExp("[0-9]");
	if (aNumber.length) 
	{
		if (aNumber.lastIndexOf(".") > -1) 
		{
			// If we have a number with decimal places, save off the value to the 
			// right of the decimal place for later use
			theDecimalValue = aNumber.substring(aNumber.lastIndexOf("."), aNumber.length);
			// Strip off the decimal portion of the number
			retVal = retVal.substring(0, retVal.lastIndexOf("."));
		}
		// Reverse the number
		var aNewNumber = "";
		for (var i=0;i<retVal.length;i++) 
		{
			var aChar = retVal.substring(i,i+1);
			if (oRegExp.exec(aChar)) 
			{ 
				// So long as we have a numeric character, use it. Has the 
				// effect of stripping out any previous formatting from the number.
				aNewNumber = aChar + aNewNumber;
			}
		}
		// Rebuild number from the beginning, adding a comma every 3 characters
		retVal = "";
		for (var i=0;i<aNewNumber.length;i++) 
		{
			retVal = aNewNumber.substring(i,i+1) + retVal;
			if (((i+1) % 3 == 0) && (i+1<aNewNumber.length)) 
			{
				retVal = ',' + retVal;
			}
		}
		// Add the decimal value back to the end of the string
		retVal += theDecimalValue;
	}
	return retVal;
}
////////////////////////////////////////////////////////////////////////////////
//
// cleanURL(string aURL) - formats URLS like 
//	http://www.microsoft.com/gadgets.html into 
//	http:\/\/www.microsoft.com\/gadgets.html.	
// Useful if Hyperlinks myst be passed around as strings via Javascript 
//
////////////////////////////////////////////////////////////////////////////////
function cleanURL(aURL) 
{
	return aURL.split('/').join('\\/');
}
////////////////////////////////////////////////////////////////////////////////
//
// URLDecode(string aString) - decodes URLEncoded strings
//
////////////////////////////////////////////////////////////////////////////////
function URLDecode(aString) 
{
	aString = aString.replace("%2F", "/");
	aString = aString.replace("%7C", "|");
	aString = aString.replace("%3F", "?");
	aString = aString.replace("%21", "!");
	aString = aString.replace("%40", "@");
	aString = aString.replace("%5C", "");
	aString = aString.replace("%23", "#");
	aString = aString.replace("%24", "$");
	aString = aString.replace("%5E", "^");
	aString = aString.replace("%26", "&");
	aString = aString.replace("%25", "%");
	aString = aString.replace("%2A", "*");
	aString = aString.replace("%28", "(");
	aString = aString.replace("%29", ")");
	aString = aString.replace("%7D", "}");
	aString = aString.replace("%3A", ":");
	aString = aString.replace("%2C", ",");
	aString = aString.replace("%7B", "{");
	aString = aString.replace("%2B", "+");
	aString = aString.replace("%2E", ".");
	aString = aString.replace("%2D", "-");
	aString = aString.replace("%7E", "~");
	aString = aString.replace("%2D", "-");
	aString = aString.replace("%5B", "[");
	aString = aString.replace("%5F", "_");
	aString = aString.replace("%5D", "]");
	aString = aString.replace("%60", "`"); 
	aString = aString.replace("%3D", "=");
	aString = aString.replace("%27", "'");
	aString = aString.replace("+", " ");
	aString = aString.replace("%22", '"');
	return aString;
}
////////////////////////////////////////////////////////////////////////////////
//
// function setCaretPos(anInputElement, int startPoint, int endPoint)
//	sets cursor selection within an input element
//
////////////////////////////////////////////////////////////////////////////////
function setCaretPos( anInputElement, startPoint, endPoint ) 
{
	var startPoint = startPoint || 0;
	var endPoint	= endPoint || startPoint;
	var theInputElement = anInputElement.createTextRange();
	with ( theInputElement ) 
	{
		collapse(true);
		moveEnd('character', endPoint);
		moveStart('character', startPoint);
		select();
	} 
	theInputElement = null;	
}

////////////////////////////////////////////////////////////////////////////////
//
// LOCATION AWARE API UTILITIES
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
// getAPILatLongReport( )	- returns a location report (latitude/longitude)
//	throws an exception if values out of acceptable range
//	polling report from api can also throw an exception on internal error
////////////////////////////////////////////////////////////////////////////////
function getAPILatLongReport( MicrosoftGadgetObject )
{
	var report = MicrosoftGadgetObject.factory.LatLongReport;
	if ( !( (report.Latitude >= -90) && (report.Latitude <= 90) && (report.Longitude <= 180) && (report.Longitude >= -180) ) )
	{
		throw "Latitude/Longitude outside acceptable range";
	}
	return report;
}

////////////////////////////////////////////////////////////////////////////////
//
// getAPIStatus( )	- returns current status from location API
//	in case of exception, returns -1
////////////////////////////////////////////////////////////////////////////////
function getAPIStatus( MicrosoftGadgetObject )
{
	var status = -1;

	try
	{
		status = MicrosoftGadgetObject.factory.Status;
	}
	catch ( err )
	{
		System.Debug.outputString ( "API returned error, polling for status. Gadget state indeterminate" );
	}

	return status;
}


////////////////////////////////////////////////////////////////////////////////
//
// DistanceMovedSinceLastPositionUpdate( )	- returns distance since last position update
////////////////////////////////////////////////////////////////////////////////
function DistanceMovedSinceLastPositionUpdate(positionPrevious, positionCurrent)
{
    // KNOWN CONSTANTS
    var degreesToRadians = Math.PI / 180;
    var earthRadius = 6371; // approximation in kilometers assuming earth to be spherical

    // CONVERT LATITUDE AND LONGITUDE VALUES TO RADIANS
    var previousRadianLat = positionPrevious.Latitude * degreesToRadians;
    var previousRadianLong = positionPrevious.Longitude * degreesToRadians;
    var currentRadianLat = positionCurrent.Latitude * degreesToRadians;
    var currentRadianLong = positionCurrent.Longitude * degreesToRadians;

    // CALCULATE RADIAN DELTA BETWEEN THE TWO POSITIONS
    var latitudeRadianDelta = currentRadianLat - previousRadianLat;
    var longitudeRadianDelta = currentRadianLong - previousRadianLong; 

    var expr1 = ( Math.sin(latitudeRadianDelta / 2) * Math.sin(latitudeRadianDelta / 2) ) +
                ( Math.cos(previousRadianLat) * Math.cos(currentRadianLat) * Math.sin(longitudeRadianDelta/2) * Math.sin(longitudeRadianDelta/2) );
    var expr2 = 2 * Math.atan2( Math.sqrt( expr1 ), Math.sqrt( 1 - expr1 ) );
    var distanceValue = earthRadius * expr2;

    return distanceValue;
}


////////////////////////////////////////////////////////////////////////////////
//
// CONSTANTS
//
////////////////////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////////////////////
	//
	// GADGET STATES FOR LOCATION AWARENESS
	//
	////////////////////////////////////////////////////////////////////////////////

	var LOCATION_SENSING_STATE_DISABLED = 0;
	var LOCATION_SENSING_STATE_ERROR_AUTO = 1;
	var LOCATION_SENSING_STATE_ERROR_MANUAL = 2;
	var LOCATION_SENSING_STATE_OK_AUTO = 3;
	var LOCATION_SENSING_STATE_OK_MANUAL = 4;
	var LOCATION_SENSING_STATE_DISCONNECTED_AUTO = 5;
	var LOCATION_SENSING_STATE_DISCONNECTED_MANUAL = 6;
	var LOCATION_SENSING_STATE_INVALID = 7;

	var LOCATION_SENSING_VALID_STATES_ARRAY = new Array( LOCATION_SENSING_STATE_DISABLED ,
	LOCATION_SENSING_STATE_ERROR_AUTO ,
	LOCATION_SENSING_STATE_ERROR_MANUAL ,
	LOCATION_SENSING_STATE_OK_AUTO ,
	LOCATION_SENSING_STATE_OK_MANUAL ,
	LOCATION_SENSING_STATE_DISCONNECTED_AUTO ,
	LOCATION_SENSING_STATE_DISCONNECTED_MANUAL
 );

	var LOCATION_SENSING_MANUAL_STATES_ARRAY = new Array( LOCATION_SENSING_STATE_ERROR_MANUAL ,
LOCATION_SENSING_STATE_OK_MANUAL ,
LOCATION_SENSING_STATE_DISCONNECTED_MANUAL
 );

	var LOCATION_SENSING_AUTO_STATES_ARRAY = new Array(	LOCATION_SENSING_STATE_ERROR_AUTO ,
	LOCATION_SENSING_STATE_OK_AUTO ,
	LOCATION_SENSING_STATE_DISCONNECTED_AUTO );


////////////////////////////////////////////////////////////////////////////////
//
// ARRAY UTILITIES
//
////////////////////////////////////////////////////////////////////////////////
if ( !Array.prototype.exists )
{
	Array.prototype.exists = function( elementToSearch )
	{
		var numElements = this.length;

		var counter;

		for ( counter = 0 ; counter < numElements ; counter++ )
		{
			if ( counter in this && this[counter] === elementToSearch )
				return (true);
		}

		return (false);
	};
}

