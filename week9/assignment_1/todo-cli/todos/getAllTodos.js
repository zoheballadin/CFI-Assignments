import readlineSync from "readline-sync";
import { readFile } from "../utils/index.js";
import chalk from "chalk";

async function getTodos(email) {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tRead all Tasks\n 
   ====================================`);

    let fileData = await readFile("data.json");
    fileData = JSON.parse(fileData);

    while (!email) {
      email = readlineSync.questionEMail("Enter a valid email: ");
    }

    let emailFound = fileData.find((item) => item.email == email);
    if (!emailFound) {
      throw "User doesnt exist";
    }
    console.log("All tasks: ")
    console.table(emailFound.todos)
    
    let pending =[];
     emailFound.todos.forEach(item => {
      if(item.isCompleted == false)
      pending.push(item)
      
    })
    console.log("Pending tasks: ")
    console.table(pending)
  } catch (err) {
    console.log(err);
  }
}

export {getTodos}
