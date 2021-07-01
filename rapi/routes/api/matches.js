var express = require('express');
var router = express.Router();
var Match =  require("../../models/match")
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", async (req,res)=>
{
  res.send(["Pen","pencil"]);
});


router.get("/",async (req,res)=>{
    let matches=  await Match.find ();
   return  res.send(matches)
} )
module.exports = router;
