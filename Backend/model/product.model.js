let mongoose=require("mongoose")
let prodsch=new mongoose.Schema({
    "_id":{type:String,required:true},
    "name":{type:String,required:true},
    "price":{type:Number,required:true},
    "category":{type:String,required:true},
    "descp":{type:String,required:true},
    "productimg":{type:String,required:true},
    
},{timestamps:true})
let prodmodel=mongoose.model("product",prodsch)
module.exports=prodmodel