const readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Enter value of n: ");

let sum = 0;
for(i=1;i<=n;i++){
    if(i%2)
    sum += i/(i+1)
    else
    sum -= i/(i+1)
}

console.log(sum)