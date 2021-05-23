// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLtrs = "abcdefghijklmnopqrstuvwxyz"//.split("");
var specialChars = "-[]&#";
var numbers = "0123456789";

var choices;

var upperCaseLtrs = lowerCaseLtrs.toUpperCase();

// Write password to the #password input
function writePassword() {
  var ps = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = ps;

}

function generatePassword() {
  var password = "";

  var passwordLength = parseInt(prompt("How many characters would you like for your password? Choose between 8 and 128"));
  
  if (!passwordLength) {
    alert("This needs a value");
  } else if (passwordLength < 8 || passwordLength > 128) {
   
    passwordLength = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choice = alert("Must choose at least one!");
  }

  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      
    var choices = specialChars.concat(numbers, lowerCaseLtrs, upperCaseLtrs);

  }

  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = specialChars.concat(numbers, upperCaseLtrs);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = specialChars.concat(numbers, lowerCaseLtrs);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = specialChars.concat(lowerCaseLtrs, upperCaseLtrs);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = numbers.concat(lowerCaseLtrs, upperCaseLtrs);
  }
  else if (confirmCharacter && confirmNumber) {
    choices = specialChars.concat(numbers);
  }
  else if (confirmCharacter && confirmLowercase) {
    choices = specialChars.concat(lowerCaseLtrs);
  }
 else if (confirmCharacter && confirmUppercase) {
    choices = specialChars.concat(upperCaseLtrs2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = lowerCaseLtrs.concat(numbers);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = lowerCaseLtrs.concat(upperCaseLtrs);
  }
  else if (confirmNumber && confirmUppercase) {
    choices = numbers.concat(upperCaseLtrs);
  }
  else if (confirmCharacter) {
    choices = specialChars;
  }
  else if (confirmNumber) {
    choices = numbers;
  }
  else if (confirmLowercase) {
    choices = lowerCaseLtrs;
  };

  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  var ps = password.join("");
  return ps;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
