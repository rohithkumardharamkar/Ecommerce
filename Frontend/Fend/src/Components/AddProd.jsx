import  axios from 'axios'
import React, { useState } from 'react'
import './Nav.css'
import {useNavigate} from 'react-router-dom'
const AddProd = () => {
  let [data,setData]=useState({})
  let navigate=useNavigate()
  function fun(e)
  {
    setData({...data,[e.target.name]:e.target.value})

  }
  function fun1(e)
  {
    setData({...data,"productimg":e.target.files[0]})
  }
  function add()
  {
    let fd=new FormData()
    for(let el in data)
    {
      fd.append(el,data[el])
    }

    axios.post("https://ecommerce-yrgm.vercel.app/products/addprod",fd).then((res)=>
  {
    navigate("/")
  })

  }
  return (
    <div className='addprod'>
      <h1>Add Product</h1>
      <input type="text" placeholder='Product Id' onChange={fun} name='_id' value={data._id}/>
      <input type="text" placeholder='Category'onChange={fun} name='category' value={data.category}/>
      <input type="text" placeholder='Product Name' onChange={fun} name='name' value={data.name}/>
      <input type="text" placeholder='Price' onChange={fun} name='price' value={data.price}/>
      <input type="text" placeholder='Description' onChange={fun} name='descp' value={data.descp}/>
      
      <input type="file" onChange={fun1} />
      <button onClick={add}>Add Product</button>
    </div>
  )
}

export default AddProd
