import express from "express";
import userRoutes from "./controllers/user.js"
import adminRoutes from "./controllers/admin.js"

const app = express();

const port = 5001;

app.use(express.json());
app.use("/api/user", userRoutes)
app.use("/api/admin", adminRoutes)

app.get("/", (req,res)=>{
    res.send("hello this is root")
})


app.listen(port, ()=>{
    console.log("Listening on port ",port)
})