// SpeedCode #2 - Array Madness

/*Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.*/

// Solution

function arrayMadness(a, b) {
    let sumOfSquares = a.reduce((acc,c) => acc + c ** 2, 0)
    let sumOfCubes = b.reduce((acc, c) => acc + c ** 3, 0)
    if (sumOfSquares > sumOfCubes ){
      return true
    } else {
      return false 
    }
  }

// Is n divisible by x and y?

/*Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.*/

// Solution

// function isDivisible(n, x, y) {
//   if (n % x === 0 && n % y === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false