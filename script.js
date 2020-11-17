// Assignment Code
let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

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


// Prompts for user to set criteria
function generatePassword() {

  let passLength = prompt("How many characters would you like? must be between 8 and 128" );

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Password length must be between 8 - 128");
     
      return "choose between 8 - 128 characters!";
  }

  passwordCriteria();
// Create function for password criteria
  function passwordCriteria() {
    passwordArray = [];

    let okUppercase = confirm("Include uppercase letters?");
    let okLowercase = confirm("Include lowercase letters?");
    let okNumbers = confirm("Include numbers?");
    let okSpecialChar = confirm("Include special characters?");

    if (okUppercase) {
      passwordArray = [...passwordArray, ...upperCaseArray];
  }
  if (okLowercase) {
      passwordArray = [...passwordArray, ...lowerCaseArray];
  }
  if (okNumbers) {
      passwordArray = [...passwordArray, ...numbersArray];
  }
  if (okSpecialChar) {
      passwordArray = [...passwordArray, ...specialCharArray];
  }

  if (okUppercase === false && okLowercase === false && okNumbers === false && okSpecialChar === false) {
    alert("You must pick at least one option!");
    passwordCriteria();
  }
}

// Generate random passwords 
let passwordSelection = "";

for (let i= 0; i < passLength; i++) {
  let selection = passwordArray[Math.floor(Math.random() * passwordArray.length)];
  passwordSelection = passwordSelection + selection;
}
document.querySelector("#password");

return passwordSelection;
  
}