import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/LoginSignup/Login';
import Dashboard from './Components/WebPages/Dashboard';
import SavedPage from './Components/WebPages/SavedPage';
import SearchPage from './Components/WebPages/SearchPage';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import AddPost from './Components/WebPages/AddPost';
import ForgotPassword from './Components/LoginSignup/ForgotPassword';
import ResetPassword from './Components/LoginSignup/ResetPassword';
import ConfirmationPage from './Components/LoginSignup/ConfirmationPage';
import ProtectedRoute from './Components/Services/ProtectedRouted';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/home" element={<Dashboard pageTitle="Dashboard" />} />
        <Route path="/search" element={<SearchPage pageTitle="Search" />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
