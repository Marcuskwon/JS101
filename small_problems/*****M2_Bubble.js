// ls way

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let idx = 1; idx < array.length; idx++) {
      if (array[idx - 1] <= array[idx]) continue;                // this will apply when order is ok
      [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]]; //this will apply when order is not ok, note on destructuring assignment
      swapped = true;                                            //this will apply when order is not ok
    }
    if (!swapped) break;
  }
}


//my way - note on using 'swap'
function bubbleSort(array) {
  while(true) {
    let swap = false;
    
    for(let i = 0; i < array.length; i++) {
      let a = array[i];
      let b = array[i + 1];
      if(a > b) {
        array[i] = b;
        array[i + 1] = a;
        swap = true;
      }
    }
    if(!swap) break;
  }
}





let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

