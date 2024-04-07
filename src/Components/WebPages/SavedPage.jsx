/*
Authors: Lim Hui Ching, Elton Teo, Go Ruo Yan, Nicole Wong
Date: 1 April 2024
Summary: SavedPage.jsx displays a saved post with user information and interaction icons.
*/
import React from 'react'
import "./style.css"
import NavBar from '../NavBar'
import * as CiIcons from 'react-icons/ci'
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
// import { Link } from "react-router-dom";
import test from '../Assets/7ad47d8666404417a572428d9ce78a82.png'


const SavedPage = ({ pageTitle }) => {

  return (

    <div>
      <NavBar pageTitle="Save" />
      <div className='postNo'>
        <img src={test} alt="test" />
        <div className='belowness2'>
          <p>@AccountName</p>
          <div id="icons">
            <CiIcons.CiHeart size={50} style={{ padding: '5px' }} />
            <HiOutlineChatBubbleOvalLeft size={50} style={{ padding: '5px' }} />
          </div>

        </div>
      </div>
    </div>
  )
}


export default SavedPage;