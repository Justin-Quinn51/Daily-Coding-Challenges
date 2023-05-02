// FIXME: Get Full Name

/*

The code provided is supposed return a person's Full Name given their first and last names.
But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.

*/

// Solution

class Dinglemouse{

  constructor(firstName, lastName){
    this.firstName = firstName 
    this.lastName = lastName 
  }
  
  getFullName(){
    if (this.firstName === '') {
    return `${this.lastName}`
  } else if (this.lastName === '') {
    return `${this.firstName}`
  } else {
    return `${this.firstName} ${this.lastName}`
  }
 }
  
}


