import React from 'react'
import './LoginSignup.css'
import { useNavigate } from "react-router-dom";
import logo from '../../logo.svg'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/signup";
        navigate(path);
    }
    return (
        <div className='container'>
            {/* <div className="header">
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
            <div className="no-account" onClick={routeChange}>Don't have an account?</div> */}
            <form action="">

                <div className='imge'>
                    <img src={logo} />
                    {/* <FaUser id="userIcon"/> */}
                </div>
                <div className="inputs">
                    <div className='input-box'>
                        <input type="text" id="fusername" placeholder='Username' required />
                    </div>
                    <div className='input-box'>
                        <input type="password" id="fpassword" placeholder='Password' required />
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

export default Login