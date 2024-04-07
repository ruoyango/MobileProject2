/*
Authors: Go Ruo Yan
Date: 1 April 2024
Summary: SearchPage.jsx allows users to search for posts by username and displays the matching posts.
*/
import React, { useState, useEffect } from 'react'
import "./style.css"
import NavBar from '../NavBar'
import { IoSearchOutline } from "react-icons/io5";
import * as CiIcons from 'react-icons/ci'
import axios from 'axios';
import { getCurrentUsername }  from '../Services/Authentication.js';

const SearchPage = ({ pageTitle }) => {

  const [descriptions, setDescriptions] = useState([]);
  const [captions, setCaptions] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [postIDs, setPostIDs] = useState([]);
  const [likeCount, setLikeCount] = useState([]);
  const [bookmarkedPostIDs, setBookmarkedPostIDs] = useState([]);
  const [bookmarkIDs, setBookmarkIDs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [likedPostIDs, setLikedPostIDs] = useState([]);
  const [likeIDs, setLikeIDs] = useState([]);

  useEffect(() => {
 
    axios.post(process.env.REACT_APP_DATABASE_URL + '/query/posts/userID/', {
      search: searchText
    })
    .then((result) => {
      setPostIDs([]);
      setUsernames([]);
      setCaptions([]);
      setDescriptions([]);
      setLikeCount([]);
      
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
          setUsernames((prevUsernames) => [
              ...prevUsernames,
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
          setLikeCount((prevLikeCounts) => [
              ...prevLikeCounts,
              {
                  name: result.data[i].likeCount
              },
          ])
      }
    })
    .catch((e) => {
        console.log(e);
    })
  }, [searchText])
  
  useEffect(() => {
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
    
    axios.get(process.env.REACT_APP_DATABASE_URL + '/query/likes/')
    .then((otherOtherResult) => {

        setLikedPostIDs([]);
        setLikeIDs([]);
        for (let i = 0; i < otherOtherResult.data.length; ++i) {
            if (otherOtherResult.data[i].userID === getCurrentUsername()) {
              setLikedPostIDs((prevLikedPostIDs) => [
                  ...prevLikedPostIDs,
                  {
                      name: otherOtherResult.data[i].postID
                  },
              ])
              setLikeIDs((prevLikeIDs) => [
                  ...prevLikeIDs,
                  {
                      name: otherOtherResult.data[i].likeID
                  },
              ]);
            }
        }
    })
    .catch((e) => {
        console.log(e);
    })
  }, [])

  function handleSearch(event) {
    setSearchText(event.target.value);
  }

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

  function addLike(index) {
    
    axios.post(process.env.REACT_APP_DATABASE_URL + '/insert/likes/', {
      postID: postIDs[index].name,
      userID: getCurrentUsername(),
    })
    .then((result) => {
      console.log(result.data);
      setLikedPostIDs([]);
      setLikeIDs([]);
      
      for (let i = 0; i < result.data.length; ++i) {
        if (result.data[i].userID === getCurrentUsername()) {
          setLikedPostIDs((prevLikedPostIDs) => [
              ...prevLikedPostIDs,
              {
                  name: result.data[i].postID
              },
          ])
          setLikeIDs((prevLikeIDs) => [
              ...prevLikeIDs,
              {
                  name: result.data[i].likeID
              },
          ]);
        }
      }
      console.log(likedPostIDs);
    })
    .catch((e) => {
        console.log(e);
    })
    
    axios.post(process.env.REACT_APP_DATABASE_URL + '/increment/posts/likeCount/', {
      postID: postIDs[index].name
    })
    .then((result) => {
      setLikeCount([]);
      
      for (let i = 0; i < result.data.length; ++i) {
        setLikeCount((prevLikeCounts) => [
          ...prevLikeCounts,
          {
            name: result.data[i].likeCount
          },
        ])
      }
    })
    .catch((e) => {
        console.log(e);
    })
  }

  function removeLike(index) {
    
    let likeIndex = likedPostIDs.findIndex(e => e.name === likedPostIDs[index].name);
    console.log(likeIndex)

    axios.post(process.env.REACT_APP_DATABASE_URL + '/remove/likes/', {
      likeID: likeIDs[likeIndex].name
    })
    .then((result) => {
      console.log(result.data);
      setLikedPostIDs([]);
      setLikeIDs([]);
      
      for (let i = 0; i < result.data.length; ++i) {
        if (result.data[i].userID === getCurrentUsername()) {
          setLikedPostIDs((prevLikedPostIDs) => [
              ...prevLikedPostIDs,
              {
                  name: result.data[i].postID
              },
          ]);
          setLikeIDs((prevLikeIDs) => [
              ...prevLikeIDs,
              {
                  name: result.data[i].likeID
              },
          ]);
        }
      }
      console.log(likedPostIDs);
    })
    .catch((e) => {
        console.log(e);
    })
    
    axios.post(process.env.REACT_APP_DATABASE_URL + '/decrement/posts/likeCount/', {
      postID: postIDs[index].name
    })
    .then((result) => {
      setLikeCount([]);
      
      for (let i = 0; i < result.data.length; ++i) {
        setLikeCount((prevLikeCounts) => [
          ...prevLikeCounts,
          {
            name: result.data[i].likeCount
          },
        ])
      }
    })
    .catch((e) => {
        console.log(e);
    })
  }

  return (

    <>
      <NavBar pageTitle="Search" />
      <div className="search-box">
        <IoSearchOutline size={23} style={{ color: 'rgba(0,0,0,0.5)' }} />
        <input type="text" className="search-input" placeholder="Search.." onChange={handleSearch}/>

      </div>
      
      <div className='board'>
        <div className='boardhalfed'>
          {usernames?.map((username, index) => (
            <>
            <div className='post' key={index}>

                <h3>@{usernames[index].name}</h3>
                
                <div className='captionDiv'>
                    <p className="caption">{captions[index].name}</p>
                </div>
                
                <div className='descriptionDiv'>
                    <p className="description">{descriptions[index].name}</p>
                </div>
                
                <div className='belowness'>
                    <div id="icons" className='icons'>
                      { likedPostIDs.find(e => e.name === postIDs[index].name) ? (
                        <CiIcons.CiHeart size={70} style={{padding:'5px'}} className='bookmarkIconAdded' onClick={() => removeLike(index)}/>
                      ) : (
                        <CiIcons.CiHeart size={70} style={{padding:'5px'}} className='bookmarkIcon' onClick={() => addLike(index)}/>
                      )}
                      <p>{likeCount[index].name} likes</p>
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
      </div>


    </>
  )
}


export default SearchPage;