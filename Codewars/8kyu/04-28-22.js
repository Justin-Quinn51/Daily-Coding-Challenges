// Can we divide it?

/*Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.*/

// Solution

function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0 
  }

// Third Angle of a Triangle

/*You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.*/

// Solution

function otherAngle(a, b) {
    return 180 - (a + b)
  }



