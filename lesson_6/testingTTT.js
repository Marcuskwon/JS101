const readline = require("readline-sync");
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const VALID_YES_OR_NO = ['y', 'n', 'yes', 'no'];
const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];



function prompt(msg) {
  console.log(`=> ${msg}`);
}



function displayBoard(board) {


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
  } else if (array.length ===2){
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


function findAtRiskSquare(line, board) {
  let markersInLine = line.map(square => board[square]);
  
  if (markersInLine.filter(val => val === 'HUMAN_MARKER').length === 2) {
    let unusedSqaure = line.find(square => board[square] === ' ');
    if (unusedSqaure !== undefined) {
    return unusedSqaure;
  }
}
  return null;
}


function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board);
    if (square) break;
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}


function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;

}

function updateScore(isScoreChanged, scoreobj, winner) {
 if (isScoreChanged || winner) {
  scoreobj[winner]++;
 }
}

function displayScore(scoreobj) {
  console.log(scoreobj);
}

function detectGrandWinner(scoreobj, winsRequired) {
  if(scoreobj['Player'] === winsRequired) {
    return 'Player';
  } else if (scoreobj['Computer'] === winsRequired) {
    return 'Computer';
  } else {
    return null;
  }
}

function isWonMatch(scoreobj, winsRequired) {
  return detectGrandWinner(scoreobj, winsRequired);
}

function displayGrandWinner(winsRequired) {
  prompt(`The Grand Winner is ${detectGrandWinner(winsRequired)} `);
}



function yesOrNo(msg) {
  prompt(msg);
  let output = readline.question().toLowerCase();
  
  while(!VALID_YES_OR_NO.includes(output)) {
    prompt('Please choose yes or no');
    output = readline.question().toLowerCase();
  }
  return output;
}


while (true) {

  let bestOfWhat = getBestofWhat();
  let winsNeeded = getWinsRequired(bestOfWhat);
  displayWinsRequired(winsNeeded);
  let scoreBoard = {Player: 0, Computer: 0};


while (true) {

  let board = initializeBoard();
  

  while (true) {
    displayBoard(board);
   
    
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
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
  
  let clearingAnswer = yesOrNo('Do you want to clear the game board?');
  
  if (clearingAnswer === 'y') console.clear();
  
  detectGrandWinner(scoreBoard, winsNeeded);
  
  if (isWonMatch(scoreBoard, winsNeeded)) break;
  
}

displayGrandWinner(winsNeeded);

let playingAgainAnswer = yesOrNo('Do you want to play again?');

if (playingAgainAnswer === 'n') break;

}


prompt('Thanks for playing Tic Tac Toe!');