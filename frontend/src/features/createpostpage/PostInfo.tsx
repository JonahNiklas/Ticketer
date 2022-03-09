import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, ListGroup, Modal } from 'react-bootstrap';
import { deletePost } from '../../client/postHandler';
import '../../stylesheets/Menylinje.css';
import { Post } from '../../types';

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

  const [state, setState] = useState(false)

  useEffect(() => {
    if (window.location.pathname === '/profile') {
      setState(true);
    }
  }, []);

  const [show, setShow] = useState(false);
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
    <Card
      border={borderColor}
      className=" m-4 border border-success rounded card"
      style={{ maxWidth: '370px', minWidth: '300px' }}
    >
      
      <span>
        <button type="button" className="button-user-post" name="Sted">
          <span className="button-user-icon">{props.authorId}</span>
        </button>
      </span>

      {/* <Card.Img src="https://picsum.photos/200/200" className=' h-50 w-auto' /> */}
      <Card.Body className="mb-0 pb-0">
        <Card.Title>{props.title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>{props.description}</ListGroup.Item>
          <ListGroup.Item>{props.city + ', ' + props.venue}</ListGroup.Item>
          <ListGroup.Item>{props.timeOfEvent}</ListGroup.Item>
          <ListGroup.Item>{forSaleText + props.price + ',-'}</ListGroup.Item>
          <Button variant="success mb-2">Ta kontakt</Button>
          {state && <Button variant="danger mb-2" onClick={handleShow}>Slett innlegg</Button>}
        </ListGroup>
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
  );
}

export default PostInfo;
