Keyword	Meaning
START	              start of the program
SET	                set a variable that we can use for later
GET	                retrieve input from user
PRINT	              display output to user
READ	              retrieve a value from a variable
IF/ELSE IF/ELSE	    show conditional branches in logic
WHILE	              show looping logic
END	                end of the program
















a function that returns the sum of two numbers



ask the first numbers
ask the second numbers
put the number together
print the number

START 


GET the first number
SET number1 = the first number
GET the second number
SET number2 = the second number
PRINT number1, number2


READ number1 + number2 
SET total = number1 + number2

PRINT
total

END




a function that takes an array of strings, and returns a string that is all those strings concatenated together

Given the array of strings.Array
 -start with the first element of the array, iterate all elements to combine them to one string
 -declare the string
 -print
 
 
START
 
SET interator = 1
 
 
WHILE interator < array.length {
  comebine each element to one string
  SET string = (all elemetns together)
  
  iterator += 1

PRINT string


END




a function that takes an array of integers, and returns a new array with every other element


given an array of integers


 - create an empty array
 -iterate the original array
 -push every other element to the empty array out of the original array
 
 
START

SET newArray = []
SET iterator = 1


WHILE iterator < array.length
 RETREIVE newArray.push(array[iterlator])
 
 iterator += 1

PRINT newArray

END
