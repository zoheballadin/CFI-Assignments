// let str = "12345"
// let l = str.length;
// for(i=0;i<l;i++){
//     console.log(str)
//     str= str.substring(0,str.length-1)
// }

let str ="";
let n = 5;
for(let i=0;i<n;i++){
    for(let j=1; j<=n-i;j++){
        str+=j
        //console.log(j)
    }
    str+= "\n"
}
console.log(str)

