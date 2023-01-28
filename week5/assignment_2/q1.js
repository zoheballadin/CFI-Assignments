var readlineSync = require("readline-sync");
console.clear();
console.log("***************************************");
console.log(`\tRANDOM STRING GENERATOR`);
console.log("***************************************");
console.log(`\n1. Generate a Random String with only Alphabets i.e. A-Z a-z \n2. Generate a Random String with Alphabets and Numbers A-Z a-z 0-9 \n`);

var choice;
do {                      //loop for accepting input until we get a valid option
  choice = readlineSync.questionInt("Please Enter your Choice : ");
  if (choice > 2 || choice < 1) console.log("Invalid Choice, Please Try Again");
} while (choice > 2 || choice < 1);             

var n;

do{                       //loop for accepting input until we get a valid length  for string
  n = readlineSync.questionInt("Please Enter The Number Of Characters : ");
  if(n<0) console.log("Invalid Input, Please Enter a Positive Number\n");
} while(n<0)

var createAlpha = length =>{
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiJklmnopqrstuvwxyz";

    var str = "";

    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * letters.length);
      str += letters[index];
    }

    console.log(`\nHere is your Random String of ${length} characters: \n\n${str}`);
}

var createAlphanumeric = length =>{
  var alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiJklmnopqrstuvwxyz0123456789";

    var str = "";

    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * alphanum.length);
      str += alphanum[index];
    }

    console.log(`\nHere is your Random String of ${length} characters: \n\n${str}`);

}

switch (choice) {
  case 1:
    
    createAlpha(n);
    break;

  case 2:
    createAlphanumeric(n);
    break;

  default:
    console.log("Invalid Choice, Please Try Again");
    break;
}
