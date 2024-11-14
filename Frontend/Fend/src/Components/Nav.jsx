import React, { useContext } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
    let obj=useContext(Ct)
  return (
   <div>
     <nav>
        <Link to='/'>Home</Link>
       {obj.cont.role=="admin" && <Link to='/AddProd'>Add Products</Link>} 
       {obj.cont.token=="" && <Link to='/reg'>Register</Link>} 
       {obj.cont.token=="" && <Link to='/login'>Login</Link>} 
       {obj.cont.token!="" && <Link to='/cart'>Cart</Link>} 
       {obj.cont.token!="" && <Link to='/profile'>My Profile</Link>} 
       {obj.cont.token!="" && <Link to='/logout'>Logout</Link>} 
       {obj.cont.token!="" && obj.cont.gender=="male" &&<div className='im'><div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1K68QF717KgWu76vmBt8MkubOA7QV-dfmGBnNh03YSM3LXx3prK5mNh28OVbjnvyeQuA&usqp=CAU" alt="" /></div><div>{obj.cont.name}</div></div>}
       {obj.cont.token!="" && obj.cont.gender=="female" &&<div className='im'><div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWR1Pof8ViB8t3SDMs9Bj2H6GdBqeo02RJZAjtktnwrhmAxPaoAcLY1_PQikfU0pafzTk&usqp=CAU" alt="" /></div><div>{obj.cont.name}</div></div>}

{console.log(obj.cont.gender)}
    </nav>
   </div>
  )
}

export default Nav