const readlineSync = require("readline-sync");

let n = 3;

// let arr = new Array(n);

// for (var i = 0; i < n; i++) {
//     arr[i] = new Array(n); // make each element an array
//   }


// console.log(arr)
// for(i=0;i<n;i++){
//     for(j=0;j<n; j++){
//         arr[i][j] = readlineSync.questionInt("Enter a number: ");
//     }
// }

// const arr = Array(n).fill().map(()=> Array(n))

const arr = Array(n).fill().map(() => Array(n))
console.log(arr)