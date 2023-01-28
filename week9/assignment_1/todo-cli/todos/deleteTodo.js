import readlineSync from "readline-sync";
import { readFile, writeFile, randomStringGenerator } from "../utils/index.js";
import chalk from "chalk";

async function deleteTodo(email) {
  try {
    console.clear();
    console.log(chalk.green(`
===========================================\n
   \t\tDelete a Task\n 
===========================================`));

  
    
    let fileData = await readFile("data.json");
    fileData = JSON.parse(fileData)

    while (!email) {
      email = readlineSync.questionEMail("Enter a valid email: ");
    }
    let emailFound = fileData.find((item) => item.email == email);
    
    if (!emailFound) {
      throw "User not found";
    }
    console.log("Choose the dask you want to  delete: ");
    console.table(emailFound.todos);

    let index = readlineSync.questionInt("Enter the index of the task you want to delete: ");
    while(!emailFound.todos[index]){
        emailFound = readlineSync.questionInt("Enter a valid index: ")
    }
    emailFound.todos.splice(index,1)

    console.table(emailFound.todos)
    
    await writeFile("data.json", JSON.stringify(fileData))
  } catch (err) {
    console.log(err);
  }
}

export {deleteTodo};