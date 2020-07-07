/*Write a function that computes the sum of all numbers between 1 and some other number, inclusive, 
that are multiples of 3 or 5. For instance, if the supplied number is 20, 

the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168



GET NUMBER
outcome = 0
WHILE ( i <= NUMBER)
IF (i % 3 === 0 || i % 5 === 0)
outcome = outcome + i
return outcome
*/


function multisum(number) {
  let outcome = 0;
  let i = 0;
  while(true) {
  
  if (i % 3 === 0 || i % 5 === 0) {
    outcome = outcome + i;
    
  }
  i++;
  if (i > number) break;
  }
  return outcome;
}


console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
console.log(multisum(20));