// Grasshopper - Messi Goals

/*
    Create these three variables and store the appropriate values using the table above:

    laLigaGoals
    championsLeagueGoals
    copaDelReyGoals

    Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
 */

// Solution

let laLigaGoals = 43
let championsLeagueGoals = 10
let copaDelReyGoals = 5

let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// Beginner Series #4 Cockroach

/*The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).*/

// Solution

function cockroachSpeed(s) {
    let cmPerSec = Math.floor( (s / 0.36) * 10) 
    return cmPerSec
  }