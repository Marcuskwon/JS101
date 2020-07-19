/*
psesudo

LOG to GET What is your age?  = number answer
SET currentAge = age


LOG to GET At what age would you like to retire? = number answer
SET retiringAge = number answer

LOG It's 2020. You will retire in 2020 + (retiringAge - currentAge).
LOG You have only (retiringAge - currentAge) years of work to go!

*/


let readlineSync = require("readline-sync");

let currentAge = Number(readlineSync.question("What is your age?\n"));
let retirementAge = Number(
  readlineSync.question("At what age would you like to retire?\n")
);

let today = new Date();

let currentYear = today.getFullYear();

let workYearsToGo = retirementAge - currentAge;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
console.log(`You have only ${workYearsToGo} years of work to go!`);