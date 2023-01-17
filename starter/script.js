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

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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

/*
// ******* My Script *************

function userInput(element) {

let errorCode = false;

  // User PW length prompt
  let promptUserLength = prompt('Enter a password length between the range: 8 to 128 characters');
  console.log('this is user input at start ',promptUserLength);

  do {
    // ******** Now test for invalid user input *********

    // Try to convert userInput to Int   
    testNum = Number.isInteger(parseInt(promptUserLength));

    // Check for user entry other than integer
    if (testNum !== true) {
      let promptCheck1 = prompt("Entry not recoginsed as a number. Please try again");
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
      let promptCheck2 = prompt('Value entered is outside the valid password length. try again');
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
      // Exit fo while loop - with result of validation checks
      console.log('exit of while loop, errorcode:', errorCode);    
  }
}

*/

// Function for getting a random element from an array
function getRandom1(arr) {

}

// Array 
var lowerSubCasedCharacters = [
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
  'k'
];




// ******** Random number generator *********
function getRandomIntVal(max) {
  return Math.floor(Math.random()*max);
}

// ******** Random Generator for Arrays (based on size of incoming array) **********
function randomArray(arr) {
  // Initialise local variables 
  let srambledArray = [];
  let randomVal = 0;
  
  // Determine array length & loop thro it 
  for (let i = 0; i < (arr.length); i++) {
    // Generate random no based on incoming array length 
    randomVal = getRandomIntVal(arr.length);
    // Select a value from current array, then push to new array
    srambledArray.push(arr[randomVal]);
    //Return srambled array
  }return srambledArray;
}

// Check output from function
console.log(randomArray(lowerSubCasedCharacters));





/* ======== skelton code - origin =============

// let output =  Math.floor(Math.random()*11);
// console.log('Gen output is: ', output);

// --------------------------------------------

let srambledLowerCaseChars = [];
let randomVal = 0;

for (let i = 0; i < lowerSubCasedCharacters.length; i++) {
  randomVal = getRandomIntVal(lowerSubCasedCharacters.length);

  srambledLowerCaseChars.push(lowerCasedCharacters[randomVal]);
}

console.log(srambledLowerCaseChars);

 ======== skelton - end ======== */





/*

const usrClick = document.getElementById('generate');
const usrIP = document.getElementById('userInput()');
const btn = document,getElementById('btn');

function fun1() {
    usrIP.innerHTML = usrClick.value;
}

userInput().addEventListener('click',usrIP);
*/

/*
Test 1
console.log("You have clicked button id = "+e.id+" and button value = " + document.getElementById(e.id).value );

Test 2
console.log('The value returned from user is: ', val);

*/

/*
let result = 0;
result = userInput;
console.log('result of user input is:', result);
*/

