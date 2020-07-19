/*Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.



input number
output string (number + st, nd rd or th) 


rule
A centry is 100 year.
new centry begins with year ending with 01
1901 -2000 => all these years are 20th centry
2001 - 2100 => all these years are 21st centry
the transformed centry number ends with 1 -> st
the transformed centry number ends with 2 -> nd
the transformed centry number ends with 3 -> rd
all others - > th


algo
centry number part -> Math.ceil(year input / 100)
making the number to a string String(Math.ceil(year input / 100))
the transformed centry number ends with 11 12 13 -> th 
the transformed centry number ends with 1 -> st
the transformed centry number ends with 2 -> nd
the transformed centry number ends with 3 -> rd
all others - > th






test



Examples:*/

function century(number) {
  let centuryOutput = String(Math.ceil(number / 100));
  let elevenToThirteen = ['11', '12', '13'];
  if (!elevenToThirteen.includes(centuryOutput[centuryOutput.length-2] + centuryOutput[centuryOutput.length-1])) {
   switch (centuryOutput[centuryOutput.length-1]) {
     case '1':  
     return centuryOutput + 'st';
     case '2': 
     return centuryOutput + 'nd';
     case '3': 
     return centuryOutput + 'rd';
     default:
     return centuryOutput + 'th';
   }
 } else {
  return centuryOutput + 'th';
}
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"






/* LS peer

function century(year) {
  const century = Math.ceil(year / 100);
  const tens = century % 100;
  const singles = century % 10;
  let suffix = 'th';                        //default is the th that includes 11, 12, 13

  if (tens !== 13 && singles === 3) {         //this shows all other cases
    suffix = 'rd';
  } else if (tens !== 12 && singles === 2) {
    suffix = 'nd';
  } else if (tens !== 11 && singles === 1) {
    suffix = 'st';
  }

  return century + suffix;
}
*/