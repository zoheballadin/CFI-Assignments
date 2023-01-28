//leap year or not
const readlineSync = require("readline-sync");
const year = readlineSync.questionInt("Enter a year: ");

if(year%4==0 && year%100 != 0 || year%400 ==0)
console.log("Leap year");
else
console.log("Not leap")