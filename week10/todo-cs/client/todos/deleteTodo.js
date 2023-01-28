import readlineSync from "readline-sync";
import fs from "fs/promises"
import chalk from "chalk";
import axios from "axios";

async function deleteTodo(email) {
  try {
    console.clear();
    console.log(chalk.green(`
===========================================\n
   \t\tDelete a Task\n 
===========================================`));

  
    
    let token = await fs.readFile("authToken.txt");
    token = token.toString();

    
    console.log("Choose the dask you want to  delete: ");
    let todos = await axios.get("http://localhost:5001/api/todo/view", {
      headers: {
        "auth-token": token
      }
    })
    todos = todos.data;
    console.table(todos)


    let index = readlineSync.questionInt("Enter the index of the task you want to delete: ");
    while(!todos[index]){
        index = readlineSync.questionInt("Enter a valid index: ")
    }
    let res = await axios.delete(`http://localhost:5001/api/todo/delete/${index}`,{
      headers: {
        "auth-token": token
      }
    })
    console.log(res.data.Success)
  } catch (err) {
    console.log(err);
  }
}

export {deleteTodo};