/*Write a function that takes a string consisting of zero or more space separated words, 
and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.


input string
output object { letterlength: count}

rule
input will be a string
ouput will be an object: keys = words length (non space):: values = count of each length


algo

START

GET string

SET arr = string.split(' ')map(element = > element.length;)
SET obj = {};

for(let i = 0; i < arr.length; i++) {
  if(obj['arr[i]')  {
    obj['arr[i]'] ++
  } else {
    obj['arr[i]'] = 0;
  }
}

RETURN obj;

END



text

Examples:*/

function wordSizes(string) {
  let obj = {};
  let arr = string.split(' ').map(element => element.replace(/[^a-z0-9]/ig, '').trim().length); // note on regex use
  
  for(let i = 0; i < arr.length; i++) {
  if(arr[i] ===0) continue;
  if(!obj[arr[i]])  {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]] ++;
  }
}

return obj;
}


console.log(wordSizes('Four score and seven.'));                      // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}