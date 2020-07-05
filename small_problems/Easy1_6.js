/*

START

GET ending number input from user
SET endingNumber

GET Options SUM / PRODUCT fomr user

 
IF SUM 
WHILE
SET TOTAL = ADD from 1 to endingNumber


IF PRODCUT
WHILE
SET TOTAL = MULTIPLY from 1 to endingNumber 

PRINT TOTAL

END

*/

const READLINE = require('readline-sync');
const VALIDANSWER = ['S', 'P', 's', 'p'];

function isInvalidNumber(number) {
  return !Number.isInteger(Number(number)) || Number(number) < 0 || number.trimStart() === '';
}

function isInvalidAnswer(answer) {
  return !VALIDANSWER.includes(answer);
}

function getInput(message, errorMessage, validation) {
  console.log(message);
  let outcome = READLINE.question();
  
  while (validation(outcome)) {
    console.log(errorMessage);
    outcome = READLINE.question();
  }
  return outcome;
}


function sumAll(number) {
  let outcome = 0;
  while (number > 0) {
    outcome = number + outcome;
    number --;
  }
  return outcome;
}

function sumMulti(number) {
  let outcome = 1;
  while (number > 0) {
    outcome = number * outcome;
    number --;
  }
  return outcome;
}



function sumOrProduct() {
  let finalNumber;
  
  let userNumber = Number(getInput('Please enter an integer more than 0', 'Invalid', isInvalidNumber));
  
  let whatCal = getInput('Sum or Product?', 'Invalid', isInvalidAnswer);

  if (['S', 's'].includes(whatCal)) {
    finalNumber = sumAll(userNumber);
    console.log(`The sum of the integers between 1 and ${userNumber} is ${finalNumber}.`);
  } else {
    finalNumber = sumMulti(userNumber);
    console.log(`The product of the integers between 1 and ${userNumber} is ${finalNumber}.`);
  }
  
}

sumOrProduct();