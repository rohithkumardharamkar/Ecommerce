let express=require("express");
const { addcart, getcart,  deleteall, delcartitem, inc, dec} = require("../controller/cart.controller");
let cartRouter=new express.Router();
cartRouter.post("/addcart",addcart)
cartRouter.get("/getcart/:uid",getcart)
cartRouter.delete("/clear/:uid",deleteall)
cartRouter.delete("/delete/:_id",delcartitem)
cartRouter.put("/inc",inc)
cartRouter.put("/dec",dec)
module.exports=cartRouter