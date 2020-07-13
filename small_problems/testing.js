const readline = require('readline-sync');

console.log('Enter a noun');
let n = readline.prompt();

console.log('Enter a verb');
let v = readline.prompt();

console.log('Enter an adjective');
let adj = readline.prompt();

console.log('Enter an adverb');
let adv = readline.prompt();



console.log(`Do you ${v} your ${adj} ${n} ${adv}? That's hilarious!`);
console.log(`The ${adj} ${n} ${v}s ${adv} over the lazy ${n}`);
console.log(`The ${n} ${adv} ${v}s up ${adj} Joe's turtle `);