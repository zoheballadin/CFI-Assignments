var readlineSync = require("readline-sync");
let arr = [];
const n = readlineSync.questionInt("Enter the number of elements: ");
for(i=0;i<n;i++){
    arr[i]= readlineSync.questionInt("Enter a number: ");
}
let sum = 0 ;
arr.forEach(item => sum+=item)
console.log(sum);