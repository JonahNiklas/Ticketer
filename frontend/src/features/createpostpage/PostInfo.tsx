import React, { useState, useEffect } from 'react';
import { Alert, Button, Card, ListGroup, Modal } from 'react-bootstrap';
import { deletePost } from '../../client/postHandler';
import { useHistory, useLocation } from 'react-router-dom';
import '../../stylesheets/Menylinje.css';
import { Post } from '../../types';
import ChangeModal from './ChangePostModal';
import MakeContact from './MakeContact';
import { getUserById } from '../../client/userHandler';
import DateConverter from '../dateHandler';

function PostInfo(props: Post) {
  const history = useHistory();
  const location = useLocation();
  const [onProfilePage, setOnProfilePage] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [userPage, setUserPage] = useState<boolean>(false);

  async function getUserName() {
    try {
      const id = props.authorId;
      const user = await getUserById(id);
      setName(user.firstName + ' ' + user.lastName);
    } catch (error: any) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (location.pathname === '/profile') setOnProfilePage(true);
    if (location.pathname.includes('/user')) setUserPage(true);
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
    } catch (error: unknown) {
      console.error(error);
      setErrorMessage(true);
    }
    setTimeout(() => {
      setShowDelete(false);
    }, 3000);
  };

  console.log(props.isActive);
  console.log(props.forSale);

  if (!onProfilePage && !props.isActive) {
    return <></>;
  }
  return (
    <>
      <Card
        className={`m-4 border border-success rounded card ${
          props.forSale ? 'forSaleBorder' : 'not-forSaleBorder'
        }`}
        style={{ maxWidth: '370px', minWidth: '300px' }}
      >
        <span>
          <button
            type="button"
            className={`button-user-post ${
              props.isActive ? props.forSale ? 'forSale' : 'not-forSale' : 'inactive'
            }`}
            name="Sted"
          >
            <span className="button-user-icon">
              <b>
                {props.isActive ? props.forSale ? 'Til Salgs' : 'Ønskes kjøpt' : props.forSale ? 'Solgt' : 'Kjøpt'}
              </b>
            </span>
          </button>
        </span>

        <Card.Body className="mb-0 pb-0">
          <Card.Title>{props.title}</Card.Title>
          <ListGroup variant="flush">
            {!userPage ? (
              <ListGroup.Item
                onClick={() => history.push(`/user/${props.authorId}`)}
                className="usernameHover"
              >
                {name}
              </ListGroup.Item>
            ) : (
              <ListGroup.Item>{name}</ListGroup.Item>
            )}
            <ListGroup.Item>
              {props.description ? props.description : 'Ingen beskrivelse'}
            </ListGroup.Item>
            <ListGroup.Item>{props.city + ', ' + props.venue}</ListGroup.Item>
            <ListGroup.Item>{DateConverter(props.timeOfEvent)}</ListGroup.Item>
            <ListGroup.Item>
              {props.price ? props.price + ',-' : 'Ingen pris oppgitt'}
            </ListGroup.Item>
          </ListGroup>

          <MakeContact
            contactedId={props.authorId}
            postId={props.id}
            onHide={() => setShowContact(false)}
            show={showContact}
          />

          {!onProfilePage && (
            <Button
              variant="success mb-2 w-100"
              onClick={() => setShowContact(true)}
            >
              Ta kontakt
            </Button>
          )}
          {onProfilePage && (
            <Button
              variant="success mb-2 w-100"
              onClick={() => setShowEdit(true)}
              disabled={props.isActive ? props.forSale ? false : false : props.forSale ? true : true}
            >
              Endre
            </Button>
          )}
          {onProfilePage && (
            <Button
              variant="danger mb-2 w-100"
              onClick={() => setShowDelete(true)}
            >
              Slett innlegg
            </Button>
          )}
        </Card.Body>

        <Modal show={showDelete} onHide={() => setShowDelete(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              Er du sikker på at du vil slette innlegget?
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Alert show={deleteMessage} variant="secondary">
              Innlegget ble slettet
            </Alert>
            <Alert show={errorMessage} variant="danger">
              Innlegget ble ikke slettet
            </Alert>
            <Button variant="secondary" onClick={() => setShowDelete(false)}>
              Avbryt
            </Button>
            <Button variant="danger" onClick={handleDeletePost}>
              Slett innlegg
            </Button>
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
