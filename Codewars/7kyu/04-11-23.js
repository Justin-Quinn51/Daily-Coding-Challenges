// Summing a number's digits

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
*/

// Solution

function sumDigits(number) {
  number = Math.abs(number)
  let numsArray = number.toString().split('')
  let sum = numsArray.reduce((acc, c) => acc + +c, 0)
  return sum
}