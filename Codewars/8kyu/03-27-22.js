// Get the mean of an array

// Solution
function getAverage(marks){
    return Math.floor(marks.reduce((acc, c) => acc + c) / marks.length)
  }

// Arrow function refactor
const getAverage = marks => Math.floor(marks.reduce((acc, c) => acc + c) / marks.length)