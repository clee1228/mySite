import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                    

                    <div className="banner-text">
                    
                        <h1> Hi, I'm <b> Caitlin Lee, </b> a Web Developer</h1>
                        <hr/>

                        <p> HTML/CSS | JavaScript | React | Python | Java</p>


                        <div className="social-links">
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true"/> </a>

                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                    </div>
                    </div>

                    
                    </Cell>
                </Grid>
            </div>


        )
    }
}

export default Home;