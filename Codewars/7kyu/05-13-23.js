// Halving Sum

/*Given a positive integer n, calculate the following sum:
n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.
*/

// Solution
function halvingSum(n) {
  let sum = 0;
  while ( n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum
}