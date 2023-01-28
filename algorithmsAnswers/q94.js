const readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Enter value of n: ");

let sum = 0;
for(let i=1; i<=n; i++){
    sum += (i**i)/i; 
}

console.log(sum);