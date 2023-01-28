const readlineSync = require("readline-sync");

let ar1=[];
let ar2=[];

const n = readlineSync.questionInt("Enter the length of the array"); 
for(let i=0;i<n;i++){
    ar1[i]=readlineSync.questionInt("Enter a number in array 1: ");

}
for(let i=0;i<n;i++){
    ar2[i]=readlineSync.questionInt("Enter a number in array 2: ");

}

console.log("arr1="+ar1)
console.log("arr2="+ar2)

for(let i=0;i<n;i++){
    let t=ar1[i];
    ar1[i]=ar2[i];
    ar2[i]= t;
}
console.log("\n The arrays after swapping are:")
console.log("arr1="+ar1);
console.log("arr2="+ar2);
