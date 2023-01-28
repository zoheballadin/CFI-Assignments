const readlineSync = require("readline-sync");
const n = readlineSync.questionInt("Enter number of elements: ");
let arr = [];
for(i=0;i<n;i++){
    arr[i]=readlineSync.questionInt("Enter a number: ");
}
let max=0;
for (let i = 0; i < n; i++) {
    if(arr[i]>max)
    max=arr[i];
    
}

console.log(max)