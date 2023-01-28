//RANDOM STRING WITH AT LEAST 1 SYMBOL, NUMBER, UPPERCASE AND LOWERCASE 

var readlineSync = require('readline-sync');

console.clear();
console.log("***************************************");
console.log(`\tRANDOM STRING GENERATOR`);
console.log("***************************************");

do{
    var n = readlineSync.questionInt('Enter a number: ');
    if(n<8)
    console.log("String must be at least 8 characters long\n");
    }while(n<8)       //loop for accepting length until the correct input is given


var generateString = length =>{
    
var choices= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\\\",./<>?"       //all possible characters

//necessary characters: at least one character from each of the below groups must be present in the string
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";           
var lowerCase = "abcdefghijklmnopqrstuvwxyz";           
var numbers = "0123456789";                             
var symbol= "!@#$%^&*()_+-=[]{}|;':\\\",./<>?"          

var str = "";

//generating random indexes for each necessary group of characters
var indexUpper = Math.floor(Math.random()*upperCase.length);            
var indexLower = Math.floor(Math.random()*lowerCase.length);
var indexNumbers = Math.floor(Math.random()*numbers.length);
var indexSymbol = Math.floor(Math.random()*symbol.length);


//generating a string with each of the necessary characters
str= upperCase[indexUpper] + lowerCase[indexLower] + numbers[indexNumbers] + symbol[indexSymbol];

//generating the remaining string randomly from all the groups of characters
for(var i = 4; i < length; i++){
    str+= choices[Math.floor(Math.random()*choices.length)];        
}

console.log(`Here is your string of ${str.length} characters with 1 symbol, number, uppercase and lowercase: \n\n${str}`);

}

generateString(n);