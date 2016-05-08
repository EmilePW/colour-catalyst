// ES6

// DOM manipulation
	let colourInput = document.querySelector('#colour-input'),
		colourOutput = document.querySelector('#colour-ouptut'),
		convertButton = document.querySelector('#convert-button'),
		colourOfInput = document.querySelector('#colour-of-input'),
		colourOfOutput = document.querySelector('#colour-of-output');

// UI events
	colourInput.addEventListener('input', function(e) {
		colourOfInput.style.background = '#' + this.value;
	})

	convertButton.addEventListener('click', function(e) {
		colourOutput.value = getComplementary( colourInput.value );

		colourOfOutput.style.background = 'rgb(' + colourOutput.value + ')';
	})


// Imports
	import { convertHexToRGB, convertRGBToHex } from './converter';

// Functionality
function getOpposite(colour) {
	colour = convertHexToRGB(colour);

	if ( !colour.join("") ) {
		return false;
	}
	else {
		colour = colour.map(function(val) {
			return 255 - val;
		});

		return colour.join(',');
	}
}

function getComplementary(colour) {
	// colour needs to be converted to RYB before opposite is found
}
