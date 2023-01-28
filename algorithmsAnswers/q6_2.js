//generate n prime numbers

const readlineSync = require("readline-sync");
const n = readlineSync.questionInt("Enter a number: ");

let prime = [];
let i = 1;  //numbers will be iterated using i
while(prime.length<n){
    let f=0;
    for(let j=1; j<=i; j++){              //checking  number of factors of i
        if(i%j==0)
        f++;

        if(f>2)
        break;

    }
    if(f==2)                                //checkin if i is prime, if yes then it pushes to array
    prime.push(i);
    i++;
}

console.log(...prime);