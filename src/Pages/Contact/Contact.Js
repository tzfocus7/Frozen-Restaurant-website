import React from 'react'
import Location from '../Images/Location.png'

function Contact() {
  return (
    <div className='contact'>
        <div className='header'>
            <p>CONTACT</p>
        </div>

        <div className='map'>
            <div className='location'>
                <div className='icon-location'>
                    <img src={Location} alt='' width='40' height='60'/>
                </div>

                <div className='text'>
                    <div className='text-header'>
                        <h2>UNIT 0123 , ABC BUILDING, BUSSINESS PARK</h2>
                    </div>
                    <div className='text-paragraph'>
                        <p>This website template has been designed by Free Website Templates for you, for free.
                           You can replace all this text with your own text.</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Contact