import React, { useState, useEffect } from 'react'
import "./style.css"
import NavBar from "../NavBar"
// import Sidebar from"../NavBar2"
import * as CiIcons from 'react-icons/ci'
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import {Link} from "react-router-dom";
import axios from 'axios';

const Dashboard = () => {

    const [descriptions, setDescriptions] = useState([]);
    const [captions, setCaptions] = useState([]);

    useEffect(() => {
        axios.get('http://54.198.89.107:3001/')
        .then((result) => {
            console.log(result);
            console.log(result.data[0].caption);
            console.log(result.data[0].description);

            for (let i = 0; i < result.data.length; ++i) {
                setCaptions((prevCaptions) => [
                    ...prevCaptions,
                    {
                        name: result.data[i].caption
                    },
                ])
                setDescriptions((prevDescriptions) => [
                    ...prevDescriptions,
                    {
                        name: result.data[i].description
                    },
                ])

            }
            // setCaptions(result.data[0].caption);
            // setDescriptions(result.data[0].description);
        })
        .catch((e) => {
            console.log(e);
        })
    }, [])

    // useEffect(() => {
    //     axios.get('http://54.198.89.107:3001/')
    //     .then((result) => {
    //         console.log(result);
    //         setCaption(result.caption);
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     })
    // }, [caption, description])

    
    return (
        <>

            <NavBar />
            <div className='dashboard'>

                {captions?.map((caption, index) => (
                    <>
                    <div className='dashpost' key={index}>

                        <h3>@Account name</h3>
                        
                        <div className='captionDiv'>
                            <p className="caption">{caption.name}</p>
                        </div>
                        
                        <div className='descriptionDiv'>
                            <p className="description">{descriptions[index].name}</p>
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
                    </>
                ))}

            </div>

        </>


    )
}



export default Dashboard