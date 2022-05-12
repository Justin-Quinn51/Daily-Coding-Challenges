// Grasshopper - Variable Assignment Debug

/*Fix the variables assigments so that this code stores the string 'devLab' in the variable name.*/

// Solution

let a = "dev"
let b = "Lab"

let name = a + b

// Super Duper Easy

/*Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".*/

// Solution

// function problem(x){
    //  if (Number) {
    //    return (x * 50) + 6 
    //  } else if (NaN) {
    //    return NaN
    //  } else {
    //    return 'Error'
    //  }
    // }
    
    const problem = x => typeof x === 'string' ? 'Error' : (x * 50) + 6 