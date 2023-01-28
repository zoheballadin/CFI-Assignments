var readlineSync = require("readline-sync");
console.clear();
console.log("******************************");
console.log(`\tAREA CALCULATOR`);
console.log("******************************");
console.log(`\n1.Press 1 to select Square \n2.Press 2 to select Circle \n3.Press 3 to select Rectangle \n4.Press 4 to select Triangle\n`);
//console.log("\n******************************\n");
let choice = readlineSync.questionInt("Please Enter your Choice : ");
let area;
switch (choice) {
    case 1:
        var a = readlineSync.questionFloat("Enter the side of the square: ");
        area = (a*a).toFixed(2);
        console.log(`The area of square is : ${area} units\u{00B2}`);
        break;

    case 2:
        var r = readlineSync.questionFloat("Enter the radius of the circle: ");
        area = (Math.PI*r*r).toFixed(2);
        console.log(`The area of circle is : ${area} units\u{00B2}`);
        break;

    case 3:
        var l = readlineSync.questionFloat("Enter the length of the rectangle: ");
        var b = readlineSync.questionFloat("Enter the breadth of the rectangle: ");
        area = (l*b).toFixed(2);
        console.log(`The area of rectangle is : ${area} units\u{00B2}`);
        break;

    case 4:
        var a = readlineSync.questionFloat("Enter the side 1 of triangle: ");
        var b = readlineSync.questionFloat("Enter the side 2 of triangle: ");
        var c = readlineSync.questionFloat("Enter the side 3 of triangle: ");
        var s = (a+b+c)/2;
        area = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2);
        console.log(`The area of triangle is : ${area} units\u{00B2}`);
        break;

    default:
        console.log("WRONG CHOICE . PLEASE TRY AGAIN")
        break;
}