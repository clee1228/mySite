import React, { Component } from 'react'
import { Button, Header, Image, Modal, Embed } from 'semantic-ui-react';

class ProjectModal extends Component {
    render() {
        return (
            <Modal
              centerd={true}
              trigger={<Button> See More</Button>}>
            <Modal.Header>Description</Modal.Header>
            <Modal.Content>
              {/* <Embed
                icon='play icon'
                placeholder={Black}
                url={movie.previewUrl}
              /> */}
          
              <Modal.Description>
                {/* <Image className="modal-pic" src={artwork}/> */}

                <p>
                <strong>Coming Soon!</strong><br/>
                 
                </p>
                {/* <p> */}
               
                {/* <strong>Genre: </strong> {genre} <br/>
                <strong>Run Time: </strong> {duration} <br/>
                <strong>Rental: </strong> {price} 
                </p> */}

               
              </Modal.Description>
            </Modal.Content>
            {/* <Modal.Actions>
            <Button primary>
              iTunes Store </Button>
            </Modal.Actions> */}
            
          </Modal>
          
        )
    }
}

export default ProjectModal;
