// Jenny's secret message

/*Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
Can you help her?*/

// Solution

// function greet(name){
//   if (name === 'Johnny') {
//     return 'Hello, my love!'
//   } else {
//     return `Hello, ${name}!`
//   }
// }

const greet = name => name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`

// Plural 

/*We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
All values will be positive integers or floats, or zero.*/

// Solution

// function plural(n) {
//   if (n === 1) {
//     return false
//   } else {
//     return true
//   }
// }

const plural = n => n === 1 ? false : true;