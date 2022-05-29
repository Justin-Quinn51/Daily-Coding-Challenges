// Enumerable Magic #3 - Does My List Include This?

/*Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.*/

// Solution

// function include(arr, item){
//   if (arr.includes(item)) {
//     return true
//   } else {
//     return false
//   }
// }

const include = (arr, item) => arr.includes(item) ? true : false;

// NBA full 48 minutes average

/*An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.*/

// Solution

function pointsPer48(ppg, mpg) {
    let fullGameAverage = (48 / mpg) * ppg
    return Number(fullGameAverage.toFixed(1)) || 0
  }