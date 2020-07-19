/*Write a function that takes a string, doubles every consonant character in the string, 
and returns the result as a new string. 
The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:
*/


function doubleConsonants(string) {
  return string.split('').map(element => {
    if(/[bcdfghjklmnpqrstvwxys]/gi.test(element)) {
    element = element + element;
    return element;
  } else {
    return element;
  }}).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""



//tenary
function doubleConsonants2(string) {
  return string.split('').map(element => {
   return (/[bcdfghjklmnpqrstvwxys]/gi.test(element)) ? element + element :  element}).join('');

}



console.log(doubleConsonants2('String'));          // "SSttrrinngg"
console.log(doubleConsonants2('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants2('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants2(''));                // ""

