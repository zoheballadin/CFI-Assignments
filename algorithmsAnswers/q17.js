//armstrong number 

/*
371 :    3^3 + 7^3 + 1^3 = 371  ----- the sum of the digits raised to the 
                                      power of number of digits is equal to the number itself

*/

const readlineSync = require("readline-sync");
const n = readlineSync.questionInt("Enter a number: ");

const length = (n.toString()).length;

let sum = 0;
let temp = n;

while(temp>0){
    let r = temp%10;
    sum += r ** length;
    temp = Math.floor(temp/10)
}

if(sum==n)
console.log("Armstrong number")
else
console.log("Not armstrong");