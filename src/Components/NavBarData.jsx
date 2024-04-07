import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { MdLogout } from "react-icons/md";

export const NavBarData =[
   {
    title:'Home',
    path:'/home',
    icon:<AiIcons.AiFillHome/>,
    cName:'nav-text'
   },
   {
    title:'Search',
    path:'/search',
    icon:<FaIcons.FaSearch />,
    cName:'nav-text'
   },
   {
    title:'Create',
    path:'/home',
    icon:<MdOutlineAddBox />,
    cName:'nav-text'
   },
   {
    title:'Save',
    path:'/saved',
    icon:<FaIcons.FaRegBookmark />,
    cName:'nav-text'
   },
   {
    title:'Logout',
    path:'/',
    icon:<MdLogout />,
    cName:'nav-text'
   },


]