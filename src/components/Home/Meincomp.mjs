import React from 'react'
import  './home.css'
import  Banner  from './Banner.js'
import Silder from './Silder.js'

function Meincomp() {
  return (
    <div className='home_section'>
      <div className='banner_part'>
        <Banner />
      </div>
      <div className='slide_part'>
        <div className='left_slide'>
        <Silder />
        </div>
        <div className='right_slide'>
          <h4>Fastive latest Launches</h4>
          <img src='https://rs-site-cdn.rocketspark.com/images/nxxxm-ciq70/blog/a803eb70f98cd662f58146a75cd58316__4994/zoom668x586z100000cw668.png?etag=976f61d6604fb0b54050fbc65943560d' />
          <a href='#'>See More</a>
        </div>
      </div>
      <Silder title="Today 's Deal " />
      <div className='center_img'>
        <img src='https://i0.wp.com/hpmaglobal.org/wp-content/uploads/2020/10/How-is-Ecommerce-Project-Management-A-Key-For-Revenue-Growth-in-Ecommerce-Businesses_01.jpg?fit=1200%2C431&ssl=1' style={{height:'400px'}} />
      </div>
      <Silder title="Best Seller" />
      <Silder title="Upto 80% of" />
      

    </div>
  )
}

export default Meincomp