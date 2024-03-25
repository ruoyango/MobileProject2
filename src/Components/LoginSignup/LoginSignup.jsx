import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    return (
        <div className='container'>
            <div className="header">
                <div className="text">
                    Sign Up Here!
                </div>
                <div className="inputs">
                    <div className="input">
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="input">
                        <input type="text" placeholder='Username' />
                    </div>
                    <div className="input">
                        <input type="password" placeholder='Create Password' />
                    </div>
                    <div className="input">
                        <input type="number" placeholder='Contact Number' />
                    </div>
                    <div className="input">
                        <input type="email" placeholder='Email' />
                    </div>
                    <input type="file" id="myfile" name="myfile"></input>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>
        </div>
    )
}

export default LoginSignup