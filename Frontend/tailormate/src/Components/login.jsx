import React from 'react'

const Login = () => {
  return (
    <div>
        <form className='login'>
            <h2>Welcome back, Makarie</h2>
            <label htmlFor="username">UserName:</label> 
                <input type="text" name="username" required minLength="4" maxLength="24" placeholder="UserName"/>
            <label htmlFor="password">Password:</label> 
                <input type="text" name="password" required minLength="4" maxLength="24" placeholder="8-20 characters"/>
            <button>Log In</button>
        </form>
    </div>
  )
}

export default Login