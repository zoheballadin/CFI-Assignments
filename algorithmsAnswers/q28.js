const readlineSync = require("readline-sync");
const r = readlineSync.questionFloat("Enter the radius");

let area = (Math.PI * r * r).toFixed(3);
let c = (2 * Math.PI * r).toFixed(3);

console.log(`Area is equal to : ${area}  \nCircumference is equal to : ${c}`);