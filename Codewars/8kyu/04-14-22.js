// Grasshopper - Personalized Message

/* Create a function that gives a personalized greeting. This function take two parameters: name and owner. Use conditionals to return the proper message: 
name equals owner ('Hello boss) 
otherwise ('Hello guest')*/

// Solution

// / function greet (name, owner) {
    //   if (name === owner) {
    //     return 'Hello boss'
    //   } else {
    //     return 'Hello guest'
    //   }
    // }
    
const greet = (name, owner) =>name === owner ? 'Hello boss' :'Hello guest'

// Drink about

/*Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.*/

// Solution

function peopleWithAgeDrink(old) {
    if (old < 14) {
      return 'drink toddy'
    } else if (old < 18) {
      return 'drink coke'
    } else if (old < 21) {
     return 'drink beer'
    } else {
      return 'drink whisky'
    }
  }
