import React from 'react'
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { Routes, Route } from "react-router-dom";
import Login from './Components/LoginSignup/Login';
import AddPost from './Components/Home/AddPost';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/signup" element={<LoginSignup />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
