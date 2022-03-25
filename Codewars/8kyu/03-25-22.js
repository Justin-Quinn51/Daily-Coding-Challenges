// Beginner - Lost Without a Map

/*Given an array of integers, return a new array with each value doubled.*/

// Solution

function maps(x){
    return x.map(num => num * 2)
}

// Arrow Function Refactor

let maps = x => x.map(num => num * 2)