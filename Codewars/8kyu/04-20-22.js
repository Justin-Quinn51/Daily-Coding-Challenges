// UEFA EURO 2016

/*Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."*/

// Solution

function uefaEuro2016(teams, scores){
    if (scores[0] > scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    } else if (scores[0] < scores[1]) {
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
  }

// Short Long Short

/*Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).*/

// Solution

function solution(a, b){
    if(a.length > b.length) {
      return `${b}${a}${b}`
    } else if (a.length < b.length) {
      return `${a}${b}${a}`
    } 
  }