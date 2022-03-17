import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { getUserById } from '../../client/userHandler';
import { userData } from '../../types';

const MakeContact = (props: {userId: number, show: boolean, onHide: any}) => {

  const [user, setUser] = useState<userData|null>(null);
  

 const getUserData = async () => {
  try {
    const user = await getUserById(props.userId);
     //IKKE SLETT DENNE
    if(user){
      setUser(user)
      //setEmail(user.email);
      console.log("halla")
    }
    
    
  } catch (err) {
    console.error(err)
    
  }
 }

 

 useEffect(() => {
  getUserData();
 }, []);
 
  
  
  
  if(user){
    return(
      <Modal onHide = {props.onHide} show = {props.show} >
        <Modal.Body>Ta kontakt her med {user.firstName+" "+user.lastName+" "+user.email+"\n"}{user.firstName+" "+user.lastName} har nå fått beskjed om at du ønsker å ta kontakt.</Modal.Body>
        <Button onClick={()=>{console.log("ass")}}>Bekreft</Button>
      </Modal>
      
    );
  }
  else{
    return(
      <Modal onHide = {props.onHide} show = {props.show} >
        <Modal.Body>Her har det skjedd en feil. Brukeren du prøver å komme i kontakt med eksisterer ikke.</Modal.Body>
      </Modal>
      
    );
  }
};

export default MakeContact;