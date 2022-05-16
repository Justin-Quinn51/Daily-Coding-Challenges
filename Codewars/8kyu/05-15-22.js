// USD => CNY

/*Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'. The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")*/

// Solution

function usdcny(usd) {
    let CNY = (6.75 * usd).toFixed(2)
    return `${CNY} Chinese Yuan`
  }

// Training JS #5: Basic data types--Object

/*Give you a function animal, accept 1 parameter:obj like this:
{name:"dog",legs:4,color:"white"}
and return a string like this:
"This white dog has 4 legs."
*/

// Solution

function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }
  

