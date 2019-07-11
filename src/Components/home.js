import React, {Component} from 'react';



class Home extends Component{
    state = {};
    render() {
        return(
        
            <div className="home" id="home">
                
                    <div className="banner-text">
                        <h1> Hi, I'm <b> Caitlin Lee</b></h1>
                        <hr/>

                        <p> Python | Java | HTML5/CSS | JavaScript | React </p>


                        <div className="social-links">
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true"/> </a>

                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                    </div>
                    </div>
        </div>
       
        
        


        )
    }
}

export default Home;