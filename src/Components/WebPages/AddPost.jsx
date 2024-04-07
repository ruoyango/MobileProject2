/*
Authors: Go Ruo Yan
Date: 1 April 2024
Summary: AddPost.jsx allows users to create and upload new posts, including adding captions and descriptions.
*/
import React, { useState } from 'react'
import './AddPost.css'
import axios from 'axios';
import NavBar from '../NavBar.jsx';
import { useNavigate } from "react-router-dom";
import { getCurrentUsername }  from '../Services/Authentication.js';

const AddPost = ({ pageTitle }) => {

    let navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [caption, setCaption] = useState("");

    function updateCaption(event) {
        setCaption(event.target.value);
    }

    function updateDescription(event) {
        setDescription(event.target.value);
    }
    
    const uploadText = async () => {
        if (caption !== "" && description !== "") {
            console.log("submitted");
        
            axios.post(process.env.REACT_APP_DATABASE_URL + '/insert/posts/', {
                description: description,
                caption: caption,
                userID: getCurrentUsername(),
            })
            .then((result) => {
                console.log(result);
            })
            .catch((e) => {
                console.log(e);
            })
    
            let path = "/home";
            navigate(path);
        }
    };

    return (
        <>
        <NavBar pageTitle="Create"/>
        <div className='containerAddPost'>

            <form method="post" action={process.env.REACT_APP_DATABASE_URL}>

                <div className="inputs">
                    <input type="text" id="caption" placeholder='Add caption here...' maxLength="100" onChange={updateCaption} required />
                </div>
                
                <div className="card">
                    <div className="description">
                        <textarea type="text" id="description" placeholder='Add post content here...' maxLength="1000" onChange={updateDescription} required/>
                    </div>
                </div>

                <div className="submit-container">
                    <button type="submit" className="submit" onClick={uploadText}>Post</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddPost