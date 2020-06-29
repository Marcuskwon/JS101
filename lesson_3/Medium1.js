//Question 1 print the string below 10 times. and once space more every time you log

let string = 'The Flintstones Rock!'

  
for (let i = 0; i <= 10; i ++) {
    console.log(string.padStart(string.length + i)); //string.padStart(#oflengthof the whole string, padding material(optional))
}

for (let i = 0; i <= 10; i++) {
    console.log(" ".repeat(i) + string); //string.repeat(ntimes)
}


//Question 2 change cases 

let munstersDescription = "The Munsters are creepy and spooky.";

//expected result `tHE mUNSTERS ARE CREEPY AND SPOOKY.`


//1
let hey = munstersDescription.split('').map(function (letter) {
    if (letter === letter.toLowerCase()) {
        letter = letter.toUpperCase();
    } else {
        letter = letter.toLowerCase();
    }
    return letter; //return 을까먹지말자 위의 function의 마지막 결과는 각 letter의 변환된결과.! 그게 모여서 새로운 array가됨
}).join(''); // 새로운 array를 전부다 더하기! Note: 중간에 빈 어레이도있으니깐 스페이스 걱정안해도되!

console.log(hey);

//2
let new string = ''; //밖에서 log해야해서 global로 잡음
function change(letters) {
    
    for(let i = 0; i < letters.length; i++){
        if (letters[i] === letters[i].toUpperCase()) {
            newstring = newstring + letters[i].toLowerCase(); //array가 아닌 string에서 각각 letter를 변환시켜 추가해 새로운어레이 만드는 loop
        } else {
            newstring = newstring + letters[i].toUpperCase();
        }
    }
    return newstring;
}

change(munstersDescription);

console.log(newstring);


//Question 3 this function doesn't work for 0 or negative value. Please change it without using do...while

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

// ->>

function factors2(number) {
    let divisor = number;
    let factors = [];
    while (divisor > 0){ //0 이상일때만 들어감...
        if (number % divisor ===0) { // 나눴을때 나머지없이 딱나눠지는것은? 
            factors.push (number / divisor); //note that you can use factors.push(divisor) but it will be the reversing order.
        }
        divisor -=1;
    }
    return factors;
}

console.log(factors2(12));
console.log(factors2(25));
console.log(factors2(0));
console.log(factors2(-12))


//Question 5 what are the differeces between two functions?

let array = [1, 2, 3, 4, 5];
let array1 = [1, 2, 3, 4, 5];

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
//push - > mutating original


function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
//concat - create a new array (see line 118)

 
console.log(addToRollingBuffer1(array, 8, 'a'));
console.log(addToRollingBuffer2(array1, 8, 'a'));
//both log [1, 2, 3, 4, 5, a]


console.log(array); //log [1, 2, 3, 4, 5, a]
console.log(array1);  //log [1, 2, 3, 4, 5] (didn't change)


//Question 5  what will log?

console.log(0.3 + 0.6); // 0.899999999999
console.log(0.3 + 0.6 === 0.9); // false

//because JavaScript uses floating point numbers for all numeric operations. 



//Question 6  what would this log?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//cannot use == or === to determine if it is Nan. need to use isNan



//Question 7 what would this log?

let answer = 42;

function messWithIt(someNumber) {
  return someNumber = someNumber + 8; // this doesn't change answer (primitive)
}

let newAnswer = messWithIt(answer); // this will just answer +8 = 50

console.log(answer - 8 ); // 34
console.log(newAnswer) // 50


//Question 8 ... will this function change the original musters?


let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};


function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}


messWithDemographics(munsters);

console.log(munsters);

//when you log line20, you can see that the lines 12 & 13 mutates "munster" object. 
//My understanding was that Object.values(object) returns a new array of properties from the object. why does it affect the original object? See my exampe below



let objectA = {
    a: 1,
    b: 2,
    c: 3
};

function changeA(object) {
    Object.values(object)[0]['ab'] = "changed";
    Object.values(object)[0] = "Notchanged";
}


changeA(objectA);

console.log(objectA);

//this will log ObjectA without any change as I expected.
//In this example, line 34 doesn't mutate objectA. It will of course mutate the newly created array from line 34. (whcih we are never using in my example).


/* Question - . I don't understand why line 12 & 13 actually mutate the original object 'munsters'. 
I saw this outcome has something to do with "passed by reference"... but what is the difference between the two examples above? 
why the first function mutates and the second function deosn't mutates?*/



//because the elements of Object.values(demoObject) are object, and those of Object.values(objectA) are primitive.
// pass by reference VS pass by value



let objectB = {
    a: {a: 12}, 
    b: 2,
    c: 3
};

function changeB(object) {
    Object.values(object)[0]['a'] = "changed"; // Object.values(objectB) => The element [0] is object -> pass by referece
    Object.values(object)[1] = "Notchanged"; // The element[1] is primitive => pass by value  
}


changeB(objectB);

console.log(objectB);