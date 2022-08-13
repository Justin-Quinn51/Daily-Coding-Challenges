// Fix string case

/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

// Solution
function solve(s){
   let lowerCase = []
   let upperCase = []
   s.split('').forEach(letter => {
     if (letter === letter.toUpperCase()) {
       upperCase.push(letter)
     } else {
       lowerCase.push(letter)
     }
   })
  
    if (lowerCase.length > upperCase.length) {
      return s.toLowerCase()
    } else if (upperCase.length > lowerCase.length) {
      return s.toUpperCase()
    } else {
      return s.toLowerCase()
    }
  return s
}