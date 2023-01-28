var str="* * * * *"

for(let i=0;i<5;i++){
    console.log(str);
    str = str.substring(0,str.length-2);
}

/*
OUTPUT:
* * * * *
* * * *
* * *
* *
*

*/