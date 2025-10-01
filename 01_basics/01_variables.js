const accountId = 144553
let accountEmail = "masidur@google.com"
var accountPassword ="12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 >> not allowed 

accountEmail = "aaj@gmail.com"
accountPassword = "38758"
accountCity = "bengaluru"


console.log(accountId);

/*
   prefer not to use var 
   beacuse of issue in block scope and functional scope  
*/

console.table([ accountId , accountEmail , accountPassword , accountCity , accountState])

