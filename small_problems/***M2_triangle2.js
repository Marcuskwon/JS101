/*

input number (n1, n2, n3)
output string (one of 'right', 'acute', 'obtuse', or 'invalid')


rule
1. invalid triangle
 - any angle < 0
 -all angles total !== 180
 
2. three ways
 -right: one = 90
 -acute: all three < 90
 -obtuse: one > 90



algo

let arr = [n1, n2, n3].sort((a, b) => b -a) 

if(arr[2] <= 0 || arr[0] + arr[1] + arr[2] !== 180 ) return 'invalid'

if(arr.includes(90)) return "right"
if(arr.filter(n => n < 90).length === 3) return "acute"
if(arr.filter(n => n > 90).length === 1) return "obtuse"

test

*/

function triangle(n1, n2, n3) {
let arr = [n1, n2, n3].sort((a, b) => b -a);

if(arr[2] <= 0 || arr[0] + arr[1] + arr[2] !== 180 ) return 'invalid';

if(arr.includes(90)) return "right";
if(arr.every(n => n < 90)) return "acute";
return "obtuse";
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"