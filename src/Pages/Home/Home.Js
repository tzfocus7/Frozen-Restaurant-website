import React from 'react'
import './Home.css'
import HomeImage from '../Images/StrawYog.jpg'


function Home() {
  return (
    <div className='home'>
      <div className='home-image'>
        <img src={HomeImage} alt=''/>
      </div>
      <div className='home-text'>
        <div>
          <h1>This is the best Yogurt Heaven</h1>
          <p><blockquote>We offer a variety of mind blowing choices...Take a stroll and be amazed</blockquote>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
