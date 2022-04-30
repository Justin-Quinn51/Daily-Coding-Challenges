// Grasshopper - Grade book

/*Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.*/

// Solution

function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3
      if (average >= 90) {
        return 'A'
      } else if (average >= 80 && average < 90) {
        return 'B'
      } else if (average >= 70 && average < 80) {
        return 'C'
      } else if (average >= 60 && average < 70) {
        return 'D'
      } else if (average < 60) {
        return 'F'
      }
    }

// L1: Set Alarm

/*Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.*/

// Solution

// function setAlarm(employed, vacation){
//   if (employed && vacation) {
//     return false
//   } else if (!employed && vacation) {
//     return false;
//   } else if (employed && !vacation) {
//     return true;
//   } else {
//     return false
//   }
// }

const setAlarm = (employed, vacation) => employed & vacation ? false : !employed && vacation ? false : !employed && !vacation ? false : true; 