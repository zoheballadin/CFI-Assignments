let fact = num =>{
    let f=1;
    for(let i=1;i<=num;i++){
        f*=i;
    }
    return f;
}

let n = 10, sum=0;
for(i=1;i<=n;i++){
    sum+=fact(i);
    
}
console.log(sum)