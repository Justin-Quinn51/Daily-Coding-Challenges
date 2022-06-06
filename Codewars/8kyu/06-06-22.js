// For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

/*It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

    "I am not impressed by your performance."

If the winner is Conor McGregor he will most undoubtedly say:

    "I'd like to take this chance to apologize.. To absolutely NOBODY!"
*/

// Solution

const quote = fighter => fighter.toLowerCase() === 'george saint pierre' ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!"

// Classy Classes

/*Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34*/

// Solution

class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    get info() {
      return `${this.name}s age is ${this.age}`
    }
  }