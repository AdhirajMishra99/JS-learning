const accountID = 1566
let accountEmail = "xyz@gogle.com"
var accountPassword = "1234"
accountCity = "chennai"

// accountID = 2 // not allowed


accountEmail = "qw@qw.com"
accountPassword = "7946"
accountCity = "kanpur"

/*
prefer not to use var 
bcoz issue in block scope and functional scope
*/

console.log(accountID);


console.table([accountID,accountEmail,accountPassword,accountCity])