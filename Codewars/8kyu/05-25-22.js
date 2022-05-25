// Incorrect division method

/*This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.*/

// Solution

const solve = (x, y) => x / y

// Welcome to the City

/*Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.*/

// Solution

function sayHello( name, city, state ) {
    return `Hello, ${String(name).split(',').join(' ')}! Welcome to ${city}, ${state}!`
  }