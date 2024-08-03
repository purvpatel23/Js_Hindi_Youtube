const accountID = 144553
let accoutEmail = "purv@gmail.com"
var accountpassword = "12345"
acountcity = "Jaipur"
let accountstate

// accountID = 2  // not allowed

accoutEmail = "hc@gmail.com"
accountpassword = "1343"
acountcity = "surat"

console.log(accoutEmail); 

/* 
prefer not to use var
because of issue in block scope and funcutional scope 
*/


console.table([accountID, accountpassword , accoutEmail , acountcity, accountstate])