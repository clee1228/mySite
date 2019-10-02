import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import { bounceInDown, flipInX, fadeInLeft, fadeInDown} from 'react-animations';
import Radium, {StyleRoot} from 'radium';


const styles = {
    bounceInDown: {
      animation: '1.5s',
      animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    }
}

class Projects extends Component{
    render() {
        return(
           
            <div className="container">
            <div className="project-section" id="projects">
               <StyleRoot>
                <div className="title-text" style={styles.bounceInDown}>
                <h6> My Recent Work </h6>
                </div>
                </StyleRoot>

                <Grid className="projects-grid">
                    <Cell col={4}>
                        <Card className="project-card" shadow={3} style={{width: '350px', margin: 'auto', position: 'sticky'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Free & For Sale</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                                
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                        
                    <Cell col={4}>
                        <Card className="project-card" shadow={3} style={{width: '350px', margin: 'auto', position: 'sticky'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>HouseHelper</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>LiveDemo</Button>
                                
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card></Cell>

                    <Cell col={4}>
                    <Card className="project-card" shadow={3} style={{width: '350px', margin: 'auto', position: 'sticky'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Bear Maps</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>
                            
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card></Cell>

                    
                    </Grid>
            </div>
            </div>
            
        )
    }
}

export default Projects;