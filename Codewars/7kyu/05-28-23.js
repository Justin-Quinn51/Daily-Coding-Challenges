// Automorphic Number (Special Numbers Series #6)

/*
Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .
*/

// Solution

function automorphic(n) {
  let square = n ** 2;
  return square.toString().endsWith(n) ? 'Automorphic' : 'Not!!';
}
