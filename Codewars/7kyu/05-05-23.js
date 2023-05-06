// Sum of Odd Cubed Numbers

/* 
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

// Solution
function cubeOdd(arr) {
  let oddNumsCubed = arr.filter(num => num % 2 != 0).map(num => num ** 3).reduce((prev, val) => prev + val, 0)
  if (isNaN(oddNumsCubed)) {
    return undefined
  } else {
    return oddNumsCubed
  }
    
 }
