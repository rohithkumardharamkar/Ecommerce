import React, { useContext } from 'react'
import Ct from './Ct'
import './Nav.css'
const Profile = () => {
    let obj=useContext(Ct)
    console.log(obj)
  return (
    <div className='pr'>
        <h1>Name  :  {obj.cont.name}</h1>
        <h1>Email  :  {obj.cont._id}</h1>
        <h1>Mobile  :  {obj.cont.mobile}</h1>
        <h1>Gender  :  {obj.cont.gender}</h1>
        <h1>Age  :  {obj.cont.age}</h1>
        <h1>Role  :  {obj.cont.role}</h1>
       
    </div>
  )
}

export default Profile