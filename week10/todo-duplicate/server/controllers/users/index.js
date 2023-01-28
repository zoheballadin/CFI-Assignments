import express from "express";
import fs from "fs/promises";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authMiddleware from "../../middlewares/auth/verifyToken.js";

import {
  userRegisterValidation,
  errorMiddleware, userLoginValidation
} from "../../middlewares/validations/index.js";
import { writeFile } from "fs";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("I am in express router");
});

router.post(
  "/register",
  userRegisterValidation(),
  errorMiddleware,
  async (req, res) => {
    try {

        let {email, password, username, location, phone} = req.body

        //reading filedata
      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);
      let userFound = fileData.find(item => {
        return item.email == email
      })
      
      
      if(userFound){
        return res.status(409).json({error: "User already exists"})
      }
      
      //hashing password
      password = await bcrypt.hash(password,12);

      let user = {email, username, password, location, phone, todos: []}
      fileData.push(user)
      await fs.writeFile("data.json", JSON.stringify(fileData))

      return res.status(200).json({ success: "User registered successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

router.post("/login",userLoginValidation(), errorMiddleware, async(req, res) => {
  try {
    let fileData = await fs.readFile("data.json");
    fileData = JSON.parse(fileData);

    let user = fileData.find(item => item.email == req.body.email);

    if(!user){
        return res.status(401).json({error: "Unauthorised Access"})
    }
    const match = await bcrypt.compare(req.body.password, user.password);   //returns boolean
    
    if(!match){
        return res.status(401).json({error: "Unauthorised access"})
    }

    const payload = { email: user.email, username: user.username};
    const privateKey = "zoheballadin";
    const token = jwt.sign(payload, privateKey, {expiresIn: "1h"})
    res.status(200).json({ message: "Success" , token, username: user.username});

  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/delete", authMiddleware,async(req,res)=>{
  let email = req.payload.email
  let db = await fs.readFile("data.json")
  db = JSON.parse(db)
  let user = db.find(item => item.email == email);
  let index = db.indexOf(user);
  db.splice(index,1)
  
  await fs.writeFile("data.json", JSON.stringify(db))

  res.status(200).json({Success: "User has been deleted"})
})

export default router;
