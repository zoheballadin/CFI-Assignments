const readlineSync = require("readline-sync");
const n = readlineSync.questionInt("Enter number of elements: ");
let arr = [];
for(i=0;i<n;i++){
    arr[i]=readlineSync.questionInt("Enter a number: ");
}

let low=arr[0];
let high=arr[0];
for(i=0;i<n;i++){
    
    if(arr[i]<low)
    low = arr[i];

    if(arr[i]>high)
    high=arr[i];

}

console.log("HIGHEST NUMBER: "+high);
console.log("LOWEST NUMBER: "+low);
