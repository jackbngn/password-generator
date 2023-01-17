// Array for characters 
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
// If the prompt is true then it will generate password
  if (truePrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value ="";
  }
}
// Add generatePassword function
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
  characterLength = parseInt(prompt("How many character do you want your password to be? (8-128 characters"));

  // If the prompt criteria is not met then it will ask to try again
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8-128 digits. Please try again.");
  } else {
     var lc = confirm("Would you like lowercase letters in your password?")
        if(lc) {
          choice = choice.concat(lowercase);
   }
  };

    var upp = confirm("Would you like uppercase letters in your password?") 
      if(upp){
        choice = choice.concat(uppercase);
  };

  var digits =confirm("would you like numbers in your password?") 
      if(digits) {
      choice = choice.concat(num);
    };

  var spec = confirm("would you like special letters in your password?")
      if(spec) {
      choice = choice.concat(special);
      console.log(choice);
  };
  // if no prompt was selected then an alert will pop up asking to try again
  if(lc === false && upp === false && digits === false && spec === false) {
    alert("Criteria was not met! Please try again.")
  };
return true;
}