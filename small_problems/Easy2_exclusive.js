/*he || operator returns a truthy value if either or both of its operands are truthy, 
a falsey value if both operands are falsey. 
The && operator returns a truthy value if both of its operands are truthy, 
and a falsey value if either operand is falsey. 
This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise. 
Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
*/


/*
Examples:
*/

/*
algo
only one has to be true!
when you have input a, b
a  true/ b  true -> false
a  true / b  false -> true
a  flase / b ture - > true
a  false / b false - > false
*/


function xor (a, b) {
  if((a && !b) || (!a && b))  return true;
  else if ((a && b) || (!a && !b)) return false;
  }
  
  // This is the same as
  
function xor2(a, b) {
  !!((a && !b) ||(!a || b));
}  

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


//xor is not "short cuircuit" operator since this doesn't take a short cul at all. It always has to check both operands.