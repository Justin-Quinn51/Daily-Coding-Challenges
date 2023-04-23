// Currying functions: multiply all elements in an array

/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

You must not mutate the original array.
*/

// Solution

const multiplyAll = (arr) => (num) => arr.map(el => el *= num)


