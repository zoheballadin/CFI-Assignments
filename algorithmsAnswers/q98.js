const readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Enter value of n: ");

str ="2";
let dif=1;
let sum =2
for(let i=1;i<=n;i++){
    dif = i*13;
    sum += dif;
    str+= " " + sum; 
}

console.log(str)