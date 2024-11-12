import React, { useState } from 'react'
import './SignInSignUp.css'

import Email from '@mui/icons-material/Email';
import Person from '@mui/icons-material/Person';
import Lock from '@mui/icons-material/Lock';


export const SignInSignUp = () => {


    const [action, setAction] = useState("Sign Up");

  return (
    <body>
        <div className='container'>
        <div className="form-image"></div>

        <div className="form">
            <div className="header">
                <div className="header-title">{action}</div>
                <div className="header-title-underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:
                            <div className="input">
                            <div className="user-icon icon"><Person /></div>
                            <input type="text" placeholder='Name'/>
                        </div>
                }
                <div className="input">
                    <div className="email-icon icon"><Email /></div>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <div className="password-icon icon"><Lock /></div>
                    <input type="password" placeholder='Password'/>
                </div>
                {
                    action === "Sign Up" ? <div></div>:
                    <div className="forgot-password">
                    <p>Lost Password?/ <span>Click here</span></p></div>
                }
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>
                        <p>Sign Up</p>
                    </div>
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    </body>
    
  )
}
