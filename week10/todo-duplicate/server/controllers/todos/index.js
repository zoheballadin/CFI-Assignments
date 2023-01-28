import express from "express";
import jwt  from "jsonwebtoken";
import fs from "fs/promises"
import {
  addTaskValidations,
  errorMiddleware,
} from "../../middlewares/validations/index.js";
import authMiddleware from "../../middlewares/auth/verifyToken.js";
import { randomStringGenerator } from "../../utils/index.js";
import { serialize } from "v8";
const router = express.Router();

router.post(
  "/add",
  authMiddleware,
  addTaskValidations(),
  errorMiddleware,
  async (req, res) => {
    try {
      console.log(req.payload);
      let fileData = await fs.readFile("data.json");
      fileData = JSON.parse(fileData);

      let user = fileData.find((item) => item.email == req.payload.email);
      if(!user){
        return res.status(401).json({error: "Unauthorised"})
      }

      let todoData = {
        todoName: req.body.todoName,
        isCompleted: false,
        todo_id: randomStringGenerator(12)
      }
      user.todos.push(todoData)

      await fs.writeFile("data.json", JSON.stringify(fileData));
      return res.status(200).json(user.todos)

      
    } catch (error) {
      console.log(error);
    }
  }
);

router.get("/view", authMiddleware, async(req,res)=>{
  let fileData = await fs.readFile("data.json");
  fileData = JSON.parse(fileData)
  let user = fileData.find(item => item.email == req.payload.email);
  
  if(!user){
    return res.status(401).json({error: "Unauthorized access"})
  }
  
  return res.status(200).json(user.todos)

})

router.put("/editName/:index", authMiddleware,async(req,res)=>{
  let fileData = await fs.readFile("data.json");
  fileData = JSON.parse(fileData);
  let user = fileData.find(item => item.email == req.payload.email);
  let index = req.params.index
  console.log(index);

  if(!user){
    return res.status(401).json({error: "Unauthorized access"})
  }
  if(!user.todos[index])
  return res.status(400).json({error: "Task doesn't exist"})

  let name = req.body.name;
  user.todos[index].todoName = name;
  await fs.writeFile("data.json", JSON.stringify(fileData))
  return res.status(200).json({Success: "Successfully changed the task name"})

})

router.put("/editStatus/:index", authMiddleware, async(req,res)=>{
  let index = req.params.index;
  let fileData = await fs.readFile("data.json");
  fileData = JSON.parse(fileData)
  let user = fileData.find(item => item.email == req.payload.email);
  
  if(!user){
    return res.status(401).json({error: "Unauthorized access"})
  }

  
  user.todos[index].isCompleted = !user.todos[index].isCompleted
  await fs.writeFile("data.json", JSON.stringify(fileData))

  return res.status(200).json({Success: "Successfully changed the task status"})
})

router.delete("/delete/:index",authMiddleware,async(req,res)=>{
  let index = req.params.index;
  let fileData = await fs.readFile("data.json");
  fileData = JSON.parse(fileData)
  let user = fileData.find(item => item.email == req.payload.email);
  
  if(!user){
    return res.status(401).json({error: "Unauthorized access"})
  }
  if(!user.todos[index])
  return res.status(400).json({error: "Invalid Index"})
  user.todos.splice(index,1);
  await fs.writeFile("data.json", JSON.stringify(fileData))

  return res.status(200).json({Success: "Successfully deleted the task"})
})

export default router;
