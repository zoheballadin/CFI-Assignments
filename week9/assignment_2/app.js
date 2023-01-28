const readlineSync = require("readline-sync");

function main() {
  console.clear();
  console.log("**********************************");
  console.log("\tNUMBER CONVERTER");
  console.log("**********************************");
  console.log("1. Press 1 for Decimal to Roman");
  console.log("2. Press 2 for Roman to Decimal\n");

  let choice = readlineSync.questionInt("Enter your choice: ");

  switch (choice) {
    case 1:
      let n = readlineSync.questionInt("Enter a number in decimal: ");
      while (!n) {
        n = readlineSync.questionInt("Enter a valid number: ");
      }
      decToRom(n);
      break;
    case 2:
      let r = readlineSync.question("Enter a roman number: ");
      while (!r) {
        console.log("Enter a valid ROMAN NUMBER: ");
      }
      r = r.toUpperCase();
      romanToDecimal(r);
      break;
    default:
      break;
  }

  let shouldContinue = readlineSync.question("Do you want to continue? (y/n) ");
  shouldContinue = shouldContinue.toLowerCase();
  if (shouldContinue == "y" || shouldContinue == "yes") {
    main()
  }else console.log("Thank you for using.")
}
main();
function decToRom(num) {
  let key = {
    1000000: "M̅",
    900000: "C̅M̅",
    500000: "D̅",
    400000: "C̅D̅",
    100000: "C̅",
    90000: "X̅C̅",
    50000: "L̅",
    40000: "X̅L̅",
    10000: "X̅",
    9000: "I̅X̅",
    5000: "V̅",
    4000: "I̅V̅",
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let r = "";

  let arr = Object.entries(key);

  arr.reverse();
  for (let [i, j] of arr) {
    //array destructuring

    while (num >= i) {
      r += key[i];
      num -= i;
    }
  }

  console.log(r);
}

function romanToDecimal(s) {
  const key = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let answer = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const romnum = s[i];
    const dec = key[romnum];

    if (i < s.length - 1 && romnum === s[i + 1]) {
      answer += dec;
    } else if (i < s.length - 1 && key[s[i + 1]] > dec) {
      answer -= dec;
    } else {
      answer += dec;
    }
  }

  return answer;
}
