import React, { useState } from 'react'

const SignupPage = () => {
    const [formdata, setFormData] = useState({
        username: "",
        email: "",
        business_name: "",
        phone_number: "",
        password1: "",
        password2: "",
    })

    const handleChange = (e) => {
        setFormData()
    }
  return (
    <>
        <form className='register'>
            <h2>Join The Train</h2>
            <label>Username:</label> 
                <input type="text" name="username" required minlength="4" maxlength="24" placeholder="UserName"/>
            <label>Business Name:</label> 
                <input type="text" name="business_name" required minlength="4" maxlength="24" placeholder="Business Name"/>
            <label>Email:</label> 
                <input type="text" name="email" required minlength="4" maxlength="24" placeholder="example@email.com"/>
            <label>Password:</label> 
                <input type="text" name="password1" required minlength="4" maxlength="24" placeholder="8-20 characters"/>
            <label>Confirm Password:</label> 
                <input type="text" name="password2" required minlength="8" maxlength="24" placeholder="Repeat password"/>
            <button>Join</button>
        </form>

    </>
  )
}

export default SignupPage