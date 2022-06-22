// Last Survivor

/*You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space). Return the only letter left.*/

// Solution
function lastSurvivor(letters, coords) {
letters = letters.split('')
// Loop through coordinates
  coords.forEach(coord => {
    // Delete 1 starting from the coordinate until there are no more coordinates left
    letters.splice(coord, 1)
  })
  return letters.join('')
}