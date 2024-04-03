import React from 'react'
import '../LoginSignup/LoginSignup.css'
import logo from '../../logo.svg'
import home from '../Assets/Home.png'
import logoutlogo from '../Assets/logoutlogo.png'
import searchlogo from '../Assets/searchlogo.png'
import savelogo from '../Assets/savelogo.png'
import uploadlogo from '../Assets/uploadlogo.png'

const AddPost = () => {
    return (
        <div className='container'>
            <div className="header">
                <img src={logo} className="profile-photo" alt="profile" />
                <img src={home} className="home" alt="home" />
                <img src={searchlogo} className="home" alt="search" />
                <img src={uploadlogo} className="home" alt="upload" />
                <img src={savelogo} className="home" alt="save" />
                <img src={logoutlogo} className="home" alt="logout" />

                <div className="submit-container">
                    <div className="submit">Post</div>
                </div>
                <input type="file" id="myfile" name="myfile"></input>
                <div className="inputs">
                    <div className="input">
                        <input type="text" id="caption" placeholder='Add caption here...' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost