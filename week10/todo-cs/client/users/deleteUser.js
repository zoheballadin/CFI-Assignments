import fs from "fs/promises"
import {timer} from "../utils/index.js"
import readlineSync from "readline-sync";
import { auth } from "./auth.js";
import chalk from "chalk";
import axios from "axios";

const deleteUser = async () => {
  try {
    
    console.clear();
    console.log(chalk.green("*************************************"))
    console.log("\t   ACCOUNT DELETION ");
    console.log(chalk.green("*************************************"))

    let token = await fs.readFile("authToken.txt");
    token = token.toString();
    let response = await axios.delete("http://localhost:5001/api/user/delete", {
      headers: {
        "auth-token": token
      }
    })
    console.log(response.data.Success)
    // console.log("Redirecting to main menu...");
    // await timer(3000)
    
  } catch (err) {
    console.error(err);
  }
};

export { deleteUser };
