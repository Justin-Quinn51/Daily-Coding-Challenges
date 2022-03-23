// Square(n) Sum

/*Complete the square sum function so that it squares each number passed into it and then sums the results together.*/

// Solution 

function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + (num * num), 0)
  }

// Remove String Spaces

/*Simple, remove the spaces from the string, then return the resultant string.*/

// Solution 

function noSpace(x){return x.split(' ').join('')}