
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

function userInput() {

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


// ******** Random number generator f*********
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

// Test Code - Check output from function with Sample Array
//console.log(randomArray(lowerSubCasedCharacters));


/*
// Testing of user input responses (alfa)
function userInput() {
  let feedbk = false;
  let answers = [];
  let regExp = /\s/g; //White space check 
  let regExpNonWhite = /\S/g; // Non White space check
  let regExpDigit = /\d/g; // Digits check
  let regExpNonDigit = /\D/g; // Non Digit chars check


  let lowercase = prompt("Do you want to include Lowercase items in Password? \nEnter: Yes or No");
  console.log('User input answer here is: ',lowercase);

  // De-code user input 
  let result2 = regExpNonWhite.test(lowercase);
  console.log('result2 is: ',result2);

  // Check for null I/P
  if ((lowercase === null)) {
    console.log('User i/p invalid, please try again');
    
  // Check for valid Yes I/P
  } else if ((lowercase.toLowerCase() === 'yes') || (lowercase.toLowerCase() === 'y') && (lowercase !== '') && (lowercase !== null)) {
    console.log('User i/p  "yes" case is checked: ',lowercase.toLowerCase());
    answers.push(lowercase);
    console.log('The result is: ',answers);

  // Check for valid NO I/P
  } else if ((lowercase.toLowerCase() === 'no') || (lowercase.toLowerCase() === 'n') && (lowercase !== '') && (lowercase !== null)) {
    console.log('User i/p  "no" case is checked: ',lowercase);

  // Check for Non-White spaces, single Digits & Chars I/P
  } else if ((regExpNonWhite.test(lowercase) == true) || (regExpDigit.test(lowercase) == true) || (regExpNonDigit.test(lowercase) == true)) { 
    console.log('User i/p "nosense" is checked: ',lowercase);

  // Check for White spaces I/P
  } else if ((lowercase.toLowerCase() !== 'yes') || (lowercase.toLowerCase() !== 'y') && (regExp.test(lowercase) == false) && (lowercase !== null)) {
    console.log('User i/p " " is checked: ',lowercase);
  } else {
      console.log('User i/p invalid');
  }
}
*/


// ******* Validate User input function (beta) ******

function validateInput(ans){
  // Declare variables
  let answers = [];
  let regExp = /\s/g; //White space check 
  let regExpNonWhite = /\S/g; // Non White space check
  let regExpDigit = /\d/g; // Digits check
  let regExpNonDigit = /\D/g; // Non Digit chars check

  // De-code user input 
  let result2 = regExpNonWhite.test(ans);
  console.log('result2 is: ',result2);

  // Check for null I/P
  if ((ans === null)) {
  console.log('User i/p invalid, please try again');
  
  // Check for valid Yes I/P
  } else if ((ans.toLowerCase() === 'yes') || (ans.toLowerCase() === 'y') && (ans !== '') && (ans !== null)) {
  console.log('User i/p  "yes" case is checked: ',ans);
  answers.push(ans);
  console.log('The result is: ',answers);

// Check for valid NO I/P
  } else if ((ans.toLowerCase() === 'no') || (ans.toLowerCase() === 'n') && (ans !== '') && (ans !== null)) {
    console.log('User i/p  "no" case is checked: ',ans);
    answers.push(ans);

  // Check for Non-White spaces, single Digits & Chars I/P
  } else if ((regExpNonWhite.test(ans) == true) || (regExpDigit.test(ans) == true) || (regExpNonDigit.test(ans) == true)) { 
    console.log('User i/p "nosense" is checked: ',ans);
    
  // Check for White spaces I/P
  } else if ((ans.toLowerCase() !== 'yes') || (ans.toLowerCase() !== 'y') && (regExp.test(ans) == false) && (ans !== null)) {
    console.log('User i/p " " is checked: ',ans);
  } else {
      // Default response
      console.log('User i/p invalid');
  } return answers;
} 


// ******** Collect user reponse to questions from prompt (beta) *******

function userInput() {
  let feedbk = false;
  let charTypes = [];
//  let answers = [];
//  let regExp = /\s/g; //White space check 
//  let regExpNonWhite = /\S/g; // Non White space check
//  let regExpDigit = /\d/g; // Digits check
//  let regExpNonDigit = /\D/g; // Non Digit chars check

do {

  let lowercase = prompt("Do you want to include Lowercase items in Password? \nEnter: Yes or No");
  console.log('User input answer here is: ',lowercase);

  // Validate response
  let response = validateInput(lowercase);
  console.log('Response from user: ', response);

  // Save responses in Array 
  charTypes.push(response);
  console.log('Saved Response from user: ', response);
  feedbk = false;
  
  let uppercase = prompt("Do you want to include Uppercase items in Password? \nEnter: Yes or No");

  // Validate response
  response = validateInput(uppercase);
  console.log('Response from user: ', response);

  // Save responses in Array 
  charTypes.push(response);
  console.log('Saved Response from user: ', charTypes);
  feedbk = false;

  let numeric = prompt("Do you want to include Numeric items in Password? \nEnter: Yes or No");

  // Validate response
  response = validateInput(numeric);
  console.log('Response from user: ', charTypes);

  // Save responses in Array 
  charTypes.push(response);
  console.log('Saved Response from user: ', charTypes);
  feedbk = false;

  let specialChars = prompt("Do you want to include Special Characters in Password? \nEnter: Yes or No");

  // Validate response
  response = validateInput(specialChars);
  console.log('Response from user: ', charTypes);

  // Save responses in Array 
  charTypes.push(response);
  console.log('Saved Response from user: ', charTypes);
  feedbk = false;

  } while (feedbk);
  return charTypes;
} 


/*

  do {
   let lowercase = prompt("Do you want to include Lowercase items in Password? Enter: Yes or No");
    console.log('User input answer here is: ',lowercase);
    if ((lowercase.toLowerCase() == 'yes') || (lowercase.toLowerCase() == 'y') && (lowercase !== 'null')) {
      console.log('User input answer after is: ',lowercase);
  
      answers.push(lowercase);
     feedbk = true;
    }
  } while (feedbk);

  

  let uppercase = prompt("Do you want to include Uppercase items in Password? Enter: Yes or No");

  let numeric = prompt("Do you want to include Numeric items in Password? Enter: Yes or No");
  
  let specialChars = prompt("Do you want to include Special Characters in Password? Enter: Yes or No");
  
  console.log('Response from lowercase: ', answers);

  return //result; 
}

*/






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

