// Reverse a Number

/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
*/

// Solution
function reverseNumber(n) {
  let reversedNums = parseFloat(n.toString().split('').reverse().join(''));
  return reversedNums * Math.sign(n);
}
