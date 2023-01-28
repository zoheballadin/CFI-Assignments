const readlineSync = require("readline-sync");
var num = readlineSync.questionInt("Enter a number: "); //accepting input

if(num % 5 == 0 && num % 3 ==0) //checking divisibility with both
console.log(`${num} IS A MULTIPLE OF BOTH`);

else if(num % 5 == 0) //checking divisibility with 5
console.log(`${num} IS A MULTIPLE OF 5`);

else if(num % 3 == 0) //checking divisibility with 3
console.log(`${num} IS A MULTIPLE OF 3`);

else
console.log(`${num} IS NOT A MULTIPLE OF 3 AND 5`)