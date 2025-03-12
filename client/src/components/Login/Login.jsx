import React, { useState } from 'react'
import './login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Login = ({ setLoginModal }) => {

  const [loginField, setLoginField] = useState({ "userName": "", "password": "" });

  const handleOnChangeInput = (event, name) => {
    setLoginField({
        ...loginField, [name]: event.target.value
    })
  }

  console.log(loginField);
  

    return (
        <div className='login'>
            <div className="login_card">
                <div className="titleCard_login">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    Login
                </div>
                <div className="loginCredentials">
                  <div className="userNameLogin">
                    <input type="text" value={loginField.userName} placeholder='Username' className="userNameLoginUserName" onChange={(e)=>handleOnChangeInput(e,"userName")}/>
                  </div>
                  <div className="userNameLogin">
                    <input type="password" value={loginField.password} placeholder='Password' className="userNameLoginUserName" onChange={(e)=>handleOnChangeInput(e,"password")}/>
                  </div>
                </div>

                <div className="login_buttons">
                    <div className="login-btn">Login</div>
                    <Link to={'/signup'} className="login-btn" onClick={()=>setLoginModal()}>SignUp</Link>
                    <div className="login-btn" onClick={()=>setLoginModal()}>Cancel</div>
                </div>
            </div>
        </div>
    )
}

export default Login