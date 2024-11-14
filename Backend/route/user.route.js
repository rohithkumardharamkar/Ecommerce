let express=require("express")
const { regis, login } = require("../controller/user.controller")
let userRoute=new express.Router()
userRoute.post("/register",regis)
userRoute.post("/login",login)
module.exports=userRoute