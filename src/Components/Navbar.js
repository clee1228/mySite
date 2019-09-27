import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

//MUI
import Typography from '@material-ui/core/Typography';

export default class Navbar extends Component {
  state={};
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">

          {/* <Typography 
            className="site-title"
            variant="h6" 
            noWrap> Caitlin Lee </Typography> */}
            <div className="site-title">
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <h5>Caitlin Lee</h5>
              </Link>
              
            </div>
              

          <ul className="nav-items">

          <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </li>



            <li className="nav-item">
              <Link
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About Me
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </li>
             
          </ul>
        </div>
      </nav>
    );
  }
}
