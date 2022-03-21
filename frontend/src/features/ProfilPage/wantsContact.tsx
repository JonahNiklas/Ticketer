import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Toast, ToastContainer } from "react-bootstrap";
import { getRatingOpportunityByUser } from '../../client/ratingOpportunityHandler';
import { store } from '../../redux/store';
import { RatingOpportunity } from '../../types';

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
              <strong className="me-auto">{ro.contacterName} ønsker å {ro.forSale ? "kjøpe" : "selge"} en billett</strong>
              <small className="text-muted">{/*DateConverter(*/ro.createdAt}</small>
            </Toast.Header>
            <Toast.Body>
              {ro.contacterName} ønsker å kjøpe <i>{ro.title}</i><br></br>
              Ta kontakt for utføre salget:<br></br>
              {ro.contacterEmail}
            </Toast.Body>
            <Button>Marker annonsen som {ro.forSale ? "solgt" : "kjøpt"}</Button>
          </Toast>
        ))}
      </ToastContainer>
    </Container>
  );
}

export default WantsContact;