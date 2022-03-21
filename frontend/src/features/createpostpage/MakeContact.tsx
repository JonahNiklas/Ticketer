
import React, { useState, useEffect } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { createRatingOpportunity } from '../../client/ratingOpportunityHandler';
import { getUserById } from '../../client/userHandler';
import { RatingOpportunityRequest, RatingOpportunityRespose, userData } from '../../types';
import { store } from '../../redux/store';

const MakeContact = (props: {postId: number, contactedId: number, show: boolean, onHide: any}) => {
  const [user, setUser] = useState<userData|null>(null);
  const [success, setSuccess] = useState(false);
  
  const getUserData = async () => {
    try {
      const user = await getUserById(props.contactedId);
      if(user){
        setUser(user)
        //setEmail(user.email);
      }
      
      
    } catch (err) {
      console.error(err);
    }
  }
  const handleContact = async () => {
    try {    
      const activeUserId = store.getState().user.userId;
      if(!activeUserId) return;
      const request :RatingOpportunityRequest = {
        contactedId: props.contactedId,
        contacterId: activeUserId,
        postId: props.postId
      };
      const response : RatingOpportunityRespose = await createRatingOpportunity(request);
      
      setSuccess(response.code == 200);
      
    } catch (err) {
      console.error(err);
      console.log(1);
    }
  }
 
  useEffect(() => {
    getUserData();
  }, []);
 
  
  
  
  if(user){
    return(
      <Modal onHide = {props.onHide} show = {props.show} >
        <Modal.Body>
          Ta kontakt her med {user.firstName+" "+user.lastName+"\n Hen kan kontaktes her "+user.email+"\n"}
        </Modal.Body>
        <Button onClick={()=>handleContact()}>Bekreft</Button>
        <Alert show={success}>{user.firstName+" "+user.lastName} har nå fått beskjed om at du ønsker å ta kontakt.</Alert>
        
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
