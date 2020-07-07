Problem 1
How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => Number(b) - Number(a)); // note to use Number()

******************************************************************************************************************************


Problem 2
How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a['published']) - Number(b['published'])) // note to use Number()


******************************************************************************************************************************

Problem 3

For each of these collection objects, demonstrate how you would access the letter g.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
arr1[2][1][3]

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
arr2[1]['third'][0]

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
arr3[2]['third'][0][0]                     //note that value ['ghi'] is an array. not string.. so use [0] twice.

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
obj1['b'][1]

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
Object.keys(obj2['third'])[0]                                         //to access to 'g' (key), use Object.keys


******************************************************************************************************************************

Problem 4

For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;                     //[3] is an array.. so had to use [0]

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2['a']['a'][2] = 4;


******************************************************************************************************************************

Problem 5

//get the total age of male members

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};


1) 
let totalAge = 0;
for (let prop in munsters) {
  if (munsters[prop]['gender'] === 'male') {
    totalAge = totalAge + munsters[prop]['age']
  }
}


2)
let objValue = Object.values(munsters);
let totalAge = 0;

objValue.forEach(element => {
  if(element['gender'] === 'male') {
    totalAge = totalAge + element['age'];
  }
})



3)
Object.values(munsters)
.filter(value => {                           //get only male
  return value['gender'] === 'male'
})
.map(value2 => {                             // get an array with age
  return value2['age']
})
.reduce((accum, next) => {                   //get a number that adds all ages in that array
  return accum + next
}, 0)


******************************************************************************************************************************


Problem 6

/*
One of the most frequently used real-world string operations is that of "string substitution," 
where we take a hard-coded string and modify it with various parameters from our program.

Create a program that logs below
(Name) is a (age)-year-old (male or female).*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};


1)
Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});


2)
Object.entries(munsters).forEach(member => {
  console.log(`${member[0]} is a ${member[1]['age']}-year-old (${member[1]['gender']})`);
});

******************************************************************************************************************************

Problem 7
Given the following code, what will the final values of a and b be? Try to answer without running the code.
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

=>

let arr = [a, b];   [ 2, [5, 8] ]

arr[0] += 2;        [ 4, [5, 8] ] // this will not change a. (pass by value)
arr[1][0] -= a;     [ 4, [3, 8] ] //this will change b as b is an array. (pass by reference)

a -> 2 
b -> [3, 8] 

******************************************************************************************************************************

Problem 8
//Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

//aeiouwy

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = ['a', 'e', 'i', 'o', 'u'];



1)
let values = Object.values(obj);
let spread = [].concat(...values);         //using spread ... => please note that I used ...values not [...values]
spread.forEach(word => {
    word.split('').forEach(letter => {
        if (vowels.includes(letter)) {
            console.log(letter);
        }
    });
});




2)
Object.values(obj).forEach(subarray => {
    subarray.forEach(word => {
        word.split('').forEach(letter => {
            if (vowels.includes(letter)) {
                console.log(letter);
            }
        })
    })
})

******************************************************************************************************************************

Problem 9

/*return a new array with the same structure, but with the subarrays ordered 
-- alphabetically or numerically as appropriate -- in ascending order.*/

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];


let arr2 = arr.map(subarray => {
    if (typeof subarray[0] === 'string') {       //if an array only contains string, you can use arr.sort() (default ascending)
        return subarray.slice().sort();         //USING SLICE to 'subarray' in order not to mutate 'arr'
    } else {
        return subarray.slice().sort((a, b) => a - b);         //USING SLICE to 'subarray' in order not to mutate 'arr'
    }                                     //if an array contains number, you must use callback function.. otherwise it will use UTF-16
    
});

******************************************************************************************************************************

Problem 10

//sort them by dscending order

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

1)
let arr2 = arr.map(subarray => {
    if (subarray[0] !== 'number') {                       
        return subarray.slice().sort().reverse();                        
    } else {
        return subarray.slice().sort((a, b) => b - a);        
    }                                               
    
});


2)

let arr3 = arr.map(subarray => {
    return subarray.slice().sort((a, b) => {                   //since both cases (number and string) will use the same callback,
         if (typeof subarray[0] === 'number') {               //we can use .slice().sort() in the entire callback
            return b - a;                                    //normal number dscending function
        } 
        
        if (a < b) {                                        //for string, if you use this it will coerce to number.
            return 1;                                      //remember when it should return -1 or 1
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });

    });
    
    
******************************************************************************************************************************
Problem 11

use the map method to return a new array identical in structure to the original but, with each the number incremented by 1.
Do not modify the original data structure.
 
 
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

1)
let arr2 = arr.map(obj => {
  let newObj = {};
  for (let prop in obj) {    
    newObj[prop] = obj[prop] ++;  //this is a merely adding props to an object
    
  }
  return newObj;                //the callback's return is "newObj". 
});



2) (NOT WORKING)
let arr2 = arr.slice().map(obj => {
  for (let prop in obj) {
    obj[prop] ++;        //Althoght you used splice to map, 
                         //this still mutates the original
  }                      //because the update points to the original obj.
  return obj;
});

******************************************************************************************************************************
Problem 12

use a combination of methods, including filter, 
to return a new array identical in structure to the original, 
but containing only the numbers that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let arr2 = arr.map(subarray => {
  return subarray.filter(element => element % 3 === 0);
});

******************************************************************************************************************************

Problem 13

sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]


1)
arr.sort((a, b) => {
  let oddSuma = a.filter(i => i % 2 === 1)               //using filter! to get only odd number.. 
                 .reduce((x, y) => x + y, 0);           //and use reduce to that element which contains only odd number..! brilliant
  let oddSumb = b.filter(j => j % 2 === 1)
                 .reduce((q, p) => q + p, 0);
  
  return oddSuma - oddSumb;              //we just need to find -, + or 0 for retur. and sort will do its job.
});



2)

let arr2 = arr.slice();

function addOdd (array) {                //unlike the example above, this only uses reduce function to add only selective element.
    let total = 0;                      
    array.reduce((a, b) => {
    if (b % 2 === 1) {
    return total = a + b;
    } else {
    return total = a + 0;                 //if element is even, it adds 0 value.
    }
  }, total);
  return total;
}

arr2.sort((a, b) => {
  return addOdd(a) - addOdd(b);              //finally using sort method to sort
})

******************************************************************************************************************************
Problem 14

write some code to return an array 
containing the colors of the fruits and the sizes of the vegetables. 
The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

should be:

[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]


Object.values(obj).map(obj => {
  if (obj['type'] === 'vegetable') {
    return obj['size'].toUpperCase();                                                   //size value is string.. so no need to use .map here.
  } else {
    return obj['colors'].map(word => word.charAt(0).toUpperCase() + word.substring(1)); //note that I used .map here because colors values are sub-array.
  }
});


******************************************************************************************************************************

Problem 15

write some code to return an array which contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];


arr.filter(obj => {
  return Object.values(obj)                                  //only return the objects are truthy
  .every(subarray => {                                       //every will tell you what 1subarray has ALL truthy return
    return (subarray.every(element => element % 2 === 0));    //every will tell you what 2subarray's elemetns are ALL even
  });
});


******************************************************************************************************************************

Problem 16

 write some code that returns an object 
 where the key is the first item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let obj = {};

arr.forEach(subarray => {
  obj[subarray[0]] = subarray[1];
});


******************************************************************************************************************************

Problem 17


A UUID is a type of identifier often used to uniquely identify items, 
even when some of those items were created on a different server or by a different application. 
That is, without any synchronization, two or more computer systems can create new items 
and label them with a UUID with no significant risk of stepping on each other's toes. 
It accomplishes this feat through massive randomization. 
The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. 
The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. 
The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, 
e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.



Write a function that takes no parameters and returns a UUID.


let pool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];


function getRandom() {
  return pool[Math.floor(Math.random()*pool.length)]} // get random element from an array

function creatElement(howMany) {
  let element = '';
  for(let i = 0; i < howMany; i++) {
    element = element + (getRandom());               
  }
  return element;                                            //get # of element and make them into a string
}


function uuid () {
  let finalArray = [];
  let structure = [8, 4, 4, 4, 12];                       //this structure will determine how many letters we need for each element
  structure.forEach(number => {
    finalArray.push(creatElement(number));
  });
  return finalArray.join('-');                          //make them into one string spliting by '-'
}


uuid();