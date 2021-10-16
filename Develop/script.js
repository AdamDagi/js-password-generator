// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
};

function getRandomNumber(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

function generatePassword() {
  const typeOperation = ["getLength", "chooseSpecialCharacters"];
  var lengthPassword;
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var punctuation = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
  var simbolsForPasswordGenerator = "";
  var password = "";
  var i = 0;

  for (var index in typeOperation) {
    if (typeOperation[index] == "getLength") {
      const lengthPasswordStr = prompt("How many characters do you want? No less than 8 characters and no more than 128.");
      if (Number(lengthPasswordStr) > 8 && Number(lengthPasswordStr) < 128) {
        lengthPassword = Number(lengthPasswordStr);
      } else {
        passwordText.style.color = "red";
        return "Error: You Should enter number from 8 to 128 !";
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
      if (simbolsForPasswordGenerator.length < 1){
        passwordText.style.color = "red";
        return "Error: You should chouse at list one of special characters for generating password!"
      }
      console.log(simbolsForPasswordGenerator);

      for (i; i<lengthPassword; i++) {
        const randomIndex = getRandomNumber(0, simbolsForPasswordGenerator.length);
        const randomSymbol = simbolsForPasswordGenerator[randomIndex];
        password = password + randomSymbol;
      }

      console.log(password);
      passwordText.style.color = "green";
      return password;
    }
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
