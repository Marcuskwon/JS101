/*Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to get 329175.
Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from the previous exercise.
*/


function maxRotation(number) {
  let length = String(number).length;
  let final = number;  // in order not to mutate the parameter
  while(length > 0) {
    final = rotateRightmostDigits(final, length);  //declaring every loop
    length--;
  }
  return final;
}

function rotateRightmostDigits(number, n) {
  let arr = String(number).split('');
  let last = arr.splice(arr.length - n, 1); //declare what to move to the end AND mutate arr at the same time.
  arr.push(last);
  return Number(arr.join(''));
}



console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845