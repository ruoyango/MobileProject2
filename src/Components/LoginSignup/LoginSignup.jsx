import React from 'react'
import './LoginSignup.css'
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import { GiPadlockOpen } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
const LoginSignup = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/addpost";
        navigate(path);
    }
    return (
        // <div className='container'>
        //     <div className="header">
        //         <h1 className="headline">
        //             Sign Up Here!
        //         </h1>
        //         <div className="inputs">
        //             <div className="input">
        //                 <label for="fname">Name</label><br></br>
        //                 <input type="text" id="fname" placeholder='Name' />
        //             </div>
        //             <div className="input">
        //                 <label for="fusername">Username</label><br></br>
        //                 <input type="text" id="fusername" placeholder='Username' />
        //             </div>
        //             <div className="input">
        //                 <label for="fpassword">Password</label><br></br>
        //                 <input type="password" id="fpassword" placeholder='Create Password' />
        //             </div>
        //             <div className="input">
        //                 <label for="fcnumber">Contact Number</label><br></br>
        //                 <input type="number" id="fcnumber" placeholder='Contact Number' />
        //             </div>
        //             <div className="input">
        //                 <label for="femail">Email</label><br></br>
        //                 <input type="email" id="femail" placeholder='Email' />
        //             </div>
        //             <input type="file" id="myfile" name="myfile"></input>
        //         </div>
        //     </div>
        //     <div className="submit" onClick={routeChange}>Sign Up</div>
        // </div>
        <div className='wrapper'>

        <form action="">
            <h1> Sign up here !</h1>
            <div id="moreDiv">
                <div className="inputsLeft">
                    <div className='input-box'>
                           {/* <img src={user_icon}/> */}
                           <FaIcons.FaRegUser size={20} style={{padding:"4px"}}/>
                        <input type="text" id="fname" placeholder='Name' required />
                    </div>
                    <div className='input-box'>
                        <GiPadlockOpen  size={20} style={{padding:"4px"}}/>
                        <input type="password" id="fusername" placeholder='Password' required />
                    </div>
                    <div className='input-box'>
                        <FiPhone  size={20} style={{padding:"4px"}}/>
                        <input type="number" id="fpassword" placeholder='Contact Number' required />
                    </div>
                    <div className='input-box'>
                        <MdOutlineMailOutline size={20} style={{padding:"4px"}}/>
                        <input type="email" id="femail" placeholder='Email' required />
                    </div>
                </div>

                <div id="inputRight">
                    <input type="file" id="myFile" name="myFile" accept="image/*" />
                    <button type="submit" onClick={routeChange}>Sign up</button>
                </div>
            </div>


        </form>
    </div>
    )
}

export default LoginSignup