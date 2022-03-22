import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Toast, ToastContainer } from "react-bootstrap";
import { getRatingOpportunityByUser } from '../../client/ratingOpportunityHandler';
import { store } from '../../redux/store';
import { RatingOpportunity, RatingRequest } from '../../types';
import { acceptRatingOpportunity } from '../../client/ratingOpportunityHandler';
import { sellPost } from '../../client/postHandler';
import { createRating } from '../../client/ratingHandler';

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

function WantsContact() {

  const [ratingOpportunities, setRatingOpportunities] = useState<RatingOpportunity[]>([]);
  const activeUserId = store.getState().user.userId;
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);
  async function getRatingOpportunities() {
    if (activeUserId) {
      try {
        setRatingOpportunities(await getRatingOpportunityByUser(activeUserId));
      } catch (error: any) {
        console.error(error);
      }
    }
  }

  //her

  const acceptContact = async (id: number, postId: number, firstId: number, secondId: number) => {
    await acceptRatingOpportunity(id);
    await sellPost(postId);
    getRatingOpportunities();

    const data1: RatingRequest = {
      givenById: firstId,
      gottenById: secondId
    }
    /* const data2: RatingRequest = {
      givenById: secondId,
      gottenById: firstId
    } */

    await createRating(data1);


    //window.location.reload();
  }

  useEffect(() => {
    getRatingOpportunities();
  }, []);


  return (
    <Container className='col-3 mt-5'>
      <h4>Ønsker å ta kontakt</h4>
      <ToastContainer >
        {ratingOpportunities.map((ro,idx) => (
          <Toast key={idx} show={show} onClose={toggleShow}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">{ro.contacterFirstName + " " + ro.contacterLastName} ønsker å {ro.forSale ? "kjøpe" : "selge"} en billett</strong>
              <small className="text-muted">{DateConverter(ro.createdAt)}</small>
            </Toast.Header>
            <Toast.Body>
              {ro.contacterFirstName + " " + ro.contacterLastName} ønsker å kjøpe <i>{ro.title}</i><br></br>
              Ta kontakt for utføre salget:<br></br>
              {ro.contacterEmail}
            </Toast.Body>
            
            <Button onClick={() => {
              acceptContact(ro.id, ro.postId, ro.contactedId, ro.contacterId)}}>
              Marker annonsen som {ro.forSale ? "solgt" : "kjøpt"}
            </Button>
          </Toast>
        ))}
      </ToastContainer>
    </Container>
  );
}

export default WantsContact;