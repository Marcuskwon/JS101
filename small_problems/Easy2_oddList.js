/*Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. 
The values in the returned list should be those values that are in the 1st, 3rd, 5th, 
and so on elements of the argument Array.

Examples:
*/


/*
input array
output new array with elements that are in even indices

rule
need an array output
that element of the output should be the element that was located in even index in the input array



algo

get input (arrayA)
loop array
if index = even number index
 {push to a new arrayB}

return arrayb

test & note
no special note
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []


*/

//using for and push
function oddities(arrayA) {
  let arrayB = [];
  for(let index = 0; index < arrayA.length ; index ++) {
    if (index % 2 === 0) {
    arrayB.push(arrayA[index]);
  }
}
  return arrayB;
}


//using filter
function oddities(arrayA) {
  return arrayA.filter(element => {
    return arrayA.indexOf(element) % 2 === 0;
  })
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []