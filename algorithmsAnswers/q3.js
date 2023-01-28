//prime or not

//first find the number of factors, if the factors are equal to 2 then its prime

const readlineSync = require("readline-sync");
const num = readlineSync.questionInt("Enter a number: ");

let c = 0; //count for number of factors

for(let i = 1; i<=num; i++){
    if(num%i==0)
    c++;
    if(c>2)
    break;
}

if(c==2)
console.log(`${num} is a prime number`)
else
console.log(`${num} is not a prime number`)