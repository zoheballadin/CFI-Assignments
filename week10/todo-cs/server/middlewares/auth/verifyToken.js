import jwt from "jsonwebtoken";

const privateKey = "zoheballadin";

function authMiddleware(req,res,next){
    try {
        let token = req.headers["auth-token"];
        let payload = jwt.verify(token, privateKey)
        req.payload = payload
        return next();
    } catch (error) {
        console.error(error)
        res.status(401).json({error: "Invalid Token/ Token Expired"})
    }
}

export default authMiddleware;