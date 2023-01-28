let str="";
for(let i=1;i<=5;i++){
    for(let j=5;j>=i;j--){
        str+="* ";
    }
    str+="\n"
}

console.log(str)