// What's the real floor?

/*Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
Write a function that given a floor in the american system returns the floor in the european system.
With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level.*/

// Solution

// function getRealFloor(n) {
//   if (n < 0) {
//     return n
//   } else if (n === 0) {
//     return 0
//   } else if (n <= 13) {
//     return n - 1
//   } else {
//     return n - 2
//   }
// }

const getRealFloor = n => n < 0 ? n : n === 0 ? 0 : n <= 13 ? n - 1 : n - 2

// Is it a palindrome?

/*Write a function that checks if a given string (case insensitive) is a palindrome.*/

// Solution

function isPalindrome(x) {
    if (x.toLowerCase() == x.split('').reverse().join('').toLowerCase()) {
      return true
    } else {
      return false
    }
   }