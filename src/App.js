import React from 'react';
import "./style.css";
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
// import Projects from './components/pages/Projects/Projects';
import Resume from './components/pages/Resume/Resume';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound/NotFound';

export default function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/projects' element={<Projects />}></Route> */}
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}