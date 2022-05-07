// Reverse List Order

/*In this kata you will create a function that takes in a list and returns a list with the reverse order.*/

// Solution

function reverseList(list) {
    return list.sort( (a, b) => a + b)
  }

// The Wide-Mouthed frog! 

/*Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide*/

// Solution

// function mouthSize(animal) {
//   if (animal.toLowerCase() === 'alligator') {
//     return 'small'
//   } else {
//     return 'wide'
//   }
// }

const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small' : 'wide'