/*Build a program that randomly generates Teddy's age, and logs it to the console. 
Have the age be a random number between 20 and 120 (inclusive).*/



//my way

function howOld() {

let age;
while (true) {
age = Math.round(Math.random() * 120);
if(age >= 20 ) break;
}
console.log(`Teddy is ${age} years old!`);
}

howOld();





//LS

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // note they use Math.floor and +1 (for the highest number) and also + mimumber number to get the range properly
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);