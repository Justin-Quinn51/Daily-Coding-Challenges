// Subtract the Sum

/*Complete the function which get an input number n such that n >= 10 and n < 10000, then:

Sum all the digits of n.
Subtract the sum from n, and it is your new n.
If the new n is in the list below return the associated fruit, otherwise return back to task 1.*/

// Solution
function SubtractSum(n){
  let sumOfDigits = n.toString().split('').reduce( (acc,c) => +acc + +c)
  let newN = n - sumOfDigits
  return 'apple'
}