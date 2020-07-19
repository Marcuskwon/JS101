/*Write a function that takes an array of numbers, and returns an array with the same number of elements, 
with each element's value being the running total from the original array.




input array
output array

rule
output array that was subtotal from 0 index to n inedx in input array
will increase to the last index 
each subtotal will be added to the new array
 

algo

START

GET input (array)
SET arr = [];
SET i = 0;
SET subtotal = 0;

while(ture)
if(i >= array.length) break;
subtotal = array.reduce((acc, next) => {return accum + next }, 0)
arr.push(subtotal);
i++


return arr;


*/
function runningTotal(array) {
  let arr = [];
  let i = 0;
  let subtotal = 0;
  
  while(true) {
    if (i >= array.length) break; // 또는 if (i > array.length) break;
    subtotal = subtotal + array[i] //또는 array.slice(0, i).reduce((acc, next) => {return acc + next}, 0);
    arr.push(subtotal);
    i++;
  }
  return arr;
}



//using map
function runningTotal2(array) {
  let sum = 0;
  return array.map(element => sum += element);
  
}

//using reduce's third arguement

function runningTotal3(array) {
  let sumArr = [];
  array.reduce((acc, next, i) => {return sumArr[i] = acc + next}, 0);
  return sumArr;
}


console.log(runningTotal3([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal3([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal3([3]));                    // [3]
console.log(runningTotal3([]));                     // []