var randomStringGenerator = (length) => {
  var alphanum =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiJklmnopqrstuvwxyz0123456789";

  var str = "";

  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * alphanum.length);
    str += alphanum[index];
  }

  return str;
};

var passwordGenerator = (length) => {
  var choices =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?"; //all possible characters

  //necessary characters: at least one character from each of the below groups must be present in the string
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbol = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

  var str = "";

  //generating random indexes for each necessary group of characters
  var indexUpper = Math.floor(Math.random() * upperCase.length);
  var indexLower = Math.floor(Math.random() * lowerCase.length);
  var indexNumbers = Math.floor(Math.random() * numbers.length);
  var indexSymbol = Math.floor(Math.random() * symbol.length);

  //generating a string with each of the necessary characters
  str =
    upperCase[indexUpper] +
    lowerCase[indexLower] +
    numbers[indexNumbers] +
    symbol[indexSymbol];

  //generating the remaining string randomly from all the groups of characters
  for (var i = 4; i < length; i++) {
    str += choices[Math.floor(Math.random() * choices.length)];
  }

  return str
};

export { randomStringGenerator, passwordGenerator };
