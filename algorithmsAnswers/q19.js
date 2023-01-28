//vowel or consonant

const readlineSync = require("readline-sync");
const c = readlineSync.question("Enter a letter: ");

if(c == 'e' || c== 'a' || c=='i' || c =='o' || c=='u')
console.log("vowel");
else
console.log("consonant");