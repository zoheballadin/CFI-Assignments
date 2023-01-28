import { readFile, writeFile } from "../utils/index.js";
import readlineSync from "readline-sync";
import { auth } from "./auth.js";
import chalk from "chalk";

const deleteUser = async () => {
  try {
    let fileData = await readFile("data.json");
    fileData = JSON.parse(fileData)
    console.clear();
    console.log(chalk.green("*************************************"))
    console.log("\t   ACCOUNT DELETION ");
    console.log(chalk.green("*************************************"))
    let email = readlineSync.questionEMail("Enter your email: ");
    let findEmail = fileData.find(item => item.email == email);
    if(!findEmail) throw("Invalid email");
    let password = readlineSync.question("Enter your password: ",{hideEchoBack: true})
    if(findEmail.password == password){
        console.log("Deleting the user....");
        let i = fileData.indexOf(findEmail);
        fileData.splice(i,1);
        await writeFile("data.json", JSON.stringify(fileData))
    } else {
        throw("Incorrect Password")
    }
  } catch (err) {
    console.error(err);
  }
};

export { deleteUser };
