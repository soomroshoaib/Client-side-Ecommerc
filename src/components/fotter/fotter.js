import React from 'react'
import Logo from './image.png'
import "./fotter.css"

const fotter = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <div className='footer_container'>
            <div className='footr_details_one'>
                <h3> Get to know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cars</p>
            </div>
            <div className='footr_details_one '>
                <h3> Connect with us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram </p>
                
            </div>
            <div className='footr_details_one '>
                <h3> Make Money with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Amazon Cars</p>
            </div>
            <div className='footr_details_one '>
                <h3> Make Money with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                <p>Amazon Cars</p>
            </div>
        </div>
        <div className='lastdetails'>
            <img src={Logo}  alt />
            <p>condition of use sale  &nbsp;&nbsp; &nbsp; Privacy Notice  &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;   Interested_Base Ads 1996-{year},
            &nbsp;&nbsp; Amazon.com Inc its affiliates   
            &nbsp;&nbsp;|| develop by Shoaib Soomro  email: Shoaibkhanu39@gmail.com </p>
             
        </div>
    </footer>
  )
}

export default fotter