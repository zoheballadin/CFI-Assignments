//CHECK IF VALID IPV6 ADDRESS
const readlineSync = require("readline-sync");

console.clear();
console.log("***********************************");
console.log(`\tIPV6 ADDRESS CHECKER`);
console.log("***********************************");
console.log()



var checkValid = ip =>{
    var check = true;
    
    if(ip.length != 8)
    check = false;

    var consec =0;
    ip.forEach(item => {
        
        var dec = parseInt(item, 16);            //converting to hexa

        if(isNaN(item) && isNaN(dec))           //checking if we have entered invalid alphabets like g-z
        check = false;
        
        if(dec > 65535 || dec < 0)                  //checking if each part is between 0 and 65535
        check =  false;
        
        if(item =="")
        consec++;                                   //counting number of consecutive colons/empty spaces

    });
    if(consec > 1)                                  //if consecutive colons are more than 1 it is not valid
    check = false;
    
    if(check ==false) 
    console.log("\nNot a valid IPV6 Address. You can try again with a valid address or else press Ctrl + C to exit\n");
    
    return check;
}

do{
    var addr = readlineSync.question("Enter IPv6 Address: ");
    var keys = addr.split(":");
} while(!checkValid(keys))

if(checkValid(keys))
console.log("\n"+addr+" is a Valid IPv6 Address");