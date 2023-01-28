//Perfect square or not

const readlineSync = require("readline-sync");
var num = readlineSync.questionInt("Enter a number: ")  //accepting input
var root = Math.sqrt(num);      //Find square root of number

if(root % 1 == 0)       //Check if the square root is a whole number
console.log(`${num} is a perfect square`);
else
console.log(`${num} is not a perfect square`);