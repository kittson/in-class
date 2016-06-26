// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code. 
// ============================================================================================

var argNums = process.argv;
var nums = [];

for (var i = 2; i < argNums.length; i++) {
	//nums = argNums[i].;
	nums.push(parseFloat(argNums[i]));
	console.log(nums);
}
var a = nums;
function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
 
bubbleSort(a);
console.log("a " + a);

nums.sort(function(a, b) {return a-b});
console.log("nums from sort " + nums);