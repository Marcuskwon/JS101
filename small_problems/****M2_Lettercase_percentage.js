/*
input string
output object


rule
object keys = lowercase, uppercase, neither
object val = % of low, % up, % neither(including space)



algo

let arr = string.split('')
let obj = {
  lowercase: 0,
  uppercase: 0,
  neither: 0
}

loop arr. forEach

element => if(/[a-z]/g.test(element)) obj[lowercase] = obj[lowercase] + 1/arr.length * 100
else if(/[A-Z]/g.test(element)) obj[uppercase] = obj[uppercase] + 1/arr.length * 100
else obj[neither] = obj[neither] + 1/arr.length *100

return obj;


*/

//my way
function letterPercentages(string) {
  let arr = string.split('');
  let obj = {
  lowercase: 0.00,
  uppercase: 0.00,
  neither: 0.00,
  };
  
  arr.forEach(element => {
    if(/[a-z]/g.test(element)) {
      obj['lowercase'] = obj['lowercase'] + 1 / arr.length * 100;
    } else if (/[A-Z]/g.test(element)) {
      obj['uppercase'] = obj['uppercase'] + 1 / arr.length * 100;
    } else {
      obj['neither'] = obj['neither'] + 1 / arr.length * 100;
    }
  });
  
  
Object.keys(obj).forEach(element => {
  obj[element] = obj[element].toFixed(2);
});
  
  return obj;
  
}



//LS way

function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];               //matching regex will create an array! *If the nested function cannot find the variable within it, it will go outside and find it
    return ((matchingChars.length / count) * 100).toFixed(2);    //return will be a percentage of it
  }

  return {                                                      //note on using object itself in return!
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
