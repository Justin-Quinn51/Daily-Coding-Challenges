// Alternate capitalization

/* 
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
*/

// Solution

function capitalize(s){
  let capitalizeEvens = s.split('').map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('')
  let capitalizeOdds = s.split('').map((letter, index) => index % 2 === 1 ? letter.toUpperCase() : letter).join('')
  return [capitalizeEvens, capitalizeOdds];
};
