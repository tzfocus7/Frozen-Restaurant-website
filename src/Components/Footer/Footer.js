import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
             <div><i class="fab fa-facebook fa-2x" aria-hidden="true"></i></div>
             <div><i class="fab fa-instagram fa-2x" aria-hidden="true"></i></div>
             <div><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></div>
        </div>

        <div className='text'>
            <p>&copy; 2023 Freeeze. All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer