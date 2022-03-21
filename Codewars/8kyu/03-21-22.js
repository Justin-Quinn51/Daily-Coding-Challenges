// Return Negative

/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/

// Solution

function makeNegative(num) {
    if (num > 0) {
      return -num
    } else if (num < 0) {
      return num
    } else {
      return 0
    }
  }


// String Repeat 

/*Write a function called repeatStr which repeats the given string string exactly n times.*/

// Solution

function repeatStr (n, s) {
  return s.repeat(n);
}

