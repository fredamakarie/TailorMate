import React from 'react'
import Logo from "../assets/Logo.png"
import { NavLink, Outlet, Routes, Route } from 'react-router-dom'
import SignupPage from './signuppage'
import Login from './login'

const LandingPage = () => {
  return (
    <>
        <div className="herobg">
            <div>
              <NavLink to="/"><img src={Logo} width="100%" alt="tailormate logo" className='logo'/></NavLink>
            </div>
            <div className='login_section'>
              <NavLink to= "/signup"><button>Get Started</button></NavLink>
              <Outlet/>
              <NavLink to= "/login">Already have an account, please log in</NavLink>
              <Outlet/>
        
            </div>
        </div>
       
    </>
  )
}

export default LandingPage