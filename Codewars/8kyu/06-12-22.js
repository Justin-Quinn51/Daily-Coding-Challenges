// For Twins: 1. Types

/*Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.*/

// Solution

function typeValidation(variable, type) {
    return typeof(variable) === type
   }

// Be Concise III - Sum Squares

/*You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. Shorten the code such that it meets the requirements.*/

// Solution

function sumSquares(array) {
    return array.map(num => num ** 2).reduce( (acc, c) => acc + c, 0) 
   }