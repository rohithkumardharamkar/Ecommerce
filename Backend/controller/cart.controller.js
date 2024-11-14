let cartm=require("../model/cart.model")
let {v4:uuid4}=require("uuid")
let addcart=async(req,res)=>
{
    try
    {
        let obj=await cartm.find({"uid":req.body.uid,"pid":req.body._id})
        if(obj.length>0)
        {
            await cartm.findByIdAndUpdate({"_id":obj[0]._id},{"qty":obj[0].qty+1})
            res.json({"msg":"updated"})
        }
        else
        {
            let tid=uuid4()
            await new cartm({...req.body,"_id":tid,"pid":req.body._id}).save()
            res.json("product added")
        }


    }
    catch(err)
    {
        console.log(err);

    }

}
let getcart=async(req,res)=>
{
    try
    {
        let data=await cartm.find({"uid":req.params.uid})
        res.json(data)

    }
    catch(err)
    {
        console.log(err);
    }

}

let inc=async(req,res)=>{
    try{

   await cartm.findByIdAndUpdate({"_id":req.body._id},{$inc:{"qty":1}})
   res.json({"msg":"inc done"})
    }
    catch(err)
    {
        console.log(err);

    }
}
let dec=async(req,res)=>{
    try{
        let obj=await cartm.findById({"_id":req.body._id})
    if(obj.qty>1)
    {

   await cartm.findByIdAndUpdate({"_id":req.body._id},{$inc:{"qty":-1}})
    }
    else{
        await cartm.findByIdAndDelete({"_id":req.body._id})
    }
    res.json({"msg":"dec done"})
}
    catch(err)
    {
        
    }
}

let delcartitem=async(req,res)=>
{
    try
    {
        await cartm.findByIdAndDelete({"_id":req.params._id})
        res.json({"msg":"deleted item"})

    }
    catch(err)
    {
        console.log(err);

    }
}
let deleteall=async(req,res)=>
{
    try
    {
        await cartm.deleteMany({"uid":req.params.uid})
        res.json({"msg":"Deleted Cart"})

    }
    catch(err)
    {

    }
}
module.exports={addcart,getcart,deleteall,delcartitem,inc,dec}