/*
input string
output string

algo

let obj = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
}


take the string and covert it into array
loop the array with map
map element =>
if(Object.keys(obj).includes(element))
element = obj[element]
return element
else 
return element 

join(' ');

*/


let obj = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
};



//LS way - instead of looping the string, it loops the object keys and replace any word in the string that matches Object's key with value
//please note on how they use "new RegExp(pattern, attributes)"
function wordToDigit2(string) {
  let newString = string;
  Object.keys(obj).forEach(element => {
    let regex = new RegExp('\\b' + element + '\\b', 'gi'); // note on using 'g' atttributes to replace all matching cases. 
                                                          // note on using '\\b' + element '\\b' in orer to hande where a number word is a prt of another word
    newString = newString.replace(regex, obj[element]);
  });
  return newString;
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit2('The weight is done.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."



//LS way 2

function wordToDigit3(words) {
  const NUMBERS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return words.replace(/\w+/g, (word) => {
    const key = word.toLowerCase();
    return Object.keys(NUMBERS).includes(key) ? NUMBERS[key] : word;
  });
}


console.log(wordToDigit3('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit3('The weight is done.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."



//myway
function wordToDigit(string) {
  return string.split(' ').map(element => {
    if(Object.keys(obj).includes(element)) {
      return element = obj[element];
    } else if (element[element.length - 1] === '.' && Object.keys(obj).includes(element.slice(0, -1))) {
      return element = String(obj[element.slice(0, -1)]) + '.';
    } else{
      return element;
  }}).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

