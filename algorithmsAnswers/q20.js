//largest of 3 numbers

const readlineSync = require("readline-sync");
const a = readlineSync.questionInt("Enter a number: ");
const b = readlineSync.questionInt("Enter a number: ");
const c = readlineSync.questionInt("Enter a number: ");

if(a>b && a>c)
console.log("A is greatest");
else if(b>a && b>c)
console.log("B is greatest");
else
console.log("C is greatest");
