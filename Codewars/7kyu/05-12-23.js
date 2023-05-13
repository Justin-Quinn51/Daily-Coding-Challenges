// Ordered Count of Characters

/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.
*/

// Solution
const orderedCount = function (text) {
  let arr = [...new Set(text)]
  return arr.map(el => [el, [...text].filter(e => e === el).length])
}
