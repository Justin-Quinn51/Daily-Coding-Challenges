// Digitize

/*
Given a non-negative integer, return an array / a list of the individual digits in order.
*/

// Solution

function digitize(n) {
  let list = [n].toString().split('').map(num => +num);
  return list
}