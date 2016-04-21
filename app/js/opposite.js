'use strict';

/* START Use ES6 Module To Import this Instead */
function isAlphanumeric(char) {
	// Check whether a character is a number or letter with ASCII codes
	var ascii = char.charCodeAt(0);

	if ( ascii >= 48 && ascii <= 57 ) {
		return true;
	}
	else if ( ascii >= 60 && ascii <= 90 ) {
		return true;
	}
	else if ( ascii >= 97 && ascii <= 122 ) {
		return true;
	}
	else {
		return false;
	}
}

function isValidHex(str) {
	// Remove hexadecimal hash if used
	str = str.replace("#", "");

	// Reject strings too long or short
	if ( str.length !== 6 ) {
		// convert three character pattern to six
		if ( str.length === 3 ) {
			str = str.concat(str);
		}
		else {
			return false;
		}
	}

	// Check all characters are alphanumeric
	return str.split("").join("") === str.split("").filter( isAlphanumeric ).join("");
}

function isValidRGB(arr) {
	// Check whether array is collectively a valid rgb
	if ( arr.length !== 3 ) {
		return false;
	}

	function numIsRGB(num) {
		return num >= 0 && num <= 255;
	}

	return arr.join(",") === arr.filter( numIsRGB ).join(",");
}

function convertHexToRGB(str) {
	// Convert a valid hexadecimal string to an rgb string
	if ( str.length === 3 ) {
		str = str.concat( str );
	}

	function twoPartition(string) {
		// Split a strig into two-sized partitions
		var partitionedArray = [];	
		
		for ( var i = 0; i < string.length; i += 2 ) {
			partitionedArray.push( string[i].concat( string[i + 1] ) );
		}

		return partitionedArray;
	}

	str = twoPartition(str);

	str = str.map( function(val) {
		return hexLookup[ val[0] ] * 16 + hexLookup[ val[1] ]; 
	});

	return str;
}

var hexLookup = {
	// List of hexagonal to denary conversion
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	A: 10,
	B: 11,
	C: 12,
	D: 13,
	E: 14,
	F: 15
};

/* END Use ES6 Module System to Import this Instead */



function getOpposite(colour) {
	if ( isValidHex(colour) ) {
		colour = convertHexToRGB(colour);
	}
	else if ( !isValidRGB(colour) ) {
		return false;
	}

	colour = colour.map(function(val) {
		return 255 - val;
	});

	return colour.join(',');
}

function getComplementary(colour) {
	if ( isValidHex(colour) ) {
		colour = convertHexToRGB(colour);
	}
	else if ( !isValidRGB(colour) ) {
		return false;
	}

	colour[0] = 255 - colour[0];

	colour = colour.map(function(val) {
		return 255 - val;
	});

	return colour.join(',');
}

var colourInput = document.querySelector('#colour-input');
var colourOutput = document.querySelector('#colour-ouptut');
var convertButton = document.querySelector('#convert-button');

var colourOfInput = document.querySelector('#colour-of-input');
var colourOfOutput = document.querySelector('#colour-of-output');

colourInput.addEventListener('input', function(e) {
	colourOfInput.style.background = '#' + this.value;
})

convertButton.addEventListener('click', function(e) {
	console.log( colourInput.value );



	colourOutput.value = getComplementary( colourInput.value );

	colourOfOutput.style.background = 'rgb(' + colourOutput.value + ')';

	console.log( colourOutput.value );
})