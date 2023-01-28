//positive or negative
const readlineSync = require("readline-sync");

const n = readlineSync.questionInt("Enter a number: ");
if(n>0)
console.log("positive");
else
console.log("Negative");

