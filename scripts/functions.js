
(function(){
	"use strict";
/*
 * PROBLEM 1: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function checkData(inputString){
	if(inputString===""){
		document.getElementById("error").innerHTML="Invalid Input";
	}
	else if(inputString.length>3 || inputString.length<3 ){
		document.getElementById("error").innerHTML="false";
		document.getElementById("answer").innerHTML="";	
	}
	else {
		document.getElementById("error").innerHTML="";
		document.getElementById("answer").innerHTML="true";	
	}
}

document.getElementById("btn1").onclick = function(){
    var inputString = document.getElementById("input1").value;
    checkData(inputString);
};

/*
 * PROBLEM 2: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {
	if( a.toString()===""||b.toString()===""){
		document.getElementById("error2").innerHTML="Invalid Input";
		document.getElementById("answer2").innerHTML="";	
	}
	else{
		document.getElementById("error2").innerHTML="";
		var finalArray=a.concat(b);
		//this console.logs the concatenated arrays
		console.log(finalArray);
		//this turns finalArray into a product that can print the 
		//commas onto the html.  Otherwise, the inner two
		// items will be right next to each other
		var bestArray = "[" + finalArray.join(",") + "]";
		console.log(bestArray);
		document.getElementById("answer2").innerHTML=bestArray;
	}
}
document.getElementById("btn2").onclick = function(){
    var a = document.getElementById("array-a").value;
    	a = a.split(",");
    var b = document.getElementById("array-b").value;
    	b = b.split(",");
    concatenateArrays(a, b);
};

/*
 * PROBLEM 3: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	// checks for an input and makes sure its not a number
	if (noun===""||!isNaN(noun)){
		document.getElementById("error3").innerHTML="Invalid Input";
		document.getElementById("answer3").innerHTML="";
	}
	else{
		document.getElementById("error3").innerHTML="";
		// changes everything to lower case
		var Noun = noun.toLowerCase();
		// grabs the first character
		var firstLetter=(Noun.charAt(0));
		// capitalizes the first character
		var upperCase = firstLetter.toUpperCase();
		// grabs the rest of the noun and ensures its lowercase
		var tailNoun = Noun.toLowerCase().substr(1);
		// concantenates the two back together
		var proNoun = upperCase + tailNoun;
		// makes the final product available
		console.log(proNoun);
		document.getElementById("answer3").innerHTML=proNoun;
	}
}
document.getElementById("btn3").onclick = function(){
	var noun = document.getElementById("input3").value;
	fixProperNoun(noun);
};
/*
 * PROBLEM 4: (easy)
 * Write a function called `sortLetters` that 
 * returns a string that sorts all the letters 
 * from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input'
 * exception.
 */
function sortLetters(inputString) {
	if(inputString===''||!isNaN(inputString)){
		document.getElementById("error4").innerHTML="Invalid Input";
		document.getElementById("answer4").innerHTML="";
		}
		else{
			document.getElementById("input4").value="";
			document.getElementById("error4").innerHTML="";
// Source = http://stackoverflow.com/questions/5285995/how-do-you-sort-letters-in-javascript-with-capital-and-lowercase-letters-combin
			var orderedString =(inputString.split('').sort().join(''));
			document.getElementById("answer4").innerHTML=orderedString;
		}
}
document.getElementById("btn4").onclick = function(){
	var inputString = document.getElementById("input4").value;
	sortLetters(inputString);
};

/*
 * PROBLEM 5: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	console.log(typeof(integer));
	if (integer===""||isNaN(integer)){
		document.getElementById("error5").innerHTML="Invalid Input";
		document.getElementById("answer5").innerHTML="";
	}else{
		document.getElementById("error5").innerHTML="";
// stackoverflow.com/questions/9353929/get-the-absolute-value-of-a-number-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
		integer = integer*integer;
		integer = Math.sqrt(integer);
		document.getElementById("answer5").innerHTML=integer;
	}
}
document.getElementById("btn5").onclick = function(){
	var integer = document.getElementById("input5").value;
	absVal(integer);
};
/*
 * PROBLEM 6: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function myMin(a, b) {
	if( a===""||b===""||isNaN(a)||isNaN(b)){
		document.getElementById("error6").innerHTML="Invalid Input";
		document.getElementById("answer6").innerHTML="";
	}else if(parseInt(a)>parseInt(b)){
		document.getElementById("error6").innerHTML="";
		document.getElementById("answer6").innerHTML=b;
	}else{
		document.getElementById("error6").innerHTML="";
		document.getElementById("answer6").innerHTML=a;
	}
}
document.getElementById("btn6").onclick=function(){
	var a = document.getElementById("input6a").value;
	var b = document.getElementById("input6b").value;
	myMin(a, b);
};

/*
 * PROBLEM 7: (easy)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function getMonth(number){
  	switch(number){
  		case "1": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "January";
  			break;
  		case "2": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "February";
  			break;
  		case "3": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "March";
  			break;
  		case "4": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "April";
  			break;
  		case "5": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "May";
  			break;
  		case "6": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "June";
  			break;
  		case "7": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "July";
  			break;
  		case "8": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "August";
  			break;
  		case "9":
  			document.getElementById("error7").innerHTML= ""; 
  			document.getElementById("answer7").innerHTML= "September";
  			break;
  		case "10": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "October";
  			break;
  		case "11": 
  			document.getElementById("error7").innerHTML= "";
  			document.getElementById("answer7").innerHTML= "November";
  			break;
  		case "12":
  			document.getElementById("error7").innerHTML= ""; 
  			document.getElementById("answer7").innerHTML= "December";
  			break;
  		default: 
  			document.getElementById("error7").innerHTML= "Invalid Input";
  			document.getElementById("answer7").innerHTML= "";
  	}
}
document.getElementById("btn7").onclick=function(){
	var number = document.getElementById("input7").value;
	getMonth(number);
};
/*
 * PROBLEM 8: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function sumSquares(N){
 	var array=[];
 	var myTotal = 0;
 	if( N===""||isNaN(N)||N<=0){
		document.getElementById("error8").innerHTML="Invalid Input";
		document.getElementById("answer8").innerHTML="";
	}else if(N>99){
		document.getElementById("error8").innerHTML="Slow down John Wayne, lets choose a number smaller than 100."+"<br>"+"I don't like to multiply THAT much!";
		document.getElementById("answer8").innerHTML="";
	}
	else {
		document.getElementById("error8").innerHTML="";
		for(var i=1; i<=N;i++){
			var square = i*i;
			array.push(square);
		}
		console.log(array);
// http://stackoverflow.com/questions/1230233/how-to-go-through-an-array-and-add-their-values
		var total=0;
		for(i in array){ 
			total += array[i]; 
		}
		document.getElementById("answer8").innerHTML=total;
// ...and here is another way to do it, same source
		// var sum = array.reduce(add, 0);
		// function add(a, b) {
  //   		return a + b;
		// }
		// return sum;
// ..this time in jQuery, same source
		// var total = 0;
		// $.each(array,function() {
		//     total += this;
		// });
		// return total;
	}
}
document.getElementById("btn8").onclick = function(){
	var N = document.getElementById("input8").value;
	sumSquares(N);
};

/* 
 * PROBLEM 9: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function findMaxDiff(array) {
	var Jimmy=[];
	var Ymmij=[];

	for (var i=0; i<array.length; i++){
		console.log(array[i]);
		if(array.toString()===""||isNaN(array[i])){
			document.getElementById("error9").innerHTML="Invalid Input";
			document.getElementById("answer9").innerHTML="";
		}
		else {
			document.getElementById("error9").innerHTML="";			
			for(i=1; i<array.length;i++){		
				// Jimmy and Ymmij are arrays of the differences
				// between adjacent elements, one subtracts 
				// left to right and one subtracts right to left
				Jimmy.push(array[i]-array[i-1]);
				Ymmij.push(array[i-1]-array[i]);
				// both Jimmy & Ymmij console all iterations of their arrays
				// as they build up to the full length arrays, but only
				// the single element array(first iteration) can be accessed
				// of each, so we need be able to grab the full length arrays.
				// Hence, we create "var Bill" to compare them to.			
				var Bill=array.length-1;
				if(Jimmy.length==Bill&&Ymmij.length==Bill){
					// find the max value of the differences
					Jimmy=Math.max.apply(null,Jimmy);
					Ymmij=Math.max.apply(null,Ymmij);
					// compare each max value
					if (Jimmy>Ymmij){
						document.getElementById("answer9").innerHTML=Jimmy;
					}else{
						document.getElementById("answer9").innerHTML=Ymmij;
					}
				}
			}
		}
	}
}
document.getElementById("btn9").onclick=function(){
	var a = document.getElementById("input9").value;
	// the .split() takes out the written commas and
	// turns the input string into an array and
	// puts honest to goodness array commas in between items
	var array = a.split(",");
	findMaxDiff(array);
};
/*
 * PROBLEM 10: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function insertDashes(string){
	if (string===""){
		document.getElementById("error10").innerHTML="Invalid Input";
	}else{
		document.getElementById("error10").innerHTML="";
		string=string.split('').join('-');
	// this next part uses regex and .replace() function
	// to replace any instance of "- -"" within string
	// source: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
	// otherwise, without the regex /g (meaning global), .replace() only replaced
	// the first instance of "- -"
		var re = /- -/g;
		string=string.replace(re,' ');
		console.log(string);
		document.getElementById("input10").value=string;
	}
}

document.getElementById("btn10").onclick=function(){
	var string = document.getElementById("input10").value;
	insertDashes(string);
};

/* 
 * PROBLEM 11: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function mySubstring(string, a, b){
	if(string===""||a===""||b===""||isNaN(a)||isNaN(b)||
	a<0||b>string.length){
		document.getElementById("error11").innerHTML="Invalid Input";
		document.getElementById("answer11").innerHTML="";
	}
	else 
	{
		document.getElementById("error11").innerHTML="";
		console.log(b);
	// while b is a number, its still a string type so
	// b+1=b1 not b+1, so we have to change b to a number
	// which changes + to addition rather than concantenation
		b=parseInt(b)+1;
		a=parseInt(a);
		string=string.slice(a, b);
		document.getElementById("answer11").innerHTML=string;
	}
}
document.getElementById("btn11").onclick=function(){
	var string = document.getElementById("input11").value;
	var a = document.getElementById("input11a").value;
	var b = document.getElementById("input11b").value;
	mySubstring(string, a, b);
};
/*
 * PROBLEM 12: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function splitSwap(array){
	if(array===""){
		document.getElementById("error12").innerHTML="Invalid Input";
		document.getElementById("answer12").innerHTML="";
	}
	else {
			document.getElementById("error12").innerHTML="";
			array=array.split(",");
			var rightArray = array.splice(0, Math.floor(array.length/2));
			array=array.concat(rightArray);
			array = "[" + array.join(",") + "]";
			document.getElementById("answer12").innerHTML=array;
		}
}
document.getElementById("btn12").onclick=function(){
	var array = document.getElementById("input12").value;
	splitSwap(array);
};

/*
 * PROBLEM 13: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function smallMultiples(n, k){
 	var array=[];
 	if(n===""||k===""||n>=k||isNaN(n)||isNaN(k)){
 		document.getElementById("error13").innerHTML="Invalid Input";
		document.getElementById("answer13").innerHTML="";
 	}else{
 		document.getElementById("error13").innerHTML="Invalid Input";
 		// b/c were not counting n*1 as a multiple
 		// we start at var i=2 and go up to number k. 
 		for (var i=2; i<=k;i++){
 			// we start figuring out how many numbers
 			// can we multiply n by before we = k.
			if(i*n<=k){
				// now we build an array of acceptable
				// outcomes so we can count them
				array.push(i);
			}
 		}
 		// here we count the number of acceptable answers 
 		// we were looking for
 		document.getElementById("answer13").innerHTML= "smallMultiples === "+array.length;
 	}
}
document.getElementById("btn13").onclick=function(){
	var n = document.getElementById("input13a").value;
	var k = document.getElementById("input13b").value;
	k=parseInt(k);
	n=parseInt(n);
	smallMultiples(n,k);
};
}()); 
