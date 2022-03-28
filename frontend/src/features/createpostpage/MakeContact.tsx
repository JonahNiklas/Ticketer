import React, { useState, useEffect } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { createRatingOpportunity } from '../../client/ratingOpportunityHandler';
import { getUserById } from '../../client/userHandler';
import {
  RatingOpportunityRequest,
  RatingOpportunityResponse,
  userData
} from '../../types';
import { store } from '../../redux/store';

const MakeContact = (props: {
  postId: number;
  contactedId: number;
  show: boolean;
  onHide: any;
}) => {
  const [user, setUser] = useState<userData | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const getOwnerUserData = async () => {
    try {
      const user = await getUserById(props.contactedId);
      if (user) {
        setUser(user);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleContact = async () => {
    try {
      const activeUserId = store.getState().user.userId;
      if (!activeUserId || activeUserId == props.contactedId) return;
      const request: RatingOpportunityRequest = {
        contactedId: props.contactedId,
        contacterId: activeUserId,
        postId: props.postId
      };
      const response: RatingOpportunityResponse = await createRatingOpportunity(
        request
      );

      setSuccess(response.code == 200);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getOwnerUserData();
  }, []);

  if (user) {
    return (
      <Modal onHide={props.onHide} show={props.show}>
        <div className='m-2 mt-3'>
          <p className='mb-1 text-center'>{`${user.firstName} ${user.lastName} kan kontaktes her: `} <a href={`mailto: ${user.email}`} className='m-0'>{user.email}</a></p>
        </div>
        <Button
          className="mx-4 mb-4 mt-2 p-2"
          onClick={() => {
            handleContact();
            setTimeout(() => {
              props.onHide();
            }, 3000);
          }}
        >
          Ta kontakt på Ticketer
        </Button>
        <Alert show={success} className="mx-4 text-center">
          {user.firstName + ' ' + user.lastName} har nå fått beskjed om at du
          ønsker å ta kontakt.
        </Alert>
      </Modal>
    );
  } else {
    return (
      <Modal onHide={props.onHide} show={props.show}>
        <Modal.Body>
          Her har det skjedd en feil. Brukeren du prøver å komme i kontakt med
          eksisterer ikke.
        </Modal.Body>
      </Modal>
    );
  }
};
export default MakeContact;
