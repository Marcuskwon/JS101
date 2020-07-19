function leadingSubstrings(string) {                //leadingSubstrings 
  let array = [];
  for(let i = 1; i <= string.length; i ++) {
    array.push(string.slice(0, i));
  }
  return array;
}



                                                           //all substrings using for loop
function substrings(string) {
  let array = [];
  for(let i = 0; i <= string.length; i ++) {
    array.push(...leadingSubstrings(string.slice(i)));         //note using ... to unnest array (because leadingSubstrings return an array)
  }
  return array;
}


                                                             //all substrings using method                     
function substrings2(string) {
  return [].concat(...(string.split('').map((_, i) => leadingSubstrings(string.slice(i)))));
}                                                               //note using ... to unnest array (because leadingSubstrings return an array)



function palindromes(string) {
  let arr = substrings2(string);
  
  return arr.filter(element => {
    if(element.length > 1 && string)
    return element.split('').reverse().join('') === element;  //note using split, reverse, and join
    
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]