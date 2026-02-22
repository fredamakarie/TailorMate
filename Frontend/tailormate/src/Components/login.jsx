import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setLoading(true);
   
        try {
            const res = await api.post('/api/token/', {username,password})
            localStorage.setItem(ACCESS_TOKEN, res.data.access)
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
            navigate('/dashboard')
        } catch (error) {
            alert("invalid username/password")
            console.error(error)
        } finally {
            setLoading(false)
        }
        
    };

  return (
    <div>
        <form className='login' onSubmit={handleSubmit}>
            <h2>Welcome back, Makarie</h2>
            <label htmlFor="username">UserName:</label> 
                <input type="text" name="username" required minLength="4" maxLength="24" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password">Password:</label> 
                <input type="password" name="password" required minLength="8" maxLength="20" placeholder="8-20 characters" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {loading}
            <button type="submit">Log In</button>
        </form>
    </div>
  )
}

export default Login