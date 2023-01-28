
let i=1;
let f=1  //stores factorial
const fact = num =>{
    f = f*i;
    i++;
    if(i<=num){
        fact(num)
    }
}

fact(9);
console.log(f);