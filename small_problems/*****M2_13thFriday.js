/*

input array
output array (mutated original)

rule

array will be sorted in ascending order
not using arr.sort() method
input array will have more than 2 elements at least
the original array is mutated and that will be the return of the func



algo

iterate each month of the year
get the date on 13th each month
count them
return the count



*/

function fridayThe13ths(year) {
   let count = 0;
  for(let i = 0; i < 12; i++) {
    let unluckyDays = new Date(year, i, 13);
    if(unluckyDays.getDay() === 5) {
      count++;
    }
  }
  return count;
}





console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2