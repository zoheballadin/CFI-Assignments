//GCD
/*
const readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Enter a number:  ");
var num2 = readlineSync.questionInt("Enter a number:  ");
let hcf;
for(let i=1; (i<=num1)&&(i<=num2); i++){
    if(num1%i==0 && num2%i==0){
        hcf=i;
    }
}

console.log(hcf);

*/

let hcf ;
let i=1;
const hcfFunc = (num1,num2) => {
    
    if(num1%i==0 && num2 % i==0){
        hcf=i;
        
    }
    i++;
    
    if(i<=num1 && i<=num2)
    hcfFunc(num1,num2);
    
}
hcfFunc(48,140);
console.log(hcf);