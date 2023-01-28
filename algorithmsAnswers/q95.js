const readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Enter value of n: ");

let fact = num =>{
    let f=1;
    for(let i=1;i<=num;i++){
        f*=i;
    }
    return f;
}

let sum = 0;
for(i=1;i<=n;i++){
    sum+= (i**i)/fact(i);
}

console.log(sum)