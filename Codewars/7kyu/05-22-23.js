// Between Extremes

/*
Given an array of numbers, return the difference between the largest and smallest values.

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/

// Solution

function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}
