
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import { useState } from 'react';
import Video from './pages/Video/Video';
function App() {

  const [sidebar, setSidebar] = useState(true);
  
  const setSidebarFun=(value)=>{
    setSidebar(value)
  }
  return (
    <div className="App">
      <Navbar setSidebarFun={setSidebarFun} sidebar={sidebar} />
      <Routes>
        <Route path='/' element={<HomePage sidebar={sidebar}/>}/>
        <Route path='/watch/:id' element={<Video/>}/>
      </Routes>
    </div>
  );
}

export default App;