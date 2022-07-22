// Vowel Count

/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

// Solution
function getCount(str) {
  let count = 0
  for (let letter of str) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      count += 1
    } 
  }
  return count
}