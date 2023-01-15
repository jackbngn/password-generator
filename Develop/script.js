// Array
var characterLength = 8;
var choice = [];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", ",", ".", "/", ";", "'", ":", "[", "]","{", "}", "-", "=", "_", "+",  ];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompts = questionPrompts();
  var passwordText = document.querySelector("#password");

  if (truePrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value ="";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomCharacter = Math.floor(Math.random() * choice.length);
      password = password + choice[randomCharacter];
  }
    return password;
  }
// Prompt questions 
function questionPrompts() {
  choice = [];
  characterLength = parseInt(prompt("How many character do you want your password to be? (8-128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8-128 digits. Please try again.");
    return false;
  }

  if (confirm("would you like lowercase letters in your password?")) {
    choice = choice.concat(lowercase);
  }

  if (confirm("would you like uppercase letters in your password?")){
    choice = choice.concat(uppercase);
  }

  if (confirm("would you like numbers in your password?")){
      choice = choice.concat(num);
    }

  if (confirm("would you like special letters in your password?")){
      choice = choice.concat(special);
  }
  return true;
}