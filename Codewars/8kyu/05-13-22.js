// 5 without numbers !!

/*Write a function that always returns 5
Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
Good luck :)
*/

// Solution

function unusualFive() {
    let inspiration = 'mayan'
    return inspiration.length
  }

// Pre-FizzBuzz Workout #1

/*This is the first step to understanding FizzBuzz.
Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
Your expected output is an array of positive integers from 1 to n (inclusive).
Your job is to write an algorithm that gets you from the input to the output.
*/

// Solution

function preFizz(n) {
    let arr = []
    for (let i = 1; i <= n; i += 1) {
      arr.push(i)
    }
    return arr
  }
