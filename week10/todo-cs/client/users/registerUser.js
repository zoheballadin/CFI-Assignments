import { readFile, writeFile } from "../utils/index.js";
import axios from "axios";
import readlineSync from "readline-sync";
import chalk from "chalk";
import { it } from "node:test";

const registerUser = async () => {
  try {
    console.clear();
    console.log(chalk.green(`
=======================================\n
   \t  Register New User\n 
=======================================`));

    let username = readlineSync.question("Enter a username: ");
    while (!username) {
      username = readlineSync.question("Enter a valid name");
    }
    let email = readlineSync.questionEMail("Enter your email: ");
    while(!email){
      email = readlineSync.questionEMail("Enter a valid email: ")
    }
    let phone = readlineSync.question("Enter your number: ");
    let location = readlineSync.question("Enter your location: ");
    
    let password = readlineSync.question("Enter your password: ", {
      hideEchoBack: true,
    });
    let passwordConfirm = readlineSync.question("Enter your password again: ", {
      hideEchoBack: true,
    });

    while (password != passwordConfirm) {
        console.log("Passwords do not match")
        password = readlineSync.question("Enter your password: ", {
            hideEchoBack: true,
          });
        passwordConfirm = readlineSync.question("Enter your password again: ", {
            hideEchoBack: true,
          });
    }
    let obj = {username, email, location, phone, password, password2: passwordConfirm}

    //calling the register api
    let response = await axios.post("http://localhost:5001/api/user/register",obj)
    console.log(response.data.success)

  } catch (err) {
    if(err.response.data.errors){
      let data = err.response.data.errors;
      data.forEach(item => console.log(chalk.red(`${item.param}: ${item.msg}`)))
    }
    else console.log(chalk.red(err.response.data.error))
  }
};

export {registerUser}
