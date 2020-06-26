const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const MESSAGES = require('./rock_paper_scissors_messages.json');
const VALID_YESORNO =
['y', 'yes', 'n', 'no'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function messages(message) {
  return MESSAGES[message];
}


function isInvalidChoice(choice) {
  return !VALID_CHOICES.includes(choice);
}


function isInvalidYesOrNo(answer) {
  return !VALID_YESORNO.includes(answer.toLowerCase());
}


function getOutput(key, keyError, validation) {
  prompt(messages(key));
  let output = readline.question();

  while (validation(output)) {
    prompt(messages(keyError));
    output = readline.question();
  }
  return output;
}


function choiceDisplay(userChoice, computerChoice) {
  console.log(`${MESSAGES['choiceDisplay']}`, userChoice, computerChoice);
}


function game(userChoice, computerChoice) {
  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
     (userChoice === 'paper' && computerChoice === 'rock') ||
     (userChoice === 'scissors' && computerChoice === 'paper')) {
    prompt(messages('win'));
  } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
             (userChoice === 'paper' && computerChoice === 'scissors') ||
             (userChoice === 'scissors' && computerChoice === 'rock')) {
    prompt (messages('lost'));
  } else {
    prompt (messages('tie'));
  }

}

function isEnd (againAnswer) {
  if (againAnswer === 'n') {
    return true;
  } else {
    return false;
  }
}

function startGame() {

  let againAnswer;

  do {

    prompt(messages('welcome'));


    let userChoice = getOutput('choice', 'choiceError', isInvalidChoice);

    let randomIndex = [Math.floor((Math.random()) * (VALID_CHOICES.length))];
    let computerChoice = VALID_CHOICES[randomIndex];

    choiceDisplay(userChoice, computerChoice);

    game(userChoice, computerChoice);

    againAnswer = getOutput('playAgain', 'playAgainError', isInvalidYesOrNo)
      .slice(0, 1).toLowerCase();

    console.clear();

  } while (!isEnd(againAnswer));

}


startGame();