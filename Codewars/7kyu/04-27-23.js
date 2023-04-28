// Minimize Sum Of Array (Array Series #1)

/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
*/

// Solution

function minSum(arr) {
  return arr.sort((a, b) => a - b).reduce((acc, c) => acc + c * arr.pop(), 0)
}
