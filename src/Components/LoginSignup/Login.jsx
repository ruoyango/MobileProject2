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