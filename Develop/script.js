// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

const typeOperation = ["getLength", "chooseSpecialCharacters"];
var lengthPassword;
var chooseSpecialCharacters;

for (var index in typeOperation) {
  if (typeOperation[index] == "getLength") {
    const lengthPasswordStr = prompt("How many characters do you want? No less than 8 characters and no more than 128.");
    if (Number(lengthPasswordStr) > 8 && Number(lengthPasswordStr) < 128) {
      lengthPassword = Number(lengthPasswordStr);
    }
  }
  if (typeOperation[index] == "chooseSpecialCharacters") {
    const chooseSpecialCharactersStr = prompt("Please enter at least one special character for password. Lowercase, uppercase, numeric, and/or special characters");
    const arrayCriterias = chooseSpecialCharactersStr.split(",");
    
  }

//  console.log(typeOperation[index]);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
