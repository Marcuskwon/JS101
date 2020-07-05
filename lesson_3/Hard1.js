//Question2 what these two(7,8) will log?

let object = { first: [1] };
let numArray = object["first"]; // pass by reference ..it will afftect "object" 
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // => { first: [1, 2] }

//what if we want to add 2 to the array and doesn't want to mutate the object?

let object2 = { first: [1] };
let array = (object2["first"]).concat(); // you can also use obejct2["first"].slice(0);
array.push(2);

console.log(array);
console.log(object2);


//Question 3 what will each output?

//1
function messWithVars(one, two, three) {
  one = two; //reassigning arguements passed them as parameter? doesn't change
  two = three; //They are variables only under this function' scope
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three); 

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

//2
function messWithVars(one, two, three) {
  one = ["two"]; //reassigning arguements passed them as parameter? doesn't change. 
  two = ["three"]; //They are variables only under this function' scope
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
/* doesn't change because reassigning parameter doesn't reassign a variable that
was passed into the function as argument*/


//3
function messWithVars(one, two, three) {
  one.splice(0, 1, "two"); // these will mutate the original
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);
/*it does change now because function messWithVars is mutating the original variables*/




//Question 4

function isAnIpNumber(str) {
  if (!/^\d+$/.test(str)) return false;

  let number = Number(str);
  return number >= 0 && number <= 255;
}



function isDotSeparatedIpAddress(inputString) {
  
  let dotSeparatedWords = inputString.split('.');
  
  if (dotSeparatedWords.length !== 4) {
    
    return false;
    
  } 
    
  while (dotSeparatedWords.length > 0) {
    
    let word = dotSeparatedWords.pop();

    if (!isAnIpNumber(word)) {
      
      return false;
    } 
  }
  /*the while while function performaing as 'filtering' to use isAnIpNumber for each element. If all true
  it won't do anything. If false, it will return false*/

 return true;
}


console.log(isDotSeparatedIpAddress('1.2.3.4'))
console.log(isDotSeparatedIpAddress('a.b.3.4'))
console.log(isDotSeparatedIpAddress('1.2.3.4.5'))
console.log(isDotSeparatedIpAddress(''))

