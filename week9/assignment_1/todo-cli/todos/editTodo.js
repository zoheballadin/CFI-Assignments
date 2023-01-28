import readlineSync from "readline-sync";
import { readFile, writeFile, randomStringGenerator } from "../utils/index.js";
import chalk from "chalk";

//delete task,
// show all pending tasks

async function editTodo(email) {
  try {
    console.clear();
    console.log(chalk.green(`
=======================================\n
   \t\tEdit a todo\n 
=======================================`));

   
    let fileData = await readFile("data.json");
    fileData = JSON.parse(fileData);

    while (!email) {
      email = readlineSync.questionEMail("Enter a valid email: ");
    }

    let emailFound = fileData.find((item) => item.email == email);
    if (!emailFound) {
      throw "User doesnt exist";
    }

    console.log("choose a task: ");
    console.table(emailFound.todos);
    

    
    let todoIndex = readlineSync.questionInt(
      "Enter the task index which you want to update: "
    );

    while (!emailFound.todos[todoIndex]) {
      todoIndex = readlineSync.questionInt("Enter a valid index : ");
    }
    console.log("Press 1. to Edit Status of Completion");
    console.log("Press 2. to Edit name of the task");
    let choice = readlineSync.questionInt("Enter your choice: ");
    switch (choice) {
      case 1:
        if (emailFound.todos[todoIndex].isCompleted == true)
          emailFound.todos[todoIndex].isCompleted = false;
        else emailFound.todos[todoIndex].isCompleted = true;
        break;
      case 2:
        let todoName = readlineSync.question("Enter updated tasK: ");
        emailFound.todos[todoIndex].todoName = todoName;
        break;
    }

    await writeFile("data.json", JSON.stringify(fileData));
    console.table(emailFound.todos);
  } catch (err) {
    console.log(err);
  }
}

export {editTodo}
