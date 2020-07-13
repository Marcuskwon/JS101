

//One way - using the previous function 'stringToInteger'

function stringToInteger(string) {
  
  let total = 0;
  let reversedArray = string.split('').slice().reverse(); 

  
  for (let index = 0; index < reversedArray.length; index ++) {
    total = total + reversedArray[index] * 10**index;
  }
  return total;
}



function stringToSignedInteger(string) {
  switch(string[0]) {
    case '-': return -(stringToInteger(string.slice(1)));
    case '+': return +(stringToInteger(string.slice(1)));
    default: return (stringToInteger(string));
  }
  
}



//another way - put them into one function

function stringToSignedInteger2(string) {
  let sign = 1;
  let total = 0;
  let reversedArray = string.split('').slice().reverse();
  if(reversedArray.includes('-')) {
    reversedArray.pop();
    sign = -1;
  } else if (reversedArray.includes('+')) {
    reversedArray.pop();
  }


  
  for (let index = 0; index < reversedArray.length; index ++) {
    total = total + reversedArray[index] * 10**index;
  }
  return total * sign;
}





console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true


console.log(stringToSignedInteger2("4321") === 4321); // logs true
console.log(stringToSignedInteger2("-570") === -570); // logs true
console.log(stringToSignedInteger2("+100") === 100); // logs true