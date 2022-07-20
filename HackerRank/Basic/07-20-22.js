// Plus Minus

/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000 */

// Solution

function plusMinus(arr) {
    // Write your code here
let positiveNums = 0
let negativeNums = 0
let zero = 0
let numOfInts = arr.length
arr.forEach(num => {
    if (num === 0) {
        zero += 1
    } else if (num > 0) {
        positiveNums += 1
    } else {
        negativeNums += 1
    }
})
 console.log ( (positiveNums / numOfInts).toFixed(6) )
 console.log ( (negativeNums / numOfInts).toFixed(6) )
 console.log ( (zero / numOfInts).toFixed(6) )
}