/*Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.


input string
return string

algo
spread string to array
return the second last element




*/



function penultimate(string) {
  return string.split(' ')[string.split(' ').length - 2];
}

Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

********************************************************************************************

/*
Our solution ignored a couple of edge cases because we explicitly stated that 
you didn't have to handle them: 
strings that contain just one word, and strings that contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence. 
What edge cases need to be considered? 
How would you handle those edge cases without ignoring them?
Write a function that returns the middle word of a phrase or sentence. 
It should handle all of the edge cases you thought of.
*/



/*
input string
return string(word) that is located in the middle of the string

algo
spread string to array
return the word that is located in the middle in the string array
 ->to find the middle point 
   ->get the index of the middle point
   ->get the length of the whole array / 2 and round it down ex) [1, 2, 3].. Match.floor(length 3 / 2 ) = 1
 
Hardpart
what if inputs are:

number
empty space
space only
one word
string that is comprised of an even number of words

*/



function getMiddleWord(string) {
  if (typeof string !== 'string' || string.trim().split(' ') < 2) {
    return 'This is not a proper string.';
  }
  
  let stringArray = string.trim().split(' ');
  let middleIndex = Math.floor(stringArray.length/2);
  let middleWord = stringArray[middleIndex];
  return middleWord;
  
}



console.log(getMiddleWord('This is a test string')); //normal odd 
console.log(getMiddleWord('       This is a test string           ')); // with spaces
console.log(getMiddleWord('This is a string')); // even number -> allow to print the [legnth / 2 index]
console.log(getMiddleWord('error')); //ond word - allow to print that word
console.log(getMiddleWord(1)); //error - number
console.log(getMiddleWord('')); // error - empty
console.log(getMiddleWord('   ')); // error - space