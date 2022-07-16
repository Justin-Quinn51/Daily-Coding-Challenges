// Valid Parentheses 

/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

// Solution
function validParentheses(parens) {
  let stack = []
  for (let character of parens) {
    if ( character === "(" ) {
      stack.push(character)
    } else if ( character === ")" ) {
      if (stack.length === 0) {
        console.log(stack)
        return false;
      } else {
        stack.pop()
      }
    }
  }
  
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}
