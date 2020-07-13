
/*Create a function that takes 2 arguments, an array and an object. 
The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. 
The object will contain two keys, "title" and "occupation", and the appropriate values. 
Your function should return a greeting that uses the person's full name, and mentions the person's title.
*/

/*
input: array, obj
output: string with a certain order that use array's element and obj' values

rule:
the first arg = [fisrt, middle, last name] array (with two or more elements) 
the second = {title: "title name", occupation: "occup name"} obj (with two keys)

algo:
get an arg1, arg2
set var1 = arg 1 to string combined with a space 
set var2 =  arg 2's the values combined with a space
log them into a string that has Hello, "var1"! Nice to have a "var2" around.


test & note:
what about missing last name? ok - it will be just empty
what about missing middle name? ok - it will be just empty
whata about no name? - use default parameter (must be an array)?
what about no title? - ok - it will be just empty
what about invalid inputs? (space only, number) - it will have to go with what they put as arg anyway. so ok


START

GET ARG1, ARG2 (nameArr, jobObj)

SET nameString = nameARR.join(' ')
set jobString = Object.values.join(' ')

LOG Hello, "nameString"! Nice to have a "jobString" around.


 */
 
 
 function greetings(nameArr = ['Customer'], jobObj) {
   let nameString = nameArr.join(' ');
   let jobString = Object.values(jobObj).join(' ');
   let aOrAn = 'a';
   if (['a', 'e', 'i', 'o', 'u'].includes(jobString[0].toLowerCase())) { // in case the title starts with any vowel
     aOrAn = 'an';
   }
   
   console.log(`Hello, ${nameString}! Nice to have ${aOrAn} ${jobString} around `);
 }







console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.