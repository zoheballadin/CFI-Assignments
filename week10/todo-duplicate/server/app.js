import express from "express";
import userRouter from "./controllers/users/index.js"
import todoRouter from "./controllers/todos/index.js"

const app = express();
const port = 5001;

app.use(express.json());
app.use("/api/user", userRouter)
app.use("/api/todo", todoRouter)

app.get("/", (req, res) => {
  res.send("Server is up");
});


app.listen(port, () => {
  console.log("listening on port ", port);
});
