import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { bounceInDown, fadeInLeft, fadeInRight } from 'react-animations';
import ScrollAnimation from 'react-animate-on-scroll'
import Radium, {StyleRoot} from 'radium';
import GradPic from '../../Images/gradPic.jpeg'

//Boostrap-React
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const styles = {
    bounceInDown: {
      animation: '1.5s',
      animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    },
    fadeInLeft: {
        animation: '1.5s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    fadeInRight: {
        animation: '1.5s',
        animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
    }
}

class Contact extends Component{
    state={};
    render() {
        return(
            <div className="container">
            <div className="contact-section" id="contact">
                <StyleRoot>
                <div className="connect-text" style={styles.bounceInDown}>
                <h6> let's connect ! </h6>
                </div>
                
                <div className="left-half" style={styles.fadeInLeft}>
                    <img src={GradPic} className="gradPic" alt=""/>

                </div>

                
                <div className="right-half" style={styles.fadeInRight}>

                <Form className="contact-form" >
                    <Form.Group>
                        <Form.Label>Name*</Form.Label>
                        <Form.Control style={{width: '95%', height: '90%'}} type="name" placeholder="John Smith" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>E-mail Address*</Form.Label>
                        <Form.Control style={{width: '95%', height: '90%'}} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control style={{width: '95%', height: '90%'}} rows="1" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control style={{width: '95%'}} as="textarea" rows="3" />
                    </Form.Group>

                    <Button style={{width: '95%', }} variant="outline-warning" size="lg" type="submit" block>
                        Submit
                    </Button>
                 </Form>
                </div>
                </StyleRoot>
            </div>
            </div>
        )
    }
}

export default Contact;