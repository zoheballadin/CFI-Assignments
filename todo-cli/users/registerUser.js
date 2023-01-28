import { readFile, writeFile } from "../utils/index.js";
import readlineSync from "readline-sync";

const registerUser = async () => {
  try {
    console.clear();
    console.log(`
   ====================================\n
   \tRegister New User\n 
   ====================================`);

    let username = readlineSync.question("Enter a username: ");
    while (!username) {
      username = readlineSync.question("Enter a valid name");
    }
    let email = readlineSync.questionEMail("Enter your email: ");
    let phone = readlineSync.question("Enter your number: ");
    let location = readlineSync.question("Enter your location: ");
    
    let password = readlineSync.question("Enter your password: ", {
      hideEchoBack: true,
    });
    let passwordConfirm = readlineSync.question("Enter your password again: ", {
      hideEchoBack: true,
    });

    while (password != passwordConfirm) {
        console.log("Passwords do not match")
        password = readlineSync.question("Enter your password: ", {
            hideEchoBack: true,
          });
        passwordConfirm = readlineSync.question("Enter your password again: ", {
            hideEchoBack: true,
          });
    }


    //saving the user to data.json file
    let fileData = await readFile("data.json")
    fileData = JSON.parse(fileData);

    let emailCheck = fileData.find(item => item.email == email);
    if(emailCheck){
        throw("User already exists")
    }
    let obj = {username, password, email, location, phone}
    fileData.push(obj);
    await writeFile("data.json", JSON.stringify(fileData))
    console.log("User registered successfully")
  } catch (err) {
    console.log(err)
  }
};

export {registerUser}
