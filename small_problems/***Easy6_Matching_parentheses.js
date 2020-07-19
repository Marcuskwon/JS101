/*algo
transform string into an array
loop (loop through the array and make a validation algorithm..)
set a numberSwith that changes when taking '(', ')' 
- ( has to be always first
- ) has to come after (
- ) cannot be alone


*/
function isBalanced(string) {
  let arr = string.split('');
  let numberSwitch = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '(') {
      numberSwitch ++;
    } else if (arr[i] === ')') {
      numberSwitch --;
    }
    if(numberSwitch < 0) return false;
  }
  return numberSwitch === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);