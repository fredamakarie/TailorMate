import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'


const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        business_name: "",
        phone_number: "",
        password1: "",
        password2: "",
    })

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
        
    }
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setLoading(true);
    
        try {
            const res = await api.post('/api/register/', formData)
            alert("Welcome to Tailormate!")
            navigate('/login')
        } catch (error) {
            console.error(error.response?.data)
            alert("Registration Failed")
        } finally {
            setLoading(false)
        }
    }
  return (
    <>
        <form className='register' onSubmit={handleSubmit}>
            <h2>Join The Train</h2>
            <label>Username:</label> 
                <input type="text" name="username" required minLength={4} maxLength={24} placeholder="UserName" value={formData.username} onChange={handleChange}/>
            <label>Business Name:</label> 
                <input type="text" name="business_name" required minLength={4} maxLength={24} placeholder="Business Name" value={formData.business_name} onChange={handleChange}/>
            <label>Email:</label> 
                <input type="text" name="email" required minLength={4} maxLength={24} placeholder="example@email.com" value={formData.email} onChange={handleChange}/>
            <label>Password:</label> 
                <input type="password" name="password1" required minLength={8} maxLength={20} placeholder="8-20 characters" value={formData.password1} onChange={handleChange}/>
            <label>Confirm Password:</label> 
                <input type="password" name="password2" required minLength={8} maxLength={20} placeholder="Repeat password" value={formData.password2} onChange={handleChange}/>
            {loading}
            <button type='submit'>Join</button>
        </form>

    </>
  )
}

export default SignupPage