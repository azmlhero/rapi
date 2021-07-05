const jwt =requir("jsonwebtoken");
const config=require("config");

function auth(req,res,next){
    let token= req.header("x-auth-token");
    if(!token) return res.status(400).send("token not provided");
   let user =jwt.varify(token,config.get("jwtPrivateKey"));
   next();

}

module.exports = auth