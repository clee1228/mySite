import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import Pic from '../../Images/pic.jpg'

const styles = (theme) => ({
    ...theme.spreadThis,
});

class About extends Component{
    
    render() {
        const {classes} = this.props;
        
        return(
            <div className="about-section" id="about-me">
               
                <div className="about-me">
                <img 
                    className="pic"
                    src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/48976849_10216143180906019_6920094742319464448_n.jpg?_nc_cat=101&_nc_oc=AQmbqYFi9bI1-GOixwemMm36qavgQ_On2ywOmZTBfhsNKMNAB1LE8PJHRtwxm_ipvpREL9UyJLij-B-p9kZC1Myn&_nc_ht=scontent-sjc3-1.xx&oh=10ebe5aaed24c30269607d276e7a2540&oe=5E3C8511" alt=""/>     


                </div>
                       
                   
                        
    
                        
                  
                    
                        

                        
                
                      
            </div>
        )
    }
}

export default About