import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, ListGroup, Modal } from 'react-bootstrap';
import { deletePost } from '../../client/postHandler';
import { Link } from 'react-router-dom';
import '../../stylesheets/Menylinje.css';
import { Post } from '../../types';
import ChangeModal from './ChangePostModal';
import { getUserById } from '../../client/userHandler';



function DateConverter(date: Date){
  const d = date;
  const text = d.toString();
  const year = text.substring(0,4);
  const month = text.substring(5,7);
  const day = text.substring(8,10);
  const hour = text.substring(11,13);
  const minutes = text.substring(14,16);
  return  day + "." + month + "." + year + " " + hour + ":" + minutes;
}

function PostInfo(props: Post) {
  let borderColor;
  let forSaleText = 'Selges for ';
  switch (props.category) {
    case 'Concert':
      borderColor = 'primary';
      break;
    case 'Sports':
      borderColor = 'secondary';
      break;
    case 'Show':
      borderColor = 'success';
      break;
    case 'Other':
      borderColor = 'info';
      break;
    default:
      borderColor = 'primary';
  }
  if (!props.forSale) {
    forSaleText = 'Ønskes kjøpt for ';
  }

  const [name, setName] = useState<string>('');

  async function getUserName() {
    try {
      const user = await getUserById(props.authorId);
      setName(user.firstName + " " + user.lastName);
    } catch(error: any) {
      console.error(error);
    }
  }

  const [state, setState] = useState(false);

  useEffect(() => {
    getUserName();
    if (window.location.pathname === '/profile') {
      setState(true);
    }
  }, []);

  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeletePost = async (e: any) => {
    e.preventDefault();
    try {
      const response = await deletePost(props.id);
      console.log(response);
      setDeleteMessage(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
    catch(error: any) {
      console.error(error);
      setErrorMessage(true);
    }
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }
  
  return (
    <>
    <Card
      border={borderColor}
      className=" m-4 border border-success rounded card"
      style={{ maxWidth: '370px', minWidth: '300px' }}
    >
      
      <span>
        <button type="button" className="button-user-post" name="Sted">
          <span className="button-user-icon">{name}</span>
        </button>
      </span>
      
      {/* <Card.Img src="https://picsum.photos/200/200" className=' h-50 w-auto' /> */}
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>{props.title}</Card.Title> 
          <ListGroup variant="flush">
          <ListGroup.Item>{props.description}</ListGroup.Item>
          <ListGroup.Item>{props.city + ', ' + props.venue}</ListGroup.Item>
          <ListGroup.Item>{DateConverter(props.timeOfEvent)}</ListGroup.Item>
          <ListGroup.Item>{forSaleText + props.price + ',-'}</ListGroup.Item>
          
          </ListGroup>
        {!state && <Button variant="success mb-2 w-100">Ta kontakt</Button>}
        {state && <Button variant="success mb-2 w-100" onClick={() => setModalShow(true)}>Endre</Button>}
        {state && <Button variant="danger mb-2 w-100" onClick={handleShow}>Slett innlegg</Button>}

      </Card.Body>
    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Er du sikker på at du vil slette innlegget?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Alert show={deleteMessage} variant='secondary'>Innlegget ble slettet</Alert>
        <Alert show={errorMessage} variant='danger'>Innlegget ble ikke slettet</Alert>
        <Button variant='secondary' onClick={handleClose}>Avbryt</Button>
        <Button variant='danger' onClick={handleDeletePost}>Slett innlegg</Button>
      </Modal.Footer>
    </Modal>
    </Card>

    <ChangeModal
      onHide={() => setModalShow(false)}
      show={modalShow}
      thisPost={props}
    />
    </>
  );
}

export default PostInfo;