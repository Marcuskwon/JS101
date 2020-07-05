/*Create an object that expresses the frequency with which each letter occurs in this string:


The output will look something like the following:

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
*/
let statement = "The Flintstones Rock";


function counting(string) {
  let arr = string.split('');
  let obj = {};
  
  arr.forEach(element => {
    if (obj[element] && element !== ' ') {
      obj[element]++; 
      } else if ( !obj[element] && element !== ' ') {
        obj[element] = 1;
  }});
  return obj;
}

console.log(counting(statement));