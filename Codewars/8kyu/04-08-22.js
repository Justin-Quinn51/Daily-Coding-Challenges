// To square(root) or not to square(root)

/*Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array*/

// Solution

const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

// Use the map method to return a new "expected" array which corresponds to a given set of conditions
// Use the Math.sqrt method to take the square root of each number in the array
// Modulus 1 with no remainder is the test to see if the number has an integer square root (non-decimal number)
// If the number does not have an integer square root, we then square the number using the exponentiation operator

// Remove First and Last Character Part Two

/* You are given a string containing a sequence of character sequences separated by commas.
Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).*/

// Solution

function array(arr){
    return arr.split(',').slice(1, -1).join(' ') || null
  }
  
  // The split method returns the substrings in an comma seperated array
  // The slice method returns a copy of the array from the starting index to the ending index
  /*The join method creates and returns a new string by concatenating the comma sepeated elements in an array.
    The space between the elements is created by putting a space in between the quotes in the join method*/ 
  /* The or operator (||) is utilized because of "short circuit evaluation". 
     This means that if the left side of the expression evaluates to "truthy", it is returned, 
     and the right side of the expression is ignored. If the left side evaluates to falsy, the right 
     side of the expression (null) is returned*/