//Generate N even and odd numbers

const readlineSync = require("readline-sync");
const n = readlineSync.questionInt("Enter a number: ")


let even = [];
let odd = [];
let num = 0;

while(even.length<n || odd.length<n){
    
    if(num%2==0){
        even.push(num);
        num++;
    }
    else{
        odd.push(num);
        num++;

    }    
}

console.log("First N odd numbers are: ");
console.log(...odd);
console.log("First N even numbers are: ");
console.log(...even);



//console.log(even.length)