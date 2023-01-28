var readlineSync = require("readline-sync");

var a=readlineSync.questionInt("Enter a number: ");
var b=readlineSync.questionInt("Enter a number: ");

console.log("\nBefore swap: ");
console.log("Number a is: "+a);
console.log("Number b is: "+b);

a=a*b;
b=a/b;
a=a/b;

console.log(`\nAfter swap: \na = ${a} and b = ${b}`);