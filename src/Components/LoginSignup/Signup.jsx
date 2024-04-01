import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from "../Assets/user.png"
import email_icon from "../Assets/email.png"
import pw_icon from "../Assets/padlock.png"
import contact_icon from "../Assets/phone-call.png"

const Signup = () => {
    const [action, setAction] = useState("Sign Up");
    return (
        <div className='container'>
           
           <form action="">
            <h1> Sign up here !</h1>
            <div className='input-box'>
                <input type="text"placeholder='Name' required/>
            </div>
            <div className='input-box'>
                <input type="text"placeholder='Password' required/>
            </div>
            <div className='input-box'>
                <input type="text"placeholder='Contact Number' required/>
            </div>
           </form>
        </div>
    )
}

export default Signup