import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';

import './App.css';
import CreateStory from './pages/CreateStory';
import Login from './pages/Login';
 
function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/createstory"> CreateStory </Link>
        <Link to="/login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createstory" element={<CreateStory />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}
 
export default App;
