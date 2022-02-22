import React from 'react';
import { Button, Card, CardGroup, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import Post from '../createpostpage/Post';
import {faBell, faPlusCircle, faCircle, faUser,faHouse} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RecommendedTicketer() {
  return(
    <div className="RecommendedTicketer mt-0 ml-5 mr-5 p-0">
    <Container>
      <h2 className='text-center'>Anbefalte Ticketer</h2>
      <CardGroup>

        <Card style={{ cursor: 'pointer', height: "500px"}} className="mx-4 my-2">
          <Card.Text className='mb-0'>
            <button type='button' className='button-2'>
              <span className='button__icon-2'>
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
              </span>
               <span style={{ fontSize:"20px",marginLeft:"5px"}}>kir</span>
            </button>
          </Card.Text>
          <Card.Img src="https://picsum.photos/200/200" className='mt-0 h-25' />
          <Card.Body className='m-0'>
            <Card.Title>Mozarts Requiem</Card.Title>
            <Card.Text>Gå påsken i møte med et av verdens vakreste verk.
            Mozarts uendelig vakre Requiem er noe av det nydeligste som er skrevet.
            </Card.Text>
            <ListGroup className="list-group-flush">
            <ListGroupItem>TORSDAG, 7. APRIL, 2022 KL 19.30</ListGroupItem>
            <ListGroupItem>470,-</ListGroupItem>
            <Button variant="success">Contact seller</Button>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card style={{ cursor: 'pointer', height: "500px"}} className="mx-4 my-2">
          <Card.Text className='mb-0'>
            <button type='button' className='button-2'>
              <span className='button__icon-3'>
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
                <span style={{ fontSize:"20px",marginLeft:"5px"}}>kir</span>
              </span>
            </button>
          </Card.Text>
          <Card.Img src="https://picsum.photos/200/200" className='mt-0 h-25' />
          <Card.Body className='m-0'>
            <Card.Title>Mozarts Requiem</Card.Title>
            <Card.Text>Gå påsken i møte med et av verdens vakreste verk.
            Mozarts uendelig vakre Requiem er noe av det nydeligste som er skrevet.
            </Card.Text>
            <ListGroup className="list-group-flush">
            <ListGroupItem>TORSDAG, 7. APRIL, 2022 KL 19.30</ListGroupItem>
            <ListGroupItem>470,-</ListGroupItem>
            <Button variant="success">Contact seller</Button>
            </ListGroup>
          </Card.Body>
        </Card>

        <Card style={{ cursor: 'pointer', height: "500px"}} className="mx-4 my-2">
          <Card.Text className='mb-0'>
            <button type='button' className='button-2'>
              <span className='button__icon-3'>
                <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
              </span>
            </button>
          </Card.Text>
          <Card.Img src="https://picsum.photos/200/200" className='mt-0 h-25' />
          <Card.Body className='m-0'>
            <Card.Title>Mozarts Requiem</Card.Title>
            <Card.Text>Gå påsken i møte med et av verdens vakreste verk.
            Mozarts uendelig vakre Requiem er noe av det nydeligste som er skrevet.
            </Card.Text>
            <ListGroup className="list-group-flush">
            <ListGroupItem>TORSDAG, 7. APRIL, 2022 KL 19.30</ListGroupItem>
            <ListGroupItem>470,-</ListGroupItem>
            <Button variant="success">Contact seller</Button>
            </ListGroup>
          </Card.Body>
        </Card>

      
        
      </CardGroup>
    </Container>
  </div>
  );
}

export default RecommendedTicketer;