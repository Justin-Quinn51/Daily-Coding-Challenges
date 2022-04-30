// Sum without highest and lowest number

/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.*/

// Solution

// function sumArray(array) {
    //   if(null) {
    //     return 0
    //   } else {
    //   return array.sort((a, b) => a - b).shift().pop().reduce( (acc, c) => acc + c, 0) 
    //   }
    // }
    
    const sumArray = array => array ? array.sort( (a, b) => a - b).slice(1, -1).reduce( (acc, c) => acc + c, 0) : 0


// Thinkful - Logic Drills: Traffic light

/*You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.*/

// Solution

// function updateLight(current) {
//   if (current === 'green') {
//     return 'yellow'
//   } else if (current === 'yellow') {
//     return 'red'
//   } else {
//     return 'green'
//   }
// }

const updateLight = current => current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'