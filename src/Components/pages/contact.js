import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as emailjs from 'emailjs-com'

import { bounceInDown, fadeInLeft, fadeInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import GradPic from '../../Images/gradPic.jpeg'
// import ScrollAnimation from 'react-animate-on-scroll'

//Boostrap-React
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const styles = {
    bounceInDown: {
      animation: '2s',
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
    state={
        name: '',
        email: '',
        subject: '',
        message: '',
        validated: false,
        mailSent: false
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          this.setState({ validated: true});
          const { name, email, subject, message } = this.state;
          let templateParams = {
              from_name: name,
              email: email,
              subject: subject,
              message: message,
              to_name: 'Caitlin'
          }
          var service_id = "gmail";
          var template_id = "template_iwI14PKK";
          var user_id = "user_yhB7RehdosDRzDpijXPai";

          emailjs.send(service_id, template_id, templateParams, user_id)
          this.setState({mailSent: true});

          this.resetForm()
        }

    resetForm() {
        this.setState({
            name: '',
            email: '', 
            subject: '',
            message: '',
        })
    };

    handleChange = (event) =>{ 
        this.setState({
            [event.target.name]: event.target.value
        })
    };




    render() {
        return(
            <Fragment>
                { !this.state.mailSent? (
                    <div className="container">
                    <div className="contact-section" id="contact">
                    
                    
                    <StyleRoot>
                    <div className="title-text" style={styles.bounceInDown}>
                    <h6> let's connect ! </h6>
                    </div>

                    </StyleRoot>
                    <StyleRoot>
                    
                    <div className="left-half" style={styles.fadeInLeft}>
                        <img src={GradPic} className="gradPic" alt=""/>
                    </div>

                    <div className="right-half" style={styles.fadeInRight}>
                    <Form 
                        className="contact-form"
                        noValidate validated={this.state.validated}
                        onSubmit={this.handleSubmit} >
                        <Form.Group>
                            <Form.Label>Name*</Form.Label>
                            <Form.Control 
                                required
                                style={{width: '95%', height: '90%'}} 
                                type="text" 
                                name="name"
                                onChange={this.handleChange}
                                placeholder="John Smith" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>E-mail Address*</Form.Label>
                            <Form.Control 
                                required
                                style={{width: '95%', height: '90%'}} 
                                type="email" 
                                name="email"
                                onChange={this.handleChange}
                                placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control 
                                name="subject"
                                onChange={this.handleChange}
                                style={{width: '95%', height: '90%'}} 
                                rows="1" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                required
                                name="message"
                                onChange={this.handleChange}
                                style={{width: '95%'}} 
                                as="textarea" 
                                rows="3" />
                        </Form.Group>

                        <Button style={{width: '95%', }} variant="outline-warning" size="lg" type="submit" block>
                            Submit
                        </Button>
                    </Form>
                    </div>
                    </StyleRoot>
                    </div>
                    </div>
                   
                    
                ):(
                        <StyleRoot>
                        <div className="banner-text" style={styles.bounceInDown}>
                            <h1 style={{fontSize:'70px'}}>Message sent!</h1>
                        </div>
                        </StyleRoot>
                        

                )}
                

               

                
        
            </Fragment>
        )
    }
}

export default Contact;