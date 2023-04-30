// Simple string characters

/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

// Solution

function solve(s){
  let upperCase = (s.match(/[A-Z]/g) || []).length
  let lowerCase = (s.match(/[a-z]/g) || []).length 
  let numbers = (s.match(/[0-9]/g) || []).length
  let special = s.length - upperCase - lowerCase - numbers
  return [upperCase, lowerCase, numbers, special]
}