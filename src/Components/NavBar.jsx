import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./navBar.css"
// import { motion } from 'framer-motion'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavBarData } from './NavBarData';
import { IconContext } from 'react-icons';
function NavBar( { pageTitle }) {
    const [sidebar, setSidebar] =useState(false);
    const showSidebar =()=> setSidebar(!sidebar);
     // Array of pages
     const pages = [
        { name: 'Dashboard', path: '/home' },
        { name: 'Search', path: '/search' },
        { name: 'Create', path: '/addpost' },
        { name: 'Save', path: '/saved' },
        
        // Add more pages as needed
    ];
    return (


        <>
        <IconContext.Provider value={{color: 'white', size:'40px'}}>
            <div className="sidebar">
                <Link to="#" className='menu-bars'>
                   <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <h1>{pageTitle}</h1>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                          <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                   
                        {NavBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    {item.title === 'Logout' ? (
                                        <Link to={"."} onClick={() => setModalOpen(true)}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    ) : (
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </>
    )
}

export default NavBar