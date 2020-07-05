


function shortLongShort(str1, str2) {
  let outcome;
  if (str1.length < str2.length ) {
    outcome = str1 + str2 + str1; 
  } else {
    outcome = str2 + str1 + str2;
  }
  console.log(outcome);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
