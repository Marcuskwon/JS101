/*Write a program that prompts the user for two positive integers, 
and then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.


==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103


input: number1, number2 (both will be positive integer)
output: number 

rules
+ - * / % **  all will be used 
it will show the operation process and the result



algo

ask input 1 => set numbera
ask unput 2 => set numberb

perform operations and get each result

set resultPlus = numbera + numberb
set resultMinus = numbera - numberb
set resultMultiply = numbera * numberb
/
%
**
..

print the process and result



*/



const readline = require('readline-sync');



console.log('Enter the first number:');
let numberA = Number(readline.question());

console.log('Enter the second number:');
let numberB = Number(readline.question());

console.log(`${numberA} + ${numberB} = ${numberA + numberB}`);
console.log(`${numberA} - ${numberB} = ${numberA - numberB}`);
console.log(`${numberA} * ${numberB} = ${numberA * numberB}`);
console.log(`${numberA} / ${numberB} = ${Math.round(numberA / numberB)}`);
console.log(`${numberA} % ${numberB} = ${numberA % numberB}`);
console.log(`${numberA} ** ${numberB} = ${numberA ** numberB}`); // you can use Math.pow(number)

