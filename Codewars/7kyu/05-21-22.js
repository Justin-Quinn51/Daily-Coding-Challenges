// Get key/value pairs as arrays

/*Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.*/

// Solution

function keysAndValues(data){
    let keys = Object.keys(data)
    let values = Object.values(data)
    return [keys, values]
  }