

function isLeapYear(year) {
  if (year < 1752) {
    return year % 4 === 0;
  } else {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0); 
  }
}

//when less than 1752 year and can devide it by 4 => true
//if can divide it by 400 -> will be true
//if can divde it by 4 AND cannot devide it by 100 => true


isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true