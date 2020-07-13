/*Write a function that takes a string argument and returns a new string that contains the value of the original string 
with all consecutive duplicate characters collapsed into a single character.



input string
output string(new one)

rule
if an element in a string is the same is the next one, it (they)will get deleted and one should remain only
the order doesn't change


algo

SET array = string.split('')
LOOP array
push array[0]
if array[0] !== array[1] -> push array[1]
if array[1] !== array[2] -> push array[2]
if array[2] !== array[3] -> push array[3]
.
.
.

return array.join('')


*/


function crunch(string) {
  let array = string.split('');
  let array2 = [''];
  for (let i = 0; i < array.length; i ++) {
    if(array[i] !== array[i+1]) { //comparing an element with the next one
      array2.push(array[i]); 
    }
  }
  return array2.join('');
}


function crunch2(string) {
    let outcome = string.split('').reduce((accum, next) => {
    if(accum !== next) {
     accum = accum + next;
    }
    return accum; //acuum will be a string that each element is added
    }, '');
    return outcome;
}




console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

console.log(crunch2('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch2('4444abcabccba'));              // "4abcabcba"
console.log(crunch2('ggggggggggggggg'));            // "g"
console.log(crunch2('a'));                          // "a"
console.log(crunch2(''));                           // ""