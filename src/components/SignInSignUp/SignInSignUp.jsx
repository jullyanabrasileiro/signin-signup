import React from 'react'
import './SignInSignUp.css'

import Email from '@mui/icons-material/Email';
import Person from '@mui/icons-material/Person';
import Lock from '@mui/icons-material/Lock';


export const SignInSignUp = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="header-title">Sign Up</div>
            <div className="header-title-underline"></div>
        </div>

        <div className="inputs">
            <div className="input">
                <div className="user-icon icon"><Person /></div>
                <input type="text" placeholder='Name'/>
            </div>

            <div className="input">
                <div className="email-icon icon"><Email /></div>
                <input type="email" placeholder='Email'/>
            </div>

            <div className="input">
                <div className="password-icon icon"><Lock /></div>
                <input type="password" placeholder='Password'/>
            </div>

            <div className="forgot-password">
                <p>Lost Password?/ <span>Click here</span></p>
            </div>

            <div className="submit-container">
                <div className="submit">
                    <p>Sign Up</p>
                </div>
                <div className="submit">
                    <p>Login</p>
                </div>
            </div>
        </div>

    </div>
  )
}
