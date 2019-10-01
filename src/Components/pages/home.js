import React, {Component} from 'react';
import { bounceInDown, flipInX, fadeInLeft, fadeInDown} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Me from '../../Images/me.png';

const styles = {
    bounceInDown: {
      animation: '3s',
      animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
    },
    flipInX: {
        animation: '6s',
        animationName: Radium.keyframes(flipInX, 'flipInX')
    },
    fadeInLeft: {
        animation: '1s',
        animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    },
    fadeInDown: {
        animation: '2s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }

class Home extends Component{
    render() {
        return(
           
            <div className="home" id="home">

                
                    
                   
                <StyleRoot>
                   <div className="rectangle">

                   </div>
                   <div className="banner-text">
                    <div style={styles.flipInX}>
                        <h1> Hi, I'm <b> Caitlin Lee</b>  </h1>
                    </div>
                    </div>
                
                
                </StyleRoot>
                        
                        

                
                                         
                
                       
                       
                   
                    </div>
                    
  

        )
    }
}

export default Home;