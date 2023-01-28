const readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Enter value of n: ");

let str = "1 ";

prod = 1;
for (i = 1; i <= n; i++) {
  if (i % 2) {
    prod = prod * 2;
    str += prod + " ";
  } else {
    prod = prod * 1.5;
    str += prod + " ";
  }
}

console.log(str);
