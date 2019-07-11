import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';

function App() { 
  return (
    <div style={{height: '800px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title={<span><span style={{ color: '#ddd' }}>Portfolio / </span><strong>Caitlin Lee</strong></span>}>
            <Navigation>
                <Link to="./aboutMe">About Me</Link>
                <Link to="./projects">Projects</Link>
                <Link to="./resume">Resume</Link>
                <Link to="./contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Caitlin Lee">
          <Navigation>
                <Link to="./aboutMe">About Me</Link>
                <Link to="./projects">Projects</Link>
                <Link to="./resume">Resume</Link>
                <Link to="./contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="pageContent" />
          <Main/>
        </Content >
    </Layout>
</div>
  );
}

export default App;
