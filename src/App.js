import React from 'react';
import videoBg from "./assets/Sounds-from-inside.mp4"
import "./index.css"
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Route, Routes } from 'react-router-dom';







function App() {

  return (
    <div className="App">
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <NavBar />
          <div className='containter'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
