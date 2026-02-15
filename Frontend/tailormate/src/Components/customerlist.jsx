import React from 'react'
import Logo from '../assets/Logo.png'

const CustomerList = () => {
  return (
    <>
        <a href="https://vite.dev" target="_blank">
          <img src={Logo} className="logo" alt="TailorMate logo" />
        </a>
        <h3>Hello {business_name},</h3>
        <img/>
        <h2>Customer List</h2>
        <p>{}</p>
    </>
  )
}

export default CustomerList