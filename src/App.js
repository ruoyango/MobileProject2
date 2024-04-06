import React from 'react'
import './App.css';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login'
import Dashboard from './Components/WebPages/Dashboard'
import SavedPage from './Components/WebPages/SavedPage'
import SearchPage from './Components/WebPages/SearchPage'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import NavBar from "./Components/NavBar"
import LoginSignup from './Components/LoginSignup/LoginSignup';


import AddPost from './Components/Home/AddPost';

function App() {
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
        <Route path="/" element={<Login />} />
        <Route exact path="/signup" element={<LoginSignup />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/saved" element={<SavedPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
