import {randomStringGenerator} from "./utils/index.js"
import fs from "fs/promises";
import bcrypt from "bcrypt"


async function addAdmin(obj) {
  obj.role = "admin";
  let users = await fs.readFile("users.json");
  users = JSON.parse(users);
    
  let user = users.find(item => item.email == object.email)
  if(user){
    console.log("User already exists")
    return
  };
  obj.password = await bcrypt.hash(obj.password, 12)
  users.push(obj);
  // console.log(users)
  await fs.writeFile("users.json", JSON.stringify(users))
}
let object = {
  user_id: randomStringGenerator(12),
  fullname: "Adnan Ali Khan",
  username: "adnan_dev",
  email: "adnan@code.in",
  password: "Adnan@123",
  books: []
};

await addAdmin(object)
