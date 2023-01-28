import readlineSync from "readline-sync";
import { readFile, writeFile, randomStringGenerator } from "../utils/index.js";
import chalk from "chalk";

async function createTodo(email) {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tCreate New Task\n 
   ====================================`);

    
    let fileData = await readFile("data.json");
    fileData = JSON.parse(fileData)

    while (!email) {
      email = readlineSync.questionEMail("Enter a valid email: ");
    }
    let emailFound = fileData.find((item) => item.email == email);
    
    if (!emailFound) {
      throw "User not found";
    }
    let todoName = readlineSync.question("Please enter a task: ");
    while(!todoName){
      todoName = readlineSync.question("Enter a valid task: ");
    }
    let todoData = {
      todoName,
      isCompleted: false,
      todo_id: randomStringGenerator(12)
    };
    emailFound.todos.push(todoData);
    
    await writeFile("data.json", JSON.stringify(fileData))
  } catch (err) {
    console.log(err);
  }
}

export {createTodo};