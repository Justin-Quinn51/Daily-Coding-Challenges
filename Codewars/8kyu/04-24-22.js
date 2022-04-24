// How good are you really?

/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!*/

// Solution

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce( (acc,c) => acc + c) / classPoints.length < yourPoints ? true : false;
  }

// Beginner Series #1 School Paperwork

/*Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0. */

// Solution

// function paperwork(n, m) {
//   if (n > 0 && m > 0) {
//     return n * m
//   } else {
//     return 0
//   }
// }

const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0