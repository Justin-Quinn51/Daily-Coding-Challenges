// Even numbers in an array

/*Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.*/

// Solution 

// function evenNumbers(array, number) {
//     return array.filter(number => number % 2 === 0).slice(-number)
//   }

const evenNumbers = (array, number) => array.filter(num => num % 2 === 0).slice(-number)