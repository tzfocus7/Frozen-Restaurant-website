import React from 'react'
import './Home.css'
import Vanilla from '../Images/VanillaYog.jpg'

import React from 'react'

function Home() {
  return (
    <div id="home" className='container py-5'>
    <div className='d-flex flex-column flex-md-row col-md-10 m-auto justify-content-between'>
        {
            data && data.map( data => {
                return(
                    <div key={data.id}>
                        <div className='cardex col-10 m-auto col-md-12 rounded py-3 my-3 px-2 d-flex'>
                            <img className='me-3 rounded-bottom' src={data.icon} alt="" />
                            <div className='flex-column'>
                                <h3>{data.caption}</h3>
                                <p>{data.text}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>
    
  )
}

export default Home
