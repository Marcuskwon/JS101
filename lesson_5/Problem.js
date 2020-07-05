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
arr3[2]['third'][0][0]

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
obj1['b'][1]

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
Object.keys(obj2['third'])[0]


******************************************************************************************************************************

Problem 4

For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;

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
.filter(value => {
  return value['gender'] === 'male'
})
.map(value2 => {
  return value2['age']
})
.reduce((accum, next) => {
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

arr[0] += 2;        [ 4, [5, 8] ] // this will not change a.
arr[1][0] -= a;     [ 4, [3, 8] ] //this will change b as b is an array.

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