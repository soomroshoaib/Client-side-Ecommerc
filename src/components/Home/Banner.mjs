import React from 'react'
// import "./banner.css"
import Carousel from 'react-material-ui-carousel'

const data = [
  "https://image.shutterstock.com/image-photo/ecommerce-add-cart-online-shopping-260nw-1139994800.jpg",
  "https://blog.skillacademy.com/hubfs/e-commerce-adalah.jpg",
  "https://www.ealde.es/wp-content/uploads/2019/10/tendencias-ecommerce-2019.jpg",
  "https://img.freepik.com/premium-photo/omni-channel-technology-online-retail-business_31965-3010.jpg?w=2000"
  
]

export const Banner = () => {

  return (
  <Carousel className='carasousel' autoPlay={true}>

        {data.map((ecommerce,i)=>{
           return (  
             <>
              <img src={ecommerce}  alt="" className='banner_img' />

             </>
            )
          })
        }

      </Carousel>

  
  )
  
}
