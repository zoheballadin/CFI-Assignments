import chalk from "chalk";
import { inputMatrix, printMatrix, highlightDiag, addMatrix, multiplyMat, transpose, multiplyConst} from "./utils.js";
import readlineSync from "readline-sync";

const main = () =>{
    
//handles the error cases for negative input, 0 input
console.clear();
console.log(chalk.green("***************************************"));
console.log("\t\tMATRIX CLI");
console.log(chalk.green("***************************************"));

console.log(
  `1. Press 1 to find diagonals of matrix\n2. Press 2 to perform addition  \n3. Press 3 to perform multiplication\n4. Press 4 to get the transpose of a matrix\n5. Press 5 to Multiply the Matrix with a Constant \n0. Press 0 to cancel`
);
let option = readlineSync.questionInt("Enter choice: ");

switch (option) {
  case 1:
    console.clear()
    console.log(chalk.green("Finding diagonals"))
    let m = inputMatrix();
    console.log("Highlighting the diagonals: \n")
    highlightDiag(m);
    break;
  case 2:
    console.clear();
    console.log(chalk.green("Peforming addition: "))

    let a = inputMatrix();
    let b = inputMatrix();
    
    let result = addMatrix(a, b);
    if(!result ){
        console.log(chalk.red("Invalid input\n"));
        break;
    }
    console.log("The sum of given matrices is : \n");
    printMatrix(result);
    break;
  case 3:
    console.clear();
    console.log(chalk.green("Performing Multiplication: "));
    let x = inputMatrix();
    let y = inputMatrix();
    let res = multiplyMat(x,y)
    console.log("Here is the answer: \n")
    printMatrix(res)
    break;

  case 4:
    console.clear();
    console.log(chalk.green("Transpose of a matrix: "))
    let mat = inputMatrix();
    let tr = transpose(mat);
    console.log("Here is the transpose of the given matrix: \n")
    printMatrix(tr);
    break;

  case 5:
    console.clear();
    console.log(chalk.green("Multiplication with constant: "));
    let arr = inputMatrix();
    let c = readlineSync.questionInt("Enter a constant: ");
    let ans = multiplyConst(arr,c)
    console.log("Answer: \n")
    printMatrix(ans);
    break;

  case 0:
    console.log(chalk.magenta("\nThank you for using our CLI, Bye!"));
    return;
    break;
    default:
    console.log("Invalid");
    break;

}


let willContinue = readlineSync.question("\nDo you want to continue y/n : ");
if(willContinue == "y"  || willContinue == "Y" || willContinue == "Yes" || willContinue == "yes")
main();
else{
    console.log(chalk.magenta("\nThank you for using our CLI, Bye!"))
}
}

main()