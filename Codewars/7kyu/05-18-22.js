// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

/*You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time. Your task is to return the number of JavaScript developers coming from Europe. Your function should return number 1. If, there are no JavaScript developers from Europe then your function should return 0.*/

// Solution
// function countDevelopers(list) {
//   let count = 0;
//   for (let i = 0; i < list.length; i++) {
//   if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
//     count += 1
//   }
//  }
//   return count 
// }

const countDevelopers = list => list.filter(el => el.continent === 'Europe' && el.language === 'JavaScript').length
