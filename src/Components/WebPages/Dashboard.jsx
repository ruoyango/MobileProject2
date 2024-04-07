import React, { useState, useEffect } from 'react'
import "./style.css"
import NavBar from "../NavBar"
// import Sidebar from"../NavBar2"
import * as CiIcons from 'react-icons/ci'
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import {Link} from "react-router-dom";
import axios from 'axios';

const Dashboard = () => {

    const [description, setDescription] = useState("");
    const [caption, setCaption] = useState("");

    useEffect(() => {
        axios.get('http://54.198.89.107:3001/')
        .then((result) => {
            console.log(result);
            setCaption(result.caption);
        })
        .catch((e) => {
            console.log(e);
        })
    }, [])


    return (
        <>

            <NavBar />
            <div className="search-box">
                <input className="search-input"/>
            </div>

            <div className='board'>
                <div className='post'>

                    <h3>@Account name</h3>
                    
                    <div className='captionDiv'>
                        <p className="caption">{caption}</p>
                    </div>
                    
                    <div className='descriptionDiv'>
                        <p className="description">THIS IS THE DESCRIP. THIS IS THE DESCRIPT. THIS IS THE DESCRIPTION. THIS IS THE DESCRIPTION. THIS IS THE DESCRIPTION. THIS IS THE DESCRIPTION. </p>
                    </div>
                    
                    <div className='belowness'>
                        <div id="icons">
                            <CiIcons.CiHeart size={70} style={{padding:'5px'}} />
                            <HiOutlineChatBubbleOvalLeft size={70} style={{padding:'5px'}}/>
                        </div>
                        <CiIcons.CiBookmark size={70} style={{padding:'5px'}}/>
                    </div>

                    <Link to="/" style={{color:'grey',marginTop:'30px', fontSize:"25px", padding:"15px"}}> View comments here</Link>
                </div>
            </div>

        </>


    )
}



export default Dashboard