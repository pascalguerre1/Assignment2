/*1. Write the function printInt(n) taking one parameter n and 
print all natural numbers from 1 to n in console.*/

function printInt(n){
	var answer = 0
	for(var i = 1; i <= n; i++) {
		answer = answer + 1;
		console.log(answer);
	}
}
//test
// printInt(5);
// printInt(6);
// printInt(7);
// ----------------------------------------------------------

/*2.Write the function printIntRev(n) taking one parameter n 
and  print all natural numbers in reverse (from n to 1) in console*/

function printIntRev(n){
	var answer = n + 1
	for(var i = n; i > 0; i--) {
		answer = answer - 1;
		console.log(answer);
	}
}
//test
// printIntRev(5);
// printIntRev(6);
// printIntRev(7);
// ----------------------------------------------------------

/*3.Write the function checkInput(x) taking one parameter x and return the string ‘number’ 
if x is a number; return the string ‘string’ if x is a string; and return boolean 
if x is a boolean. Otherwise returns -1. 
E.g. checkInput(5) => ‘number’
       checkInput(‘hello’)=> ‘string’
       checkInput(‘5’) => ‘string’
       checkInput(true)=> boolean
       checkInput(none) => -1
*/

function checkInput(x) {
	if (x + 0 === x) {
		return 'number';
	} else if (x === true || x === false) {
		return 'boolean';
	} else if (x === undefined) { // 'undefined' is used to fill the condition of 'no input'
		return -1;
	} else {
		return 'string';
	}
}
//test
// console.log(checkInput(5));
// console.log(checkInput('abc'));
// console.log(checkInput(true));
// console.log(checkInput(false));
// console.log(checkInput());
// ----------------------------------------------------------

/*4.Write the function simpleEvenAdding(num) taking a number and add up 
all the even numbers from 1 to num. 
    Examples: simpleEvenAdding(5) => 6 (because 2+4 = 6)
           simpleEvenAdding(10) => 30 (because 2+4+6+8+10 = 30)
           simpleEvenAdding(11) => 30 (because 2+4+6+8+10 = 30)
           simpleEvenAdding(1) => 0
           simpleEvenAdding(0) => 0
*/

function simpleEvenAdding(num) {
	var answer = 0
	for (var i = 2; i <= num; i = i+2) {
		answer = answer + i;
	}
	return answer;
}
//test
// console.log(simpleEvenAdding(5));
// console.log(simpleEvenAdding(10));
// console.log(simpleEvenAdding(10));
// console.log(simpleEvenAdding(1));
// console.log(simpleEvenAdding(0));
// ----------------------------------------------------------

/*5.Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. 
The given words will be separated by only one space.
    Examples:
    letterCapitalize(“hello world”) = “Hello Word”
letterCapitalize(“you cannot find the answer online”) = “You Cannot Find The Answer Online”
    
Hint: There is a built-in function in javaScript that change string into uppercase. 
There is also function to separate string into an array of characters.*/

function letterCapitalize(str) {
	var arr = []
	var str = str.split('')
	for(var i = 0; i < str.length; i++) {
		if (i == 0 || str[i-1] == " ") { // if i == 0 then it's the first letter; and i-1 precedes the 1st letter after a space
			answer = str[i].toUpperCase();
		} else {
			answer = str[i];
		}
		arr.push(answer);
	}
	return arr.join('');
}
//test
// console.log(letterCapitalize('hello world'));
// console.log(letterCapitalize('you cannot find the answer online'));
// console.log(letterCapitalize('what is your favorite movie'));
// ----------------------------------------------------------

/*6.Write the function simpleReverse(str) taking a string and return the string in reversed order. 
    Examples:
        simpleReverse(‘hello’) => ‘olleh’
        simpleReverse(‘I Love Code’) => ‘edoC evoL I’

Hint: Think of how you can loop through a string or array of characters backwards to produce a new string*/

function simpleReverse(str) {
	var str = str.split('')
	var revstr = [] // created a new array
	for(var i = str.length-1; i >= 0; i--) {
		revstr.push (str[i]); // adding items in reverse order into array
	}
	return revstr;
}
//test
// console.log(simpleReverse('hello'));
// console.log(simpleReverse('I Love Code'));
// ----------------------------------------------------------

/*7.Write the function findDiff(arr) taking a array of numbers as 
parameter and return the difference between the maximum number and 
the minimum number (max - min). 
	Examples:
	findDiff([1,2,4,6,20, 3]) => 19 (Because 20 - 1 = 19)
	findDiff([24, 22, 23, 22, 24]) => 2 (Because 24 - 22 = 2)
	findDiff([1, 1, 1, 1, 1]) => 0 
	findDiff([1]) => 0;
	findDiff([]) => 0;*/

function findDiff(arr){
	var maxi = Math.max.apply(null, arr); // to find the max of an array of numbers
	var mini = Math.min.apply(null, arr); // to find the min of an array of numbers
	var diff = maxi - mini
	if (diff === -Infinity) {
		return 0;
	} else {
		return diff;
	}	
}
//test
// console.log(findDiff([1,2,4,6,20, 3]));
// console.log(findDiff([24, 22, 23, 22, 24]));
// console.log(findDiff([1, 1, 1, 1, 1]));
// console.log(findDiff([1]));
// console.log(findDiff([]));
// ----------------------------------------------------------


/*8.Write the function timeConvert(num) taking a number as 
parameter and return the number of hours and minutes the parameter 
converts to. Separate the number of hours and minutes with a colon.
	Example:
		timeConvert(61) => 1:1
		timeConvert(63) => 1:3
		timeConvert(120)=> 2:0
		timeConvert(59)=> 0:59
    	Hints: Dividing and modulo the number 60.*/

function timeConvert(num) {
	var hours = (num / 60);// to get the hour
	var rhours = Math.floor(hours);// to get whole number(integer) for the hour
	var minutes = (hours - rhours)*60;// to convert the remainder from the hour back to min
	var rminutes = Math.round(minutes);// to round the minutes
	var time =  rhours + ":" + rminutes// to create the format of the result
	return time;
}
//test
// console.log(timeConvert(61));
// console.log(timeConvert(63));
// console.log(timeConvert(120));
// console.log(timeConvert(59));
// ----------------------------------------------------------

/*9.Write the function findStr(str, long) taking two strings as 
parameters and return how many str you can find in long. 
Assume Str is not empty string.
Example:
	findStr(“hi”, “dasdhidasdahidashi”) => 3
	findStr(“o”, “daodo”) => 2
	findStr(“ha”,”abcde”)=> 0*/

function findStr(str, long){
	var res = new RegExp(str, 'g');// to create an the expression to be matched with a text pattern
	try { // no match produce an error therefore i used try and catch to handle it
		var count = long.match(res).length; // to get the count of matched pattern
		return count;
	}
	catch(error) {
		return 0;
	}
}
//test
// console.log(findStr('hi', 'dasdhidasdahidashidahi'));
// console.log(findStr('o', 'daodo'));
// console.log(findStr('ha','abcde'));
// console.log(findStr('to','asdtoasjhto'));
// ----------------------------------------------------------

/*10.Write the function selfDividingNumbers(left, right) taking two number 
bound as parameters and returns an array of every possible self 
dividing number between them, including the bounds. 

Hint: A self-dividing number is a number that is divisible by every 
digit it contains. For example, 128 is a self-dividing number 
because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 
Examples:
	selfDividingNumbers(1, 22) => [1,2,3,4,5,6,7,8,9,11,12,15,22]
	selfDividingNumbers(1, 10) => [1,2,3,4,5,6,7,8,9]
selfDividingNumbers(12, 21) => [12, 15] */

function selfDividingNumbers(left, right) {
    var selfDiv = []  //create the output array
    for(left; left < right +1; left++) { // do the loop for item between left and right
        for(var i=0; i<left.toString().length; i++) {
            if(left % left.toString().charAt(i) === 0 && left.toString().charAt(i) !== 0 ) {// conditions for self dividing numbers
                result = true;
            }
            else {
                result = false;
                break;
            }               
        }
        if(result == true)
            selfDiv.push(left);// add the result into the output array
    } 
    return selfDiv;
}
// test
// console.log(selfDividingNumbers(2, 22));
// console.log(selfDividingNumbers(1, 10));
// console.log(selfDividingNumbers(12, 21));
// ----------------------------------------------------------

/*Extra Credit:
Write the function moveZeros(nums) taking an array of numbers and 
move all 0’s to the end of it while maintaining the relative order 
of the non-zero elements. For example:
moveZeros([0,1,0,3,12]) => [1,3,12,0,0]
moveZeros([1,2,0,0,2,312,33,0,0]=>[1,2,2,312,33,0,0,0,0]
moveZeros([0,0,0])=>[0,0,0]
moveZeros([1,2,312,11,2]) => [1,2,312,11,2]*/

function moveZeros(nums) {
	var arr = nums.slice();// to make copy of the original array
    //nums array
    for(var i = nums.length; i >= 0 ; i--) {
        if(nums[i] == 0) {
        	a = nums.splice(i,1); // to remove 0 item from nums array
         }
	}
	//arr array
	for(var i = arr.length; i >= 0 ; i--) {
        if(arr[i] != 0) {
        	a = arr.splice(i,1); // to remove items != 0 from arr array
        }
	}
	newArray = nums.concat(arr); // to combine both arrays
	return newArray;
} 
//test
// console.log(moveZeros([0,1,0,3,12]));
// console.log(moveZeros([1,2,0,0,2,312,33,0,0]));
// console.log(moveZeros([0,0,0]));
// console.log(moveZeros([1,2,312,11,2]));