import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
import { Card, Icon, Image, Button } from 'semantic-ui-react';


import ProjectModal from '../ProjectModal';

// import Card from 'react-bootstrap/Card'
import { bounceInDown, flipInX, fadeInLeft, fadeInDown} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

// Thumbnails
import freeForSale from '../../Images/freeForSale.png';
import tourWebsite from '../../Images/tourWebsite.png';
import bearMaps from '../../Images/bearMaps.png';
import pointSwap from '../../Images/pointSwap.png';
import houseHelper from '../../Images/houseHelper.png';
import itunesHome from '../../Images/itunesHome.png';


const styles = {
    bounceInDown: {
      animation: '1s',
      animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    },
    fadeInDown: {
        animation: '1.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
      }
}

class Projects extends Component{
    render() {
        return(
           
            <div className="container">
            <div className="project-section" id="projects">
               <StyleRoot>
                <div className="title-text" style={styles.fadeInDown}>
                <h6> My Recent Work </h6>
                </div>
                </StyleRoot>
                

                <StyleRoot>
                <div className="projects" style={styles.bounceInDown}>

                <Card.Group 
                    // stackable -- for mobile view
                    itemsPerRow={3}>

                    <Card 
                        // href="#"
                        raised>
                        <Image className="project-pic" src={freeForSale}/>
                        <Card.Content>
                            <Card.Header> UCB: Free & For Sale </Card.Header>
                            <Card.Meta> React + Redux, Node.js, Express, Google Firebase </Card.Meta>
                            <Card.Description>
                            Redesigned, developed, and deployed a full-stack web app version of UCB Free & For Sale – a Facebook-borne 
                                concept of a virtual marketplace and community hub for fellow students at their universities.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href="https://github.com/clee1228/freeForSale" rel="noopener noreferrer" target="_blank">
                            <Button>Github</Button>
                            </a>
                            <ProjectModal/> 
                        </Card.Content>
                    </Card>

                    <Card 
                        // href="#"
                        raised>
                        <Image className="project-pic" src={houseHelper}/>
                        <Card.Content>
                            <Card.Header> HouseHelper </Card.Header>
                            <Card.Meta> Java, CSS, Android Studio, Google Firebase, UX/UI   </Card.Meta>
                            <Card.Description>
                            Designed and developed an Android app to assist people in delegating household 
                                chores – features include e-mail authentication, real-time check-off lists and group chat using Google Firebase as BaaS
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href="https://github.com/clee1228/houseHelper" rel="noopener noreferrer" target="_blank">
                            <Button>Github</Button>
                            </a>
                            <ProjectModal/> 
                        </Card.Content>
                    </Card>

                    <Card 
                        // href="#"
                        raised>
                        <Image className="project-pic" src={itunesHome}/>
                        <Card.Content>
                            <Card.Header> iTunes Movie Search </Card.Header>
                            <Card.Meta> React, Axios, iTunes Search API  </Card.Meta>
                            <Card.Description>
                            Developed a web application where you can search, get information, and watch previews for movies via iTunes Search API.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="https://github.com/clee1228/movieSearch" rel="noopener noreferrer" target="_blank">
                            <Button>Github</Button>
                            </a>
                            <ProjectModal/>
                        </Card.Content>
                    </Card>

                    <Card 
                        // href="#"
                        raised>
                        <Image  className="project-pic" src={bearMaps}/>
                        <Card.Content>
                            <Card.Header> Bear Maps</Card.Header>
                            <Card.Meta> CS61B: Data Structures & Algorithms  • Java  </Card.Meta>
                            <Card.Description>
                            Developed the backend for a mapping and route-finding web app that maps the city of Berkeley 
                                using the Quadtree data structure, A* search algorithm for routing optimization, and tile images and location data from the OpenStreetMap project
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="https://github.com/clee1228/route-finding-map" rel="noopener noreferrer" target="_blank">
                            <Button>Github</Button>
                            </a>
                            <ProjectModal/>
                        </Card.Content>
                    </Card>

                    <Card 
                        // href="#"
                        raised>
                        <Image className="project-pic"  src={tourWebsite}/>
                        <Card.Content>
                            <Card.Header> SF Korean Tour </Card.Header>
                            <Card.Meta> React + Redux, Email.js   </Card.Meta>
                            <Card.Description>
                            Created a web app for a tour business where clients can learn more about 
                                services and schedule tours via a contact form that utilizes EmailJS
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="https://github.com/clee1228/tour-website" rel="noopener noreferrer" target="_blank">
                            <Button>Github</Button>
                            </a>
                            <ProjectModal/>
                        </Card.Content>
                    </Card>

                    <Card 
                        // href="#"
                        raised>
                        <Image className="project-pic"  src={pointSwap}/>
                        <Card.Content>
                            <Card.Header> Point Swap </Card.Header>
                            <Card.Meta> UX • Figma, Adobe XD, Illustrator   </Card.Meta>
                            <Card.Description>
                            Using UX methods, designed a mobile app to solve the problem
                            of meal points going unused or overused at UC Berkeley
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="https://www.behance.net/gallery/59405719/Final-Project-Point-Swap" rel="noopener noreferrer" target="_blank">
                            <Button>Behance</Button>
                            </a>
                            <ProjectModal/>
                        </Card.Content>
                    </Card>
                </Card.Group>
                </div>
                </StyleRoot>

                </div>
                </div>
                

               
           
            
        )
    }
}

export default Projects;