import React, { useState } from 'react'
import "./LoginSignup.css"
import { FaUser } from "react-icons/fa";
import user_icon from "../Assets/account.png"

const Login = () => {
    const [action, setAction] = useState("Log In");

    return (

        <div className="container">
            <form action="">

                <div className='imge'>
                    <img src={user_icon} />
                    {/* <FaUser id="userIcon"/> */}
                </div>
                <div className="inputs">
                    <div className='input-box'>
                        <input type="text" placeholder='Name' required />
                    </div>
                    <div className='input-box'>
                        <input type="text" placeholder='Password' required />
                    </div>

                </div>
                
                <button type="submit">Login</button>
                <div className='register-link'>
                    <a href="#"> Don't have an account?</a>
                </div>

            </form>
        </div>
    )

}




export default Login