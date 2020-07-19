/*Write a function that takes an integer argument, 
and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:
*/

function sequence(limit) {
  let result = [];

  for (let num = 1; num <= limit; num++) {
    result.push(num);
  }
  return result;
}


function sequence2(num) {
  return [...Array(num).keys()].map(i => ++i);  //Array(#) creating an array with # length of empty items
}                                               //array.keys() will create an object       
                                                 // [...Array(#).keys()] will create [0, 1, 2, 3, ..., #] array 




console.log(sequence2(5));    // [1, 2, 3, 4, 5]
console.log(sequence2(3));    // [1, 2, 3]
console.log(sequence2(1));    // [1]