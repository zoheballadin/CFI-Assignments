const oct = (n) => {
  if (n == 0) return 0;

  return (n % 8) + 10 * oct(Math.floor(n / 8));
};

const ternary = (n) => {
  if (n == 0) return 0;

  return (n % 3) + 10 * ternary(Math.floor(n / 3));
};

const readlineSync = require("readline-sync");
console.clear();
console.log("******************************");
console.log(`\tBASE CONVERTER`);
console.log("******************************");
console.log("\n1. Decimal to Octal\n2. Decimal to Ternary\n");

let choice;
while (choice != 1 && choice != 2) {
  choice = readlineSync.questionInt("Enter your choice: ");
  if (choice != 1 && choice != 2)
    console.log("Invalid choice, please try again\n");
}

let num;
while(num<0 || typeof(num) == "undefined"){
    num = readlineSync.questionInt("Enter a number: ");
    if(num<0) console.log("\nPlease enter a positive number")
}

switch(choice){
    case 1: 
        console.log(oct(num))
        break;
    case 2:
        console.log(ternary(num))
        break;

}