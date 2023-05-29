// Strong Number (Special Numbers Series #2)

/*
Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String
*/

// Solution

function strong(n) {
  function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
      f *= i;
    }
    return f;
  }

  return n ===
    n
      .toString()
      .split('')
      .reduce((acc, c) => acc + factorial(c), 0)
    ? 'STRONG!!!!'
    : 'Not Strong !!';
}
