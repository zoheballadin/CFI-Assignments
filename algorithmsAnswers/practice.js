const readlineSync  = require("readline-sync");
const n = 3;
const arr = [];

for(let i =0; i<n; i++){
    arr[i] = [];
}

for(let i =0; i<n; i++){
    for(j=0;j<n;j++){
        arr[i][j] = readlineSync.questionInt("enter a number : ")
    }
}

console.log(arr)