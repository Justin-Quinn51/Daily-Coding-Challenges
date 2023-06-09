// Equal Sides of an Array

/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
*/

// Solution

function findEvenIndex(arr) {
  let i;
  for (let i = 0; i < arr.length; i++) {
    let slice1 = arr.slice(0, i).reduce((acc, c) => acc + c, 0);
    let slice2 = arr.slice(i + 1, arr.length).reduce((acc, c) => acc + c, 0);
    if (slice1 === slice2) {
      return i;
    }
  }
  return -1;
}
