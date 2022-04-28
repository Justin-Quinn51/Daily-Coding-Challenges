// Area or Perimeter 

/*You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.*/

// Solution

// const areaOrPerimeter = function(l , w) {
//   if (l === w) {
//     return l * w
//   } else {
//     return (l + w) * 2
//   }
// };

const areaOrPerimeter = (l, w) => l === w ? l * w : (l + w) * 2

// Quarter of the year

// Solution

// const quarterOf = (month) => {
//   if (month < 4) {
//     return 1
//   } else if (month < 7) {
//     return 2
//   } else if (month < 10) {
//     return 3
//   } else {
//     return 4
//   }
  
// }

const quarterOf = month => month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4