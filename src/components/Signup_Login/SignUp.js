import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './amazon_PNG13.png'
import "./Signup.css"

 const SignUp = () => {

  const [udata, setuData] = useState({
    fname:"",
    email:"",
    mobile:"",
    Password:"",
    cPassword:""

  })
  console.log(udata)

  const UserData =(e)=>{
    const {name, value} = e.target;
    setuData((e)=>{
      return{
        ...udata,
        [name]:value

      }
    })

  }
  return (
    <section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src={Logo} alt />
        </div>
        <div className='sign_form'>
          <form>
            <h1>SignUp</h1>
            <div className='form_data'>
              <label htmlFor='fname'>Your Name</label>
              <input type="text" 
              onChange={(e)=>setuData({...udata, fname:e.target.value})}
              value={udata.fname}
              name='fname' placeholder='Please Enter Your Name ' id='fname'  />
            </div>
            <div className='form_data'>
              <label htmlFor='email'>Email</label>
              <input type="text"
              onChange={(e)=>setuData({...udata, email:e.target.value})}
              value={udata.email}
              placeholder='Please Enter Your Email' name='email' id='email'  />
            </div>
            <div className='form_data'>
              <label htmlFor='number'>Mobile</label>
              <input type="text" 
              onChange={(e)=>setuData({...udata, mobile:e.target.value})}
              value={udata.mobile}
              placeholder='Please Enter Your Mobile ' name='mobile' id='mobile'  />
            </div>
            <div className='form_data'>
              <label htmlFor='Password'>Password</label>
              <input type="password"
              onChange={(e)=>setuData({...udata, Password:e.target.value})}
              value={udata.Password}
              placeholder='Please Enter Your Password' name='Password' id='Password'  />
            </div>
            <div className='form_data'>
              <label htmlFor='cPassword'>Password Again</label>
              <input type="password"
              onChange={(e)=>setuData({...udata, fname:e.target.value})}
              value={udata.cPassword}
              placeholder='Please Enter Your Password' name='cPassword' id='cPassword'  />
            </div>
            <button className='signin_btn'> Continue</button>
            <div className='signin_info'>
              <p>Already have an Account </p>
              <NavLink to="/login"> Login</NavLink>
            </div>
          </form>
        </div>
       
    </div>
</section>
  )
}


export default SignUp