// Grasshopper - Terminal game combat function

/*Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.*/
// Solution

// function combat(health, damage) {
//   if (health - damage >= 0) {
//     return health - damage
//   } else {
//     return 0
//   }
// }

const combat = (health, damage) => health - damage >= 0 ? health - damage : 0 

// Kata Example Twist

/*This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
Add the value "codewars" to the array websites/Websites 1,000 times.*/

// Solution

// add the value "codewars" to the websites array 1,000 times
let websites = []
for (let i = 0; i < 1000; i++) {
  websites.push('codewars')
}

