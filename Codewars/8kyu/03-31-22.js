// Beginner - Reduce but Grow

/* Given a non-empty array of integers, return the result of multiplying the values together in order.*/

// Solution

// function grow(x){
//     return x.reduce( (acc, c) => acc * c, 1)
//   }

// Arrow function refactor

const grow = x => x.reduce( (acc, c) => acc * c, 1)

// Convert a string to an array

/*Write a function to split a string and convert it into an array of words.*/

// Solution

// function stringToArray(string){
//     return string.split(' ')
//   }

const stringToArray = string => string.split(' ')

