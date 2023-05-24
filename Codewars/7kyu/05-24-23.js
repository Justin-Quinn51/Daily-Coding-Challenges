// Remove consecutive duplicate words

/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
*/

// Solution

function removeConsecutiveDuplicates(string) {
  let unique = [];
  let arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      unique.push(arr[i]);
    }
  }
  return unique.join(' ');
}
