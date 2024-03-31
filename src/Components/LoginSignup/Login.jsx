import React from 'react'
import './LoginSignup.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/SignUp";
        navigate(path);
    }
    return (
        <div className='container'>
            <div className="header">
                <div className="inputs">
                    <div className="input">
                        <input type="text" id="fusername" placeholder='Username' />
                    </div>
                    <div className="input">
                        <input type="password" id="fpassword" placeholder='Password' />
                    </div>
                </div>
            </div>
            <div className="submit-container" onClick={routeChange}>
                <div className="submit">Log in</div>
            </div>
            <div className="no-account" onClick={routeChange}>Don't have an account?</div>
        </div>
    )
}

export default Login