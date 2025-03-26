import React, { useState } from 'react'
import './Login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Login = ({ setLoginModal }) => {

  const [loginField, setLoginField] = useState({ "userName": "", "password": "" });
  console.log(loginField);

  const [loader, setLoader] = useState(false)

  // set login fields 
  const handleOnChangeInput = (event, name) => {
    setLoginField({
      ...loginField, [name]: event.target.value
    })
  }

  // Handle login form submission
  const handleLoginFun = async () => {
    setLoader(true)
    axios.post("http://localhost:3000/auth/login", loginField, { withCredentials: true }).then((resp) => {
      setLoader(false)
      console.log(resp)
      localStorage.setItem("token", resp.data?.token)
      localStorage.setItem("userId", resp.data?.getUser?._id)
      localStorage.setItem("userProfilePic", resp.data?.getUser?.profilePic)
      window.location.reload();
    }).catch((err) => {
      toast.error("Invalid Credentials")
      console.log(err)
      setLoader(false)
    })
  }


  return (
    <div className='login'>
      <div className="login_card">
        <div className="titleCard_login">
          <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
          Login
        </div>
        <div className="loginCredentials">
          <div className="userNameLogin">
            <input type="text" value={loginField?.userName} placeholder='Username' className="userNameLoginUserName" onChange={(e) => handleOnChangeInput(e, "userName")} />
          </div>
          <div className="userNameLogin">
            <input type="password" value={loginField?.password} placeholder='Password' className="userNameLoginUserName" onChange={(e) => handleOnChangeInput(e, "password")} />
          </div>
        </div>

        <div className="login_buttons">
          <div className="login-btn" onClick={handleLoginFun}>Login</div>
          <Link to={'/signup'} className="login-btn" onClick={() => setLoginModal()}>SignUp</Link>
          <div className="login-btn" onClick={() => setLoginModal()}>Cancel</div>
        </div>

        {loader && <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>}
      </div>

      {/* success and unsuccess message while logging in  */}
      <ToastContainer />
    </div>
  )
}

export default Login