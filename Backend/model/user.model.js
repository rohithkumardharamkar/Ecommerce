let mongoose=require("mongoose")
let userSch=new mongoose.Schema({
    "_id":String,
    "username":String,
    "pwd":String,
    "role":String    
})
let usermodel=mongoose.model("User",userSch)
module.exports=usermodel