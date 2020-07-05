const READLINE = require('readline-sync');
const MESSAGES = require('./mortgage_messages2.json');
const LANG_OPTIONS = ['en', 'kr'];


let lang = 'en';

function messages(key) {
  return MESSAGES[lang][key];
}

function prompt(key) {
  console.log(`=>${key}`);
}

function chooseLang () {
  console.log(MESSAGES['en']['langAsk']);
  lang = READLINE.question().toLowerCase();

  while (!LANG_OPTIONS.includes(lang)) {
    console.log(MESSAGES['en']['langError']);
    lang = READLINE.question().toLowerCase();
  }
  return lang;
}


function isInvalidNumber(number) {
  return Number.isNaN(Number(number)) || number.trimStart() === '';
}


function isInvalidLoan(number) {
  return isInvalidNumber(number) || Number(number) <= 0;
}

function isInvalidRate(number) {
  return isInvalidNumber(number) || Number(number) < 0;
}

function isInvalidTerm(number) {
  return isInvalidNumber(number) ||
  Number(number) <= 0 || !Number.isInteger(Number(number));
}

function isInvalidAnswer(answer) {
  return !['y', 'n', 'Y', 'N'].includes(answer);
}

function isEnd (answer) {
  if (answer === 'n') {
    return true;
  } else {
    return false;
  }
}

function getInput (key, keyError, validation) {
  prompt(messages(key));
  let input = READLINE.question();

  while (validation(input)) {
    prompt (messages(keyError));
    input = READLINE.question();
  }
  return input;
}


function monthlyPayment (loan, rate, term) {
  let monthRate = rate / 100 / 12;
  let monthTerm = term * 12;
  if (monthRate === 0) {
    return loan / monthTerm;
  } else {
    return loan * (monthRate / (1 - Math.pow((1 + monthRate), (-monthTerm))));
  }
}


function show (loan, rate, term, monthPayment) {
  console.log(`${MESSAGES[lang]["monthlyPayment"]}`, loan, rate, term, monthPayment);
}


function mortgage () {

  prompt(messages('welcome'));

  chooseLang();

  while (true) {

    let loan = getInput ('loan', 'loanError', isInvalidLoan);
    console.log(Number.isNaN(loan));

    let rate = getInput ('rate', 'rateError', isInvalidRate);

    let term = getInput ('term', 'termError', isInvalidTerm);

    let monthPayment = monthlyPayment(loan, rate, term).toFixed(2);

    show (loan, rate, term, monthPayment);

    let answer =
    (getInput('again', 'againError', isInvalidAnswer)).toLowerCase();

    if (isEnd(answer)) break;

    console.clear();
  }
}

mortgage();