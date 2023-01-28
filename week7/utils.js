import readlineSync from "readline-sync";
import chalk from "chalk";

function printMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < arr[0].length; j++) {
      str += arr[i][j] + " ";
    }
    console.log(str);
  }
}

const inputMatrix = () => {
  let m,n;
  do{
      if(m<=0 || n<=0) console.log("Invalid input ");
     m = readlineSync.questionInt("Enter the number of rows : ");
     n = readlineSync.questionInt("Enter the number of cols : ");
  } while(m<=0 || n<=0)

  
  
  let arr = new Array(m).fill().map((item) => new Array(n));


  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = readlineSync.questionInt(
        `Enter the value for A${i + 1}${j + 1}: `
      );
    }
  }
  return arr;
};

const highlightDiag = (arr) => {
  if (arr.length != arr[0].length) {
    console.log("\nThis matrix does not have diagonals");
    printMatrix(arr);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        str += chalk.red(arr[i][j]) + " ";
      } else if (i == arr.length - j - 1) {
        // j=n-i-1 >> i = n-j-1
        str += chalk.blue(arr[i][j]) + " ";
      } else str += arr[i][j] + " ";
    }
    console.log(str);
  }
};

const addMatrix = (a, b) => {
  let matrixC = new Array(a.length).fill().map((item) => []);
  if(a.length != b.length || a[0].length != b[0].length){
    console.log("Invalid matrices");
    return;
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[0].length; j++) {
      matrixC[i][j] = a[i][j] + b[i][j];
    }
  }
  return matrixC;
};

let multiplyMat=(a,b)=>{
  let c = new Array(a.length).fill().map(() => [])
for(let i=0;i<a.length;i++){
    for(let j=0;j<a[0].length;j++){
        let sum=0;
        for(let k=0;k<a[0].length;k++){
            sum+= a[i][k] * b[k][j]
        }
        c[i][j] = sum
    }
}
return c;
}

let transpose = (arr) => {
  let tr = new Array(arr[0].length).fill().map(() => new Array(arr.length));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      tr[j][i] = arr[i][j];
    }
  }
  return tr;
};

const multiplyConst = (ar,n) =>{
  for(let i=0;i<ar.length;i++){
    for(let j=0;j<ar.length;j++){
      ar[i][j] = ar[i][j] * n;
    }
  }
  return ar
}

export { inputMatrix, printMatrix, highlightDiag, addMatrix, multiplyMat, transpose, multiplyConst}