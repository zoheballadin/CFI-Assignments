var asc = 65;
var str = "A";
for(var i = 0; i<5;i++){
    
    console.log(str)
    str += " " + String.fromCharCode(++asc);
    
}

/*
OUTPUT:

A
A B
A B C
A B C D
A B C D E



*/