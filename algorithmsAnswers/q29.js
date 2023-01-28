//remove duplicates

const readlineSync = require("readline-sync");
const n = readlineSync.questionInt("enter the number of elements: ");

const arr = [];

for(i=0;i<n;i++){
    arr[i]= readlineSync.question("enter an element: ");
}
console.log(arr);

let filter = arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
})

console.log(filter);