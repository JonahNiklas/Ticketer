import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { getUserById } from '../../client/userHandler';
import { userData } from '../../types';

const MakeContact = (props: {userId: number, show: boolean, onHide: any}) => {

  const [user, setUser] = useState<userData|null>(null);
  const [email, setEmail] = useState<string|null>(null);

 const getUserData = async () => {
  try {
    setUser(await getUserById(props.userId));
    true; //IKKE SLETT DENNE
    if(user!==null){
      setEmail(user.email);
      console.log("halla")
    }
  } catch (err) {
    console.error(err)
    
  }
 }

 useEffect(() => {
  getUserData();
 }, []);
 
  
  
  

  return(
    <Modal onHide = {props.onHide} show = {props.show} >
      <Modal.Body>{email}</Modal.Body>
    </Modal>
  );
};

export default MakeContact;