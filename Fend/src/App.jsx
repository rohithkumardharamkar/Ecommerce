import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import AddProd from './Components/AddProd'
import Login from './Components/Login'
import Reg from './Components/Reg'
import Nav from './Components/Nav'
import Logout from './Components/Logout'
import Ct from './Components/Ct'
import Profile from './Components/Profile'
import Cart from './Components/Cart'
const App = () => {
  let [cont,setCon]=useState({"_id":"","token":"","name":"","role":"","mobile":"","gender":"","age":""})
  let updcont=(obj)=>
  {
    setCon({...cont,...obj})
  }
  let obj={"cont":cont,"updcont":updcont}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addProd' element={<AddProd/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/reg' element={<Reg/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
  )
}

export default App