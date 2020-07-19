/*Given an unordered array and the information that exactly one value in the array occurs twice 
(every other value occurs exactly once), determine which value occurs twice. 
Write a function that will find and return the duplicate value that is in the array.


algo

get array

Loop
let arrayTesting = [];
first elemetn -> push all element except for the first
if(arrayTesting.includes(element)) break;
return element


*/

function findDup(array) {
let i = 0;
  while(i < array.length) {
    let arrayTesting = [];
    arrayTesting.push(...array.slice(i + 1)); // note that I had to use spread... because we don't want nested array
    if(arrayTesting.includes(array[i])) break; //also note that we use slice(i+1) because we want everything except for the number being tested
    i++;
  }
  
  return array[i];
  
}

console.log(findDup([1, 5, 3, 9,  4 , 12, 13, 25, 2, 99 , 17]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73