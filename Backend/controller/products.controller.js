let product=require("../model/product.model")
let {v4:uuid4}=require("uuid")
let multer=require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })
let addproduct=async(req,res)=>
{
    try
    {
        await product({"_id":uuid4(),...req.body,"productimg":req.file.filename}).save()
        res.json("product added")

    }
    catch(err)
    {
        res.json({"msg":"Invalid  Product Details"})

    }

}
let getproduct=async(req,res)=>
{
    try {
        let data=await product.find()
        res.send(data)
        
    } catch (err)
    {
        console.log(err);
        
    }
}
module.exports={getproduct,addproduct,upload}