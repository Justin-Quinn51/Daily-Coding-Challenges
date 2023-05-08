// Odd-Even String Sort

/* 
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
*/

// Solution
function sortMyString(S) {
  let evenIndex = []
  let oddIndex = []
  S.split('').forEach((v, i) => i % 2 === 0 ? evenIndex.push(v) : oddIndex.push(v))
     return `${evenIndex.join('')} ${oddIndex.join('')}`
 }