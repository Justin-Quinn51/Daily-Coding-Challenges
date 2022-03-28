// Fake Binary

/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.*/

// Solution

// Solution using split, map, join methods and ternary operators
function fakeBin(x){
    return x.split('').map(n => n < 5 ? '0' : '1').join('')
  }

// Solution using a for loop and if...else
function fakeBin(x) {
  let result = '';
  for(let i = 0; i < x.length; i++) {
    if(x[i] < 5) {
      result += '0'
    } else {
      result += '1'
    }
  }
  return result
}

// Solution using for loop and ternary operator
function fakeBin(x) {
  let result = '';
  for (let i = 0; i < x.length; i++) {
    x[i] < 5 ? result += '0' : result += '1';
  }
  return result
}