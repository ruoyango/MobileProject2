import React from 'react'
import "./style.css"
import NavBar from '../NavBar'
import { IoSearchOutline } from "react-icons/io5";

const SearchPage = () => {

  return (

    <div>
      <NavBar />
      <div className="search-box">
        <input type="text" className="search-input" placeholder="Search.."/>

          <button className="search-button">
           <IoSearchOutline/>
          </button>
      </div>
    </div>
  )
}


export default SearchPage;