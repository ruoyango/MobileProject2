import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import { Routes, Route } from "react-router-dom";
import Login from './Components/LoginSignup/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/SignUp" element={<LoginSignup />} />
      </Routes>
    </div>
  );
}

export default App;
