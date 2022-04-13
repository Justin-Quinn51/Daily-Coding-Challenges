// Surface Area and Volume of a Box

/*Write a function that returns the total surface area and volume of a box as an array: [area, volume]*/


// Solution

function getSize(width, height, length) {
    let area = (2 * length * width) + (2 * length * height) + (2 * width * height)
    let volume = length * width * height
    let box = [area, volume]
      return box
}  

// No loops 2 - You only need one

/*You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.
Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.*/

// Solution

// function check(a,x){
//   if (a.includes(x).toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }

const check = (a, x) => a.includes(x) ? true : false;