// Grasshopper - Order of operations

/*You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.*/

// Solution

function orderOperations () {
    return (2 + 2) * (2 + 2) * 2
  }

// Training JS #18: Methods of String object--concat() split() and its good friend join()

/*Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.*/

// Solution

function splitAndMerge(string, separator) {
    return string.split(' ').map(word => word.split('').join(separator)).join(' ')
  }