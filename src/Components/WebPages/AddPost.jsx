import React, { useState } from 'react'
import './AddPost.css'
// import Modal from "./Modal.js";
// import logo from '../../logo.svg'
// import home from '../Assets/Home.png'
// import logoutlogo from '../Assets/logoutlogo.png'
// import searchlogo from '../Assets/searchlogo.png'
// import savelogo from '../Assets/savelogo.png'
// import uploadlogo from '../Assets/uploadlogo.png'
import axios from 'axios';
import NavBar from '../NavBar.jsx';

import { useNavigate } from "react-router-dom";
import userpool  from '../../userpool.js'
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
//import ReactS3 from 'react-s3'
// import { Amplify } from 'aws-amplify'
//import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// let totalImages = 0;
// const config = {
//     bucketName: 'mobile-project-2-data',
//     region: 'us-east-1',
//     accessKeyId: 'c2bb855def4dd0771a63f4004e0ef40675eaf5c1314e178b818d09a1883ab314',
//     secretAccessKey: 'c2bb855def4dd0771a63f4004e0ef40675eaf5c1314e178b818d09a1883ab314',
// }
// const client = new S3Client(config);

const AddPost = ({ pageTitle }) => {

    let navigate = useNavigate();

    // useEffect(() => {
    //     Amplify.configure({
    //         Auth: {
    //             identityPoolId: "us-east-1:cc11ded1-d18a-459a-aac6-b604abdde408",
    //             region: "us-east-1",
    //         },
    
    //         Storage: {
    //             AWSS3: {
    //               bucket: "mobile-project-2-data",
    //               region: "us-east-1",
    //             },
    //         },
    //     })
    
    // }, []);

    const [modalOpen, setModalOpen] = useState(false);
    // const [images, setImages] = useState([]);
    // const [isDragging, setIsDragging] = useState(false);
    // const [filesAdded, setFilesAdded] = useState(false);
    // const [currImageIndex, setCurrImageIndex] = useState();
    // const fileInputRef = useRef(null);

    const [description, setDescription] = useState("");
    const [caption, setCaption] = useState("");

    // function addingFilesIntoArray(files) {
    //     for (let i = 0; i < files.length; ++i) {
    //         if (files[i].type.split("/")[0] !== 'image' && files[i].type.split("/")[0] !== 'video') continue;
    //         if (!images?.some((e) => e.name === files[i].name)) {
    //             setImages((prevImages) => [
    //                 ...prevImages,
    //                 {
    //                     name: files[i].name,
    //                     url: URL.createObjectURL(files[i]),
    //                     type: files[i].type.split("/")[0],
    //                 },
    //             ])

    //             setFilesAdded(true);
    //             ++totalImages;
    //         }
    //     }
    // }

    // function selectFiles() {
    //     fileInputRef.current.click();
    // }
    // function onFilesSelect(event) {
    //     const files = event.target.files;
    //     if (files.length === 0) return;
    //     addingFilesIntoArray(files);
    //     setCurrImageIndex(0);
    // }
    // function deleteImage(index) {
    //     setImages((prevImages) =>
    //         prevImages.filter((_, i) => i !== index)
    //     );
    //     if (images.length === 1) {
    //         setFilesAdded(false);
    //     }
    //     totalImages = images.length - 1;
    //     if (currImageIndex > index || currImageIndex === totalImages) {
    //         setCurrImageIndex(currImageIndex - 1);
    //     }
    // }
    // function onDragOver(event) {
    //     event.preventDefault();
    //     setIsDragging(true);
    //     event.dataTransfer.dropEffect = "copy";
    // }
    // function onDragLeave(event) {
    //     event.preventDefault();
    //     setIsDragging(false);
    // }
    // function onDrop(event) {
    //     event.preventDefault();
    //     setIsDragging(false);
    //     const files = event.dataTransfer.files;
    //     addingFilesIntoArray(files);
    //     setCurrImageIndex(0);
    // }

    // const nextImage = () => {
    //     if (currImageIndex !== totalImages - 1) {
    //         setCurrImageIndex(currImageIndex + 1);
    //     }
    //     console.log("currImageIndex: " + currImageIndex);
    // }
    // const previousImage = () => {
    //     if (currImageIndex !== 0) {
    //         setCurrImageIndex(currImageIndex - 1);
    //     }
    //     console.log("currImageIndex: " + currImageIndex);
    // }

    function updateCaption(event) {
        setCaption(event.target.value);
    }

    function updateDescription(event) {
        setDescription(event.target.value);
    }
    
    const uploadText = async () => {
        // const command = new PutObjectCommand({
        //   Bucket: "mobile-project-2-data",
        //   Region: "us-east-1",
        //   Key: images[0].name,
        //   Body: "Hello S3!",
        // });
        // try {
        //   const response = await client.send(command);
        //   console.log(response);
        // } catch (err) {
        //   console.error(err);
        // }
        console.log("submitted");
    
        axios.post(process.env.REACT_APP_DATABASE_URL + '/insert/posts/', {
            description: description,
            caption: caption,
            userID: userpool.getCurrentUser(),
        })
        .then((result) => {
            console.log(result);
        })
        .catch((e) => {
            console.log(e);
        })

        let path = "/home";
        navigate(path);
    };

    return (
        <>
        <NavBar pageTitle="Create"/>
        <div className='container'>
            {/* <div className="header">
                <img src={logo} className="profile-photo" alt="profile" />
                <img src={home} className="home" alt="home" />
                <img src={searchlogo} className="home" alt="search" />
                <img src={uploadlogo} className="home" alt="upload" />
                <img src={savelogo} className="home" alt="save" />
                <img src={logoutlogo} className="openModalBtn"
                    onClick={() => { setModalOpen(true); }} alt="logout" />
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div> */}

            <form method="post" action={process.env.REACT_APP_DATABASE_URL}>
                {/* <div className="card">
                    <div className="dragArea" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                        {filesAdded ? (
                            <div className="containerView">
                                {images[currImageIndex].type === "image" ? (
                                    <div className="image">
                                        {totalImages > 1 ? (
                                            <>
                                                <span className="previous" onClick={previousImage}>&lt;</span>
                                                <span className="next" onClick={nextImage}>&gt;</span>
                                            </>
                                        ) : (
                                            <></>
                                        )}
                                        <img src={images[currImageIndex].url} alt={images[currImageIndex].name} />
                                    </div>
                                ) : (
                                    <div className="video">
                                        <Video className="videoView">
                                            <source src={images[currImageIndex].url} type="video/mp4" alt={images[currImageIndex].name} />
                                        </Video>
                                        <span className="previous" onClick={previousImage}>&lt;</span>
                                        <span className="next" onClick={nextImage}>&gt;</span>
                                    </div>
                                )
                                }
                            </div>
                        ) : (
                            <></>
                        )
                        }
                    </div>
                    <div className="dragAreaText">
                        {isDragging ? (
                            <>
                                <span className="select">Drop image</span>
                                <input type="file" id="myfile" name="myfile" multiple ref={fileInputRef} onChange={onFilesSelect}></input>
                            </>
                        ) : (
                            <>
                                Drag and drop videos / images on top or {" "}
                                <span className="select" role="button" onClick={selectFiles}>
                                    Browse
                                </span>
                                <input type="file" id="myfile" name="myfile" multiple ref={fileInputRef} onChange={onFilesSelect}></input>
                            </>
                        )}
                    </div>
                    {filesAdded ? (
                        <div className="container">
                            {images?.map((images, index) => (
                                images.type === "image" ? (
                                    <div className="image" key={index}>
                                        <span className="delete" onClick={() => deleteImage(index)}>&times;</span>
                                        <img src={images.url} alt={images.name} />
                                    </div>
                                ) : (
                                    <Video className="video">
                                        <source src={images.url} type="video/webm" alt={images.name} />
                                    </Video>
                                )
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}

                </div> */}


                <div className="inputs">
                    <div className="input">
                        <input type="text" id="caption" placeholder='Add caption here...' maxLength="100" onChange={updateCaption}/>
                    </div>
                </div>
                
                <div className="card">
                    <div className="description">
                        <textarea type="text" id="description" placeholder='Add post here...' maxLength="1000" onChange={updateDescription}/>
                    </div>
                </div>

                <div className="submit-container">
                    <div type="submit" className="submit" onClick={uploadText}>Post</div>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddPost