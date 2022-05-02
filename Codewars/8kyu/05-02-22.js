// Function 2 - squaring an argument

/*Now you have to write a function that takes an argument and returns the square of it.*/

// Solution

const square = num => num ** 2

// Keep up the hoop

/*Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".*/

// Solution

// function hoopCount (n) {
//    if (n < 10) {
//      return 'Keep at it until you get it'
//    } else {
//      return 'Great, now move on to tricks'
//    }
// }

const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks'