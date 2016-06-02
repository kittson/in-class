
// code bits to check
// $.grep
//from http://code.tutsplus.com/tutorials/quick-tip-fully-understanding-grep--net-9385

var nums = '1,2,3,4,5,6,7,8,9,10'.split(',');
 
nums = $.grep(nums, function(num, index) {
  // num = the current value for the item in the array
  // index = the index of the item in the array
  return num > 5; // returns a boolean
});
 
console.log(nums) // 6,7,8,9,10

var arr = '1,2,3,4,five,six,seven,8,9,ten'.split(',');
 
arr = $.grep(arr, function(item, index) {
  // simply find if the current item, when passed to the isNaN, 
  // returns true or false. If false, get rid of it!
  return !isNaN(item); 
});
 
console.log(arr); // 1,2,3,4,8,9

/* var grabWord = {
		for ( var i = 0; i < targetLetters.length; i++) {
			function assignKeys(i) {
					
					return(pp:[i, targetLetters[i]]);

			}

		}
	} */

// from hangman
	if ( isLetter(userInput) ) {
			
			if ( targetLetters.indexOf(userInput)  > -1) {
				storeGoodLetters.push(userInput);
				console.log( "userInput " + userInput);
				console.log("all good letters " + storeGoodLetters);
				console.log( "which letter " + whichLetter(userInput));
				pos = targetLetters.indexOf(userInput);
				writePos(pos);
				console.log("which position " + pos);
				console.log("old targetLetters is ", targetLetters);
				targetLetters.splice(pos, 1);
				console.log("new targetLetters is ", targetLetters);
				
			}
			else {
				storeBadLetters.push(userInput);
				console.log(userInput);
				console.log(storeBadLetters);
			}
			storeAllLetters.push(userInput);
		}


//three little functions
	function isLetter(str) {
		return str.length === 1 && str.match(/[a-z]/i);
	}
	function whichLetter(str) {
		return str.match(/[a-z]/);
	}
	function getAllPositions(arr, val) {
		var indexes = [], i = -1;
		while ((i = arr.indexOf(val, i+1)) != -1){
			indexes.push(i);
		}
		return indexes;
	}
	function isInArray(value, array) {
	  return array.indexOf(value) > -1;
	}