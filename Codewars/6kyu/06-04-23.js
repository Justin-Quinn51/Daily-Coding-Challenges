// Persistent Bugger

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/

// Solution

function persistence(num) {
  let count = 0;
  num = num.toString();
  while (num.length > 1) {
    num = num.split('').reduce((acc, c) => +acc * +c).toString();
    count++;
  }
  return count
}
