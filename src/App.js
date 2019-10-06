import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/pages/home';
import Projects from './Components/pages/projects';
import AboutMe from './Components/pages/aboutme';
import Contact from './Components/pages/contact';
import Navbar from "./Components/Navbar";

class App extends Component { 
  render(){
  
  return ( 
     
      <Router>
            <Navbar/>

            <div className="app-container">
                <Route exact path="/" component={Home}/>
                <Route 
                  exact path="/aboutme"  
                  component={AboutMe} />
                <Route 
                  exact path="/projects"  
                  component={Projects} />
                <Route 
                  exact path="/contact"  
                  component={Contact} />
            </div>
        </Router>
  )
  };
}

export default App;
