let n = 10;
let total=0;
for(let i=1;i<=n;i++){
    let sum=0;
    for(let j=1; j<=i;j++){
        sum+=j
    }
    total+=sum;
}
console.log(total);