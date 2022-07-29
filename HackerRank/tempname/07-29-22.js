// Mini-Max Sum

/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.*/

// Solution

function miniMaxSum(arr) {
    // Write your code here
let min = Math.min(...arr)
let max = Math.max(...arr)
let sum = arr.reduce( (acc, c) => acc + c, 0)

    
console.log(`${sum - max} ${sum - min}`)
}