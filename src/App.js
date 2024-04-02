import logo from './logo.svg';
import './App.css';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login'
import Dashboard from './Components/WebPages/Dashboard'
import SavedPage from './Components/WebPages/SavedPage'
import SearchPage from './Components/WebPages/SearchPage'
import {Route, BrowserRouter, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Route path="/" exact component={Dashboard}/> */}
     
      
       {/* <Login/> */}
       <BrowserRouter>
       <Routes>
        <Route index element ={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/saved" element={<SavedPage/>}/>
       </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
