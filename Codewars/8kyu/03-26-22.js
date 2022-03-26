// Convert number to reversed array of digits

/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.*/

// Solution

function digitize(n) {
    return n.toString().split('').reverse().map(Number)
  }
  
// A Needle in the Haystack

/*Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle*/

// Solution

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

// Arrow Function

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`