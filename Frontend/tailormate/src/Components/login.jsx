import React from 'react'

const Login = () => {
  return (
    <div>
        <form className='login'>
            <h2>Welcome back, {business_name}</h2>
            <label for="Name">UserName:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="UserName"/>
            <label for="Name">Password:</label> 
                <input type="text" id="Name" name="Name" required minlength="4" maxlength="24" placeholder="8-20 characters"/>
            <button>Log In</button>
        </form>
    </div>
  )
}

export default Login