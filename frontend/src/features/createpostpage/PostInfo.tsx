import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../stylesheets/Menylinje.css';
import { Post } from '../../types';

function PostInfo(props: Post) {
  let borderColor;
  switch (props.category) {
    case 'Concert':
      borderColor='primary';
      break;
    case 'Sports':
      borderColor='secondary';
      break;
    case 'Show':
      borderColor='success';
      break;
    case 'Other':
      borderColor='info';
      break;
    default:
      borderColor='primary';
  }

  props.timeOfEvent.getTime
  return (
    <Card border={borderColor} className=' m-4 border border-success rounded card' style= {{maxWidth:"370px", minWidth: "300px"}}>
        <Link to='/profile/' className='link'>
        <span>
        <button type='button' className='button-user-post' name='Sted'>

            <span className='button-user-icon'>{props.authorId}</span>
        </button>
          
        </span>
        </Link>
      {/* <Card.Img src="https://picsum.photos/200/200" className=' h-50 w-auto' /> */}
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>{props.title}</Card.Title> 
          <ListGroup variant="flush">
          <ListGroup.Item>{props.description}</ListGroup.Item>
          <ListGroup.Item>{props.city+', '+props.venue}</ListGroup.Item>
          <ListGroup.Item>{props.timeOfEvent}</ListGroup.Item>
          <ListGroup.Item>{props.price+',-'}</ListGroup.Item>
        </ListGroup>
        <Button variant="success mb-2 w-100">Ta kontakt</Button>


      </Card.Body>
		</Card>
  )
}

export default PostInfo;