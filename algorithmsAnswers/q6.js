//Prime numbers less than n   
const readlineSync = require("readline-sync");
const n = readlineSync.questionInt("Enter a number: ");

let prime = [];

for(let i=1; i<n; i++){   //loop for generating numbers upto n
    let factors = 0;
    for(let j=1; j<=i; j++){    //loop for checking number of factors
        
        if(i%j==0)
        factors ++ ;
        if(factors>2)
        break;
    }
    if(factors==2)              //if only two factors then it is prime
    prime.push(i);
}

console.log(...prime)
