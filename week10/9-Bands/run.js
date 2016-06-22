var bands = require('./bands.js');
console.log(bands);
console.log(bands.theBands);
for (var key in bands.theBands) {
	console.log("A " + key + " band is " + bands.theBands[key] + ".");
}


