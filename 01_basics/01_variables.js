const accountId = 144553
let accountEmail = "kunal@google.com"
var accountPassword = "12345"
accountCity = "Pune" 

//accountId=2   // not allowed 

accountEmail = "vish@google.com"
accountPassword="212"
accountCity="mumbai"
let accountstate;

console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountstate])
