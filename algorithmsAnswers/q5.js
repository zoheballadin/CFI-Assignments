//remainder without modulus
const readlineSync = require("readline-sync");
const num1 = readlineSync.questionInt("Enter a number : ");
const num2 = readlineSync.questionInt("Enter a number : ");
const div = Math.floor(num1/num2);
const rem = num1 - (num2*div) 
console.log(`Quotient is ${div} and remainder is ${rem}`);