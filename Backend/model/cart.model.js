let mongoose=require("mongoose")
let cartSch=new mongoose.Schema({
    "uid":String,
    "pid":String,
    "_id":{type:String},
    "name":{type:String},
    "price":{type:Number},
    "category":{type:String},
    "descp":{type:String},
    "productimg":{type:String},
    "qty":Number
})
let carmodel=mongoose.model("Cart",cartSch)
module.exports=carmodel