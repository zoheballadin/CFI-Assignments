var str = "1";

for(var i=1; i<=5; ){
    console.log(str);
    str=str + " " + (++i).toString();
    
}

/*
OUTPUT:

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/