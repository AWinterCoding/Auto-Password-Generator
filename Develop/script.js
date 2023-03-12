// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowCB = document.querySelector("#lowerCB");
var upCB = document.querySelector("#upperCB");
var numCB = document.querySelector("#numericCB");
var specCB = document.querySelector("#specialCB");
var lowerArray = [
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  s,
  t,
  u,
  v,
  w,
  x,
  y,
  z,
];
var upperArray = [
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
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
var selectorArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var password;
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
generateBtn.addEventListener("click", function () {
  var charNum = document.querySelector("#numOfChars").value;
  var checkboxValues = document.querySelector(".checkbox-footer");
  if (charNum !== "") {
    writePassword(charNum);
  } else {
    alert("No input for how many characters you'd like");
  }
});
