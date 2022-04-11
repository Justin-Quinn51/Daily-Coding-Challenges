// What is between?

/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.*/

// Solution

function between(a, b) {
    let arr = []
    for (let i = a; i <= b; i++) {
      arr.push(i)
    }
    return arr
  }

// Generate range of integers

/*Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)*/

// Solution

function generateRange(min, max, step){
    let arr = [];
    for (let i = min; i <= max; i += step) {
      arr.push(i)
    }
    return arr
  }