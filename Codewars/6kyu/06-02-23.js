// Array.diff

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

If a value is present in b, all of its occurrences must be removed from the other:
*/

// Solution

function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num));
}
