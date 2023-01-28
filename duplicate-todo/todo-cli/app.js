//User login
//User registration
//delete user

//insert task
//edit task
//delete task
//update task

//create validation for checking equal passwords and no two users should have same email

import fs from "fs";
import readlineSync from "readline-sync";
import loading from "loading-cli";
import {timer} from "./utils/index.js"
import {registerUser} from "./users/registerUser.js"
import { deleteUser } from "./users/deleteUser.js";
import { auth } from "./users/auth.js";

const displayMenu = async() => {
  console.clear();
  console.log("*********************************")
  console.log("\tTODO CLI APP")
  console.log("*********************************")
  console.log(`
    Press 0 to Exit
    Press 1 to Create a User
    Press 2 to Login
    Press 3 to Delete Account`);

  let option = readlineSync.questionInt("Please Enter your option: ")
  switch(option){
    case 0:
        console.log("Exit");
        return;
    case 1:
        console.log("User Registration");
        await registerUser();
        break;
    case 2:
        console.log("User login");
        
        await auth();
        break;
    case 3:
        console.log("Account Deletion");
        
        await deleteUser();
        break;
        

  }

  let cont = readlineSync.question("Do you want to continue?");
  cont = cont.toLowerCase();
  if(cont == "yes" || cont == "y"){
    const load = loading({
      "text": "Redirecting to Main Menu",
      "color": "blue",
      "interval": 250,
      "stream": process.stdout,
      "frames": ["😂", "😭"]
  }).start();
  await timer(3000);
  load.stop();
  displayMenu();
  }else console.log("Thank you for using, Bye!")
  
};

displayMenu();
