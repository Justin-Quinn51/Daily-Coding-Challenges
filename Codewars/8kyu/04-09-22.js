// Basic Mathematical Operations

/*Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.*/


// Solution

function basicOp(operation, value1, value2) {
if (operation === '+') {
    return value1 + value2
  } else if (operation === '-') {
    return value1 - value2
  } else if (operation === '*') {
    return value1 * value2
  } else {
    return value1 / value2
  }
}

// Do I Get a Bonus?

/*Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).*/

// Solution

function bonusTime(salary, bonus) {
    if (bonus) {
      salary *= 10
    } else {
      salary += 0
    }
     return `\u00A3${salary}`
   }
