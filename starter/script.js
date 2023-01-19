/*
Presudocode - Password Generator

 - Prompt for user to input for Password length between 8 to 128 characters 
   - Confirm and validate what the user input.
   - Store length in a variable 
   - Prompt for user to input for Character Types - Uppercase, Lowercase, Numeric, Special Chars
   - Store user Character Types answers in variables via confirm prompts 
   - Test answers for Yes / No responses
   - For each Yes response, fetch the appropriate array 
       - Using the random number generator and password length 
       - Create a new array of chosen Char Type with PW length 
   - Merge ALL new arrays of selected Char Types
	     - Concat each of the arrays  
   	   - To a new array containing ALL the different selected Char Types 
   - Pass the new array to a random number generator 
   - To generate a value from the random number generator
   - Use the number generated to select a random value from the selected Char types
   - Create an array containing the final password 
   - Convert the array into a string for displaying in the page menu
*/


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Declared Global variables to check user input 
var upperCaseConfirm;
var lowerCaseConfirm;
var numeric;
var specialChar;
var promptUserLength;


// Function to prompt user for password options
function getPasswordOptions() {
  upperCaseConfirm = confirm('Would you like Uppercase for your password?');
  lowerCaseConfirm = confirm('Would you like Lowercase for your password?');
  numericConfirm = confirm('Would you like Numeric for your password?');
  specialCharConfirm = confirm('Would you like Special Characters for your password?');
}
// ======= getPasswordOptions - End ========


// Function for getting a random element from an array
function getRandom(arr) {
  // Local variables
  let newArray = [];
  let newNum = 0;

  // Generate a random number based on the size of incoming array
  for (k = 0; k < arr.length; k++) {
    newNum = Math.floor(Math.random() * arr.length);
  }
  return newNum;
}
// ======= getRandom - End ========

// Function for assembling password using ramdom number generator
function passwordAssy(lengthChoice, arr) {
// Local variables
  let finalPW = 0;
  let srambledPW = [];
  
  // Cycle thro incoming array using chosen PW length
  for (let n = 0; n < (lengthChoice); n++) {
    // Generate a random number   
    var randomNum = getRandom(arr);
    // Select a random item from incoming array and populate a new array 
    srambledPW.push(arr[randomNum]);
    
    // Create a string containing new password
    finalPW += srambledPW[n]; 
  } 
  return finalPW;
}
// ======= passwordAssy - End ========


// =============================================================
// ******* Function to generate password with user input *******
// =============================================================
function generatePassword() {

// Declare Array for user selected options
var finalArrayChoices = [];

// Validate user input responses 
var userLength = userInput();
 
  // Call this function to retive user user selections
  getPasswordOptions()

  // Check user input responses requests for options presented
  if (upperCaseConfirm == true) {
    finalArrayChoices = finalArrayChoices.concat(upperCasedCharacters);
  }

  if (lowerCaseConfirm == true) {
    finalArrayChoices = finalArrayChoices.concat(lowerCasedCharacters);
  }

  if (numericConfirm == true) {
    finalArrayChoices = finalArrayChoices.concat(numericCharacters);
  }

  if (specialCharConfirm == true) {
    finalArrayChoices = finalArrayChoices.concat(specialCharacters);
  }

  // Assemble user password from user's choice preferences 
  var finalPW = passwordAssy(userLength, finalArrayChoices);

  return finalPW;
}
// ======= generatePassword - End ========


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//=================================================
// ************ User Input Validation *************
//=================================================

function userInput() {

// Set While Loop initial condition
let errorCode = false;

  // User PW length prompt
  promptUserLength = prompt('Enter a password length between the range: 8 to 128 characters');

  do {
    // ******** Now test for invalid user input *********
    
    // Try to convert userInput to Int   
    testNum = Number.isInteger(parseInt(promptUserLength));

    // Check for user entry other than integer
    if (testNum !== true) {
      let promptCheck1 = prompt("Entry not recoginsed as a number. \nPlease try again");
      if ( (Number.isInteger(parseInt(promptCheck1)) !== true) || ((promptCheck1 < 8) || (promptCheck1 > 128)) ) {
      } else {
        errorCode = false;
        return promptCheck1;
      }

      // Check for user entry outside range
    } else if ((promptUserLength < 8) || (promptUserLength > 128)) {
      let promptCheck2 = prompt('Value entered is outside the valid password length. \nPlease try again');
      if ( (Number.isInteger(parseInt(promptCheck2)) !== true) || ((promptCheck2 < 8) || (promptCheck2 > 128)) ) {
        errorCode = true;
      } else {
        errorCode = false;
        return promptCheck2;
      }
    } else {
       // Return value of users initial correct attempt
      return promptUserLength;
    }
  } while (errorCode) {
      // Exit while loop - with result of validation checks
  }
}
// ======= User Input Validation - End =======