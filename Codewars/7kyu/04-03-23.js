// Largest pair sum in array

/*
Given a sequence of numbers, find the largest pair sum in the sequence.
*/

// Solution

function largestPairSum (numbers) {
  let sortedNums = numbers.sort((a, b) => a - b)
  let largest = sortedNums[numbers.length - 1]
  let secondLargest = sortedNums[numbers.length - 2]
  return largest + secondLargest
}