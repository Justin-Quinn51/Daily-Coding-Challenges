// Sum Arrays

/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.*/

// Solution
function sum (numbers) {
    return numbers.reduce( (a, b) => a + b, 0)    
 };

 // Refactored arrow function
 const sum = numbers => numbers.reduce( (a, b) => a + b, 0);


// Array plus array

/*I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.*/

// Solution
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce( (acc,c) => acc + c) + arr2.reduce( (acc,c) => acc + c)
  }

// Using concat() method
// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce( (acc, c) => acc + c);
// }