// Grader

/*Create a function that takes a number as an argument and returns a grade based on that number.*/

// Solution

function grader(score) {
    return score >= 0.9 && score <= 1.0 ? "A" :
           score >= 0.8 && score < 0.9 ? "B" :
           score >= 0.7 && score < 0.8 ? "C" :
           score >= 0.6 && score < 0.7 ? "D" : "F"
  }

// Training JS #10: loop statement --for

/*Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.*/

// Solution

function pickIt(arr){
    let odd = []
    let even = [];
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 1) {
        odd.push(arr[i])
      } else {
        even.push(arr[i])
      }
    }
    return [odd,even];
  }