// No oddities here

/*Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.*/

// Solution

function noOdds( values ){
    return values.filter(num => num % 2 === 0)
  }

// Sort array by string length

/*Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest. All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.*/

// Solution

function sortByLength (array) {
    return array.sort( (a, b) => a.length - b.length)
  };