import React from 'react'
import "./newnav.css"
// import image from './amazon-prime.webp'
const newNav = () => {
  return (
    <div className='new_nav'>
        <div className='nav_data'>
            <div className='left_data'>
                <p> All</p>
                <p> Mobile </p>
                <p> Best_Seller</p>
                <p> Fashion</p>
                <p> Coustomer Services</p>
                <p> Electronics </p>
                <p>Prime </p>
                <p> Today 's deal</p>
                <p>Amazon Pay</p>

            </div>
            <div className='right_data'>
                {/* <img src={image} alt="navata" /> */}
            </div>

        </div>
    </div>
  )
}

export default newNav