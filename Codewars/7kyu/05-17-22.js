// You're a square!

/*Given an integral number, determine if it's a square number*/

// Solution 

const isSquare = n => Math.sqrt(n) % 1 === 0 ? true : false;