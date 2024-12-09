import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder='Your name' />
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Enter the password' />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Alredy have an account <span>Login Here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing,i agree the terms of use & privacy policy.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
