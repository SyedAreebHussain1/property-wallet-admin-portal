import React, { useEffect, useState } from 'react';
import { AiOutlineLock } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi"
import img1 from "../../components/assest/img/Dashboard1.png"
// import img2 from "../../assest/img/Dashboard2.png"
// import sc from "../../assest/img/sc.png"
import {
    Link, useNavigate
} from "react-router-dom";

import icon_lock from "../../components/assest/icon/lock.png"
import icon_mail from "../../components/assest/icon/mail.png"
// import icon_mail from "../../assest/icon/login-icon/mail.png"

import "../../App.css"

const Login = () => {
    const navigate = useNavigate()
    let [success, setSuccess] = useState(null)
    let [failure, setFailure] = useState(null)
    const [body, setBody] = useState({
        email: '',
        password: '',
        remember: ''
    });

    const helllo = (e) => {
        e.preventDefault()
        console.log(body)

        if (body.email !== '' && body.password !== '' && body.remember !== '') {
            setSuccess("Successfully sign in")
            setFailure(null)

            setTimeout(() => {
                navigate('/dashboard')
            }, 1000)
        } else {
            setFailure("Please Enter Email or Password!")
            setSuccess(null)
            // setFailure({ ...failure, emailFailure: "Please email" })
        }


    }
    return (
        <div className='login-main-div ' style={{ display: "", border: '' }}>
            <div className='login-colum-one' style={{}}>
                <form action="" style={{ maxWidth: '500px', margin: 'auto' }}>
                    <div>
                        <div style={{ fontWeight: "" }} className='Effortlessly '><b>Effortlessly Management Your Properties with Our Real Estate Management System Portal.</b></div>
                    </div>
                    {/* <br /> */}
                    <div style={{ marginTop: "7%" }}>
                        <div className='started'>Let's Get Started</div>
                        <div className='welcome'>Welcome back please enter your credentials.</div>
                    </div>
                    <div style={{ marginTop: "7%" }}>
                        <div className='input-lable'>Email address</div>
                        <div className="input-container" style={failure ? { border: '1px solid red' }  : { border: '1px solid #D0D5DD' }}>
                            <div className='icon' style={{ marginTop: "" }}>
                                {/* <BiEnvelope color="black" size={23} /> */}
                                <img src={icon_lock} />
                            </div>
                            <input  value={body.email} onChange={(e) => setBody({ ...body, email: e.target.value })} style={{ border: "" }} className="input-field" type="text" placeholder="Email" name="email" autoComplete="off" />
                        </div>
                        <div className='input-lable'>Password</div>
                        <div className="input-container" style={failure ? { border: '1px solid red' }  : { border: '1px solid #D0D5DD' }}>
                            <div className='icon' style={{ marginTop: "" }}>
                                {/* <AiOutlineLock color="black" size={23} /> */}
                                <img src={icon_mail} />
                            </div>
                            
                            <input value={body.password} onChange={(e) => setBody({ ...body, password: e.target.value })} className="input-field " type="password" placeholder="Password" name="psw" autoComplete='off' />
                             
                        </div>
                    </div>
                    <input  onChange={(e) => setBody({ ...body, remember: e.target.value })} type="checkbox" id="vehicle1" name="vehicle1" value="bike " />
                    <label className='remember-me' htmlFor="vehicle1" >Remember me</label>
                    <div className="btn-signin-div" style={{ width: "100%" }}>
                        {/* <div style={{ fontWeight: "800", color: "green" }}>{body.email !== '' && body.password !== '' && body.remember !== '' ? failure : success}</div> */}
                        <div style={{ fontWeight: "bold", color: "green" }}>{success}</div>
                        <div style={{ fontWeight: "bold", color: "red" }}>{failure}</div>
                        <button onClick={(e) => helllo(e)}
                            //  disabled={body.email !== '' && body.password !== '' ? false : true} 
                            className="btn-signin">Sign in</button>
                    </div>
                </form>
            </div >
            <div className='login-colum-two' style={{ border: "" }}>
                <div style={{ width: "100%", display: "flex", justifyContent: "end" }}>
                    <img src={img1} style={{ width: "88%", border: "" }} />
                </div>
            </div>
        </div >

    )
}
export default Login