/*Write a function that takes one argument, a positive integer, 
and returns the sum of its digits. Do this without using for, while, or do...while loops 
- instead, use a series of method calls to perform the sum.

algo

get number
put number to string
split the string to array to use method
using reduce -> add each element **need to convert string element - number format


*/


function sum(number) {
  return String(number).split('').reduce((accum, next) => {return Number(accum) + Number(next)}, 0);
}



console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45