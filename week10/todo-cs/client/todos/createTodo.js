import readlineSync from "readline-sync";
import fs from "fs/promises"
import {  randomStringGenerator } from "../utils/index.js";
import chalk from "chalk";
import axios from "axios";

async function createTodo(email) {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tCreate New Task\n 
   ====================================`);

    
    
    let todoName = readlineSync.question("Please enter a task: ");
    while(!todoName){
      todoName = readlineSync.question("Enter a valid task: ");
    }
    
    
    let token = await fs.readFile("authToken.txt");
    token = token.toString();
    let res = await axios.post("http://localhost:5001/api/todo/add", {todoName},{
      headers: {
        "auth-token": token
      }
    });
    console.table(res.data)

  } catch (err) {
    console.log(err);
  }
}

export {createTodo};