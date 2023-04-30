// Maximum Triplet Sum (Array Series #7)

/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
*/

// Solution

function maxTriSum(numbers){
  let noRepeats = [...new Set(numbers)]
  let sortedArr = noRepeats.sort((a, b) => a - b)
  let max3 = sortedArr.slice(-3)
  let tripleSum = max3.reduce((acc, c) => acc + c, 0)
  return tripleSum
 }
