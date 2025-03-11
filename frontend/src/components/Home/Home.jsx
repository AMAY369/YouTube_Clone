import React from 'react'
import './Home.css'
const Home = ({sidebar}) => {

  return (
    <div className={sidebar ? 'homePage' : 'fullHomePage'}>


    </div>
  )
}

export default Home