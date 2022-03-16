// Opposites Attract

/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/

// Solution
function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 === 1){
      return true;
    } else if(flower1 % 2 === 1 && flower2 % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

/*Opposite Number
Very simple, given an integer or a floating-point number, find its opposite.*/

// Solution
function opposite(number) {
  return -number;
}


//Remove First and Last Character
/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

//Solution
function removeChar(str){
  return str.slice(1, -1)
};


