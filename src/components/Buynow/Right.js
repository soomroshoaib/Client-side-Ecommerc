import React from 'react'

const Right = () => {
  return (
    <div className='right_buy'>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
      <div className='cost_right'>
        <p>Your order is Eligible for Free delivery ....</p><br />
        <span style={{color:"#565959"}}>Select this option at checkout  . Details </span>
        <h3>Subtotal (1 item ):<span style={{fontWeight:700}}> $4000</span>  </h3>
        <button className='rightbuy_btn'>Procses to buy</button>
        <div className='emi'>
          Emi available
        </div>
      </div>
    </div>
  )
}

export default Right