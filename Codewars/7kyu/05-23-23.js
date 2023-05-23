// The old switcheroo

/*
Write a function that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
*/

// Solution

function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (_, offset) => offset + 1);
}
