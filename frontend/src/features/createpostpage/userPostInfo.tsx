import React, {useState} from 'react';
import { Button, Card, ListGroup, Modal } from 'react-bootstrap';
import '../../stylesheets/Menylinje.css';
import { Post } from '../../types';
import ChangeModal from './ChangePostModal';

function UserPostInfo(props: Post) {

  const [modalShow, setModalShow] = React.useState(false);


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


  return (
    <div>
    <Card border={borderColor} className=' m-4 border border-success rounded card' style= {{maxWidth:"370px", minWidth: "300px"}}>

        <span>
        <button type='button' className='button-user-post' name='Sted'>

            <span className='button-user-icon'>{props.authorId}</span>
        </button>
          
        </span>

      {/* <Card.Img src="https://picsum.photos/200/200" className=' h-50 w-auto' /> */}
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>{props.title}</Card.Title>
          <ListGroup variant="flush">
          <ListGroup.Item>{props.description}</ListGroup.Item>
          <ListGroup.Item>{props.city+', '+props.venue}</ListGroup.Item>
          <ListGroup.Item>{props.timeOfEvent}</ListGroup.Item>
          <ListGroup.Item>{props.price+',-'}</ListGroup.Item>
          <Button variant="success mb-2" onClick={() => setModalShow(true)}>Endre</Button>
        </ListGroup>
      </Card.Body>
		</Card>

    <ChangeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
</div>
  )
}

export default UserPostInfo;