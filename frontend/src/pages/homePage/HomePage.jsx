import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './HomePage.css'
import Home from '../../components/Home/Home'
const HomePage = ({sideNavbar}) => {
  return (
    <div className='home'>
        <Sidebar sideNavbar={sideNavbar}/>
        <Home/>

    </div>
  )
}

export default HomePage