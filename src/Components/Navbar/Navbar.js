import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='image'>
            <img src='https://freewebsitetemplates.com/preview/frozenyogurtshop/images/logo.png' alt='Freeeze' width="150" height="50"/>
        </div>

       <div className='navbar1'>
         <ul className='nav-links'>
            <li><Link className='link' to='/'>Home</Link></li>
            <li><Link className='link' to='/About'>About</Link></li>
            <li><Link className='link' to='/Product'>Product</Link></li>
            <li><Link className='link' to='/Contact'>Contact</Link></li>
          </ul> 
       </div>
        
        
    </div>
  )
}

export default Navbar
