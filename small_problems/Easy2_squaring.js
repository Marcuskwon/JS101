/*Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

function multiply(a, b) {
  return a * b
  
}

*/

/*
input: number, and how many times it needs the number power to
output: number that is squared of input

rules
need to use mutiply(a, b)



algo
input a number
input will go through multiply (input, input) 
LOOP
result =  multiply (input, input) 
result2 = multiply (result, input)
result3 = multiply (result2, result)
.
.
.

RETURN resultn

test & note
negative? - ok -  n * -n = n^2
how to let the program take the information (powering number) - need to use loop



pseudo (powering)

START

GET input and powering number

SET counter = 0
SET result = 1

result = multiply(result, input)
counter += 1

WHILE (counter === powering number)
result = multiply(result, input)
counter ++


RETURN result

END
*/


function multiply(a, b) {
  return a * b;
  
}

function square(number) {
  let squaredNumber = multiply(number, number);
  return squaredNumber;
}


function powering(a, b) {
  let counter = 0;
  let result = 1;
  result = multiply(result, a);
  counter ++;
  
  while(counter !== b) {
    result = multiply(result, a);
    counter++;
  }
  return result;
}

console.log(powering(2, 5));


console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true