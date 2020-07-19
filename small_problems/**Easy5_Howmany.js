/*
Write a function that counts the number of occurrences of each element in a given array. 
Once counted, log each element alongside the number of occurrences.
Consider the words case sensitive e.g. ("suv" !== "SUV").


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

*/
// my way

function countOccurrences2(array) {

let object = {};

array.forEach(element => {
  if(object[element]) {
    object[element]++;
  } else {
    object [element] = 1;
  }
});

let i = 0;
while(i <Object.keys(object).length) {
  console.log(`${Object.keys(object)[i]} => ${Object.values(object)[i]}`);
  i++;
}

}

let vehicles2 = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
                
                
countOccurrences2(vehicles2);


//LS way
function countOccurrences(array) {

let object = {};

array.forEach(element => {
  object[element] = object[element] || 0;  // note on here. using shortcircuit operator 
  object[element]++;
});


for(let item in object) {                   //also note on here. Using for it
  console.log(`${item} => ${object[item]}`);
}


}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
                
                
countOccurrences(vehicles);

