/*
Authors: Lim Hui Ching, Elton Teo, Go Ruo Yan, Nicole Wong
Date: 1 April 2024
Summary: Dashboard.jsx fetches and displays the user's posts from the database, including captions, descriptions, and usernames.
*/
import React, { useState, useEffect } from 'react'
import "./style.css"
import NavBar from "../NavBar"
// import Sidebar from"../NavBar2"
import * as CiIcons from 'react-icons/ci'
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2"
import {Link} from "react-router-dom";
import axios from 'axios';
import { getCurrentUsername }  from '../Services/Authentication.js';

const Dashboard = ({pageTitle}) => {

    const [descriptions, setDescriptions] = useState([]);
    const [captions, setCaptions] = useState([]);
    const [users, setUsers] = useState([]);
    const [postIDs, setPostIDs] = useState([]);
    const [bookmarkedPostIDs, setBookmarkedPostIDs] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_DATABASE_URL + '/query/posts/')
        .then((result) => {
            setCaptions([]);
            setDescriptions([]);
            setUsers([]);
            setPostIDs([]);
            
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
                setUsers((prevUsers) => [
                    ...prevUsers,
                    {
                        name: result.data[i].userID
                    },
                ])
                setPostIDs((prevPostIDs) => [
                    ...prevPostIDs,
                    {
                        name: result.data[i].postID
                    },
                ])
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }, [])

    function removeBookmark(index) {
        console.log("remove!");
    }

    function addBookmark(index) {
        console.log("bookmark!");
        
        axios.post(process.env.REACT_APP_DATABASE_URL + '/insert/bookmark/add/', {
            postID: postIDs[index].name,
            userID: getCurrentUsername(),
        })
        .then((result) => {
            console.log(result);

            axios.get(process.env.REACT_APP_DATABASE_URL + '/query/bookmarks/')
            .then((otherResult) => {

                console.log(otherResult);

                setBookmarkedPostIDs([]);
                
                for (let i = 0; i < otherResult.data.length; ++i) {
                    setBookmarkedPostIDs((prevBookmarkedPostIDs) => [
                        ...prevBookmarkedPostIDs,
                        {
                            name: otherResult.data[i].postID
                        },
                    ])
                }
            })
            .catch((e) => {
                console.log(e);
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }
    
    return (
        <>
            <NavBar pageTitle="Dashboard" />
            <div className='dashboard'>

                {captions?.map((caption, index) => (
                    <>
                    <div className='dashpost' key={index}>

                        <h3>@{users[index].name}</h3>
                        
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

                            { bookmarkedPostIDs.find(e => e.Name === postIDs[index].name) ? (
                                <CiIcons.CiBookmark size={70} style={{padding:'5px'}} className='bookmarkIconAdded' onClick={removeBookmark}/>
                            ) : (
                                <CiIcons.CiBookmark size={70} style={{padding:'5px'}} className='bookmarkIcon' onClick={() => addBookmark(index)}/>
                            )}
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