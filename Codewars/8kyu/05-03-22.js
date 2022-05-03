// Student's Final Grade

/*Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
This function should return a number (final grade). There are four types of final grades:
    100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0, in other cases*/

// Solution

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
      return 100
    } else if (exam > 75 && projects >= 5) {
      return 90
    } else if (exam > 50 && projects >= 2) {
      return 75
    } else {
      return 0
    }
  }

// Difference of Volumes of Cuboids

/*In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.*/

// Solution

function findDifference(a, b) {
    return Math.abs(a.reduce( (acc, c) => acc * c) - b.reduce((acc, c) => acc * c))
  }