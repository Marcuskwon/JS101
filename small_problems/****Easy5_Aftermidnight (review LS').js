/*The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and
returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

You may not use javascript's Date class methods.


input number (minutes-base)
output string (24 hour formnat)

rule
input will be a minute number
the string will range from 00:00 to 23:59
if negative, it means going back to the past -3 -> 23:57
)



algo


Examples:*/


///////// LS way much better

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}




////////////// my way




function getTimeFormat(number) {
  let output = number;
  if(String(output).length < 2) {
    output = '0' + String(output);
  }
  return output;
}

function timeOfDay(number) {

if(number >= 0) {
    number = number % 1440;          //calculating how many minutes pass in that day
} else if (number < 0) {
    number = (number % 1440) + 1440; //calculating how many minutes pass in that day .. for -, you need to add 1440 back. to find the time passed for that day.
}

let hour = Math.floor(number / 60); 
let min = number % 60;

return String(getTimeFormat(hour)) + ':' + String(getTimeFormat(min));

}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");



