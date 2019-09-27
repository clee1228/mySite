import React from 'react';
import './App.css';
import Home from './Components/pages/home';
import Projects from './Components/pages/projects';
import AboutMe from './Components/pages/aboutme';
import Contact from './Components/pages/contact';
import Navbar from "./Components/Navbar";

function App() { 
  
  return ( 
       <div className="App" style={{position: 'relative'}}>
             
          
             <Navbar />
             <Home/>
             <AboutMe/>
             <Projects/>
             <Contact/>
             
   
             
             </div>


 
       
  );
}

export default App;
