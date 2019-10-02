import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';




// import Card from 'react-bootstrap/Card'
import { bounceInDown, flipInX, fadeInLeft, fadeInDown} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

// Thumbnails
import freeForSale from '../../Images/freeForSale.png';
import tourWebsite from '../../Images/tourWebsite.png';
import bearMaps from '../../Images/bearMaps.png';
import pointSwap from '../../Images/pointSwap.png';
import houseHelper from '../../Images/houseHelper.png';

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
                <div style={styles.bounceInDown}>

                 <Grid container spacing={10} className="projects-grid">
                     
                     <Grid item sm={3} xs={12}>
                        <Card className="project-card" shadow={3} style={{width: '350px', margin: 'auto', position: 'sticky'}}>
                            <img src={freeForSale} alt="" style={{width: '330px', paddingTop: '13px', paddingLeft: '10px'}}/>
                            <CardContent>
                            <Typography gutterBottom variant="h6">
                                UC Berkeley: Free & For Sale
                            </Typography>
                            

                            <Typography variant="overline" color="textSecondary">
                                 React, Redux, Node.js, Express, Google Firebase 
                                </Typography>
                            

                            <Typography variant="body2" color="textSecondary" component="p"> 
                                Redesigned, developed, and deployed a full-stack web app version of UCB Free & For Sale – a Facebook-borne 
                                concept of a virtual marketplace and community hub for fellow students at their universities.<br/>
                            </Typography>

                           

                            </CardContent>
                            {/* <hr/> */}
                            <CardActions>
                                <a href="https://github.com/clee1228/freeForSale" rel="noopener noreferrer" target="_blank">
                                <Button size="small" color="primary">  Github </Button>
                                    </a>
                                
                                {/* <Button size="small" color="primary">Learn More </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                    

                    <Grid item sm={3} xs={12}>
                        <Card className="project-card" shadow={3} style={{width: '350px', margin: 'auto', position: 'sticky'}}>
                            <img src={houseHelper} alt="" style={{width: '330px', paddingTop: '10px', paddingLeft: '10px'}}/>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                HouseHelper
                            </Typography>
                            <Typography variant="overline" color="textSecondary">
                                Java, CSS, Android Studio, Google Firebase, UX/UI
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Designed and developed an Android app to assist people in delegating household 
                                chores – features include e-mail authentication, real-time check-off lists and group chat using Google Firebase as BaaS
                                <br/>
                            </Typography>

                            

                            </CardContent>
                            <CardActions>
                            <a href="https://github.com/clee1228/houseHelper" rel="noopener noreferrer" target="_blank">
                                <Button size="small" color="primary">  Github </Button>
                                    </a>
                                
                                {/* <Button size="small" color="primary">Learn More </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item sm={3} xs={12}>
                        <Card className="project-card" shadow={3} style={{width: '350px', margin: 'auto', position: 'sticky'}}>
                            <img src={bearMaps} alt="" style={{width: '330px', paddingTop: '20px', paddingBottom: '10px', paddingLeft: '10px'}}/>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Bear Maps
                            </Typography>

                            <Typography variant="overline" color="textSecondary">
                                CS61B: Data Structures & Algorithms  • Java
                                </Typography>
                            
                            <Typography variant="body2" color="textSecondary" component="p">
                                Developed the backend for a mapping and route-finding web app that maps the city of Berkeley 
                                using the Quadtree data structure, A* search algorithm for routing optimization, and tile images and location data from the OpenStreetMap project

                            </Typography>

                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/clee1228/route-finding-app" rel="noopener noreferrer" target="_blank">
                                <Button size="small" color="primary">  Github </Button>

                                </a>
                               
                                {/* <Button size="small" color="primary">Learn More </Button> */}
                            </CardActions>
                            
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card className="project-card" shadow={3} style={{width: '350px', margin: 'auto', position: 'sticky'}}>
                            <img src={tourWebsite} alt="" style={{width: '330px', paddingTop: '40px', paddingBottom: '10px', paddingLeft: '10px'}}/>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                SF Korean Tour
                            </Typography>
                            <Typography variant="overline" color="textSecondary">
                            React, Redux, EmailJS
                                
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Created a web app for a tour business where clients can learn more about 
                                services and schedule tours via a contact form that utilizes EmailJS
                            </Typography>

                            </CardContent>
                            <CardActions>
                            <a href="https://github.com/clee1228/tour-website" rel="noopener noreferrer" target="_blank">
                                <Button size="small" color="primary">  Github </Button>
                                    </a>
                                {/* <Button size="small" color="primary">Learn More </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card className="project-card" shadow={3} style={{width: '350px', margin: 'auto', position: 'sticky'}}>
                            <img src={pointSwap} alt="" style={{width: '330px', paddingTop: '10px', paddingLeft: '10px'}}/>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Point Swap
                            </Typography>

                            <Typography variant="overline" color="textSecondary">
                            UX  •  Figma, Adobe XD, Illustrator
                                
                                </Typography>



                             
                            <Typography variant="body2" color="textSecondary" component="p">
                            Using UX methods, designed a mobile app to solve the problem
                            of meal points going unused or overused at UC Berkeley

                            </Typography>

                            </CardContent>
                            <CardActions>
                                <a href="https://www.behance.net/gallery/59405719/Final-Project-Point-Swap" rel="noopener noreferrer" target="_blank">
                                <Button size="small" color="primary">  Behance </Button>
                                </a>
                               
                                {/* <Button size="small" color="primary">Learn More </Button> */}
                            </CardActions>
                        </Card>
                    </Grid>
                        
                    
                      
                </Grid>


                </div>
                </StyleRoot>
                        
                   
                    
               
                </div>
                
                </div>
                

               
           
            
        )
    }
}

export default Projects;