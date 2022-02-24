import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import '../../stylesheets/Menylinje.css';

function Post() {
  return (
    <Card className=' m-4 border border-success rounded card' style= {{maxWidth:"370px", minWidth: "300px"}}>

        <span>
        <button type='button' className='button-user-post' name='Sted'>

            <span className='button-user-icon'>Brukernavn</span>
        </button>
          
        </span>

      <Card.Img src="https://picsum.photos/200/200" className=' h-50 w-auto' />
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>Mozarts Requiem</Card.Title>
          <ListGroup variant="flush">
          <ListGroup.Item>Gå påsken i møte med et av verdens vakreste verk. Mozarts uendelig vakre Requiem er noe av det nydeligste som er skrevet.</ListGroup.Item>
          <ListGroup.Item>Olavshallen</ListGroup.Item>
          <ListGroup.Item>TORSDAG, 7. APRIL, 2022 KL 19.30</ListGroup.Item>
          <ListGroup.Item>470,-</ListGroup.Item>
          <Button variant="success mb-2">Ta kontakt</Button>
        </ListGroup>

      </Card.Body>
		</Card>
  )
}

export default Post;