import React, {Component} from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
    render() {
        return(
           
               
            <div className="project-section" id="projects">
                <div className="bottom-text">
                            <h1>My Recent Work</h1>
                        </div>

                <Grid className="projects-grid">
                    <Cell col={4}>
                        <Card className="project-card" shadow={3} style={{width: '350px', margin: 'auto', position: 'sticky'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
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
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
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
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
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
            
        )
    }
}

export default Projects;