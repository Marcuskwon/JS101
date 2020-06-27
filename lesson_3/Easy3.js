//Question 1 remove all element
let numbers = [1, 2, 3, 4];

numbers = []; // reassigning
numbers.length = 0;
numbers.splice(0, numbers.length); //you don't need the second arguement

while (numbers.length) { // you can use for (let = numbers.length; i > 0; i--)
  numbers.pop(); // you can use numbers.shift()
}
 
 
//Question 2  What will the following code output?

console.log([1, 2, 3] + [4, 5]);
1,2,34,5 // JS will coverts the arrays to strings and concatenates them into string

//Question 3 What will the following code output?
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)

/* will log "hello there." JS pass them by value. 
line 2 assigns str2 a new string that HAPPENS to be a copy of str1. 
Line 3, in turn, assigns str2 an entirely NEW string.*/


//Question 4 what will this code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

//.slice() does return a new array. But it perform shallow copy. Meaning that if arr2 changes its value, it will affter arr1.
// arr1 and arr2 points to the same object


/*Question 5 The following function unnecessarily uses two return statements to return boolean values. 
How can you eliminate the unnecessary duplication? -at least two differnt way*/

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}


function isColorValid(color) {
  return color === "blue" || color === "green"  //arrow .... const isColorValid = color => color === "blue" || color === "green";
}

function isColorValid(color) {
 return ["blue", "green"].inclides(color); // const isColorValid = color => ["blue", "green"].includes(color);
}



