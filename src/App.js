import React from 'react'
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { Routes, Route } from "react-router-dom";
import Login from './Components/LoginSignup/Login';
import AddPost from './Components/Home/AddPost';
import ForgotPassword from './Components/LoginSignup/FogotPassword';
import ResetPassword from './Components/LoginSignup/ResetPassword';
import ConfirmationPage from './Components/LoginSignup/ConfirmationPage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/resetpassword' element={<ResetPassword/>} />
        <Route path='/confirmation' element={<ConfirmationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
