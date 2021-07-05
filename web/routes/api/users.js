const express= require("express");
let router = express.Router();
const bcrypt =require("bcryptjs");  
const _= require("lodash");
const jwt= require("jsonwebtoken");
const config= require("config");


let {User} =require("../../models/user");
router.post("/register",async(req,res)=>{
    let user =await User.findOne({email:req.body.email});
    if (user) return res.status(400).send("user with this email already exist");
    // 2 baar same name ko ap dubara let use nai kar sktay okhay

    user =new User();
    user.name=req.body.name;
    user.email=req.body.email;
    user.password=req.body.password;
    let salt =await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(user.password,salt)
    await user.save();

    return res.send(_.pick(user,["name","email"]));


});

router.post("/login",async(req,res)=>{
   
    let user =await User.findOne({email:req.body.email});
    if (!user) return res.status(400).send("user not registerd");
   let isValid= await bcrypt.compare(req.body.password,user.password); 
    if(!isValid) return res.status(400).send("Invalid Password") 
    let token=jwt.sign({_id:user._id,name:user.name},config.get("jwtPrivateKey"))
    res.send( token );
});

module.exports = router;
