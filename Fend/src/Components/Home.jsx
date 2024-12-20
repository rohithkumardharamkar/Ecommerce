import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Nav.css'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import Ct from './Ct'
const Home = () => {
  let [prod,setProd]=useState([])
let [err,setErr]=useState("")
let navigate=useNavigate()
let obj=useContext(Ct)
  useEffect(()=>
{
  axios.get("https://ecommerce-yrgm.vercel.app/products/getprod").then((res)=>
{
  setProd(res.data)
})


},[])
function add(item)
{
  let a=obj.cont.token;
  console.log(a);
  if(a=="")
  {
    navigate("/login")
  }
  else
  {

    axios.post("https://ecommerce-yrgm.vercel.app/cart/addcart",{...item,"qty":1,"uid":obj.cont._id},{"headers":{"Authorization":obj.cont.token}}).then(()=>
  {
    navigate("/cart")
  }).catch((err)=>
{
  console.log(err);
})
  }

}

console.log(prod);

  return (
    <div className='pcon'>
    {
      prod.map((item)=>
    {
      console.log(item.productimg);
      return(<div className='product'>
       
        <div><img src={`https://ecommerce-yrgm.vercel.app/images/${item.productimg}`}alt="Product Image" /></div>
        <h3>{item.name}</h3>
        <p>Category :{item.category}</p>
        <p>Price :{item.price}</p>
        <button onClick={()=>add(item)}>Add to Cart</button>
        <p id='kmore'>Know more....</p>
     
      </div>)
    })
      
    }
    </div>
  )
}

export default Home