import React from 'react'
import "./style.css"
import NavBar from "../NavBar"
import Sidebar from"../NavBar2"
import test from '../Assets/7ad47d8666404417a572428d9ce78a82.png'
import * as CiIcons from 'react-icons/ci'
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import {Link} from "react-router-dom";

const Dashboard = () => {

    return (
        <>

            <NavBar />
            <div className='post'>

                <h3>@Account name</h3>
                
                    <img src={test} alt="exo" />
                
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


    )
}



export default Dashboard