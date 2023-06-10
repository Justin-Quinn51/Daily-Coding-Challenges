// Sort the odd

/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

// Solution

function sortArray(array) {
  let oddArr = array.filter((num) => num % 2 !== 0).sort((a, b) => b - a);
  return array.map((num) => (num % 2 !== 0 ? oddArr.pop() : num));
}
