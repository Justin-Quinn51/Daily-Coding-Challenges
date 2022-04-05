// Filling an array (part 1)

/*We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.*/

// Solution

function arr(n) {
    let newArr = []; // Create a new array which will return a blank array when called with no argument 
    for (let i = 0; i < n; i++) { 
      newArr.push(i) // Use the push method to add elements to the new array which meet the condition 
    }
    return newArr // return the new array filled with values 
  }
  