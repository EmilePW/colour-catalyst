import HexInput from './HexInput';
import RGBInput from './RGBInput';

	let hexInput = document.querySelector("#hex"),
			rgbInput = document.querySelector("#rgb"),
			colourCard = document.querySelector("#colour-card");

// UI Events
	hexInput.addEventListener("keyup", function(e) {
		// Conversion to RGB and colour change upon hexadecimal input
		let hex = convertToCaps( this.value );

		rgbInput.value = convertHexToRGB(hex).join(",");
		colourCard.style.background = "#" + hex;
	});

	rgbInput.addEventListener("keyup", function(e) {
		// Conversion to hexadecimal and colour change upon rgb input
		let rgb = this.value.split(",");

		hexInput.value = convertRGBToHex(rgb).join("");
		colourCard.style.background = "rgb(" + rgb.join(",") + ")";
	});


// Converter functionality
	function isAlphanumeric(char) {
		// Check whether a character is a number or letter with ASCII codes
		let ascii = char.charCodeAt(0);

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

	let hexLookup = {
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

	function invertHexLookup() {
		// Create denary to hexagonal conversion
		let invertedLookup = {};
		let hexKeys = Object.keys( hexLookup );

		hexKeys.forEach( function(val) {
			invertedLookup[ hexLookup[val] ] = val;
		});

		return invertedLookup;
	}

	function convertToCaps(str) {
		// Convert string to all uppercase
		str = str.split("").map( function(char) {
			if ( isNaN(char) ) {
				return char.toUpperCase();
			} 
			else {
				return char;
			}
		});

		return str.join("");
	}

	function convertHexToRGB(str) {
		
		if ( isValidHex(str) ) {

			// Convert a valid hexadecimal string to an rgb string
			if ( str.length === 3 ) {
				str = str.concat( str );
			}

			function twoPartition(string) {
				// Split a strig into two-sized partitions
				let partitionedArray = [];	
				
				for ( let i = 0; i < string.length; i += 2 ) {
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
		else {
			// Return empty value if not valid
			return [""];
		}
	}

	function convertRGBToHex(arr) {
		if ( isValidRGB(arr) ) {
			// Convert an [r, g, b] array to hexadecimal
			let hexKeys = Object.keys( hexLookup );

			arr = arr.map( function(val) {
				return invertHexLookup()[ Math.floor( val / 16 ) ].concat( invertHexLookup()[ val % 16 ] );
			});

			return arr;
		}
		else {
			// Return empty value if not valid
			return [""];
		}
	}

export { convertHexToRGB, convertRGBToHex };