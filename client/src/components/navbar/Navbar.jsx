/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import axios from 'axios';

const Navbar = ({ setSidebarFun, sidebar, setSearchResults }) => {


  const [userProfile, setUserProfile] = useState("https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg")
  const [navbarModal, setNavbarModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate()

  // change model function 
  const handleClickModal = () => {
    setNavbarModal(prev => !prev);
  }
  const sidebarFun = () => {
    setSidebarFun(!sidebar)
  }


  // function for managing user profile 
  const handleUserProfile = () => {
    let userId = localStorage.getItem("userId")
    navigate(`/user/${userId}`);
    window.location.reload();
    setNavbarModal(false);
  }

// function for handling user login 
  const handleLogin = (button) => {
    setNavbarModal(false);

    if (button === "login") {
      setLogin(true);
    } else {
      localStorage.clear();
      getLogoutFun();
      setTimeout(() => {
        navigate('/')
        window.location.reload();
      }, 2000);
    }
  }

  // function for logging out user 
  const getLogoutFun = async () => {
    axios.post("http://localhost:3000/auth/logout", {}, { withCredentials: true }).then((res) => {
      console.log("Logout ")
    }).catch(err => {
      console.log(err)
    })
  }

  const setLoginModal = () => {
    setLogin(false);
  }

  // delete 
  useEffect(() => {
    let userProfilePic = localStorage.getItem("userProfilePic");
    setIsLogedIn(localStorage.getItem("userId") !== null ? true : false);
    if (userProfilePic !== null) {
      setUserProfile(userProfilePic)
    }
  }, [])

  // delete 
  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      try {
        const response = await axios.get(`http://localhost:3000/api/search?q=${searchTerm}`);
        setSearchResults(response.data.videos || []);
        navigate("/search"); // Navigate to the new SearchResultsPage
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

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
          <input type="text" className='navbar_searchInput' placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
          <div className="navbar_searchIcon" onClick={handleSearch}>
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
          </div>
        </div>

        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      {/* Right section  */}
      <div className="navbar-right">
        <Link to={'/5432/upload'}>
          <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        </Link>
        <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} />
        <img onClick={handleClickModal} src={userProfile} className='navbar-right-logo' alt='Logo' />

        {navbarModal &&
          <div className='navbar-modal'>
            {
              isLogedIn && <div onClick={handleUserProfile} className="navbar-modal-option">
                Profile
              </div>
            }

            {!isLogedIn && <div className="navbar-modal-option" onClick={() => handleLogin("login")}>
              LogIn
            </div>}

            {isLogedIn && <div className="navbar-modal-option" onClick={() => handleLogin("logout")}>
              Log Out
            </div>}

          </div>
        }
      </div>

      {
        login && <Login setLoginModal={setLoginModal} />
      }
    </div>
  )
}

export default Navbar