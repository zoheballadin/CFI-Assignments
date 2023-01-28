//Generate even and odd numbers less than n

const readlineSync= require("readline-sync");
const n = readlineSync.questionInt("Enter a number");
const even = [];
const odd = [];

for(let i=0; i<n; i++){
    if(i%2==0)
    even.push(i);
    else
    odd.push(i);

}

console.log("Even numbers upto n: ");
console.log(...even);
console.log("Odd numbers upto n: ");
console.log(...odd);
