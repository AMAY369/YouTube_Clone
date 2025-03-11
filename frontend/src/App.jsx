
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import { useState } from 'react';
function App() {

  const [sidebar, setSidebar] = useState(true);
  
  const setSidebarFun=(value)=>{
    setSidebar(value)
  }
  return (
    <div className="App">
      <Navbar setSidebarFun={setSidebarFun} sidebar={sidebar} />
      <HomePage sidebar={sidebar}/>
    </div>
  );
}

export default App;