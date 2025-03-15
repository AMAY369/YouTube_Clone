import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './HomePage.css'
import Home from '../../components/Home/Home'
const HomePage = ({ sidebar }) => {

  return (
    <div className='home'>
      <Sidebar sidebar={sidebar} /> {/* render sidebar component */}
      <Home sidebar={sidebar} /> {/* render Home page */}

    </div>
  )
}

export default HomePage