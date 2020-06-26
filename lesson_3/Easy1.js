//Quesiton1

let numbers = [1, 2, 3];
numbers[6] = 5; 
//this will not create any error. It will create 6th index with '5' element.


let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
//It will return undefined (it is totally empty.. not even undefined)



//Quesiton2

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.slice(-1) === '!');
console.log(str2.slice(-1) === '!');
// or you can do str1.endsWith("1");


//Question3

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

Object.keys(ages).includes('Spot') 
// you can do ages.hasOwnProperty('Spot');



//Question4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.


console.log(munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase())
  
  // charAt(0) -> 0th index of the string
  // substring(1) -> return the whole string except for 1th index to end index
  

//Question 5

console.log(false == '0'); true // ('=='' coerce to the same type)
console.log(false === '0'); false


//Question 6
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges); // note that 'ages' is mutated.

//Question 7

062720