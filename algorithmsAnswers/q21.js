//roots of quadratic

const readlineSync = require("readline-sync");
const a = readlineSync.questionInt("Enter value of a: ");
const b = readlineSync.questionInt("Enter value of b: ");
const c = readlineSync.questionInt("Enter value of c: ");

const det = Math.pow(b,2) - (4*a*c);    //determinant
let root1, root2;
if(det>0){
    root1 = (-b + Math.sqrt(det))/2*a;
    root2 = (-b - Math.sqrt(det))/2*a;
    console.log(root1);
    console.log(root2);
}
else if(det == 0){
    root1 = -b/(2*a);
    root2 = root1;
    console.log("roots are equal: "+root1)
}
else if(det<0){
    let real = (-b/(2*a)).toFixed(4);        //real part     
    let imag = (Math.sqrt(-det)/(2*a)).toFixed(4)        //imaginary part

    console.log(`root 1 = ${real} + ${imag}i   \nroot 2 = ${real} - ${imag}i`)

}
