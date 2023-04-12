// Simple Fun #176: Reverse Letter

// Given a string str, reverse it and omit all non-alphabetic characters.

// Solution

function reverseLetter(str) {
  return str.replace(/[^a-z]/g, "").split('').reverse().join('')
}

/* 
  1. Used the string replace method to return a new string which only contained alphabetic characters.
     The caret means "don't include the following" letters in the replacement. The global flag "g" tests for all cases. 
  2. The split array method with the '' delimeter creates a new array with comma seperated letters.
  3. The reverse array method, as the name would imply, reverses the order of the letters
  4. The join array method creates and returns a new string by concatenating all of the elements in an array
*/   

