// Categorize New Member

/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
*/


// Solution
function openOrSenior(data){
  // Used destructuring to pull the age and handicap variables from the data array.
  // If the age was greater than or equal to 55 and the handicap was greater then 7,
  // the pair would be replaced by the string 'Senior'. All other pairs would be labeled 'Open'.
  return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open')
}