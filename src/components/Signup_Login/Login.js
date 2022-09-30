import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './amazon_PNG13.png'
import './Signup.css'

 const Login = () => {
  const [logdata, setData] = useState({
    email:"",
    password:""
  })
  const AddData = (e)=>{
    const {name, value} = e.target;
    setData(()=>{
      return{
        ...logdata,
        [name]: value
      }

    })
 
  }
  return (
    <>
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src={Logo} alt />
            </div>
            <div className='sign_form'>
              <form>
                <h1>Login</h1>
                <div className='form_data'>
                  <label htmlFor='email'>Email</label>
                  <input type="text"
                  onChange={AddData}
                  value={logdata.email}
                  placeholder='Please Enter Your Email' name='email' id='email'  />
                </div>
                <div className='form_data'>
                  <label htmlFor='password'>Password</label>
                  <input type="password" 
                  onChange={AddData}
                  value={logdata.password}
                  placeholder='Please Enter Your Password' name='password' id='password'  />
                </div>
                <button className='signin_btn'> Continue</button>
              </form>
            </div>
            <div className='create_accountinfo'>
              <p>New To Amazon</p>
              <NavLink to="/SignUp">
              <button>
                Create Your Amazon Account
              </button>
              </NavLink>
            </div>
        </div>
    </section>

    </>
  )
}

export default Login