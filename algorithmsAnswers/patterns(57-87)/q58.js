// let str = "12345";
// let l = str.length;
// for(i=1;i<=5;i++){
//     console.log(str);
//     str=str.substring(1,l)
// }

let str="";
for(let i=1;i<=5;i++){
    for(let j=i;j<=5;j++){
        str+=j;
    }
    str+= "\n"
}

console.log(str)