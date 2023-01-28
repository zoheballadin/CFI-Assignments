let str = "";

for(let i=0;i<5;i++){
    for(let j=5-i;j>=1;j--){
        str+=j;
    }
    str+="\n"
}

console.log(str)