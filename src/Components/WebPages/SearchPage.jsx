import React from 'react'
import "./style.css"
import NavBar from '../NavBar'
import { IoSearchOutline } from "react-icons/io5";
import * as CiIcons from 'react-icons/ci'
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import { Link } from "react-router-dom";
import test from '../Assets/7ad47d8666404417a572428d9ce78a82.png'

const SearchPage = () => {

  return (

    <>
      <NavBar />
      <div className="search-box">
        <IoSearchOutline size={23} style={{ color: 'rgba(0,0,0,0.5)' }} />
        <input type="text" className="search-input" placeholder="Search.." />

      </div>
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


    </>
  )
}


export default SearchPage;