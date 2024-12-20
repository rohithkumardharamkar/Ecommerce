const usermodel = require("../model/user.model")
let bcrypt=require("bcrypt");
require('dotenv').config()

let jwt=require("jsonwebtoken")

let regis=async(req,res)=>
{
    try {
        let obj=await usermodel.findById()
    if(obj)
    {
        res.json({"msg":"Account Already exists"})
    }
    else
    {
        let hcode=await bcrypt.hash(req.body.pwd,8)
        let data=new usermodel({...req.body,"pwd":hcode})
        await data.save();
        res.json({"msg":"Your Account has been created"})

    }
        
    } 
    catch (err) {
        console.log(err);
        
    }
}
let login=async(req,res)=>
{
    try {
        let obj=await usermodel.findById({"_id":req.body._id})
        if(obj)
        {
            let a=await bcrypt.compare(req.body.pwd,obj.pwd)

            if(a)
            {
                res.json({"token":jwt.sign({"_id":obj._id},process.env.s_k),"_id":obj._id,"name":obj.name,"role":obj.role,"mobile":obj.mobile,"gender":obj.gender,"age":obj.age})

            }
            else
            {
                res.json({"msg":"invalid password"})

            }

        }
        else
        {
            res.json({"msg":"invalid username or email-id"})
        }
        
    }
    catch(err)
    {
        console.log(err);
        
    }
}
module.exports={regis,login}