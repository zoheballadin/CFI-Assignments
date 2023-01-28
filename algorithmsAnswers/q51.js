//Write An Algorithm using Javascript to check if a given number is in the following series: 4,16,64,256,1024,4096,16384.,......., 4^N
const readlineSync= require("readline-sync");
const num = readlineSync.questionInt("Enter a number: ");


let i=4;
let series = false;
do{
    if(num == i){
    console.log("it is in series");
    series = true;
    break;
    
}
    else{
        i*=4;
    }
} while(i<=num)

if(!series)
console.log("Number is not in series");