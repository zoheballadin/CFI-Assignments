import readlineSync from "readline-sync";
import { randomStringGenerator } from "../utils/index.js";
import fs from "fs/promises";
import chalk from "chalk";
import axios from "axios";
import { getTodos } from "./getAllTodos.js";

//delete task,
// show all pending tasks

async function editTodo(email) {
  try {
    console.clear();
    console.log(
      chalk.green(`
=======================================\n
   \t\tEdit a todo\n 
=======================================`)
    );

    let token = await fs.readFile("authToken.txt");
    token = token.toString();
    let todos = await axios.get("http://localhost:5001/api/todo/view", {
      headers: {
        "auth-token": token,
      },
    });
    todos = todos.data;
    console.log("choose a task: ");

    console.table(todos);

    let todoIndex = readlineSync.questionInt(
      "Enter the task index which you want to update: "
    );

    while (!todos[todoIndex]) {
      todoIndex = readlineSync.questionInt("Enter a valid index : ");
    }
    console.log("Press 1. to Edit Status of Completion");
    console.log("Press 2. to Edit name of the task");
    let choice = readlineSync.questionInt("Enter your choice: ");
    switch (choice) {
      case 1:
        let res = await axios.put(`http://localhost:5001/api/todo/editStatus/${todoIndex}`,{}, {
          headers: {
            "auth-token": token
          }
        });
        console.log(res.data.Success);
        break;
      case 2:
        let todoName = readlineSync.question("Enter updated task: ");
        let response = await axios.put(`http://localhost:5001/api/todo/editName/${todoIndex}`, {name: todoName}, {
          headers: {
            "auth-token": token
          }
        });
        console.log(response.data.Success)
        break;
    }
  } catch (err) {
    console.log(err.response.data.error);
  }
}

export { editTodo };
