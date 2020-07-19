/*
input array
output array

algo
loop array
each array- filter only non-volwes letter for each element - need to use split('') to use filter method
put them into an array
return array


*/
//my way use array.filter method
function removeVowels(array) {
  return array.map(element => {
    return element.split('').filter(letter => !/[aeiou]/gi.test(letter)).join('');
  });
}

//LS way use string.replace method
function removeVowels2(array) {
  return array.map(element => {
    return element.replace(/[aeiou]/gi, ''); 
  });
}




console.log(removeVowels2(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels2(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels2(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]