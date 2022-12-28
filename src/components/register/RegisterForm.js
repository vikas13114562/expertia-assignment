import React, {useState} from 'react'
import './register.css'

export default function RegisterForm() {

    const [formData, setFormData] = useState(
        {
            userName: "",  
            email: "", 
            password:"",
            confirmPassword:"",
        }
    )
  return (
    <div className='sign-up-container'>
        <p className='welcome-text'>Welcome !</p>
        <p className='sign-up-text'>Sign up to</p>
        <p>My website</p>

        <form className='form-container'>
            <label htmlFor='email'>Email</label>
            <input
                type="email"
                placeholder="Enter your Email"
                onChange={()=>{}}
                name="email"
                value={formData.email}
            />
             <label htmlFor='userName'>User Name</label>
            <input
                type="text"
                placeholder="Enter your user name"
                onChange={()=>{}}
                name="userName"
                value={formData.userName}
            />
            <label htmlFor='userName'>Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                onChange={()=>{}}
                name="password"
                value={formData.password}
            />
            <label htmlFor='Password'>Confirm Password</label>
            <input
                type="password"
                placeholder="Confirm your password"
                onChange={()=>{}}
                name="confirmPassword"
                value={formData.confirmPassword}
            />
            <button type='submit' className='register-btn'>Register</button>
        </form>
        <p className='bottom-text'>Already have an Account ?<span className='login-text'>Login</span></p>
    </div>
  )
}
