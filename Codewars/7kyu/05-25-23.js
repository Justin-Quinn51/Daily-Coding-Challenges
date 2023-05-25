// Array Leaders (Array Series #3)

/*
Definition
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Returned Array/list should store the leading numbers in the same order in the original array/list .
*/

// Solution

function arrayLeaders(numbers) {
  return numbers.filter(
    (num, i) => num > numbers.slice(i + 1).reduce((acc, c) => acc + c, 0)
  );
}
