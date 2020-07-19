/* (1, 1, 2, 3, 5, 8, 13, 21, ...)such that the first two numbers are 1 by definition, 
and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.


Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. 
(The first Fibonacci number has an index of 1.)


input number
output number (index)

rule
fibonacci is 1 1 2 3 5 8 13 21 34 .. (previous number + current number = next number)
the first two numbers are 1, 1
the argument is the length of the element
return should be the index (not array index.. fibonacci index; how many you added)

algo

2 -> 1 1 2 3 5 8 13 ( length ) =>  7
3 -> 1 1 2 3 5 8 13 21 34 55 89 143  => 12
.
.

GET number
SET counter = 2
SET arr = [1, 1]
push arr[1] + arr[2]
counter +1
push arr[2] + arr[3]
counter +1
push arr[3] + arr[4]
counter +1
push arr[4] + arr[5]
counter +1
if arr[i].length === number break

return counter

test

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74

*/


function findFibonacciIndexByLength(number) { // my way
  let arr = [1, 1];
  let i = 1;
  
  while(true) {
    if (String(arr[i]).length === number) break;  // had to use String() since we need to utilize how many-digits.
    arr.push(arr[i - 1] + arr[i]);
    i++;

  }
  return arr.length;
}




function findFibonacciIndexByLength2(number) {  //LS way .. more explicit
  let first = 1;
  let second = 1;
  let index = 2;
  let fibo;
  
  do {
    fibo = first + second;
    first = second;
    second = fibo;
    index ++;
  } while (String(fibo).length < number);
  return index;
}






console.log(findFibonacciIndexByLength2(2));       // 7
console.log(findFibonacciIndexByLength2(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

