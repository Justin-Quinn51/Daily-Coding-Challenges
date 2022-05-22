// Divide and Conquer

/*Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers. Return as a number.*/

// Solution

function divCon(x) {
    return x.filter(el => typeof el === 'number').reduce( (acc, c) => acc + c, 0) - x.filter(el => typeof el === 'string').reduce( (acc, c) => +acc + +c, 0)
}