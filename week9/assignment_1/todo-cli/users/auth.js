import { readFile, writeFile } from "../utils/index.js";
import readlineSync from "readline-sync";
import { createTodo } from "../todos/createTodo.js";
import { getTodos } from "../todos/getAllTodos.js";
import { editTodo } from "../todos/editTodo.js";
import { deleteTodo } from "../todos/deleteTodo.js";
import chalk from "chalk";
import { displayMenu } from "../app.js";
import { timer } from "../utils/index.js";

let auth = async () => {
  try {
    console.clear();
    console.log(
      chalk.green(
        "***************************\n\tUSER LOGIN\n*************************** "
      )
    );
    let email = readlineSync.questionEMail("Enter your email: ");
    let allUsers = await readFile("data.json");
    allUsers = JSON.parse(allUsers);

    let findEmail = allUsers.find((item) => item.email == email);

    while (!findEmail) {
      findEmail = readlineSync.questionEMail("Please enter a valid email :");
    }

    let password = readlineSync.question("Enter your password please: ", {
      hideEchoBack: true,
    });

    while (password != findEmail.password) {
      password = readlineSync.question(
        "Incorrect password, please try again: ",
        {
          hideEchoBack: true,
        }
      );
    }
    console.log("User has been successfully authenticated.");
    let choice;
    async function taskMenu() {
      console.clear();
      console.log(chalk.green("***************************"));
      console.log("\tTASK MENU");
      console.log(chalk.green("***************************"));
      console.log("Welcome " + findEmail.username);
      console.log("1. Press 1 to Create Todos");
      console.log("2. Press 2 to Read Todos");
      console.log("3. Press 3 to Edit Todos");
      console.log("4. Press 4 to Delete Todos");
      console.log("0. Press 0 to Go back");
      choice = readlineSync.questionInt("Enter the choice: ");
      switch (choice) {
        case 1:
          await createTodo(email);
          break;
        case 2:
          await getTodos(email);
          break;
        case 3:
          await editTodo(email);
          break;
        case 4:
          await deleteTodo(email);
          break;
        case 0:
          await displayMenu();
          return;
      }
      if (choice) {
        let isContinue = readlineSync.question("Do you want to continue?(y/n) ");
        isContinue = isContinue.toLowerCase();
        if (isContinue == "yes" || isContinue == "y") await taskMenu();
        else {
          console.log("Redirecting to Home Menu...")
          await timer(3000)
          await displayMenu();
          
        }
      } 
    }

    await taskMenu();
  } catch (err) {
    console.error(err);
  }
};
export { auth };
