/*

input number (nth fibonacci)
output number (nth fibonacci number)

rule
must use recursion
nth fibonacci = (n-2)th + (n -1)th 


algo
if number
1 => 1
2 => 1
3 => 2
4 => 3
5 => 5  
6 => 8
7 => 13
8 => 21
9 => 34
10 => 55
*/

//non recursion

function fibonacci(number) {
let current = 1;
let last = 1;
let secondLast = 0;

if(number === 1) return current;
let counter = 1;
while(counter < number) {
  
  current = secondLast + last;
  secondLast = last;   
  last = current; 
  counter ++;   

}

return current;
}


//using recursion 
function fibonacci2(number) {
  if(number < 2) return number;
  
  return (fibonacci2(number - 1) + fibonacci2(number -2));
}


//using Memoization and recursion


let obj = {};


function fibonacci3(number) {
  if(number < 2) return number;
  
  if(!obj[number]) {
  obj[number] = (fibonacci2(number - 1) + fibonacci2(number -2));
  return (fibonacci2(number - 1) + fibonacci2(number -2));
  } else {
    return obj[number];
  }
  
}
