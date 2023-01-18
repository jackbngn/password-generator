// Array for characters 
var characterLength = 8;
var choice = [];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?", ",", ".", "/", ";", "'", ":", "[", "]","{", "}", "-", "=", "_", "+",  ];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompts = questionsPrompt();
  var passwordText = document.querySelector("#password");
  
  if(truePrompts) {
    var updatePassword = generatePassword();
    passwordText.value = updatePassword;
  } else {
    passwordText.value = "";
  };
}

//add generatePassword function
function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
      var randomCharacter = Math.floor(Math.random() * choice.length);
      password = password + choice[randomCharacter]
    };
    return password;
}

function questionsPrompt() {
  choice = [];
  

  characterLength = parseInt(prompt("How many characters do you want your password to be? 8-128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8-128 digits. Please try again.");
    return false;
  }

  lc = confirm("Would you like lowercase letter in your password?") 
      if(lc) {
        choice = choice.concat(lowerCase);
      }
    
  upp = confirm("Would you like uppercase letter in your password?") 
      if(upp){
        choice = choice.concat(upperCase);
      }
  
  digits = confirm("Would you like numbers in your password?") 
      if (digits) {
        choice = choice.concat(num);
  }

  spec = confirm("Would you like special characters in your password?") 
      if(spec) {
        choice = choice.concat(special);
      }

  if (lc === false && upp === false && digits === false && spec === false) {
    alert("Must choose one! Please try again.")
  } else {
  return true;
  };
}