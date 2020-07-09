const readline = require("readline-sync");
const INITIAL_MARKER = ' '; //instead of using 'magic' you can explicitly show what ' ' means.
const HUMAN_MARKER = 'X';  //instead of using 'magic' you can explicitly show what 'X' means.
const COMPUTER_MARKER = 'O'; //instead of using 'magic' you can explicitly show what 'O' means.


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

function initializeBoard() { //TRICK-this function assigns a key-valye pair to an empty object up to 9.
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER; // 1 ~ 9 will be the keys of 'board' and keys always need to be "String".
  }

  return board;             //return an empty object every time you run this function.
}



function joinOr(array, delimiter = ', ', word = 'or') {
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


function emptySquares(board) { //TRICK-this return an array whose elements are keys of board and have ' 'as value.
  return Object.keys(board).filter(key => board[key] === ' ');
}

/*from this point, all functions pass 'board' as argument. It is most likely that a lot of 
those functions might update 'board' value, which is an object.. 
but it doesn't update the whole value. It updates the contents*/


function playerChoosesSquare(board) {
  let square;          // you need to declare square outside of the loop to use it at the end of func.

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`); //showing what's left to choose. Using joinOr 
    square = readline.question().trim();          //using trip() to eliminate any space. 
    if (emptySquares(board).includes(square)) break; //validation. It is easy since we have "emptySquares"

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;       //TRICK-the whole function will update board[square] to 'X'
}


function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length); //TRICK- most of the index functions will utilize array.length. 
  let square = emptySquares(board)[randomIndex]; //TRICK-note on emptySquare(board) - this itself is an array.
  board[square] = COMPUTER_MARKER; //the function outcome is to update board[square] to 'O'.
}

function boardFull(board) { //this will return true or false depending on boardFull?
  return emptySquares(board).length === 0;
}

/*We seperated someoneWon and detectWinner because detectWinner should return who won 
and we will use that return later time

someoneWon will merely need to return 'true' or 'false'

*/
function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) { //TRICK- VERY IMPORTANT
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line]; //TRICK-destructing method for declaring

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

  return null; //TRICK-if nothing matches, will return null.
}

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
    prompt(`${detectWinner(board)} won!`); // this is where we use the return of detectWinner
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again?');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');