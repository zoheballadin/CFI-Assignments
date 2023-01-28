//Even or Odd
const readlineSync = require("readline-sync");
const num = readlineSync.questionInt("Enter a number : ");
if(num&1)
console.log("Number is odd");
else
console.log("Number is even");

    
      