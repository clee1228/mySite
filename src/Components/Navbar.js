import React, { Component } from "react";
import logo from '../Images/pic.jpg'
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state={};


  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">

            <div className="site-title">
                <h5>CL.</h5>
            </div>
              

          <ul className="nav-items">

          <li className="nav-item">
              <Link to="/" className="nav-item"> Home </Link>
          </li>



            <li className="nav-item">
              <Link
                className="nav-item"
                to="aboutme">
                About Me
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                className="nav-item"
                to="projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-item"
                to="contact">
                Contact
              </Link>
            </li>
             
          </ul>
        </div>
      </nav>
    );
  }
}
