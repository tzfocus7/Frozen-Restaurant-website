import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='image'>
            <img src='https://freewebsitetemplates.com/preview/frozenyogurtshop/images/logo.png' alt='Freeeze' width="40" height="30"></img>
        </div>

        <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Product'>Product</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
        </ul> 
        
    </div>
  )
}

export default Navbar