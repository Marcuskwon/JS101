/*In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 
In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, 
such as String(), Number.prototype.toString, or an expression such as '' + number.
Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.
*/


/*
input number
output string 

rules
caannot use any method (string() and etc..)
inputs will be non negative values
need to put the digits in the number to array seperately

algo

get number
*need to put the digits in the number to array seperately
array.join('')



need to put the digits in the number to array seperately 
 -> ex 54321
 
Number = 54321 ... You can do Math.floor(number / 10) every turn.. so it will remove the last digit every each loop 
54321 % 10 -> 1
5432 % 10 -> 2
543 % 10 -> 3
54 % 10 -> 4
5 % 10 -> 5



*/



function integerTostring(number) {
  let numberArry = [];
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    
    numberArry.push(remainder);
    
  } while (number > 0);
  
  return numberArry.reverse().join('');
}






console.log(integerTostring(54321));      // "54321"
console.log(integerTostring(0));         // "0"
console.log(integerTostring(5000));      // "5000"
console.log(integerTostring(1234567890));      // "1234567890"

console.log(integerTostring(4321) === "4321" );      // t
console.log(integerTostring(0) === "0");         //t
console.log(integerTostring(5000) === "5000");      // t
console.log(integerTostring(1234567890) === "1234567890");      // t