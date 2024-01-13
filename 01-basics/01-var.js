const accountId = 12345
let accountEmail = "hanif@gmail.com"
var accountPassword = "hanif123"
accountCity = "Gazipur"
let accountVillage; //JS print an empty variable as an 'undefined' variable in print statement

// accountId = 12  (const cannot be changed)

/*
 Prefer not user "var"
  because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountVillage])
