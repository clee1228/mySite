import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Home from './Components/home';
import Projects from './Components/projects';
import AboutMe from './Components/aboutme';
import Contact from './Components/contact';
import {Link, Router, Switch} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import { Grid, Cell } from 'react-mdl';

 
function App() { 
  
  return ( 
        <div className="App" style={{position: 'relative'}}>
             
          
          <Navbar />
          <Home/>
          <AboutMe/>
          <Projects/>
          <Contact/>
          

          
          </div>
       

    

  


    //  <div style={{height: '800px', position: 'relative'}}>
    //   <Layout>
    //     <Header className="header-color" title="Caitlin Lee" scroll>
    //          {/* <Header className="header-color" title={<span><span style={{ color: '#ddd' }}> Portfolio  </span><strong>Caitlin Lee</strong></span> }> */} 
         
    //              <Navigation>
    //                  <Link to="./aboutMe">About Me</Link>
    //                  <Link to="./projects">Projects</Link>
    //                  <Link to="./resume">Resume</Link>
    //                  <Link to="./contact">Contact</Link>
    //              </Navigation>
    //          </Header>
    //          <Drawer title="Caitlin Lee">
    //            <Navigation>
    //                  <Link to="./aboutMe">About Me</Link>
    //                  <Link to="./projects">Projects</Link>
    //                  <Link to="./resume">Resume</Link>
    //                  <Link to="./contact">Contact</Link>
    //              </Navigation>
    //          </Drawer>

    //          <Content>
    //             <div className="pageContent" />
    //            <Main/>
          

 
    // </Content>
    // </Layout>
    //              </div>  

  );
                }

export default App;
