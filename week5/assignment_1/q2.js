//IP ADDRESS CHECKER

const readlineSync = require("readline-sync");

console.clear();
console.log("**********************************");
console.log(`\tIP ADDRESS CHECKER`);
console.log("**********************************");

var checkValid = (ip) => {              //function to check if given IP is valid
  var check = true;
  if (ip.length != 4) 
  check = false;

  ip.forEach((x) => {
    if (x==""||x > 255 || isNaN(x) || x < 0 || x.length > 3) {         //checking error cases
      check = false;
      
    }
  });
  if(check ==false)
  console.log("invalid IP address");
  return check;
};

do{
var addr = readlineSync.question("\nEnter an ipv4 address: ");

var keys = addr.split(".");     //splitting the IP address into an array called keys
} while(!checkValid(keys))






var checkClass = ip =>{         //function to check the class of a valid IP
    let ip_class = ""
    
    if(ip[0] <= 127 && ip[1] <= 255 && ip[2] <= 255 && ip[3] <= 255)
    ip_class = "Class A";
    else if (ip[0] <= 191) 
    ip_class = "Class B";
    else if (ip[0] <= 223) 
    ip_class = "Class C";
    else if (ip[0] <= 239) 
    ip_class = "Class D";
    else 
    ip_class = "Class E";

    return ip_class;
}

var check_private= ip =>{                   //function to check the privacy of a valid IP
    let ip_privacy = "";

    if (checkClass(ip) == "Class A") {
        if (ip[0] == 10) 
        ip_privacy = "Private";
        else 
        ip_privacy = "Public";
      } 
    else if (checkClass(ip) == "Class B") {
        if (ip[0] == 172 && ip[1] >= 16 && ip[1] <= 31) 
        ip_privacy = "Private";
        else 
        ip_privacy = "Public";
      } 
    else if (checkClass(ip) == "Class C") {
        if (ip[0] == 192 && ip[1] == 168) 
        ip_privacy = "Private";
        else 
        ip_privacy = "Public";
      } 
    else 
    ip_privacy = "Private";

    return ip_privacy
      
}



if (checkValid(keys)) {             //processing the final output by passing the array of IP address : "keys"
  console.log(`\nIt is a ${check_private(keys)} IP Address of ${checkClass(keys)}`);
} 
else 
console.log("\nIt is not a valid IP address");
