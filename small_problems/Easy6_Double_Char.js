/*Write a function that takes a string, doubles every character in the string, and returns the result as a new string.


algo


Examples:
*/

function repeater(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string[i], string[i]);
  }
  return array.join('');
}


function repeater2(string) {
  return string.split('').map(element => element + element).join('');
}


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

console.log(repeater2('Hello'));        // "HHeelllloo"
console.log(repeater2('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater2(''));             // ""