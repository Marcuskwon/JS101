
/*
Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

Examples:*/




/*
PEDAC
input: string 
output: sum of ASCII value of each letter of the string
rules:
- 
every letter needs to be convered into a ASCII value.
you can use String.charCodeAt() to get ASCII VALUE


algo:
-
1. loop each letter of string
3. get ASCII value of each letter
4. add them
5.return the sum

to test:
-what about it has a number? try charCodeAt with a number-  a number does have ASCII value
-what about empty? try charCodeAt with an empty space-  a space does have ASCII value: 32
-what about special letter? try charCodeAt with a special char - a special char does have ASCII value
------------------------------------------------

PSEUDO
START

GET 'STRING INPUT' (SET as STRING for pseudo)

let i = 0
sum = 0
WHILE ( i < string.length - 1)
sum = sum + string.charCodeAt(i)
i++

RETURN sum


PSEUDO
START

GET 'STRING INPUT' (SET as STRING for pseudo)

SET stringArray = string.slice('')
stringArray.reduce((accum, next) => {
 return accum + next.charCodeAt(0);
}, 0)


*/


function asciiValue(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}



function asciiValue1(str) {
  let i = 0;
  let sum = 0;
  while(true) {                                 //while doesn't have condition
    if(i >= str.length) break;                 //and this if statement is a breaking point.. which is a bit different from for statement above
    sum = sum + str.charCodeAt(i);              //because for's is a condition that will ALLOW a loop to start and this is to break! (opposite)
    i ++;
  }
  return sum;
}


function asciiValue2(str) {
  let stringArray = str.split('');
  return stringArray.reduce((accum, next) => {
    return accum + next.charCodeAt();
  }, 0);
}



console.log(asciiValue2('Four score'));         // 984
console.log(asciiValue2('Launch School'));      // 1251
console.log(asciiValue2('a'));                  // 97
console.log(asciiValue2(''));                   // 0




//take away - I can use while for anything.. but the statement might be different versus for
//''.charCodeAt() is NaN. 
//string.charCodeAt() = string.charCodeAt(0)
//special char and an empty space have ASCII number