import React from 'react'
import './LoginSignup.css'
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/addpost";
        navigate(path);
    }
    return (
        <div className='container'>
            <div className="header">
                <h1 className="headline">
                    Sign Up Here!
                </h1>
                <div className="inputs">
                    <div className="input">
                        <label for="fname">Name</label><br></br>
                        <input type="text" id="fname" placeholder='Name' />
                    </div>
                    <div className="input">
                        <label for="fusername">Username</label><br></br>
                        <input type="text" id="fusername" placeholder='Username' />
                    </div>
                    <div className="input">
                        <label for="fpassword">Password</label><br></br>
                        <input type="password" id="fpassword" placeholder='Create Password' />
                    </div>
                    <div className="input">
                        <label for="fcnumber">Contact Number</label><br></br>
                        <input type="number" id="fcnumber" placeholder='Contact Number' />
                    </div>
                    <div className="input">
                        <label for="femail">Email</label><br></br>
                        <input type="email" id="femail" placeholder='Email' />
                    </div>
                    <input type="file" id="myfile" name="myfile"></input>
                </div>
            </div>
            <div className="submit" onClick={routeChange}>Sign Up</div>
        </div>
    )
}

export default LoginSignup