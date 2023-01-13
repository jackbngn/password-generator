// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("please type the length you want for the password, It must be more than 8 characters and no more than 128 characters.");
  var passwordLowercase = confirm("Do you want to include lowercase characters?");
  var passwordUppercase = confirm("Do you want to include Uppercase characters?");
  var passwordNumbers = confirm("Do you want to include numbers?");
  var passwordSpecial = confirm("Do you want to include special characters?")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
