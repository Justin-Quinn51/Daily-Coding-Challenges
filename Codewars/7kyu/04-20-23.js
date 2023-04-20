// Love vs friendship

/*
Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/

// Solution

function wordsToMarks(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let sum = 0
  string.split('').forEach((letter) => {
    sum += alphabet.indexOf(letter) + 1
  })
  return sum
 }