// Substituting Variables Into Strings: Padded Numbers

/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
*/

// Solution

function solution(value) {
  let paddedVal = value.toString().padStart(5, 0);
  return `Value is ${paddedVal}`;
}
