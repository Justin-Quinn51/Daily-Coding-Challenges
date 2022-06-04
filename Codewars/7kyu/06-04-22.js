// Narcissistic Numbers 

/* A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. Write a function that, given n, returns whether or not n is a Narcissistic Number.*/

// Solution

function isNarcissistic(n) {
    let length = n.toString().length
    return n.toString().split('').reduce( (acc, c) => acc + c ** length, 0) === n ? true : false;
  }