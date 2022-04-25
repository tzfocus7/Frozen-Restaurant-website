import React from 'react'
import './Contact.css'
import Location from '../Images/Location.png'

function Contact() {
  return (
    <div className='contact'>
        <div className='header'>
            <div>
                <h1>CONTACT</h1>
            </div>
                 
         </div>

        <div className='map'>
            <div className='location'>
                <div className='icon-location'>
                    <img src={Location} alt='' width='40' height='60'/>
                </div>

                <div className='text'>
                    <div className='text-header'>
                        <h2>UNIT 0123 , ABC BUILDING, BUSINESS PARK</h2>
                    </div>
                    <div className='text-paragraph'>
                        <p>This website has been designed for you, as user-friendly as it is, one can easily purchase all kinds of yogurts here.
                           We are here to serve you. Bringing sweet yogurts to your fingertips.</p>
                    </div>
                </div>

            </div>
        </div>

        <div className='inquiry'>
            <div className='inquiry-form'>
                <p className='first'>INQUIRY FORM</p><br/>
                <input type='text' className='details' placeholder='Name'/><br/>
                <input type='text' className='details' placeholder='Email'/><br/>
                <input type='text' className='details' placeholder='Subject'/><br/>
                <input type='text' className='thoughts' placeholder='Share your thoughts'/><br/>
                <button>SEND</button>
            </div>

            <div className='comment'>
                <p className='first'>WE’D LOVE TO HEAR FROM YOU.</p><br/>
                <p>If you're having problems with this website products, then don't hesitate to ask for help on the <a href='forum.com'>Forums</a></p>
            </div>

        </div>

    </div>
  )
}

export default Contact