/*
Authors: Lim Hui Ching, Elton Teo, Nicole Wong
Date: 1 April 2024
Summary: NavBar2.jsx creates a responsive navigation bar with a collapsible sidebar using the 
react-pro-sidebar library, allowing users to navigate through different pages of the application.
*/
import React , {useState}from 'react'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
import './navBar.css'
// import * as FaIcons from "react-icons/fa"
// import { MdOutlineAddBox } from "react-icons/md";
// import { MdLogout } from "react-icons/md";
import { NavBarData } from './NavBarData';
import {Link} from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IconContext } from 'react-icons';
// import account from "./Assets/account.png"
function NavBar2() {
const [menuCollapse, setMenuCollapse] = useState(false)
const showSidebar =()=> setMenuCollapse(!menuCollapse);
  
    return (
        <>
           <IconContext.Provider value={{size:"25px"}}>
            <div style={{ display: "flex", height: "100vh" }}>
                <Sidebar className="app" collapsed={menuCollapse}>
                    <Menu>
                    <MenuItem className="menu1" onClick={showSidebar}>
                        
                            {menuCollapse? <GiHamburgerMenu/>:<IoClose />}

                        </MenuItem>
                       
                    {NavBarData.map((item,index) => {return (
                      
                        <MenuItem icon={item.icon}> <Link to={item.path}>{item.title}</Link></MenuItem>
                    )})}
                       

                      
                    </Menu>
                </Sidebar>
              
            </div>
            </IconContext.Provider>
        </>

    )
}

export default NavBar2