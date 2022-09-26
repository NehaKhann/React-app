import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'

import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Home from './pages/Home/Home.js';
import ErrorPage from './pages/Error/404';
import './App.css';

const App = () => {
  return (
    <Router>
     
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/error" element={<ErrorPage/>}/>
         
 
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
     
    
    </Router>
  );
}

export default App;
