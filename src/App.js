import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Home from './Pages/Home/Home.js';
import About from './Pages/About/About.js';
import Product from './Pages/Product/Product';
import Contact from './Pages/Contact/Contact.js';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Footer from './Components/Footer/Footer';

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );

}

export default App;
