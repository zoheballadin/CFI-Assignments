//subtraction without using minus sign

const readlineSync = require("readline-sync");

var num1 = readlineSync.questionInt("Enter a number: ");
var num2 = readlineSync.questionInt("Enter a number: ");

/* According to bitwise not documentation:  ~num = -(num + 1)
so we can say that -num = ~num +1
*/

 
var difference = num1 + (~num2+1); 

console.log(`The difference of the two numbers is ${difference}`);

