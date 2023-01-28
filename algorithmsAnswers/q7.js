for(let i=1;i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log("Fizz Buzz");  //can use process.stdout.write to print without new line
    }
    else if(i%3==0)
    console.log("Fizz");
    else if(i%5==0)
    console.log("Buzz")
    else
    console.log(i);
    
}