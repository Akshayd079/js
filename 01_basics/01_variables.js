const accountID = 14453
let accountEmail = "1weqwe@gmail.com"
var accountPassword = '12345'
accountCity = "jaipur"
let accountState;

// accountID = 2
accountEmail = "asds@gmail.com"
accountPassword = "4545"
accountCity = "ahm"

// prefer not to use var because of the scope problems just use const and let 

console.log(accountID);

console.table([accountEmail,accountID,accountPassword,accountCity, accountState])
