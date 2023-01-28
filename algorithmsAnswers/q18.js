//perfect number - number that is equal to the sum of its factors

const readlineSync = require("readline-sync");
const n = readlineSync.questionInt("Enter a number: ");

let sum =0;
for(i=1;i<n;i++){
    if(n%i==0)
    sum+=i;
}

//console.log(sum)

sum == n ? console.log("Perfect number") : console.log("not a perfect number")