/*
GET number
SET arr = ' '.repeat(number).split('')
let i = arr.length - 1
LOOP
arr[i] = *
console.log(arr.join(''))
i--
if(i === -1) break



*/

function triangle(number) {
  let arr = ' '.repeat(number).split(''); //create an array that has the same length of the input  (becuase every line will have the same length!)
  let i = arr.length - 1;
  while(true) {
    arr[i] = '*';
    console.log(arr.join(''));
    i--;
    if(i === -1) break;
  }
}


triangle(5);



triangle(9);
