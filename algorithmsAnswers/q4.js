//subtract two integers without using the minus operator



const readlineSync = require("readline-sync");

var num1 = readlineSync.questionInt("Enter a number: ");
var num2 = readlineSync.questionInt("Enter a number: ");

/* ~num represents it as a signed number in 1's complement (Ex: ~5 = -6)
and to convert to 2's complement we need to add 1. 
 So we can say that ~num + 1 is equal to -num  */

 
var difference = num1 + (~num2+1); 

console.log(`The difference of the two numbers is ${difference}`);

