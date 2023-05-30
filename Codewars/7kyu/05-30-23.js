// Largest Elements

/*
Write a program that outputs the top n elements from a list.
*/

// Solution

function largest(n, array) {
  return n > 0 ? array.sort((a, b) => a - b).slice(-n) : [];
}
