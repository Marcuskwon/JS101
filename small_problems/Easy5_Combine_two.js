/*Write a function that combines two arrays passed as arguments, 
and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

*/




function interleave (array1, array2) {
let array = [];

for(let i = 0; i < array1.length; i++) {
array.push(array1[i], array2[i]);
}

return array;
}



console.log(interleave([1, 2, 3], ['a', 'b', 'c']));

//another way

function interleave2 (array1, array2) {
  let outputArray = [];
  
  array1.forEach((element, index) => {      // note on forEach's second arguement -> index!
    outputArray.push(element,array2[index]);
  });
  return outputArray;
  
}




console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));




