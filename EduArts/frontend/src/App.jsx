import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Navbar from './components/Navbar';
 // Updated Navbar with Signup/Signin links
import Footer from './components/Footer';
import './styles.css';
import Profile from "./pages/profile"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navbar with links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer /> {/* optional */}
    </BrowserRouter>
  );
}

export default App;
