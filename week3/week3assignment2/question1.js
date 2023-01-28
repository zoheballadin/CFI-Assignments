var readlineSync= require("readline-sync")
var marks = readlineSync.question("ENTER YOUR MARKS : ") //accepting input
marks = + marks;                


if(marks<0 || marks > 100 || marks%1!=0 || typeof(marks) != "number") //checking corner cases
console.log("INVALID INPUT. TRY AGAIN WITH A VALID NUMBER");

else if(marks<40)
console.log("GRADE F");                                //Checking marks for each grade range

else if(marks<50)
console.log("GRADE E");

else if(marks<60)
console.log("GRADE D")

else if(marks<70)
console.log("GRADE C")

else if(marks<80)
console.log("GRADE B")

else if(marks<90)
console.log("GRADE A")

else if(marks>=90)
console.log("GRADE O")

