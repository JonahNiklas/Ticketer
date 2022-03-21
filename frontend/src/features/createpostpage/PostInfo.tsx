import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, ListGroup, Modal } from 'react-bootstrap';
import { deletePost } from '../../client/postHandler';
import { Link } from 'react-router-dom';
import '../../stylesheets/Menylinje.css';
import { Post } from '../../types';
import ChangeModal from './ChangePostModal';
import MakeContact from './MakeContact';
import Concert from '../../images/konsert.png';
import Sport from '../../images/sport.png';
import Teater from '../../images/teater.png';
import { getUserById } from '../../client/userHandler';



function DateConverter(date: Date){
  const d = new Date(date);
  const days = ['MANDAG','TIRSDAG','ONSDAG','TORSDAG','FREDAG', 'LØRDAG','SØNDAG'];
  const months = ['JANUAR','FEBRUAR','MARS','APRIL','MAI','JUNI','JULI','AUGUST','SEPTEMBER','OKTOBER','NOVEMBER','DESEMBER']
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const hours = (d.getUTCHours().toString().padStart(2,'0'))
  const minutes = (d.getUTCMinutes().toString().padStart(2,'0'))
  return day + ", " + d.getDate() +'. '+ month +", "+ d.getUTCFullYear()+ " KL " + hours+ ":" + minutes;
}




function PostInfo(props: Post) {
  
  let forSaleColor = "";
  let forSaleText = ' for salg';

  const [state, setState] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [name, setName] = useState<string>("");



  async function getUserName() {
    try {
      const id = props.authorId;
      const user = await getUserById(id);
      setName(user.firstName + ' ' + user.lastName);
    } catch(error: any) {
      console.error(error);
    }
  }

  /* let image;
  switch (props.category) {
    case 'Concert':
      image = Concert;
      break;
    case 'Sports':
      image = Sport;
      break;
    case 'Show':
      image = Teater;
      break;
    default:
      image = "https://pic.onlinewebfonts.com/svg/img_520908.png";
  } */
  if (props.forSale) {
    forSaleText = ' for kjøp';
    forSaleColor= "color: rgb(207, 152, 147)";
  }


  useEffect(() => {
    if (window.location.pathname === '/profile') {
      setState(true);
    }
    getUserName();
  }, []);

  

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
      setShowDelete(false);
    }, 3000);
  }


  
  return (
    <>
    <Card
      className={`m-4 border border-success rounded card ${props.forSale ? "forSaleBorder" : "not-forSaleBorder"}`}
      style={{ maxWidth: '370px', minWidth: '300px' }}
    >
      
      <span>
        <button type="button" className={`button-user-post ${props.forSale ? "forSale" : "not-forSale"}`} name="Sted">
          <span className="button-user-icon">{props.forSale ? <b> Selges </b> : <b>Ønsker kjøpt</b>}</span>{/* <img src={image} className="postImage"></img> */}
        </button>
      </span>
      
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>{props.title}</Card.Title> 
        <ListGroup variant="flush">
          <ListGroup.Item>{name}</ListGroup.Item>
          <ListGroup.Item>{props.description ? props.description : "Ingen beskrivelse"}</ListGroup.Item>
          <ListGroup.Item>{props.city + ', ' + props.venue}</ListGroup.Item>
          <ListGroup.Item>{DateConverter(props.timeOfEvent)}</ListGroup.Item>
          <ListGroup.Item>{props.price ? props.price + ',-' : "Ingen pris oppgitt"}</ListGroup.Item>
        </ListGroup>

        <MakeContact
        contactedId={ props.authorId }
        postId={props.id}
        onHide={() => setShowContact(false)}
        show={showContact}
        />

        {!state && <Button variant="success mb-2 w-100" onClick = {() => setShowContact(true)}>Ta kontakt</Button>}
        {state && <Button variant="success mb-2 w-100" onClick={() => setShowEdit(true)}>Endre</Button>}
        {state && <Button variant="danger mb-2 w-100" onClick={() => setShowDelete(true)}>Slett innlegg</Button>}

      </Card.Body>
    
    <Modal show={showDelete} onHide={() => setShowDelete(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Er du sikker på at du vil slette innlegget?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Alert show={deleteMessage} variant='secondary'>Innlegget ble slettet</Alert>
        <Alert show={errorMessage} variant='danger'>Innlegget ble ikke slettet</Alert>
        <Button variant='secondary' onClick={() => setShowDelete(false)}>Avbryt</Button>
        <Button variant='danger' onClick={handleDeletePost}>Slett innlegg</Button>
      </Modal.Footer>
    </Modal>
    </Card>

    <ChangeModal
      onHide={() => setShowEdit(false)}
      show={showEdit}
      thisPost={props}
    />
    </>
  );
}

export default PostInfo;
