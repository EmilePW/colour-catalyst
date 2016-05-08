'use strict';

function generateRandomRGBColours(num) {
	var colours = [];

	for (var i = 0; i < num; i++) {
		var colour = [];

		for (var j = 0; j < 3; j++) {
			// Generate random integer between 0 and 255
			colour.push( Math.floor( Math.random() * 256 ) );
		}

		colours.push( colour );
	}

	return colours;
}

function generateRandomColourScheme() {
	var randomColours = generateRandomRGBColours(5);

	for (var i = 0; i < randomColours.length; i++) {
		var colourInScheme = document.getElementById('colour-' + (i + 1));

		colourInScheme.style.backgroundColor = 'rgb(' + randomColours[i] + ')';
		colourInScheme.innerHTML = randomColours[i].join(', ');
	}
}