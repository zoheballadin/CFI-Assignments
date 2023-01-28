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

const sum = Array(n).fill().map(()=> Array(n))
const dif = Array(n).fill().map(()=> Array(n))




for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        sum[i][j] = arr1[i][j] + arr2[i][j];
        dif[i][j] = arr1[i][j] - arr2[i][j];
    }
}

console.log("Sum of matrices: "+sum);
console.log("difference of matrices: "+dif);
