// Exclamation marks series #1: Remove an exclamation mark from the end of string

/*Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.*/

// Solution

function remove (string) {
    return string.endsWith('!') ? string.slice(0, -1) : string
  }

// Name Shuffler

/*Write a function that returns a string in which firstname is swapped with last name.*/

// Solution

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
   }