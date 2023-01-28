import jwt from "jsonwebtoken";
const key = "zoheballadin";
import fs from "fs/promises"
const isAuthenticated = (req, res, next) => {
  try {
    let token = req.headers["auth-token"];
    let payload = jwt.verify(token, key);
    req.payload = payload;
    return next()
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "Invalid Token / Token Expired" });
  }
};

const isAdmin = async(req,res,next)=>{
    let {role,email} = req.payload;
    let users = await fs.readFile("users.json")
    users = JSON.parse(users)
    let findEmail = users.find(item => item.email === email)

    if(!findEmail || role !== "admin"){
        return res.status(401).json({error: "Unauthorized"})
    }
    next()
}

export {isAuthenticated, isAdmin}