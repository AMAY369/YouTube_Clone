import React from 'react'
import './login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Login = ({ setLoginModal }) => {


    return (
        <div className='login'>
            <div className="login_card">
                <div className="titleCard_login">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    Login
                </div>

                {/* Please watch the video for the code} */}
                <div className="loginCredentials">
                  <div className="userNameLogin">
                    <input type="text" placeholder='Username' className="userNameLoginUserName" />
                  </div>
                  <div className="userNameLogin">
                    <input type="password" placeholder='Password' className="userNameLoginUserName" />
                  </div>
                </div>

                <div className="login_buttons">
                    <div className="login-btn">Login</div>
                    <Link to={'/signup'} className="login-btn">SignUp</Link>
                    <div className="login-btn" onClick={()=>setLoginModal()}>Cancel</div>
                </div>

                {/* Please watch the video for the code} */}


            </div>
        </div>
    )
}

export default Login