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

        <div className='map'></div>

        <div className='location'>
            <div className='icon-location'>
                <img src={Location} alt=''/>
            </div>
            <div className='location-text'>
                <h2>UNIT 0123 , ABC BUILDING, BUSINESS PARK</h2>
                <p>One can easily purchase all kinds of yogurts here.We are here to serve you. Bringing sweet yogurts to your fingertips.</p>
            </div>
        </div>        

        <div className='inquiry'>
            <div className='inquiry-form'>
                <p className='first'>INQUIRY FORM</p><br/>
                <form>
                    <input type='text' className='details' placeholder='Name'/><br/>
                    <input type='text' className='details' placeholder='Email'/><br/>
                    <input type='text' className='details' placeholder='Subject'/><br/>
                    <textarea type='text' className='thoughts' placeholder='Share your thoughts'></textarea>
                    <br/>
                    <button>SEND</button>
                </form>
            </div>

            <div className='comment'>
                <p className='first'>WE’D LOVE TO HEAR FROM YOU.</p><br/>
                <p>If you're having problems with our products, then don't hesitate to ask for help. Or give us feedback.</p>
            </div>

        </div>

    </div>
  )
}

export default Contact