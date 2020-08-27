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






let greeting = "Hello";
const test = str => {
  str.concat("World");
  str = str.toLowerCase();
  return str;
}
test(greeting);
console.log(greeting);

/*
greeting is assigned to a string 'Hello' on line 1.

On line2, a function 'test' is defined by function expression using arrow function. 
This function takes str as parameter.

In the function, on line 3, .concat takes an arguement string 'world', and called on the value of str. 
That reutrns a new string Helloworld.

on line4, str is reassigned to the return value of toLowerCase() called on str.

The function returns str, which is the parameter of the function.

on line 7, a value of greeting is passed to a function as arguement. 
Meaning that this will not reassign or mutate the variable greeting. - pass by value.

Line 8, console.log method took the arguement greeting, and it prints "Hello". return undefined.

This coding explains pass by value concept.
*/