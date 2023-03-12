//Selectors for the various elements within the html
var generateBtn = document.querySelector("#generate");
var lowCB = document.querySelector("#lowerCB");
var upCB = document.querySelector("#upperCB");
var numCB = document.querySelector("#numericCB");
var specCB = document.querySelector("#specialCB");

//Global arrays that can be modified or added for the future
var lowerArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  console.log("Compiling Password");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generates password from the combined arrays
function generatePassword() {
  var password = "";
  console.log("Generating Password");

  //grabs the number in the element to determine number of chars
  var charNum = document.querySelector("#numOfChars");

  //appends all possible characters
  var passwordSelectorArray = appendPasswordString();

  //randomly gathers the desired amount of characters from all possible characters
  for (i = 0; i < charNum.value; i++) {
    password =
      password +
      getRandomCharacter(passwordSelectorArray.length, passwordSelectorArray);
  }

  //returns the password generated
  return password;
}

//makes the final password array of allowed characters to generate the password
function appendPasswordString() {
  var a = [];
  if (lowCB.value == "true") {
    a = a.concat(lowerArray);
  }
  if (upCB.value == "true") {
    a = a.concat(upperArray);
  }
  if (numCB.value == "true") {
    a = a.concat(numbersArray);
  }
  if (specCB.value == "true") {
    a = a.concat(specialArray);
  }
  return a;
}

//I broke apart and understand this documentation on Math.random
//just wanted to make sure you know where I got it
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//This function gets a random character from
function getRandomCharacter(arrayLength, a) {
  return a[Math.floor(Math.random() * arrayLength)];
}

//switch statement to keep my code for the handlers dry.
function trueFalseSwitch(input) {
  if (input.value == "false") {
    input.value = "true";
  } else if (input.value == "true") {
    input.value = "false";
  }
}

//Event Listeners for the checkboxes

lowCB.addEventListener("click", function () {
  trueFalseSwitch(lowCB);
});

upCB.addEventListener("click", function () {
  trueFalseSwitch(upCB);
});

numCB.addEventListener("click", function () {
  trueFalseSwitch(numCB);
});

specCB.addEventListener("click", function () {
  trueFalseSwitch(specCB);
});

// Add event listener to generate button
//event listener looks at the number of chars and initiates the generate process or halts it
generateBtn.addEventListener("click", function () {
  //charNum defined in here because otherwise it returns undefined from an empty DOM
  var charNum = document.querySelector("#numOfChars").value;
  //Data Validation
  if (inputValidation(charNum)) {
    writePassword();
  }
});

//input validation against having more checkboxes than characters
function inputValidation(charNum) {
  if (charNum == "") {
    alert("No input for how many characters you'd like");
    return false;
  } else if (
    lowCB !== "true" &&
    upCB.value !== "true" &&
    numCB.value !== "true" &&
    specCB.value !== "true"
  ) {
    alert("Error, no valid checkbox selections");
    return false;
  } else if (charNum < 8 || charNum > 128) {
    console.log(charNum);
    alert(
      "Your password must be bigger than 8 chars long and smaller than 128 chars long"
    );
    return false;
  } else {
    console.log("Criteria Accepted");
    return true;
  }
}
