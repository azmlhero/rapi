const express= require("express");
let router = express.Router();
var Match= require("../../models/match")
// router.get("/",async (req,res)=>{
//     return res.send(["pani ","khana"]);
// });

router.get("/",async (req,res)=>{
    let matches = await Match.find();
     
      return res.send(matches);
});

router.get("/",async (req,res)=>{
    let matches = await Match.find();
     
      return res.send(matches);
});
router.get("/:id",async(req,res)=>
{
try{
    let  match =await Match.findById(req.params.id);
    if(!match)
    return res.status(400).send("Product of this isnt available")// id isnt avail in mongo db
    
    return res.send(match);

}
catch(err){
    return res.status(400).send("Invalid ID");

}
    
});
router.put("/:id", async(req,res)=>{
    let match =await Match.findById(req.params.id);
    match.city=req.body.city;
    match.date=req.body.date;
    match.teamA=req.body.teamA;
    match.teamB=req.body.teamB;
    await match.save();

    return res.send(match);

    

});
router.delete("/:id", async(req,res)=>{
    let match = await Match.findByIdAndDelete(req.params.id);
    
    return res.send(match);
})
router.post("/", async(req,res)=>{
    let match = new Match( );
    match.city=req.body.city;
    match.date=req.body.date;
    match.teamA=req.body.teamA;
    match.teamB=req.body.teamB;
    await match.save();
     return res.send(match);
})

module.exports = router;
