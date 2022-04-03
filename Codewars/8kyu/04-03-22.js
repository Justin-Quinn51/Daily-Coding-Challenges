// Well of Ideas

/*In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.*/

// Solution

function well(x) {
    // use the filter method to find elements that contain the string 'good'
    // use switch syntax to help simplify long if else statements
    switch (x.filter(i => i === 'good').length) {
        case 0:
          return 'Fail!'
        case 1:
        case 2:
          return 'Publish!'
        default:
          return 'I smell a series!'
      }
    }

// Removing Elements

/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.*/

// Solution

function removeEveryOther(arr) {
    return arr.filter(function(element, index) {
      // Starting at the 0th index, this returns every even index, meaning every other element would be skipped
      return index % 2 === 0;
   });  
  }
