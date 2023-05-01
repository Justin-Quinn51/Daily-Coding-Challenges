// Vowel one

/*
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.
*/

// Solution

function vowelOne(s){
  return s.replace(/[^aeiou]/gi, 0).replace(/[aeiou]/gi, 1)
}

