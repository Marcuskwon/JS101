const readline = require('readline-sync');
const INITIAL_MARKER = ' '; 
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';


function prompt(message) {
  console.log(`>${message}`);
}


function displayBoard(board) {
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


function initializedBoard() {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)]= INITIAL_MARKER;
  }
  return board;
}



function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER); //will return an array with empty squares
}



function playerChoosesSquare(board) {
  let square;

  while(true){
   prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
   square = readline.question().trim();
  
   if (emptySquares(board).includes(square)) break;
   prompt("Sorry, that's not a valid choice.");
   
 }
 
 board[square] = HUMAN_MARKER; //will fill the object value
}



function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex]; //will pick an element from empty square
  board[square] = COMPUTER_MARKER;  //will fill the object value
}

function isEmpty(board) {
  return emptySquares(board).length === 0;
}


function winComb(boardObj, a, b, c) {
  return boardObj[String(a)] !== INITIAL_MARKER &&
  boardObj[String(a)] === boardObj[String(b)] &&
  boardObj[String(b)] === boardObj[String(c)];
}


function isWinner(board) {
  if (winComb(board, 1, 2, 3)) {   //123
  return true;
  } else if (winComb(board, 4, 5, 6)) { //456
    return true;
  } else if (winComb(board, 7, 8, 9)) { //789
    return true;
  } else if (winComb(board, 1, 4, 7)) { //147
    return true; 
  } else if (winComb(board, 2, 5, 8)) { //258
    return true;
  } else if (winComb(board, 3, 6, 9)) { // 369
    return true;
  } else if (winComb(board, 1, 5, 9)) { //159
    return true;
  } else if (winComb(board, 3, 5, 7)) { //357
    return true;
  }
}








function mainGame() {
  
let board = initializedBoard(); //set the inital board setting
displayBoard(board); //initial display

  while(true) {

    playerChoosesSquare(board); //asking user input (doesn't display anything yet)
    computerChoosesSquare(board); //get computer input (doesn't display anything yet)
    displayBoard(board);        //show the result
    
    
    if (isEmpty(board)) break;
    if (isWinner(board)) break;

   
    
    
  }
  
}


mainGame();

