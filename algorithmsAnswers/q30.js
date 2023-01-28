const readlineSync = require("readline-sync");

const str = readlineSync.question("Enter a word: ");
let rev = ""
for(i=str.length-1; i>=0;i--){
    rev += str.charAt(i);           //creating reverse word
    
}

//console.log(rev)

if(rev == str)
console.log("Palindrome");
else
console.log("Not palindrome")