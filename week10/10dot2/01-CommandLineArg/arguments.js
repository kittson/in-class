// process.argv will print out any command line arguments
//console.log(process.argv)

var firstArg = process.argv[2];
var secondArg = process.argv[3];

//console.log("first " + firstArg + " second " + secondArg);

if( firstArg === secondArg ){
	console.log("the same");	
}
else {
	console.log("not the same");	
};

if( firstArg % 7 == 0 && secondArg % 7 == 0){	
	console.log("div by 7");
}
else {
	console.log("not div");
};
