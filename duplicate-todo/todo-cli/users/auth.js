import { readFile, writeFile } from "../utils/index.js";
import readlineSync from "readline-sync";

let auth = async () => {
  try {
    console.clear();
    console.log("AUTHENTICATION: ");
    let email = readlineSync.questionEMail("Enter your email: ");

    let allUsers = await readFile("data.json");
    allUsers = JSON.parse(allUsers);

    let findEmail = allUsers.find((item) => item.email == email);

    if (!findEmail) {
      throw "Email does not exist";
    }

    let password = readlineSync.question("Enter your password please: ", {
      hideEchoBack: true,
    });

    if (password == findEmail.password) {
      console.log("User has been successfully authenticated.");
      console.log(findEmail);
      return true;
    } else throw "Invalid password";
  } catch (err) {
    console.error(err);
  }
};
export { auth };
