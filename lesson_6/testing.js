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

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}





function computerChoosesSquare(board) {
  let square;
  let WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];



  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER && emptySquares(board).includes(sq3)) {
        square = sq3;
        break;
        } else if (board[sq1] === HUMAN_MARKER && board[sq3] === HUMAN_MARKER && emptySquares(board).includes(sq2)) {
        square = sq2;
        break;
        } else if (board[sq2] === HUMAN_MARKER && board[sq3] === HUMAN_MARKER && emptySquares(board).includes(sq1)) {
          square = sq1;
          break;
        } else {
          let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
          square = emptySquares(board)[randomIndex];
          break;
        }
  }
  board[square] = COMPUTER_MARKER;
}







