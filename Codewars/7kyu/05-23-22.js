// Maximum Product 

/*Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.*/

// Solution

function adjacentElementsProduct(array) {
    let maximumProduct = array[0] * array[1]
    for (let i = 0; i < array.length; i++) {
      if(array[i] * array[i + 1] > maximumProduct) {
        maximumProduct = array[i] * array[i + 1]
      }
    }
    return maximumProduct
  }