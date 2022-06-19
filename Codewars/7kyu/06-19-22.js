// Shortest Word

/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

// Solution

function findShort(s){
    let length = s.split(' ').map(word => word.length).sort( (a, b) => a - b)
      return length[0]
  }

// Credit Card Mask

/*Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.*/

// Solution

function maskify(cc) {
    let end = cc.slice(-4)
    let start = cc.slice(0, -4).replace(/[a-z0-9]/g, '#')
    return start.concat(end)
  }
  