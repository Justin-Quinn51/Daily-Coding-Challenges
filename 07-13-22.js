// Find the odd int

/*Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.*/

// Solution
function findOdd(A) {
  let count = {}
  A.forEach(e => {
    if (!(e in count)) {
      count[e] = 1
    } else {
      count[e] += 1
    }
  })
  
  for (let value in count) {
    if (count[value] % 2 !== 0) {
      return +value
    }
  }
}