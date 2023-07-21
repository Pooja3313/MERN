import React from 'react'
import './style.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
   <BrowserRouter>
      <Navbar />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/Home" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/About" element={<About />} />
              {/* <Route path="/Contact" element={<Contact />} /> */}
            </Routes>
          </div>
        </div>
        </BrowserRouter>
  )
}

export default App;
