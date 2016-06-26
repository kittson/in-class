// Instructions: 
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it. 
// HINT: You should not need to change *that much* code. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require('geocoder');
var inquirer = require('inquirer');

// Take in the command line arguments
var nodeArgs = process.argv;

// Create an empty string for holding the address
var address = "";


inquirer.prompt([

	{
		type: "input",
		message: "What City, State to know?",
		name: "place"
	},
	{
		type: "confirm",
		message: "Are you sure:",
		name: "confirm",
		default: true

	}
]).then(function (user) {
	console.log(JSON.stringify(user, null, 2));

	if (user.confirm){
		geocoder.geocode(user.place, function(err, data){
			console.log(JSON.stringify(data, null, 2));
		});
	}
	else {

		console.log("");
		console.log("");
		console.log("That's okay, come again when you are more sure.");
		console.log("");
		console.log("");

	}

});

// Capture all the words in the address (again ignoring the first two Node arguments)
/*for (var i=2; i<nodeArgs.length; i++){

	// Build a string with the address.
	address = address + "" + nodeArgs[i];
	console.log(address);

}*/

// Then use the Google Geocoder to geocode the address
geocoder.geocode(address, function(err, data){

	// Then console log the result and stringify it.
	// Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
	// See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
	console.log(JSON.stringify(data, null, 2));
});

