import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

function Post() {
  return (
    <Card className='mx-4 m-2 border border-success rounded card'>
      <Card.Text>
        <span>
        <button type='button' className='button-user-post' name='Sted'>
             <span className='button__icon-1'>
                 <FontAwesomeIcon icon={faUser} className="fa-xs"></FontAwesomeIcon>
            </span>
            <span className='button-user-icon'>Min ticketer</span>
        </button>
          
        </span>
      </Card.Text>
      <Card.Img src="https://picsum.photos/200/200" className=' h-50 w-auto' />
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>Mozarts Requiem</Card.Title>
          <ListGroup variant="flush">
          <ListGroup.Item>Gå påsken i møte med et av verdens vakreste verk. Mozarts uendelig vakre Requiem er noe av det nydeligste som er skrevet.</ListGroup.Item>
          <ListGroup.Item>TORSDAG, 7. APRIL, 2022 KL 19.30</ListGroup.Item>
          <ListGroup.Item>470,-</ListGroup.Item>
          <Button variant="success mb-2">Contact seller</Button>
        </ListGroup>

      </Card.Body>
		</Card>
  )
}

export default Post;