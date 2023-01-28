let readlineSync = require("readline-sync");

const fact = num =>{
    let sum=1;
    for(let i=1;i<=num;i++){
        sum=sum*i;
    }
    return sum;
}

const n = readlineSync.questionInt("Enter total number of items: ");
const r = readlineSync.questionInt("Enter the number of items to be picked: ");
const ncr = fact(n)/(fact(r)*fact(n-r))
console.log("nCr : "+ncr);
const npr = fact(n)/fact(n-r);
console.log("nPr: "+npr);