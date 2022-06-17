// Reverse words

/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.*/

// Solution

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
  }

// Get key/value pairs as arrays

/*Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.*/

// Solution
function keysAndValues(data){
  let keys = Object.keys(data)
  let values = Object.values(data)
  return [keys, values]
}