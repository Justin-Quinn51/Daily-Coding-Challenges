// Remove duplicate words

/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

// Solution

function removeDuplicateWords (s) {
  let arr = s.split(' ')
  let noRepeats = [...new Set(arr)]
  return noRepeats.join(' ')
}