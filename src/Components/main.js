import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';


import HomePage from './home';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './pages/projects';
import Resume from './pages/resume';


const Main = () => (

   

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/resume" component={Resume} />
                

            </Switch>


        
    
)

export default Main;