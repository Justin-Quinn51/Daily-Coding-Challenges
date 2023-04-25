// Unlucky Days

/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.
*/

// Solution

function unluckyDays(year){
  let date = new Date(year, 0, 13);
  let unlucky = 0;
  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    if (date.getDay() === 5) {
      unlucky++
    }
   }
  return unlucky
}