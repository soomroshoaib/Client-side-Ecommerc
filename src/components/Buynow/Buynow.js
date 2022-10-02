import { Divider } from '@mui/material'
import React from 'react'
import Option from './option'
import './Buynow.css'
import { Subtotal } from './Subtotal'
import Right from './Right'

export const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className='buynow_container'>
            <div className='left_buy'>
                <h1>Shopping Cart</h1>
                <p>Select all item</p>
                <span className='leftbuyprice'> Price</span>
                <Divider />

                <div className='item_containert'>
                    <img src='https://www.gadgetgets.com/wp-content/uploads/2022/03/tozo-s2-smart-watch-alexa-built-in-fitness-tracker-with-heart-rate-and-blood.jpg' alt='' />
                    <div className='item_details'>
                        <h3>Molife Sense 500 Smartwatch (Black Strape , FreeSize)</h3>
                        <h3>Smart Watch</h3>
                        <h3 className='diffrentprice'> $4000</h3>
                        <p className='unusuall'>Usually dispatched in 8 days ... </p>
                        <p>Eligible For Free Shopping</p>
                        
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt='Loger' />
                        <Option />
                    </div>
                    <h3 className='item_price'>$4000</h3>
                </div>
                <Divider />
                <Subtotal />  
            </div>
            <Right /> 
        </div>
    </div>
  )
}