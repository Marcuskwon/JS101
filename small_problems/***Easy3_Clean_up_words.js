/*

Given a string that consists of some words and an assortment of non-alphabetic characters, 
write a function that returns that string with all of the non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in a row, you should only have one space in the result
(i.e., the result string should never have consecutive spaces).

Example:

input string
output string

rules

output string will not have any non-alphabet
all non-alphabets will be repalced with space
output string will not have any consecutive space
if there are consecutive non-alphabets, only put one space


algo

transform string to arr
replace any non-alphabets in the array to space (using if(regex.test()) )
join them to a string
replace all mutiple spaces with one space (using .replace(/  +/g, ' '))


test


cleanUp("---what's my +*& line?");    // " what s my line "


*/

function cleanUp(string) {
let arr = string.split('');
for (let i = 0; i < arr.length; i++) {
    if(!/[a-z]/i.test(arr[i])) {
        arr[i] = ' ';
    }
}
return arr.join('').replace(/  +/g, ' ');
}



console.log(cleanUp("---whAt's my +*& line?"));    // " what s my line "