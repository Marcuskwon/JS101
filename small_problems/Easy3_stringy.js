/*Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. 
The length of the string should match the given integer.

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"




input a number
output a string (new)


rule
a number will be converted to a new string set of the repetition of 10.
a new string always starts with 1



algo
6 101010
5 10101
4 1010
3 101
2 10
1 1




GET number

SET counter = 0
SET string = '1'

while(true)
if (string.length === number) break;
if (counter % 2 ===0) {
    string +'0'
} else if (counter % 2 ===1) {
    string +'1'
}
counter ++





test
inpit === output.length
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"


*/

function stringy(number) {
    let counter = 0; //this works as like switch whose remainder by 2 changes every time when it is increased by 1(0 or 1)
    let string = '1'; // the first always start with 1
    while (true) {
    if (string.length === number) break;
    if (counter % 2 ===0) {
      string +='0';
    } else if (counter % 2 ===1) {
      string +='1';
    }
    counter ++;
    }
    return string;
}
    

function stringy2(number) {
    let string = "";
    
    while(string.length < number) {
        string = string + ((string.length + 1) % 2); //this just muniplates string's length (because it will increase every turn) to add the remainder (always 0 or 1)
    }
    return string;
}



console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
