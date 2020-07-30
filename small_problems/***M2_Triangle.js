/*

input three numbers
output string (one of 'equilateral', 'isosceles', 'scalene', or 'invalid'.)

rule

1. valid triangle (if either not met -> invalid)
  sum of the smaller ones > the longest
  all should be > 0

2. three valid cases
Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.


algo

n1, n2, n3

let arr =[n1, n2, n3].sort((a, b) = > b -a);

if(arr.includes(0) || arr[0] < arr[1] + arr[2]) return 'invalid'

if(arr[0] === arr[1] || arr[1] === arr[2]) {
  if(arr[0] === arr[2]) {
  } return 'equilateral'
  } else {
  return 'isosceles'
  }
} else {
  return "scalene"
}




test*/

function triangle(n1, n2, n3) {
  let arr = [n1, n2, n3].sort((a, b) => b - a);  //set an array and sort them in descending order
  
  if(arr[2] <= 0 || arr[0] > arr[1] + arr[2]) return 'invalid';
  
  if(arr[0] === arr[1] || arr[1] === arr[2]) {
    if(arr[0] === arr[2]) return 'equilateral';
    else return 'isosceles';
  } else {
    return 'scalene';
  }
}



console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(9, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

