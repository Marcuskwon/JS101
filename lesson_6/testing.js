let obj = {
  a: ' ',
  b: ' ',
  c: 3,
  d: 4,
};



function change(board, i) {
 board[i] = 'X';
}

function change2(board, j) {
  board[j] = 'O';
}

change(obj, 'a');
change(obj, 'b');
change2(obj, 'c');
change2(obj, 'd');

function test(board) {
  if (board['a'] === board['b']) {
    console.log(true);
    return true;
  }
}


test(obj);