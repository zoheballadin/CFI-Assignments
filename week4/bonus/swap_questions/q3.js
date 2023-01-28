var readlineSync = require("readline-sync");

var a=readlineSync.questionInt("Enter a number: ");
var b=readlineSync.questionInt("Enter a number: ");

console.log("\nBefore swap: ");
console.log("Number a is: "+a);
console.log("Number b is: "+b);

a=b-a;
b=b-a;
a=b+a;

console.log(`\nAfter swap: \na = ${a} and b = ${b}`);