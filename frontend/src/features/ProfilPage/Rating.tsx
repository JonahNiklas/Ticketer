import React, { useEffect, useState } from 'react';
import 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { store } from '../../redux/store';
import '../../stylesheets/Rating.css';
import { UserRating } from '../../types';
import { getUserRating } from '../../client/ratingHandler';

function Rating(props: {userId?: number}) {
  const [rating, setRating] = useState<UserRating>();
  async function getRating() {
    try {
      const activeUserId = (props.userId) ? props.userId : store.getState().user.userId;
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
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
