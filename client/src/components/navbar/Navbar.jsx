import React, { useState } from 'react'
import './navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({setSidebarFun,sidebar}) => {


  const [userProfile, setUserProfile] = useState("https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg")
  const [navbarModal,setNavbarModal] = useState(false);

  const navigate = useNavigate()

  const handleClickModal =()=>{
    setNavbarModal(prev=>!prev);
  }
  const sidebarFun=()=>{
    setSidebarFun(!sidebar)
  }

  const handleUserProfile = ()=>{
    navigate('/user/123');
    setNavbarModal(false);
  }


  return (

    // Left section
    <div className='navbar'>

      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sidebarFun}>
          <MenuIcon sx={{ color: "white" }} />
        </div>

        <Link to={'/'} className="navbar_youtubeImg">
          <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage' />
          <div className='navbar_utubeTitle'>YouTube</div>
        </Link>

      </div>

      {/* Middle section  */}
      <div className="navbar-middle">
        <div className="navbar_search">
          <input type="text" className='navbar_searchInput' placeholder='Search'/>
          <div className="navbar_searchIcon">
            <SearchIcon sx={{fontSize: "28px", color:"white"}}/>
          </div>
        </div>
        
        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      {/* Right section  */}
      <div className="navbar-right">
        <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <img onClick={handleClickModal} src={userProfile} className='navbar-right-logo' alt='Logo' />

        { navbarModal &&
          <div className='navbar-modal'>
            <div onClick={handleUserProfile} className="navbar-modal-option">
              Profile
            </div>
            <div className="navbar-modal-option">
              LogIn
            </div>
            <div className="navbar-modal-option">
              Log Out
            </div>

          </div>
        }
      </div>
    </div>
  )
}

export default Navbar