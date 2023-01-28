var a = {
    a:1,
    b:2
}

var b = {
    a:1,
    b:2
}

console.log(a==b); 

/*The above statement returns false because although these objects have the same keys and values they
are two different objects. If we compare two objects with the == operator, JavaScript checks 
 if the objects have the same reference, not if they have the same properties and values.*/

//If you want to check if two objects have the same properties and values, use the Object.keys and Object.values methods

var keysA = Object.keys(a);
var keysB = Object.keys(b);

var valuesA = Object.values(a);
var valuesB = Object.values(b);

let result = true;

for(i=0; i<keysA.length; i++){
    if(keysA[i]!= keysB[i])
    result = false;
    else if(valuesA[i]!= valuesB[i])
    result = false;        
}

if(keysA.length!= keysB.length)
result = false;

console.log(result);            //returns true as a and b have the same properties and values