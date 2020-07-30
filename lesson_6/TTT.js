const readline = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const VALID_YES_OR_NO = ['y', 'n', 'yes', 'no'];
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const MIDDLE_SQUARE = '5';

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {

  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}


function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}


function joinOr (array, delimiter = ', ', word = 'or') {
  if (array.length === 1) {
    return array[array.length - 1];
  } else if (array.length === 2) {
    return array.join(` ${word} `);
  } else {
    return array
      .slice(0, array.length - 1)
      .join(delimiter) +
  `${delimiter}${word} ${array[array.length - 1]}`;
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}


function getBestofWhat() {
  prompt('Best of how many rounds?');
  let output = Number(readline.question());

  while (!Number.isInteger(output) ||
                 output % 2 === 0 ||
                 output <= 0) {
    prompt("Invalid input. Enter an odd integer greater than 0. ex) '1', '5'");
    output = Number(readline.question());
  }
  return output;
}


function getWinsRequired(input) {
  return Math.ceil(input / 2);
}


function displayWinsRequired(winsRequired) {
  prompt(`Whoever first achieves ${winsRequired} win(s) will be The Grand Winner!`);
}

function choosingWhoPlaysFirst() {
  let answer = yesOrNo('Do you want to make the first move? "y" or "n"');
  if (answer === 'y' || answer === 'yes') {
    return 'player';
  } else {
    return 'computer';
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt(`Sorry, that's not a valid choice. Please choose one of  ${joinOr(emptySquares(board))}` );
  }

  board[square] = HUMAN_MARKER;
}


function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSqaure = line.find(square => board[square] === ' ');
    if (unusedSqaure) return unusedSqaure;
  }
  return null;
}

function smartMove (board, marker) {
  let choice;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    choice = findAtRiskSquare(line, board, marker);
    if (choice) break;
  }
  return choice;
}

function pickRandomSquare (board) {
  let index = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[index];
}


function computerChoosesSquare(board) {
  let square = smartMove(board, COMPUTER_MARKER);

  if (!square) square = smartMove(board, HUMAN_MARKER);

  if (!square && emptySquares(board).includes(MIDDLE_SQUARE)) {
    square = MIDDLE_SQUARE;
  }

  if (!square) square = pickRandomSquare (board);

  board[square] = COMPUTER_MARKER;
}


function chooseSquare(board, currentPlayer) {
  return (currentPlayer === 'player') ?
    playerChoosesSquare(board) : computerChoosesSquare(board);

}

function alternatePlayer(currentPlayer) {
  return (currentPlayer === 'player') ? 'computer' : 'player';
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let index = 0; index < WINNING_LINES.length; index++) {
    if (WINNING_LINES[index]
      .every(element => board[element] === HUMAN_MARKER)) {
      return 'Player';
    } else if (WINNING_LINES[index]
      .every(element => board[element] === COMPUTER_MARKER)) {
      return 'Computer';
    }
  }
  return null;
}


function updateScore(isScoreChanged, scoreObj, winner) {
  if (isScoreChanged || winner) scoreObj[winner]++;
}

function displayScore(scoreObj) {
  console.log(scoreObj);
}

function detectGrandWinner(scoreObj, winsRequired) {
  if (scoreObj['Player'] === winsRequired) {
    return 'Player';
  } else if (scoreObj['Computer'] === winsRequired) {
    return 'Computer';
  } else {
    return null;
  }
}

function isWonMatch(scoreObj, winsRequired) {
  return detectGrandWinner(scoreObj, winsRequired);
}

function displayGrandWinner(scoreObj, winsRequired) {
  prompt(`The Grand Winner is ${detectGrandWinner(scoreObj, winsRequired)} `);
}


function yesOrNo(msg) {
  prompt(msg);
  let output = readline.question().toLowerCase();

  while (!VALID_YES_OR_NO.includes(output)) {
    prompt('Please choose yes or no');
    output = readline.question().toLowerCase();
  }
  return output;
}

function keepPlaying(answer) {
  return !!((answer === 'y' || answer === 'yes'));
}

while (true) {

  let bestOfWhat = getBestofWhat();
  let winsNeeded = getWinsRequired(bestOfWhat);
  displayWinsRequired(winsNeeded);
  let scoreBoard = {Player: 0, Computer: 0};


  while (true) {
    let currentPlayer = choosingWhoPlaysFirst();
    let board = initializeBoard();

    while (true) {

      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;

    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else {
      prompt("It's a tie!");
    }

    updateScore(someoneWon(board), scoreBoard, detectWinner(board));

    displayScore(scoreBoard);

    detectGrandWinner(scoreBoard, winsNeeded);

    if (isWonMatch(scoreBoard, winsNeeded)) break;
  }

  displayGrandWinner(scoreBoard, winsNeeded);

  let playingAgainAnswer = yesOrNo('Do you want to play again?');

  if (!keepPlaying(playingAgainAnswer)) break;

}


prompt('Thanks for playing Tic Tac Toe!');