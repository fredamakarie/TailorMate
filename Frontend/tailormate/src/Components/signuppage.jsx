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
  return (
    <>
        <form className='register'>
            <h2>Join The Train</h2>
            <label for="Name">UserName:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="UserName"/>
            <label for="Name">Business Name:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="Business Name"/>
            <label for="Name">Email:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="example@email.com"/>
            <label for="Name">Password:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="8-20 characters"/>
            <label for="Name">Confirm Password:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="Repeat password"/>
            <button>Join</button>
        </form>

    </>
  )
}

export default SignupPage