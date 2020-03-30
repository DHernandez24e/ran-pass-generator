var charStrings = {
  symbols: '*;<>()[]{}#$?!^|',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789'
}

function generatePassword() {

var charAmount = prompt('How many characters would you like the password to be? Please choose between 8 and 128.');

  if (charAmount >= 8 && charAmount <= 128) {

    var charSymbolPrompt = confirm('Would you like to use symbols?');
    var charLowerCasePrompt = confirm('Would you like to use lower case characters?');
    var charUpperCasePrompt = confirm('Would you like to use upper case characters?');
    var charNumberPrompt = confirm('Would you like to use numbers?')

    } else {
    alert('Invalid amount of characters');
  }

  var selected = [];

  if (charSymbolPrompt === true) {
    selected.push(charStrings.symbols);
  } 
  if (charLowerCasePrompt === true) {
    selected.push(charStrings.lowerCase);
  } 
  if (charUpperCasePrompt === true) {
    selected.push(charStrings.upperCase);
  } 
  if (charNumberPrompt === true) {
    selected.push(charStrings.numbers);
  } 

  var possibleChances = selected.join("");

  var randomString = [];

   if (possibleChances != "") {
     for ( var i = 0; i < charAmount ; i++) {
       randomString.push(possibleChances[Math.floor(Math.random() * possibleChances.length)]);
       }
     } else {
      alert('Please choose at least one option.');
   }

    var random = randomString.join("");

    return random;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



