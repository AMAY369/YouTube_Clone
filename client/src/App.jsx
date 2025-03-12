
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import { useState, useEffect } from 'react';
import VideoPage from './pages/VideoPage/VideoPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import UploadPage from './pages/uploadPage/UploadPage';
import SignupPage from './pages/signupPage/SignupPage';

import axios from 'axios';



function App() {

  const [sidebar, setSidebar] = useState(true);


  useEffect(()=>{
    axios.get('http://localhost:3000/api/allVideos').then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  
  const setSidebarFun=(value)=>{
    setSidebar(value)
  }
  return (
    <div className="App">
      <Navbar setSidebarFun={setSidebarFun} sidebar={sidebar} />
      <Routes>
        <Route path='/' element={<HomePage sidebar={sidebar}/>}/>
        <Route path='/watch/:id' element={<VideoPage/>}/>
        <Route path='/user/:id' element={<ProfilePage sidebar={sidebar}/>}/>
        <Route path='/:id/upload' element={<UploadPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
      </Routes>
    </div>
  );
}

export default App;