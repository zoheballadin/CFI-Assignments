import fs from "fs";
import readlineSync from "readline-sync";
import loading from "loading-cli";
import { timer } from "./utils/index.js";
import { registerUser } from "./users/registerUser.js";
import { deleteUser } from "./users/deleteUser.js";
import { auth } from "./users/auth.js";
import chalk from "chalk";

const displayMenu = async () => {
  console.clear();
  console.log(chalk.green("******************************"));
  console.log("\tTODO CLI APP");
  console.log(chalk.green("******************************"));
  console.log(`
    Press 0 to Exit
    Press 1 to Create a User
    Press 2 to Login
    Press 3 to Delete Account`);

  let option = readlineSync.questionInt("Please Enter your option: ");
  switch (option) {
    case 0:
      console.log("Thank you for using our CLI!");
      return;
    case 1:
      console.log("User Registration");
      await registerUser();
      break;
    case 2:
      console.log("User login");

      await auth();
      break;
    case 3:
      console.log("Account Deletion");

      await deleteUser();
      break;
  }
  let cont;
  if(option == 2) return;
  if (option != 0) {
     cont = readlineSync.question("Do you want to continue? ");
    cont = cont.toLowerCase();
  }

  if (cont == "yes" || cont == "y") {
    const load = loading({
      text: "Redirecting to Main Menu",
      color: "blue",
      interval: 250,
      stream: process.stdout,
      frames: ["😂", "😭"],
    }).start();
    await timer(3000);
    load.stop();
    displayMenu();
  } else console.log("Thank you for using, Bye!");
};

displayMenu();
export { displayMenu };
