import fs from "fs/promises";
import readlineSync from "readline-sync";
import { deleteUser } from "./deleteUser.js";
import { createTodo } from "../todos/createTodo.js";
import { getTodos } from "../todos/getAllTodos.js";
import { editTodo } from "../todos/editTodo.js";
import { deleteTodo } from "../todos/deleteTodo.js";
import chalk from "chalk";
import { displayMenu } from "../app.js";
import { timer } from "../utils/index.js";
import axios from "axios";

let auth = async () => {
  try {
    console.clear();
    console.log(
      chalk.green(
        "***************************\n\tUSER LOGIN\n*************************** "
      )
    );
    let email = readlineSync.questionEMail("Enter your email: ");

    let password = readlineSync.question("Enter your password please: ", {
      hideEchoBack: true,
    });

    let body = { email, password };

    let res = await axios.post("http://localhost:5001/api/user/login", body);

    let payload = res.data;
    await fs.writeFile("authToken.txt", payload.token);
    console.log("User has been successfully authenticated");
    let choice, token;
    async function taskMenu() {
      console.clear();
      console.log(chalk.green("***************************"));
      console.log("\tTASK MENU");
      console.log(chalk.green("***************************"));
      console.log("Welcome " + payload.username);
      console.log("1. Press 1 to Create Todos");
      console.log("2. Press 2 to Read Todos");
      console.log("3. Press 3 to Edit Todos");
      console.log("4. Press 4 to Delete Todos");
      console.log("5. Press 5 to Delete User");
      console.log("6. Press 6 to Log Out");
      console.log("0. Press 0 to Go back");
      choice = readlineSync.questionInt("Enter the choice: ");
      switch (choice) {
        case 1:
          await createTodo();
          break;
        case 2:
          await getTodos();
          break;
        case 3:
          await editTodo();
          break;
        case 4:
          await deleteTodo();
          break;
        case 5:
          await deleteUser();
          break;
        case 6:
          await fs.writeFile("authToken.txt", "");
          await displayMenu();
          return;
        case 0:
          await displayMenu();
          return;
      }

      if (choice == 5) {
        await displayMenu();
        return;
      }
      if (choice) {
        let isContinue = readlineSync.question(
          "Do you want to continue?(y/n) "
        );
        isContinue = isContinue.toLowerCase();
        if (isContinue == "yes" || isContinue == "y") await taskMenu();
        else {
          console.log("Redirecting to Home Menu...");
          await timer(3000);
          await displayMenu();
        }
      }
    }

    await taskMenu();
  } catch (err) {
    if (err.response.data.errors) {
      let errors = err.response.data.errors;
      errors.forEach((item) => console.log(chalk.red(item.msg + " in " + item.param)));
    } else console.log(chalk.red(err.response.data.error));
    let shouldContinue = readlineSync.question("Do you want to continue?(Y/N)");
    shouldContinue = shouldContinue.toLowerCase();
    if (shouldContinue == "yes" || shouldContinue == "y") {
      displayMenu();
    }
    return;
  }
};
export { auth };
