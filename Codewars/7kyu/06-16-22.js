// Friend or Foe?

/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...*/

// Solution

const friend = friends => friends.filter(friend => friend.length === 4)

// Smallest Value of an Array

/*Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.*/

// Solution

function min(arr, toReturn) {
    return toReturn === 'index' ? arr.indexOf(Math.min(...arr)) : Math.min(...arr)
   }