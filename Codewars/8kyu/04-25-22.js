// Calculate average 

/*Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.*/

// Solution

function find_average(array) {
    let average = array.reduce((acc, c) => acc + c, 0) / array.length 
    return average ? average : 0
  }

// Simple multiplication

/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.*/

// Solution

// function simpleMultiplication(number) {
//   if (number % 2 === 0) {
//     return number * 8
//   } else {
//     return number * 9
//   }
// }

const simpleMultiplication = number => number % 2 === 0 ? number *= 8 : number *= 9