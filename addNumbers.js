'use strict'

var numbers = [];


function addNumbers (numbers){
	if (Array.isArray(numbers) === false) {
		throw new Error ("numbers must be in an array");
	};
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		
		total += numbers[i];
	}

	return total;
}


function testFunc() {

	console.assert(addNumbers([1,2,3,4,5]) === 15);
}

