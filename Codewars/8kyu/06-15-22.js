// Do you speak "English"?

/*Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
*/

// Solution

function spEng(sentence){
    return sentence.toLowerCase().includes('english') 
  }

// Multiply the number

/*Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers.*/

// Solution

function multiply(number){
    let num = Math.abs(number).toString().length
    return number * 5 ** num
 }