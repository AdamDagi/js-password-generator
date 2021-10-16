// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function getRandomNumber(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

function generatePassword() {
  const typeOperation = ["getLength", "chooseSpecialCharacters"];
  var lengthPassword;
  var chooseSpecialCharacters;
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var punctuation = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  var simbolsForPasswordGenerator = "";
  var password = "";

  for (var index in typeOperation) {
    if (typeOperation[index] == "getLength") {
      const lengthPasswordStr = prompt("How many characters do you want? No less than 8 characters and no more than 128.");
      if (Number(lengthPasswordStr) > 8 && Number(lengthPasswordStr) < 128) {
        lengthPassword = Number(lengthPasswordStr);
      }
    }
    if (typeOperation[index] == "chooseSpecialCharacters") {
      alert("Please chouse at list one of special characters from the next! 'a, A, 1, !'");
      const hasLowercaseLetters = confirm("Do you want lowercase letters?");
      const hasUpercaseLetters = confirm("Do you want Upercase Letters?");
      const hasNumericLetters = confirm("Do you want numeric letters?");
      const hasSpecialCharacters = confirm("Do you want special characters?");

      if (hasLowercaseLetters) {
        simbolsForPasswordGenerator += lowercase;
      }
      if (hasUpercaseLetters) {
        simbolsForPasswordGenerator += upercase;
      }
      if (hasNumericLetters) {
        simbolsForPasswordGenerator += numeric;
      }
      if (hasSpecialCharacters) {
        simbolsForPasswordGenerator += punctuation;
      }
      console.log(simbolsForPasswordGenerator);

      var i = 0;

      for (i; i<lengthPassword; i++) {
        const randomIndex = getRandomNumber(0, simbolsForPasswordGenerator.length);
        const randomSymbol = simbolsForPasswordGenerator[randomIndex];
        password = password + randomSymbol;
      }
      console.log(password);
      return password;
    }
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
