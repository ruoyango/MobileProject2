import React, { useState, useEffect } from 'react'
import "./style.css"
import NavBar from '../NavBar'
import { IoSearchOutline } from "react-icons/io5";
import * as CiIcons from 'react-icons/ci'
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import {Link} from "react-router-dom";
import axios from 'axios';

const SearchPage = () => {

  const [descriptions, setDescriptions] = useState([]);
  const [captions, setCaptions] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setCaptions([]);
    setDescriptions([]);
    let searching = searchText === "" ? "*" : searchText;
 
    axios.post('http://3.215.5.249:3001/query/posts/userID/', {
      search: searching
    })
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
    })
    .catch((e) => {
        console.log(e);
    })
  }, [searchText])

  return (

    <>
      <NavBar />
      <div className="search-box">
        <IoSearchOutline size={23} style={{ color: 'rgba(0,0,0,0.5)' }} />
        <input type="text" className="search-input" placeholder="Search.."/>

      </div>
      
      <div className='board'>
        <div className='boardhalfed'>
          {captions?.map((caption, index) => (
            <>
            <div className='post' key={index}>

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
      </div>


    </>
  )
}


export default SearchPage;