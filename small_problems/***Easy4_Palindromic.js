/* Part 1 Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Examples:
*/


function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return reversedString === string;
}



console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true


/* Part 2 Write another function that returns true if the string passed as an argument is a palindrome, 
or false otherwise. 

This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. 
If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

*/




function isRealPalindrome(string) {
  let arrString = string.toLowerCase().split('');
  let arrAlphaNum = [];
  arrString.forEach(element => {
    if(/[a-z0-9]/.test(element)) { // (/[a-z]/.test(element) || /[0-9]/.test(element)) { 
      arrAlphaNum.push(element);
    }

  });


  return arrAlphaNum.slice().reverse().join('') === arrAlphaNum.join('');

  
}





console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false


// LS way

function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, ""); 
  return isPalindrome(string);
}