// I love you, a little , a lot, passionately ... not at all

/*Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.*/

// Solution

// function howMuchILoveYou(nbPetals) {
//     switch (nbPetals) {
//         case 1: 'I love you';
//           break;
//         case 2: 'a little';
//           break;
//         case 3: 'a lot';
//           break;
//         case 4: 'passionately'
//           break;
//         case 5: 'madly'
//           break;
//         case 6: 'not at all'
//           break;
//         case 7: 'I love you';
//           break;
//     }
// }

function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    }
    // nbPetals % 6 will always equal the property name i.e (1 % 6 == 1) 
    return phrase[nbPetals%6]
  }

// Filter out the geese

/* Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.*/

// Solution

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
      return birds.filter(bird => !geese.includes(bird))
    // return an array containing all of the strings in the input array except those that match strings in geese
  };
  
  /* 
    return non-matches
      return an array containing all of the strings in the input array except those that match strings in geese
      Use a combination of Array.prototype.filter and Array.prototype.includes
      
      Steps
      1. filter creates new array
      2. elements that pass test are implemented
      3. includes determins whether an array includes a certain value 
        3.a) returns a true or false (we want the false values to be returned) 
      4. Non-Geese elements are returned
    */
  