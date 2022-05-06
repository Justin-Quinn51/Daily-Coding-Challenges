// Grasshopper - If/else syntax debug

/*While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
The function receives one parameter health which will always be a whole number between -10 and 10. */

// Solution

// function checkAlive (health) {
//   if (health <= 0) {
//     return false
//   } else {
//     return true
//   }
// }

const checkAlive = health => health > 0

// How many lightsabers do you own?

/*/Inspired by the development team at Vooza, write the function that :
    accepts the name of a programmer, and
    returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.*/

// Solution

function howManyLightsabersDoYouOwn(name) {
    return name === 'Zach' ? 18 : 0
  }