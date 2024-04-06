import React, { useState } from 'react'
import "./LoginSignup.css"
import { FaUser } from "react-icons/fa";
import user_icon from "../Assets/account.png"
import { Link } from 'react-router-dom';

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
                    {/* <a href="Signup.jsx"> Don't have an account?</a> */}
                    <Link className='a' to="/signup">Don't have an account? Sign up!</Link>

                </div>

            </form>
        </div>
    )

}




import React from 'react'
import './LoginSignup.css'
import { useNavigate } from "react-router-dom";
import logo from '../../logo.svg'

const Login = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/signup";
        navigate(path);
    }
    return (
        <div className='container'>
            <div className="header">
            <img src={logo} className="profile-photo" alt="profile" />
                <div className="inputs">
                    <div className="input">
                        <input type="text" id="fusername" placeholder='Username' />
                    </div>
                    <div className="input">
                        <input type="password" id="fpassword" placeholder='Password' />
                    </div>
                </div>
            </div>
            <div className="submit-container" onClick={() => navigate('/addpost')}>
                <div className="submit">Log in</div>
            </div>
            <div className="no-account" onClick={routeChange}>Don't have an account?</div>
        </div>
    )
}

export default Login