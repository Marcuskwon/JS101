const readline = require('readline-sync');               // 질문이 나오는 libary

const MESSAGES = require('./calculator_messages.json'); //내가 string 모아두는곳

const LANGUAGE = 'kr';                                  // 언어설정


function messages(text, lang = 'en') {               //언어설정 연결하는 function
 return MESSAGES[lang][text];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);               //prompt에 언어설정 연결하는 function 넣기
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)); // check if empty -> if empty, true || Number.isNan -> if Nan, true
}




while (true) {

prompt('welcome');

prompt('firstNumber');
let number1 = readline.question();

while (invalidNumber(number1)) { // if invalid -> it will loop
  prompt('errorNumber');
  number1 = readline.question();
}


prompt('secondNumber');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('errorNumber');
  number2 = readline.question();
}


prompt('operation');
let operation = readline.question(); //This will always return string. So the line 16 comparision should include '1'.

while (!['1', '2', '3', '4'].includes(operation)) { // if operation not included -> true. note !
  prompt('errorOperation');
  operation = readline.question();
}


let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

console.log(`The result is: ${output}`);

prompt('calculatorAgain');
let anotherCal = readline.question();

while (!['y', 'n'].includes(anotherCal)) {
 prompt('calculatorAgainError');
 anotherCal = readline.question();
}
 
 if (anotherCal !== 'y') break;

 
 
}













