/*Write a function that takes two arrays as arguments, 
and returns an array containing the union of the values from the two. 
There should be no duplication of values in the returned array, 
even if there are duplicates in the original arrays. 
You may assume that both arguments will always be arrays.

rule
take two arrays => make it to one
no duplication in the output even if there was a duplicate element in an array

algo
(arr1, arr2)
arr = [...arr1, ...arr2]
arrFinal = []

arr.forEach(element => {
  if(!arrFinal.includes(element)) {
    arrFinal.push(element)
  } 
}

Example:

*/


function union(arr1, arr2) {
  
let arr = [...arr1, ...arr2];
let arrFinal = [];

arr.forEach(element => {
  if(!arrFinal.includes(element)) {
    arrFinal.push(element);
  }
});
return arrFinal;

}

console.log(union([1, 3, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]