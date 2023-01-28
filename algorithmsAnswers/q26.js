//alphabet or not
const readlineSync = require("readline-sync");
const c = readlineSync.question("Enter a character: ");

if(typeof(c) !== "string")
console.log("not a letter");

if(c.toUpperCase() === c.toLowerCase()){
    console.log("Not a letter")
}
else 
console.log("It is a letter")