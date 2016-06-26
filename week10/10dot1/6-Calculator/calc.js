var mathThing = process.argv[2];
var firstNum = parseFloat(process.argv[3]);
var secondNum = parseFloat(process.argv[4]);
var results;

if( isNaN(firstNum) || isNaN(secondNum)){
	console.log("Please enter some numbers");
	return;
};


	switch (mathThing) {
		
		case 'add': 
		results = firstNum+secondNum;
		console.log(results);           		
		break;
		case 'subtract': 
		results = firstNum-secondNum;
		console.log(results);
		break;
		case 'multiply': 
		results = firstNum*secondNum;
		console.log(results);
		break;
		case 'divide': 
		results = firstNum/secondNum;
		console.log(results);
		break;
		case 'expo': 
		results = Math.pow(firstNum,secondNum);
		console.log(results);
		break;
		default:
		console.log("Please enter an operand");
		break;
	};
