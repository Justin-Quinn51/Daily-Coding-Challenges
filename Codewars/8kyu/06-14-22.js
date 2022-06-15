// Enumerable Magic #25 - Take the First N Elements

/*Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.*/

// Solution

function take(arr, n) {
    return arr.slice(0, n)
  }

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

/*eplace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.*/

// Solution

function replace(s){
    return s.replace(/[aeiou]/ig, "!")
  }