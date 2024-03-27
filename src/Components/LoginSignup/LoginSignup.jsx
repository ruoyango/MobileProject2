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
            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>
        </div>
    )
}

export default LoginSignup