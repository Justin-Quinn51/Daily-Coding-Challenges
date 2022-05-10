// Sleigh Authentication

/*Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.*/

// Solution

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if (name === 'Santa Claus' && password === 'Ho Ho Ho!') {
    return true;
  } else {
    return false;
  }
}; 

// Training JS #7: if..else and ternary operator

/*Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.*/

// Solution

function saleHotdogs(n){
    return n < 5 ? (n * 100) : n >= 5 && n < 10 ? (n * 95) : (n * 90)
  }
