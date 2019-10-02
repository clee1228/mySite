import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';


import Me from '../../Images/caitlin.jpg'

import { bounceInDown, flipInX, fadeInLeft, fadeInDown } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll'
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounceInDown: {
      animation: '3s',
      animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    },
    fadeInLeft: {
        animation: '1.5s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    fadeInDown: {
        animation: '1.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
}

class About extends Component{
    
    render() {
        return(
            <div className="container">
            <div className="about-section" id="about-me">
                <StyleRoot>
                    
                <div className="left-half" style={styles.fadeInLeft}>
                <img 
                    className="pic"
                    src={Me} alt=""/>
                </div>
                <div className="right-half" style={styles.fadeInDown}>
                    <h6> <b>ABOUT ME</b> </h6> 
                    <p> Hello! My name is Caitlin Lee - I'm a curious individual and an avid learner, always with a long list of of new things I want to learn or try.
                        I recently graduated from University of California, Berkeley, where I studied Cognitive Science & Computer Science and developed a passion for human-centric design & software development.
                        I enjoy working collaboratively and cross-functionally, and am always up for a good challenge.
                        Currently based in the San Francisco Bay Area - I am seeking software engineering opportunities that utilizes my technical skills,
                        education, and passion for solving interesting problems.</p>
                    <p><div className="social-links" style={styles.fadeInDown}>
                        
                        <a href="https://github.com/clee1228" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/> </a>
    
                        <a href="https://www.linkedin.com/in/caitlin-lee-4856bba8/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                            
                        </div></p>
                </div>

                

                </StyleRoot>    
            </div>
            </div>
        )
    }
}

export default About;