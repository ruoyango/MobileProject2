import React, { useState, useRef } from 'react'
import { DefaultPlayer as Video } from 'react-html5video'

import './AddPost.css'

import logo from '../../logo.svg'
import home from '../Assets/Home.png'
import logoutlogo from '../Assets/logoutlogo.png'
import searchlogo from '../Assets/searchlogo.png'
import savelogo from '../Assets/savelogo.png'
import uploadlogo from '../Assets/uploadlogo.png'

let totalImages = 0;

const AddPost = () => {

    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [filesAdded, setFilesAdded] = useState(false);
    const [currImageIndex, setCurrImageIndex] = useState();
    const fileInputRef = useRef(null);

    function addingFilesIntoArray(files) {
        for (let i = 0; i < files.length; ++i) {
            if (files[i].type.split("/")[0] !== 'image' && files[i].type.split("/")[0] !== 'video') continue;
            if (!images?.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                        type: files[i].type.split("/")[0],
                    },
                ])
                setFilesAdded(true);
                ++totalImages;
            }
        }
    }

    function selectFiles() {
        fileInputRef.current.click();
    }
    function onFilesSelect(event) {
        const files = event.target.files;
        if (files.length === 0) return;
        addingFilesIntoArray(files);
        setCurrImageIndex(0);
    }
    function deleteImage(index) {
        setImages((prevImages) => 
            prevImages.filter((_, i) => i !== index)
        );
        if (images.length === 1) {
            setFilesAdded(false);
        } 
        totalImages = images.length - 1;
        if (currImageIndex > index || currImageIndex === totalImages) {
            setCurrImageIndex(currImageIndex - 1);
        }
    }
    function onDragOver(event) {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }
    function onDragLeave(event) {
        event.preventDefault();
        setIsDragging(false);
    }
    function onDrop(event) {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        addingFilesIntoArray(files);
        setCurrImageIndex(0);
    }

    const nextImage = () => {
        if (currImageIndex !== totalImages - 1) {
            setCurrImageIndex(currImageIndex + 1);
        }
        console.log("currImageIndex: " + currImageIndex);
    }
    const previousImage = () => {
        if (currImageIndex !== 0) {
            setCurrImageIndex(currImageIndex - 1);
        }
        console.log("currImageIndex: " + currImageIndex);
    }

    return (
        <div className='container'>
            <div className="header">
                <img src={logo} className="profile-photo" alt="profile" />
                <img src={home} className="home" alt="home" />
                <img src={searchlogo} className="home" alt="search" />
                <img src={uploadlogo} className="home" alt="upload" />
                <img src={savelogo} className="home" alt="save" />
                <img src={logoutlogo} className="home" alt="logout" />
            </div>

            <div className="card">
                <div className="dragArea" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                    { filesAdded ? (
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
                                        <img src={images[currImageIndex].url} alt={images[currImageIndex].name}/>
                                    </div>
                                ) : (
                                    <div className="video">
                                        <Video className="videoView">
                                            <source src={images[currImageIndex].url} type="video/mp4" alt={images[currImageIndex].name}/>
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
                                <div className="image"  key={index}>
                                    <span className="delete" onClick={() => deleteImage(index)}>&times;</span>
                                    <img src={images.url} alt={images.name}/>
                                </div>
                            ) : (
                                <Video className="video">
                                    <source src={images.url} type="video/webm" alt={images.name}/>
                                </Video>
                            )
                        ))}
                    </div>
                ) : (
                    <></>
                )}
                
            </div>

            <div className="inputs">
                <div className="input">
                    <input type="text" id="caption" placeholder='Add caption here...' />
                </div>
            </div>

            <div className="submit-container">
                <div className="submit">Post</div>
            </div>
        </div>
    )
}

export default AddPost