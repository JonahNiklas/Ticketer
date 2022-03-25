import { userInfo } from 'os';
import React, { useEffect, useState } from 'react';
import 'react-bootstrap';
import { ButtonGroup, Col, Form, Row, ToggleButton } from 'react-bootstrap';
/* import { RateUser } from '../../client/ratingHandler'; */
import { store } from '../../redux/store';
import '../../stylesheets/Rating.css';
/* import { RatingRequest, RatingResponse } from '../../types'; */
import { UserRating } from '../../types';
import { getUserRating } from '../../client/ratingHandler';

function Rating() {
  const [rating, setRating] = useState<UserRating>();

  async function getRating() {
    try {
      const activeUserId = store.getState().user.userId;
      if (activeUserId !== null && Number.isInteger(activeUserId)) {
        setRating(await getUserRating(activeUserId));
      }
    } catch (error: any) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRating();
  }, []);

  if (!rating?.avgRating) {
    return <h5>Bruker har ingen vurderinger</h5>;
  } else {
    return (
      <>
        <Row className="mt-3 mb-3">
          {[...Array(Math.floor(rating.avgRating))].map((e, i) => (
            <Col sm="1" key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Col>
          ))}
        </Row>
        <h5>{`Gjennomsnittscore: ${rating.avgRating.toFixed(2)}`}</h5>
        <h5>{`Antall vurderinger: ${rating.ratingCount}`}</h5>
      </>
    );
  }
}

export default Rating;
