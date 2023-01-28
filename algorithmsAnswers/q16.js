const readlineSync = require("readline-sync");

const n= readlineSync.questionInt("Enter the number of elements: ");
const arr = []
let sum = 0;
for(i=0;i<n;i++){
    arr[i]=readlineSync.questionInt("Enter a number");
    sum+= arr[i];
}

console.log(sum/n)