const readlineSync = require("readline-sync");
const n = readlineSync.questionInt("Enter number of rows and columns: ");

const arr1 = Array(n).fill().map(()=>Array(n));
const arr2 = Array(n).fill().map(()=>Array(n));

for(let i=0; i<n;i++){
    for(let j=0;j<n;j++){
        arr1[i][j] = readlineSync.questionInt("Enter a number in matrice 1 : ")
    }
}
for(let i=0; i<n;i++){
    for(let j=0;j<n;j++){
        arr2[i][j] = readlineSync.questionInt("Enter a number in matrice 2 : ")
    }
}

console.log(arr1)
console.log(arr2)

let prod = Array(n).fill().map(()=>Array(n));

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        for(let k=0;k<n;k++){
            prod[i][j] += arr1[i][k] * arr2[k][j]
        }
    }
}