import axios  from 'axios'
import React, { useState } from 'react'

import {useNavigate }from 'react-router-dom'
const Reg = () => {
  let [data,setData]=useState({
    "_id":"",
  "name":"",
   "mobile":"",
   "gender":"",
   "pwd":"",
  "age":"",
  "role":""})
  
  let navigate=useNavigate()
  let [err,setErr]=useState()
    function fun(e)
    {
      setData({...data,[e.target.name]:e.target.value})
    }
    function regis()
    {
    try
    {
      axios.post("http://localhost:5000/user/register",data).then((res)=>
      {
        if(res.data.msg=="Your Account has been created")
        {
          navigate("/login")
        }
        else
        {
          setErr(res.data.msg)
  
        }
      })
    }
    catch(err)
    {

      console.log("hiii");
    }
    }
  return (
    <div className='reg'>
        <h1>Register</h1>
        <input type="text" placeholder='Enter Name' onChange={fun} name="name" value={data.name} required />
        <input type="text" placeholder='Enter Email ' onChange={fun} name="_id" value={data._id}/>
        <input type="password" placeholder='Enter Password' onChange={fun} name="pwd" value={data.pwd}/>
        <input type="text" placeholder='Enter Mobile Number' onChange={fun} name="mobile" value={data.mobile}/>
        <input type="text" placeholder='Enter Gender' onChange={fun} name="gender" value={data.gender}/>
        <input type="text" placeholder='Enter Age' onChange={fun} name="age" value={data.age}/>
        <input type='text' placeholder='role' onChange={fun} name="role" value={data.role}/>
      
        
        <button onClick={regis}>REGISTER</button>
        <h3>{err}</h3>
    </div>
  )
}

export default Reg