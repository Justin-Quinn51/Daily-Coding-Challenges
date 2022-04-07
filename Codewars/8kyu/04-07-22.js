// Basic Training: Add item to an Array

/* Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"] */

// Solution

websites.push('codewars') // Used the push method to add a string to the empty websites array 

// Grasshopper - Array Mean

/*To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.*/

// Solution

// function findAverage(nums) {
//   return nums.reduce( (acc, c) => acc + c ) / nums.length
// }

// Refactored using arrow functions
const findAverage = nums => nums.reduce( (acc, c) => acc + c) / nums.length
