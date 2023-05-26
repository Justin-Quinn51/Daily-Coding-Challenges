// Changing letters

/*
  When provided with a String, capitalize all vowels
*/

// Solution

function swap(string) {
  let vowels = 'aeiou';
  return string
    .split('')
    .map((letter) => (vowels.includes(letter) ? letter.toUpperCase() : letter))
    .join('');
}
