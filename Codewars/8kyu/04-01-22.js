// Find the first non-consecutive number

/*Your task is to find the first element of an array that is not consecutive.*/

// Solution

function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if ( arr[i + 1] - arr[i] !== 1) {
        return arr[i + 1]
      }
    }
    return null
  }
  

// Sum Mixed Array

/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.*/

// Solution

// function sumMix(x){
//     return x.map(Number).reduce( (acc,c) => acc + c )
//   }

// Refactored arrow function
const sumMix = x => x.map(Number).reduce((acc,c) => acc + c)

// My head is at the wrong end!

/*It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).*/

// Solution
// function fixTheMeerkat(arr) {
//     return arr.reverse()
//    }

const fixTheMeerkat = arr => arr.reverse()