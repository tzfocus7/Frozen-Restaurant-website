import React from 'react'
import './About.css'
import Aboutimage from '../Images/bg-header-about.jpg'

function About() {
  return (
    <div className='About'>
      <div className='header'>
        <div>
          <h1>About us</h1>
        </div>
                 
      </div>

      <div className='Image'>
        <img src={Aboutimage} alt=''/>
      </div>

      <div className='Text'>
        <div className='center'>

          <div className='one'>
            <p>Frozen Yogurt is a proudly U.K brand that comes from humble beginnings. We opened our first Frozen Yogurt restaurant in Sunderland in 2004 and are presently trading in over 129 locations across London and Scotland, with plans to operate 430 restaurants by the end of 2024.From the start our vision has been: to be the most loved quick service restaurant brand in Europe.</p> 
            <p>Our “Taste More” philosophy encourages a bold spirit of adventure as we set out to challenge the status quo by providing our customers with tasty, everyday affordable value meals in clean, cool ambient restaurants that offer good customer service.We invite our customers to experience more as they interact with our brand and enjoy our Soulfully tasty sides, all flavoured to perfection with our unique blend of authentic Europe flavours.</p>  
          </div>

          <div className='two'>
            <p>Frozen Yogurt is a committed supporter of U.K production. Most of our products are sourced directly from local, Sunderland suppliers. Our philosophy is “People Capability Always”. We pride ourselves on being an equal opportunity employer, with a strong focus on creating opportunities for women and young adults. As a U.K brand, facing challenges and overcoming obstacles is in our DNA. Our motto is, “happy, but never content”.</p>
            <p>This quest for excellence, together with, our committed staff, local partnerships and loyal customers has led us to be the fastest growing, quick service restaurant chain in the country today.Frozen Yogurt is proudly owned by Food Concepts Plc. As such, we adhere to excellent corporate governance and sustainability practices. The Frozen Yogurt brand complies with SEC regulations, committed to by the Food Concepts Group.</p>
          </div>

        </div>
      </div>
        
    </div>
  )
}

export default About