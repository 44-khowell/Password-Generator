
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

// Declare Global variables to check user input 
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

// Function for getting a random element from an array
function getRandom(arr) {

  let newArray = [];
  let newNum = 0;
  for (k = 0; k < arr.length; k++) {
    newNum = Math.floor(Math.random() * arr.length);
   // console.log('Math cal number is: ',newNum);
  }
  return newNum;
}


// =============================================================
// ******* Function to generate password with user input *******
// =============================================================
function generatePassword() {

// Declare Array for user selected options
var finalArrayChoices = [];


var userLength = userInput();
  console.log("This is the length in the generated pw: ", userLength);

  // Call this function to retive user user selections
  getPasswordOptions()
  console.log('The user choose uppercase for the length ', upperCaseConfirm);
  console.log('The user choose lowercase for the length ', lowerCaseConfirm);
  console.log('The user choose Numeric for the length ', numericConfirm);
  console.log('The user choose SpecialChar for the length ', specialCharConfirm);

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

  // check overall array 
  console.log(finalArrayChoices);

  let finalPW = 0;
  let srambledPW = [];

  for (let n = 0; n < (promptUserLength); n++) {
      
    var randomNum = getRandom(finalArrayChoices);
    srambledPW.push(finalArrayChoices[randomNum]);
    //console.log('password array: ', srambledPW);
    finalPW += srambledPW[n];

  }
  console.log('Scrambled final password is: ', finalPW);

//  var randomNum = getRandom(finalArrayChoices);
//  console.log('math_random is: ', randomNum);

//var finalPW = finalArrayChoices[Math.floor(Math.random()*finalArrayChoices.length)];
//console.log('Scrambled final password is: ', finalPW);
//console.log('pw length is: ',promptUserLength);
//console.log('length value is: ',length);
// "This is the final password"

return finalPW;

}

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





// ******* My Script *************
//=================================================
// ************ User Input Validation *************
//=================================================

function userInput() {

// Set While Loop initial condition
let errorCode = false;

  // User PW length prompt
  promptUserLength = prompt('Enter a password length between the range: 8 to 128 characters');
  console.log('this is user input at start ',promptUserLength);

  do {
    // ******** Now test for invalid user input *********

    // Try to convert userInput to Int   
    testNum = Number.isInteger(parseInt(promptUserLength));

    // Check for user entry other than integer
    if (testNum !== true) {
      let promptCheck1 = prompt("Entry not recoginsed as a number. \nPlease try again");
      if ( (Number.isInteger(parseInt(promptCheck1)) !== true) || ((promptCheck1 < 8) || (promptCheck1 > 128)) ) {
        errorCode = true;
        console.log('Code in promptCheck1 - failed');
      } else {
        errorCode = false;
        console.log('Code in promptCheck1 - passed');
        console.log('returned value is:', promptCheck1);
        return promptCheck1;
      }

      // Check for user entry outside range
    } else if ((promptUserLength < 8) || (promptUserLength > 128)) {
      let promptCheck2 = prompt('Value entered is outside the valid password length. \nPlease try again');
      if ( (Number.isInteger(parseInt(promptCheck2)) !== true) || ((promptCheck2 < 8) || (promptCheck2 > 128)) ) {
        errorCode = true;
        console.log('Code in promptCheck2 - failed');
      } else {
        errorCode = false;
        console.log('Code in promptCheck2 - passed');
        console.log('returned value is:', promptCheck2);
        return promptCheck2;
      }

    } else {
       // Return value of users initial correct attempt
        console.log('Code in 2nd re-try: state of error code:', errorCode);
        console.log('returned value is:', promptUserLength);
        return promptUserLength;
    }

  } while (errorCode) {
      // Exit while loop - with result of validation checks
      console.log('exit of while loop, errorcode:', errorCode);    
  }
}
// ======= User Input Validation - End =======