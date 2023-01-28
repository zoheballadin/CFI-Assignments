//make an empty array of n elements and assign initial value 0

var readlineSync = require("readline-sync");

var n =readlineSync.questionInt("Enter the number of elements: ");

var arr = new Array(n);         //making an empty array of n elements
arr.fill(0)                 //assigning initial value of 0 to all the elements
console.log(arr)
