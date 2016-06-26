// process.argv will print out any command line arguments
console.log(process.argv)

var firstArg = process.argv[3];
var secondArg = process.argv[4];

console.log("first " + firstArg + " second " + secondArg);

if( firstArg === secondArg ){
	console.log("the same");
	return;
};
else {
	console.log("not the same");
	return;
};
