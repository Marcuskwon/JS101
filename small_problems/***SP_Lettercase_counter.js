/*
get a string = string1

SET obj = { 
lowercase: 0, 
uppercase: 0,
neither: 0
}

loop string as array string1.split('')

forEach 
if ele===ele.toLowerCase()
obj[lowercase]++
if ele===ele.toUpperCase()
obj[uppercase]++
else 
obj[neither]++


*/

//using regex test
function letterCaseCount(string) {
  let obj = {
   lowercase: 0, 
   uppercase: 0,
   neither: 0
  };
  string.split('').forEach(ele => {
    if(/[a-z]/g.test(ele)) {
      obj['lowercase']++;
    } else if (/[A-Z]/g.test(ele)) {
      obj['uppercase']++;
    } else if (/[^a-z]/ig.test(ele)) {
      obj['neither']++;
    }
  });
  return obj;
}

//using regex match
function letterCaseCount2(string) {
  let lower = string.match(/[a-z]/g) || [];
  let upper = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^a-z]/gi) || [];
  
  let obj = {};
  obj['lowercase'] = lower.length;
  obj['uppercase'] = upper.length;
  obj['neither'] = neither.length;
  return obj;
}


console.log(letterCaseCount2('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount2('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount2('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount2(''));            // { lowercase: 0, uppercase: 0, neither: 0 }