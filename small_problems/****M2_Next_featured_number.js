/*

input number - integer
output number

rule
ouput will be the next featured number
-featured number
 multiple of 7 
 odd number
 all digits only once ( no 133 )
 


algo

get number

let current = number;

while(ture) {
  current ++;
  if(current % 7 === 0 ||
  current % 2 === 1 ||
  String(current).split('').filter((n, i) => String(current).split('').slice(i + 1).includes(n).length ===0)
  ) break;
  return current;
}




*/


function isMax(number) {
  if(number >= 9876543201) return true;
  else false;
}

function areAllDiffDigits(number) {
  return String(number).split('').every(((n, i) => {
       return String(number).split('').lastIndexOf(n) === i;
     }));
}


function featured(number) {
  
if(isMax(number))
return "There is no possible number that fulfills those requirements.";

let current = number;

while(!isMax(current)) {
  current ++;
  if(current % 7 === 0 && current % 2 === 1 && areAllDiffDigits(current)) break;
}

return current;

}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."