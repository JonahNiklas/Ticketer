import React, {useEffect, useState} from 'react';
import { Button, Card, ListGroup, Modal } from 'react-bootstrap';
import { getUserById } from '../../client/userHandler';
import '../../stylesheets/Menylinje.css';
import { Post } from '../../types';
import ChangeModal from './ChangePostModal';

function UserPostInfo(props: Post) {

  const [modalShow, setModalShow] = React.useState(false);
  const [firstName, setFirstName] = useState<string>('');
  async function getUserName() {
    try {
      const id = props.authorId;
      const user = await getUserById(id);
      setFirstName(user.firstName);
    } catch(error: any) {
      console.error(error);
    }

  }
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

  let rendered = false;

  useEffect(() => {
    if (!rendered) {
      getUserName();
      rendered = true;
    }
  }, []);

  return (
    <div>
    <Card border={borderColor} className=' m-4 border border-success rounded card' style= {{maxWidth:"370px", minWidth: "300px"}}>

        <span>
        <button type='button' className='button-user-post' name='Sted'>

            <span className='button-user-icon'>{firstName}</span>
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
        onHide={() => setModalShow(false)}
        show={modalShow}
        thisPost={props}
      />
</div>
  )
}

export default UserPostInfo;