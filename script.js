// Assignment Code
let generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set options for password character options
let upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseArray = "abcdefghijklmnopqrstuvwxyz";
let numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialCharArray = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
let passwordArray = [];


