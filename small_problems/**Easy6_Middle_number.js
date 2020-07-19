/*Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. 
If the string has an odd length, you should return exactly one character. If the string has an even length, 
you should return exactly two characters.

Examples:
*/


function centerOf(string) {
  return (string.length % 2 !== 0) ?  //note how I use tenary operator
  string.charAt(Math.floor(string.length / 2)) :
  string.charAt(string.length / 2 - 1 ) + string.charAt(string.length / 2);
  }



console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

