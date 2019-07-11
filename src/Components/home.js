import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends Component{
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                    <img src="https://www.pngrepo.com/download/10733/avatar.png" alt="avatar" className="avatar-img"></img>

                    <div className="banner-text">
                        <h1> Software Engineer</h1>
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