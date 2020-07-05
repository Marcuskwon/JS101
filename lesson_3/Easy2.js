// Question 1 replaceing important with urgent
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace("important", "urgent")); // returning new copy


// Question 2 
/*array.reverse() and array.sort() mutates the original. 
Use either of them to do the same job without mutating the original.*/

let numbers = [1, 2, 3, 4, 5];

//1
console.log(numbers.slice().reverse());

//2
numbers = [1, 2, 3, 4, 5];
console.log([...numbers].sort((num1, num2) => num2 - num1));
//spread (...) syntax  -> [...numbers] will return a copy [1, 2, 3, 4, 5]

//3
let numbers2 = [];
numbers.forEach(function (element) {numbers2.unshift(element)});
console.log(numbers2);

//4 (need to review)
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.reduce((acc, num) => ([num, ...acc]), []);
console.log(reversedArray); // [5, 4, 3, 2, 1]

console.log(numbers); // [1, 2, 3, 4, 5] any of aobve doesn't change the original


//Question 3 Given a number and an array, determine whether the number is included in the array.
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false numbers.includes(number1);
let number2 = 95; // true numbers.includes(number2);

//Question 4 show two different ways to put the expected "Four score and " in front of it.
let famousWords = "seven years ago...";

Four score and ".concat(famousWords);
"Fore score and " + famousWords;

/*Question 5
Given an array of numbers [1, 2, 3, 4, 5], 
mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].*/
let array = [1, 2, 3, 4, 5]

array.splice(2, 1); //2th to how many you want to pick (will return these velaues)
                    //but will remove them from the original
 

//Question 6

let flinstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

//Create a new array that contains all of the above values, but in an un-nested format:



[].concat(...flintstones); // "..." syntax will spread all nested area


let arr2 = [];

flintstones.forEach (element => { // note that index 2 and 3 are combined as areay.
  arr2 = arr2.concat(element);
});


//Question 7
//get [ 'Barney', 2 ]


let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Object.entries(flintstones)[2] //Object.entries(object) will create an array with nested array.

//Question 8 
//How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbers = [1, 2, 3, 4]; 
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; 

Array.isArray(numbers); // true
Array.isArray(table);  // false

//Question 9
//Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";

let statement2 = "Easy come, easy go.";

(statement1.match(/t/g) || []).length; // => 2 
(statement2.match(/t/g) || []).length; // => 0

/*(statement1.match(/t/g) will return the number of occurrences.
In order to count the "0" used || [] since it will return [] when there is nothing. And length will tell you how many elements.



/*Question 10
Back in the stone age (before CSS), we used spaces to align things on the screen. 
If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?*/
let title = "Flintstone Family Members";



console.log(title.padStart(Math.floor((40 + title.length) / 2)));

OR

let padding = Math.floor((40 - title.length) / 2);

console.log(title.padStart(padding + title.length));

//hard part is to determine how many spaces we need before the titel.