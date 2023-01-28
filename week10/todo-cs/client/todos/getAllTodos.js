import readlineSync from "readline-sync";
import fs from "fs/promises"
import chalk from "chalk";
import axios from "axios";

async function getTodos() {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tRead all Tasks\n 
   ====================================`);
    let token = await fs.readFile("authToken.txt")
    token = token.toString()
    let res = await axios.get("http://localhost:5001/api/todo/view", {
      headers: {
        "auth-token": token
      }
    })
    let data = res.data
    console.log("All tasks: ")
    console.table(data)
    
    let pending =[];
     data.forEach(item => {
      if(item.isCompleted == false)
      pending.push(item)
      
    })
    console.log("Pending tasks: ")
    console.table(pending)
    return data
  } catch (err) {
    console.log(err);
  }
}

export {getTodos}
