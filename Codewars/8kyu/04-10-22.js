// Grasshopper - Check for factor

/*This function should test if the factor is a factor of base.
Return true if it is a factor or false if it is not.*/


// Solution

// function checkForFactor (base, factor) {
//   if (base % factor === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

const checkForFactor = (base, factor) => base % factor === 0 ? true : false;

// Volume of a Cuboid

/*Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.*/

// Solution

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      let volume = length * width * height
      return volume;
    }
  }
