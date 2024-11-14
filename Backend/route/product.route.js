let express=require("express")
const { addproduct, getproduct,upload } = require("../controller/products.controller")
let proute=new express.Router()
proute.post("/addprod",upload.single("productimg") ,addproduct)
proute.get("/getprod",getproduct)
module.exports=proute