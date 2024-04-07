/*
Authors: Go Ruo Yan
Date: 1 April 2024
Summary: Dashboard.jsx fetches and displays the user's posts from the database, including captions, descriptions, and usernames.
*/
import React, { useState, useEffect } from 'react'
import "./style.css"
import NavBar from "../NavBar"
// import Sidebar from"../NavBar2"
import * as CiIcons from 'react-icons/ci'
import axios from 'axios';
import { getCurrentUsername }  from '../Services/Authentication.js';

const Dashboard = ({pageTitle}) => {

    const [descriptions, setDescriptions] = useState([]);
    const [captions, setCaptions] = useState([]);
    const [users, setUsers] = useState([]);
    const [postIDs, setPostIDs] = useState([]);
    const [bookmarkedPostIDs, setBookmarkedPostIDs] = useState([]);
    const [bookmarkIDs, setBookmarkIDs] = useState([]);

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

        axios.get(process.env.REACT_APP_DATABASE_URL + '/query/bookmarks/')
        .then((otherResult) => {

            setBookmarkedPostIDs([]);
            
            for (let i = 0; i < otherResult.data.length; ++i) {
                if (otherResult.data[i].userID === getCurrentUsername()) {
                    setBookmarkedPostIDs((prevBookmarkedPostIDs) => [
                        ...prevBookmarkedPostIDs,
                        {
                            name: otherResult.data[i].postID
                        },
                    ])
                    setBookmarkIDs((prevBookmarkIDs) => [
                        ...prevBookmarkIDs,
                        {
                            name: otherResult.data[i].bookmarkID
                        },
                    ])
                }
            }
            console.log(bookmarkedPostIDs);
        })
        .catch((e) => {
            console.log(e);
        })
    }, [])

    function addBookmark(index) {
        console.log("bookmark!");
        
        axios.post(process.env.REACT_APP_DATABASE_URL + '/insert/bookmark/', {
            postID: postIDs[index].name,
            userID: getCurrentUsername(),
        })
        .then((result) => {
            axios.get(process.env.REACT_APP_DATABASE_URL + '/query/bookmarks/')
            .then((otherResult) => {

                setBookmarkedPostIDs([]);
                setBookmarkIDs([]);
                
                for (let i = 0; i < otherResult.data.length; ++i) {
                    if (otherResult.data[i].userID === getCurrentUsername()) {
                        setBookmarkedPostIDs((prevBookmarkedPostIDs) => [
                            ...prevBookmarkedPostIDs,
                            {
                                name: otherResult.data[i].postID
                            },
                        ])
                        setBookmarkIDs((prevBookmarkIDs) => [
                            ...prevBookmarkIDs,
                            {
                                name: otherResult.data[i].bookmarkID
                            },
                        ])
                    }
                }
                console.log(bookmarkedPostIDs);
            })
            .catch((e) => {
                console.log(e);
            })
        })
        .catch((e) => {
            console.log(e);
        })
    }

    function removeBookmark(index) {
        console.log("remove!");

        let bookmarkIndex = bookmarkedPostIDs.findIndex(e => e.name === postIDs[index].name);
        console.log(bookmarkIndex);

        axios.post(process.env.REACT_APP_DATABASE_URL + '/remove/bookmark/', {
            bookmarkID: bookmarkIDs[bookmarkIndex].name,
        })
        .then((result) => {
            console.log(result);
            axios.get(process.env.REACT_APP_DATABASE_URL + '/query/bookmarks/')
            .then((otherResult) => {

                setBookmarkedPostIDs([]);
                setBookmarkIDs([]);
                
                for (let i = 0; i < otherResult.data.length; ++i) {
                    if (otherResult.data[i].userID === getCurrentUsername()) {
                        setBookmarkedPostIDs((prevBookmarkedPostIDs) => [
                            ...prevBookmarkedPostIDs,
                            {
                                name: otherResult.data[i].postID
                            },
                        ])
                        setBookmarkIDs((prevBookmarkIDs) => [
                            ...prevBookmarkIDs,
                            {
                                name: otherResult.data[i].bookmarkID
                            },
                        ])
                    }
                }
                console.log(bookmarkedPostIDs);
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
                            </div>

                            { bookmarkedPostIDs.find(e => e.name === postIDs[index].name) ? (
                                <CiIcons.CiBookmark size={70} style={{padding:'5px'}} className='bookmarkIconAdded' onClick={() => removeBookmark(index)}/>
                            ) : (
                                <CiIcons.CiBookmark size={70} style={{padding:'5px'}} className='bookmarkIcon' onClick={() => addBookmark(index)}/>
                            )}
                        </div>
                    </div>
                    </>
                ))}

            </div>

        </>


    )
}



export default Dashboard