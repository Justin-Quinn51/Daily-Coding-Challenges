// Exes and Ohs

/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

// Solution
function XO(str) {
    let x = 0
    let o = 0
    str = str.toLowerCase()
    str.split('').forEach(letter => {
      if (letter === 'x') {
        x += 1
      } else if (letter === 'o') {
        o += 1
      }
    })
  return x === o 
}