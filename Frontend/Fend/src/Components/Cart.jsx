import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import { url } from '../../url'


const Cart = () => {
    let obj = useContext(Ct)
    let [cart, setCart] = useState([])
    let navigate = useNavigate()

    let fetch = () => {
        console.log("kkkkkkkk");
        console.log(obj.cont.token);

        axios.get(`${url}/cart/getcart/${obj.cont._id}`, { "headers": { "Authorization": obj.cont.token } }).then((res) => {
            setCart(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        if (obj.cont.token === "") {
            navigate("/login")
        } else {
            fetch()
        }
    }, [])

    let inc = (_id) => {
        console.log(_id);
        axios.put(`${url}/cart/inc`, { "_id": _id }, { "headers": { "Authorization": obj.cont.token } }).then((res) => {
            console.log(res);
            fetch()
        })
    }

    let dec = (_id) => {
        console.log(_id);
        axios.put(`${url}/cart/dec`, { "_id": _id }, { "headers": { "Authorization": obj.cont.token } }).then((res) => {
            console.log(res);
            fetch()
        })
    }

    let clear = () => {
        axios.delete(`${url}/cart/clear/${obj.cont._id}`, { "headers": { "Authorization": obj.cont.token } }).then(() => {
            fetch()
        })
    }

    let del = (_id) => {
        console.log(_id);
        axios.delete(`${url}/cart/delete/${_id}`, { "headers": { "Authorization": obj.cont.token } }).then(() => {
            fetch()
        })
    }

    return (
        <div>
            {cart.length === 0 && <div className='empty'>Empty Cart</div>}
            {cart.length !== 0 && <div className='pcon'>
                {
                    cart.map((item) => {
                        return (
                            <div className='product' key={item._id}>
                                <div><img src={`${url}/images/${item.productimg}`} alt="Product Image" /></div>
                                <h3>{item.name}</h3>
                                <p>Category : {item.category}</p>
                                <p>Price : {item.price}</p>
                                <button onClick={() => dec(item._id)}>-</button>
                                <p>{item.qty}</p>
                                <button onClick={() => inc(item._id)}>+</button>
                                <button onClick={() => del(item._id)}>Remove Product</button>
                            </div>
                        )
                    })
                }
            </div>}

            <button className='cartdel' onClick={clear}>Delete Cart</button>
        </div>
    )
}

export default Cart
