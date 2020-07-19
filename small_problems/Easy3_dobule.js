/*A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; return double numbers as-is.


input number
output number

rules
dobule number is a number that has the excatly same number in leftside and right side ( 44, 3333, 103103, 7676)
444 334433 not double number
if double number -> just log the same number
if not, x 2 and log the number


algo

GET number
SET stringNumber = String(number);
if (stringNumber.slice(0, stringNumber.length / 2) === stringNumber.splice(stringNumber.length / 2)) {
  return Number(stringNumber);
} else {
  return Number(strignNumber) * 2
}

1234

test

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676





Examples:

*/

function twice(number) {
let stringNumber = String(number);
if (stringNumber.slice(0, stringNumber.length / 2) === stringNumber.slice(stringNumber.length / 2)) {
  return Number(stringNumber);
} else {
  return Number(stringNumber) * 2;
}
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676