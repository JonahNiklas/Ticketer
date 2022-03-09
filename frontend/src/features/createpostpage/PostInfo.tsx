import React, { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { getUserById } from '../../client/userHandler';
import '../../stylesheets/Menylinje.css';
import { Post, UserInfo} from '../../types';
import UserPage from '../userpage/UserPage';
import { store } from '../../redux/store';
import { useEffect } from 'react';

function PostInfo(props: Post) {
  let borderColor;
  const history = useHistory();
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
  async function handleUserProfile(e: any) {
    e.preventDefault();
    const userId = props.authorId;
 
    try{
      if(userId){
        const response = getUserById(userId);  
        console.log(response);
        history.push('/user/'+userId);
      }
    } catch (error: any) {
      console.error(error);
    }
  }
  let rendered = false;

  useEffect(() => {
    if (!rendered) {
      handleUserProfile;
      getUserName();
      rendered = true;
    }
  }, []);

  return (
    
    <Card border={borderColor} className=' m-4 border border-success rounded card' style= {{maxWidth:"370px", minWidth: "300px"}}>
        <span>
        <Link to="/user" className='link'>
        <button type='button' className='button-user-post' name='Sted'  onClick={handleUserProfile}>
            <span className='button-user-icon'>{firstName}</span>
        </button>  
        </Link>      
        </span>
      {/* <Card.Img src="https://picsum.photos/200/200" className=' h-50 w-auto' /> */}
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>{props.title}</Card.Title> 
          <ListGroup variant="flush">
          <ListGroup.Item>{props.description}</ListGroup.Item>
          <ListGroup.Item>{props.city + ', ' + props.venue}</ListGroup.Item>
          <ListGroup.Item>{props.timeOfEvent}</ListGroup.Item>
          <ListGroup.Item>{props.price+',-'}</ListGroup.Item>
        </ListGroup>
        <Button variant="success mb-2 w-100">Ta kontakt</Button>


      </Card.Body>
    </Card>
  );
}

export default PostInfo;
