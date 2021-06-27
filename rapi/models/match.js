var mongoose =require("mongoose");
var matchSchema = mongoose.Schema(

    {
        city: {type: String},
  date: {type: Date},
  teamA: {type: String},
  teamB: {type: String}
    }
)
var Match = mongoose.model("Match",matchSchema );

module.exports= Match ;