/*
Authors: Lim Hui Ching, Elton Teo, Go Ruo Yan, Nicole Wong
Date: 1 April 2024
Summary: NavBar.jsx implements a responsive navigation bar with a sidebar menu 
that can be toggled open and closed, and a logout functionality that opens a modal dialog.
*/

import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./navBar.css"
// import { motion } from 'framer-motion'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavBarData } from './NavBarData';
import { IconContext } from 'react-icons';
import Modal from "./Home/Modal"

function NavBar({pageTitle}) {
    const [sidebar, setSidebar] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (


        <>
            <IconContext.Provider value={{ color: 'white', size: '40px' }}>
                <div className="sidebar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <h1>{pageTitle}</h1>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {NavBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    {item.title === 'Logout' ? ( // Open confirmation box when click log out
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