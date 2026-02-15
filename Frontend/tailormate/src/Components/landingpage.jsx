import React from 'react'
import Logo from "../assets/Logo.png"
import { NavLink, Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
        <div className="herobg">
            <div>
              <NavLink to="/"><img src={Logo} width="100%" alt="tailormate logo" className='logo'/></NavLink>
            </div>
            <div className='login_section'>
              <NavLink to= "/signup"><button>Get Started</button></NavLink>
              <NavLink to= "/login">Already have an account, please log in</NavLink>
            </div>
        </div>
        <Outlet/>
        <Outlet/>
    </>
  )
}

export default LandingPage