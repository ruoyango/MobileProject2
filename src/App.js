import logo from './logo.svg';
import './App.css';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login'
import Dashboard from './Components/WebPages/Dashboard'
import SavedPage from './Components/WebPages/SavedPage'
import SerachPage from './Components/WebPages/SearchPage'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Route path="/" exact component={Dashboard}/> */}
      {/* <Signup/>
       */}
       <Login/>

    </div>
  );
}

export default App;
