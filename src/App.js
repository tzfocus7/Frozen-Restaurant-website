
import './App.css';
import Navbar from './Components/Navbar/Navbar.Js';
import Home from './Pages/Home/Home.Js';
import About from './Pages/About/About.Js';
import Product from './Pages/Product/Product';
import Contact from './Pages/Contact/Contact.Js';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

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

      </BrowserRouter>
    </div>
  );
}

export default App;
