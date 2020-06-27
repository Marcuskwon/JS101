//Quesiton1 Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5; 
//this will not create any error. It will create 6th index with '5' element.


let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
//It will return undefined (it is totally empty.. not even undefined)



/*Quesiton2 
How can you determine 
whether a given string ends with an exclamation mark (!)? */

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.slice(-1) === '!');
console.log(str2.slice(-1) === '!');
// or you can do str1.endsWith("!"); will return yes or no


/*Question3
Determine whether the following object of people and their age contains an entry for 'Spot':*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

Object.keys(ages).includes('Spot') 
/* you can do ages.hasOwnProperty('Spot'); will return true or false*/



/*Question4
Using the following string, create a new string that 
contains all lowercase letters except for the first character, 
which should be capitalized. (See the example output.)*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.


console.log(munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase())

// charAt(0) -> 0th index of the string
// substring(1) -> return the whole string except for 1th index to end index


//Question 5 What will the following code output?

console.log(false == '0'); true // ('=='' coerce to the same type)
console.log(false === '0'); false


/*Question 6 We have most of the Munster family in our ages object:
Add entries for Marilyn and Spot to the object:
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges); // note that 'ages' is mutated.(first argument)

/*Question 7 Determine whether the name Dino appears in the strings below 
-- check each string separately): */
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(string.includes(str1)); false 
console.log(string.includes(str2)); true

/* you can use string.indexOf(str1) 
it will return the index of the str1. 
If not found, it will return -1 -> this means if it is not -1, 
it will return true. */


//Quqestion 8  How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];


flinstones.push("dino")
flinstones[flinstones.length] = "dino" //add one more at the last
flintstones = flintstones.concat("dino") 
/* 
you can use this. it returns the new array with Dino (not mutating original)
That is why we reassign it */


//Question 9 How can we add multiple items to our array? ('Dino' and 'Hoppy')

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flinstones.push("dino", "Hoppy")  // You can push multiple elements

or

flintstones = flintstones.concat("Dino", "Hoppy"); // you can concat multiple

console.log(flintstones);


/* Question 10
Return a new version of this sentence that 
ends just before the word house. 
Don't worry about spaces or punctuation: 
remove everything starting from the beginning of house to the end of the sentence.*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '


console.log(advice.slice(0, 38)); // doesn't mutate original


console.log(advice.slice(advice.indexOf('Few'), advice.indexOf('house'))); 