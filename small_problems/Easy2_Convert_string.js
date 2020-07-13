/*
input string of a digit
output number

rule
cannot use any method parseInt() / Number() / String() / Number()... etc
use only old fanshioned way
input will be always a string of digit
need to put the string to array for example '1234' => ['1', '2', '3', '4']
transform each element to a real quantitive value and add them
 -> 1 * 10^3 + 2 * 10^2 + 3 * 10^1 + 4 *1 10^0
 
return that value

algo


SET string = input 
SET arrayReversed = string.split('')slice().reverse()


LOOP
for (let index = 0; index < arrayReversed.length; index ++) {
  let total = 0;
  total = totla + arrayReversed[index] * 10^index;
}

test


*/


function stringToInteger(string) {
  
  let total = 0;
  let reversedArray = string.split('').slice().reverse(); 
  /*note that I use reverse(), since I will have to multiply each element 
  by the index number(of reversedArray) below
  */
  
  for (let index = 0; index < reversedArray.length; index ++) {
    total = total + reversedArray[index] * 10**index;
  }
  return total;
}


console.log(stringToInteger("89489489489") === 89489489489); // logs true
console.log(stringToInteger("570") === 570); // logs true