/*
input array
output number

algo
SET totalNumber = 0;
loop array
each loop create array.slice(0, i)
and get the total of the array.slice(0, i + 1)
add that number to totalNumber 
return totalNumber




*/

//note slice's second arguement i + 1 and using forEach and (_, index)

function sumOfSums(array) {
  let totalNumber = 0;
  array.forEach((_, index) => {
    totalNumber = totalNumber + array.slice(0, index + 1).reduce((accum, next) => accum + next, 0);   
  });
  return totalNumber;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35