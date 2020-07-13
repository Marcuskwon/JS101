/*
input: user will put a string or a string with !
outpit: log Hello "string" / or HELLO "STRING". WHY ARE YOU SCREAMING? if there is !.

rules: 
will need to ask user a name
the input will be a string
will log it back with a string that is combined with the input name


algo:

ask name
set a var with the name
check if the name ends with !
if no just log 
if yes put all string to upper case and log with additional setence


test & note:
what about no name?


Pseudo


START

PRINT "WHAT IS YOUR NAME?"

GET customer input

SET name = customer input

IF (endsWith(!))
LOG HELLO "name.toUpperCase()". WHY ARE YOU SCREAMING?
ELSE 
LOG Hello "name"

IF (name = undefined or '')
LOG Hello user.

END
*/

function greeting() {

console.log('What is your name?');
let name = require('readline-sync').question();

if (name.endsWith('!')) {
  name = name.slice(0, - 1);
  console.log(`HELLO ${name.toUpperCase()} WHY ARE YOU SCREAMING?`);
} else if (name === ''){
  console.log("Hello, User.");
} else {
  console.log(`Hello, ${name}.`);
}


}


greeting();


//take away 
//slice(0, -1) will return the whole thing without the last one (-1 index)
//if nothing entered by user, it will be ''