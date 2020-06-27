const readline = require('readline-sync');
const MESSAGES = require('./RPSSL_messages.json');
const VALID_CHOICES = {
  rock: ['rock', 'r'],
  paper: ['paper', 'p'],
  scissors: ['scissors'],
  spock: ['spock'],
  lizard: ['lizard', 'l']
};

const WIN_DRAWS = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['rock', 'scissors'],
  lizard: ['spock', 'paper']
};
const VALID_AGAIN_ANSWER = ['y', 'n', 'yes', 'no'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function message(key) {
  return MESSAGES[key];
}

function askingUserInput(question, questionError, validation) {
  prompt(message(question));
  let userInput = readline.question();

  while (validation(userInput)) {
    prompt(message(questionError));
    userInput = readline.question();
  }
  return userInput;
}

function isBestOfInvalid(number) {
  return (!Number.isInteger(Number(number))) ||
(Number(number) <= 0) ||
(Number(Number(number)) % 2 !== 1);
}

function isUserChoiceinValid(choice) {
  return ![].concat(...Object.values(VALID_CHOICES)).includes(choice.toLowerCase());
}

function isUserPlayAgainAnswerInvalid (answer) {
  return !VALID_AGAIN_ANSWER.includes(answer.toLowerCase());
}

function getWinsRequire (rounds) {
  return Math.ceil(rounds / 2);
}

function displayWinsRequired (winsRequired) {
  prompt(`Whoever first achieves ${winsRequired} win(s) will be a grand winner`);
}


function makeFullName(input) {
  switch (true) {
    case (VALID_CHOICES.rock.includes(input)):
      return "rock";
    case (VALID_CHOICES.paper.includes(input)):
      return "paper";
    case (VALID_CHOICES.scissors.includes(input)):
      return "scissors";
    case (VALID_CHOICES.spock.includes(input)):
      return "spock";
    case (VALID_CHOICES.lizard.includes(input)):
      return "lizard";
  }
  return null;
}

function getComputerInput () {
  let arrayIndex = Math.floor(Math.random() *
  (Object.keys(VALID_CHOICES).length));
  return Object.keys(VALID_CHOICES)[arrayIndex];
}

function displayChoices(yourChoice, cpuChoice) {
  prompt(`Your choice: ${yourChoice}\n=> Computer Choice: ${cpuChoice}`);
}

function isWon(winChoice, loseChoice) {
  return WIN_DRAWS[winChoice].includes(loseChoice);
}

function displayRoundResult(yourChoice, cpuChoice) {
  if (isWon (yourChoice, cpuChoice)) {
    prompt(message("youWon"));
  } else if (isWon (cpuChoice, yourChoice)) {
    prompt(message("cpuWon"));
  } else {
    prompt(message("tie"));
  }
}

function updateScore (boardName, yourChoice, cpuChoice) {
  if (isWon (yourChoice, cpuChoice)) {
    boardName.you++;
  } else if (isWon (cpuChoice, yourChoice)) {
    boardName.computer++;
  }
}

function displayScore(boardName) {
  prompt(`Score [You: ${boardName.you}, Computer: ${boardName.computer}]`);
}

function noGrandWinnerYet (playerScore, comScore, wins) {
  return !isWonMatch (playerScore, wins) && !isWonMatch(comScore, wins);
}

function isWonMatch (score, winsRequired) {
  return score === winsRequired;
}

function displayGrandWinner(playerScore, comScore, wins) {
  if (isWonMatch(playerScore, wins)) {
    prompt (message("youGrandWinner"));
  } else if (isWonMatch(comScore, wins)) {
    prompt (message("cpuGrandWinner"));
  }
}

function isEnd (userAnswer) {
  return userAnswer === 'n';
}


prompt(message("welcome"));

while (true) {

  let bestOfWhat =
  Number(askingUserInput('askingBestOf', 'errorBestOf', isBestOfInvalid));

  let winsNeeded = getWinsRequire(bestOfWhat);

  displayWinsRequired (winsNeeded);

  let scoreBoard = {you: 0, computer: 0};

  while (noGrandWinnerYet (scoreBoard.you, scoreBoard.computer, winsNeeded)) {

    let userChoice =
    askingUserInput('getUserChoice', 'errorUserChoice', isUserChoiceinValid)
      .toLowerCase();

    userChoice = makeFullName(userChoice);

    let computerChoice = getComputerInput();

    displayChoices(userChoice, computerChoice);

    displayRoundResult(userChoice, computerChoice);

    updateScore(scoreBoard, userChoice, computerChoice);

    displayScore(scoreBoard);
  }

  displayGrandWinner(scoreBoard.you, scoreBoard.computer, winsNeeded);

  let playAgainAnswer =
  askingUserInput ('playMore', 'errorPlayMore', isUserPlayAgainAnswerInvalid)
    .toLowerCase().slice(0, 1);

  if (isEnd(playAgainAnswer)) break;

  console.clear();
}


