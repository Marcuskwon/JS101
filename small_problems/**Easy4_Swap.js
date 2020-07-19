/*Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, 
and that the string will always contain at least one word. 
You may also assume that each string contains nothing but words and spaces, 
and that there are no leading, trailing, or repeated spaces.


input string
output string

rule
output a string of which word is reversed in the string
string's word is the same order, just word itself needs to be reversed
string will always be at least one word / same as word
there will be no repeated spaces

algo

GET string

split the string by word to an array
in the array, reverse each element 
put the reversed words to a string and return

END


Examples:
*/


function swap(string) {
  let arr = string.split(' ');
  let arr2 = arr.map(element => {
    if(element.length === 1) {
     return element;
    } else {
     return element[element.length - 1] + element.slice(1, -1) + element[0]; //note on slice(1, -1)
    }
  
});
  return arr2.join(' ');
}








console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"