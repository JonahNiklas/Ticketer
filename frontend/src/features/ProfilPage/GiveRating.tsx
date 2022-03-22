import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from "react-bootstrap";
import { getAcceptedRatingOpportunityByUser } from '../../client/ratingOpportunityHandler';
import { store } from '../../redux/store';
import { RatingPossibility } from '../../types';
import '../../stylesheets/Rating.css';

function GiveRating() {

  const [ratingPossibilities, setRatingPossibilities] = useState<RatingPossibility[]>([]);
  const activeUserId = store.getState().user.userId;

  async function getAcceptedRatingOpportunities() {
    if (activeUserId) {
      try {
        setRatingPossibilities(await getAcceptedRatingOpportunityByUser(activeUserId));
      } catch (error: any) {
        console.error(error);
      }
    }
    
  }
  

  
  useEffect(() => {
    getAcceptedRatingOpportunities();
  }, []);

  return (
    <Container className='col-3 mt-5'>
      <h4>Gi rating</h4>
      <Container className='scroll'>
        {ratingPossibilities.map((rp, idx) => (
        
        <Card className='mb-3' key={idx}>
          <Card.Body>
            Du kan gi en vurering til {activeUserId == rp.contacterId ?
            rp.contactedFirstName + " " +rp.contactedLastName :
            rp.contacterFirstName + " " +rp.contacterLastName}
          </Card.Body>
          <Button>Bekreft</Button>
        </Card>
        ))}
      </Container>
    </Container>
  );
}

export default GiveRating;