/*
Authors: Lim Hui Ching, Elton Teo, Go Ruo Yan, Nicole Wong
Date: 1 April 2024
Summary: App.js: Defines the main application routes, including login, signup, 
dashboard, search, saved pages, password reset, and confirmation functionality.
*/
import React, {useState} from 'react'
import './App.css';
import Login from './Components/LoginSignup/Login'
import Dashboard from './Components/WebPages/Dashboard'
import SavedPage from './Components/WebPages/SavedPage'
import SearchPage from './Components/WebPages/SearchPage'
import {Route, Routes} from 'react-router-dom'
import LoginSignup from './Components/LoginSignup/LoginSignup';


import AddPost from './Components/WebPages/AddPost';
import ForgotPassword from './Components/LoginSignup/FogotPassword';
import ResetPassword from './Components/LoginSignup/ResetPassword';
import ConfirmationPage from './Components/LoginSignup/ConfirmationPage';

function App() {
  const [pageTitle, setPageTitle] = useState('Dashboard');
  return (
    <div>
      
       {/* <BrowserRouter>
       <Routes>
        <Route index element ={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/saved" element={<SavedPage/>}/>
       </Routes>
       </BrowserRouter> */}

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/home" element={<Dashboard pageTitle="Dashboard"/>}/>
        <Route path="/search" element={<SearchPage pageTitle="Search"/>}/>
        <Route path="/saved" element={<SavedPage/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/resetpassword' element={<ResetPassword/>} />
        <Route path='/confirmation' element={<ConfirmationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
