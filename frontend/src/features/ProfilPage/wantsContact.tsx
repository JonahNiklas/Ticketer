import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Toast,
  ToastContainer
} from 'react-bootstrap';
import { getRatingOpportunityByUser } from '../../client/ratingOpportunityHandler';
import { store } from '../../redux/store';
import {
  CreateRatingRequest,
  RatingOpportunity,
  RatingRequest
} from '../../types';
import { acceptRatingOpportunity } from '../../client/ratingOpportunityHandler';
import { sellPost } from '../../client/postHandler';
import { createRating } from '../../client/ratingHandler';
import '../../stylesheets/Rating.css';

function DateConverter(date: Date) {
  const d = new Date(date);
  const days = [
    'MANDAG',
    'TIRSDAG',
    'ONSDAG',
    'TORSDAG',
    'FREDAG',
    'LØRDAG',
    'SØNDAG'
  ];
  const months = [
    'Januar',
    'Februar',
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember'
  ];
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const hours = d.getUTCHours().toString().padStart(2, '0');
  const minutes = d.getUTCMinutes().toString().padStart(2, '0');
  return d.getDate() + '. ' + month + ' ' + d.getUTCFullYear();
}

function WantsContact() {
  const [ratingOpportunities, setRatingOpportunities] = useState<
    RatingOpportunity[]
  >([]);
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

  const acceptContact = async (
    id: number,
    postId: number,
    postTitle: string,
    firstId: number,
    secondId: number
  ) => {
    await acceptRatingOpportunity(id);
    await sellPost(postId);
    getRatingOpportunities();

    const data: CreateRatingRequest = {
      postTitle,
      givenById: firstId,
      gottenById: secondId
    };

    await createRating(data);

    window.location.reload();
  };

  useEffect(() => {
    getRatingOpportunities();
  }, []);

  return (
    <Container>
      <h4>Ønsker å ta kontakt</h4>
      <Container className="scroll">
        <ToastContainer style={{ width: '100%' }}>
          {ratingOpportunities.map((ro, idx) => (
            <Toast
              key={idx}
              show={show}
              onClose={toggleShow}
              style={{ width: '500px' }}
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">
                  {ro.contacterFirstName + ' ' + ro.contacterLastName} ønsker å{' '}
                  {ro.forSale ? 'kjøpe' : 'selge'} en billett
                </strong>
                <small className="text-muted">
                  {DateConverter(ro.createdAt)}
                </small>
              </Toast.Header>
              <Toast.Body>
                {ro.contacterFirstName + ' ' + ro.contacterLastName} ønsker å{' '}
                {ro.forSale ? 'kjøpe' : 'selge'} <i>{ro.title}</i>
                <br></br>
                <br></br>
                Ta kontakt for utføre salget:{' '}
                <a href={`mailto:  ${ro.contacterEmail}`}>
                  {ro.contacterEmail}
                </a>
              </Toast.Body>

              <Button
                onClick={() => {
                  acceptContact(
                    ro.id,
                    ro.postId,
                    ro.title,
                    ro.contactedId,
                    ro.contacterId
                  );
                }}
              >
                Marker annonsen som {ro.forSale ? 'solgt' : 'kjøpt'}
              </Button>
            </Toast>
          ))}
        </ToastContainer>
      </Container>
    </Container>
  );
}

export default WantsContact;
