/*

input number, object array
output true or flase.. depending on the quantity is positive or negative

algo

GET itemArray = transactionsFor(value, obj)
let validation = 0
loop 
if in + out - and add them to validaiton.
return validation > 0

*/


function transactionsFor(value, obj) {
  return obj.filter(element => value === Object.values(element)[0]); // extracting the value's obj only to an array
}


function isItemAvailable(value, obj) {
  let itemArray = transactionsFor(value, obj);                  //first, get an array
  let validation = 0;
  itemArray.forEach(element => {
    if(Object.values(element)[1] === 'in') {
      validation = validation + Object.values(element)[2];          //using validation, add to it or
    } else {
      validation = validation - Object.values(element)[2];          //subtract from it
    }
});
return validation > 0;
}



let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true