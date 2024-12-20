import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'
import axios from 'axios'
import Ct from './Ct'
import { url } from '../../url'

const Login = () => {
    let [data, setData] = useState({ "_id": "", "pwd": "" })
    let [err, setErr] = useState("")
    let obj = useContext(Ct)
    let navigate = useNavigate()

    function fun(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    console.log(err);

    function login() {
        if (data.pwd === "" && data._id === "") {
            setErr("Fill all details")
        }
        console.log(data);
        console.log(err);

        axios.post(`${url}/user/login`, data).then((res) => {
            if (res.data.token) {
                obj.updcont(res.data)
                navigate("/")
            } else {
                setErr(res.data.msg)
            }
        })
    }

    console.log(data);

    return (
        <div>
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder='Enter username or email-id' onChange={fun} name='_id' value={data._id} />
                <input type="password" placeholder='Enter Password' onChange={fun} name='pwd' value={data.pwd} />
                <button onClick={login}>LOGIN</button>
                <h3>{err}</h3>
            </div>
        </div>
    )
}

export default Login
