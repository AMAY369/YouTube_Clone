import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './HomePage.css'
import Home from '../../components/Home/Home'
const HomePage = ({ sidebar }) => {
  return (
    <div className='home'>
      <Sidebar sidebar={sidebar} />
      <Home sidebar={sidebar} />

    </div>
  )
}

export default HomePage