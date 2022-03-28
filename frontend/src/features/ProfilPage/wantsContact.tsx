import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Toast,
  ToastContainer
} from 'react-bootstrap';
import { getRatingOpportunityByUser } from '../../client/ratingOpportunityHandler';
import { store } from '../../redux/store';
import {
  CreateRatingRequest,
  RatingOpportunity
} from '../../types';
import { acceptRatingOpportunity } from '../../client/ratingOpportunityHandler';
import { sellPost } from '../../client/postHandler';
import { createRating } from '../../client/ratingHandler';
import '../../stylesheets/Rating.css';

function DateConverter(date: Date) {
  const d = new Date(date);
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
  const month = months[d.getMonth()];
  return d.getDate() + '. ' + month + ' ' + d.getUTCFullYear();
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
      } catch (error: unknown) {
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
        {ratingOpportunities.map((ro, idx) => (
          <Toast
            key={idx}
            show={show}
            onClose={toggleShow}
            style={{ width: '500px' }}
            className='mb-2'
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded ml-0"
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

            <Button className='mb-2 ml-2'
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
      </Container>
    </Container>
  );
}

export default WantsContact;
