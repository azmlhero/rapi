var mongoose =require("mongoose");
const Joi = require ("joi");

var matchSchema= mongoose.Schema(
    {
        city: String,
        date: String,
        teamA:String,
        teamB:String,
    }
);
var Match =mongoose.model("Match",matchSchema);



function validatematch(data){

    const schema =Joi.object(
        {
            city :Joi.string().min(6).max(20).required(),
            date:Joi.string().required(),
            teamA:Joi.string().min(6).max(20).required(),
            teamB:Joi.string().min(6).max(20).required()

        }

    );
    return schema.validate(data, {abortEarly:false});

}
module.exports.Match = Match;
module.exports.validate = validatematch;
