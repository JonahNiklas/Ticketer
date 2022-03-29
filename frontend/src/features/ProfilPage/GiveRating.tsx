import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Form, Modal } from 'react-bootstrap';
import { getRatingsToGive, rateUser } from '../../client/ratingHandler';
import { store } from '../../redux/store';
import { Rating, RatingRequest } from '../../types';
import '../../stylesheets/Rating.css';

function GiveRating() {
  const [ratingsToGive, setRatingsToGive] = useState<Rating[]>([]);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [currentRating, setCurrentRating] = useState(1);
  const [currentDescription, setCurrentDescription] = useState<string>("");

  const activeUserId = store.getState().user.userId;
  const ratingNums = [
    { name: '1', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 }
  ];

  async function getNotAcceptedRatings() {
    if (activeUserId) {
      try {
        setRatingsToGive(await getRatingsToGive(activeUserId));
      } catch (error: any) {
        console.error(error);
      }
    }
  }

  const handleRateUser = async (
    id: number,
    rating: number,
    description: undefined | string
  ) => {
    const data: RatingRequest = {
      id,
      rating,
      description
    };
    try {
      await rateUser(data);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNotAcceptedRatings();
  }, []);

  return (
    <Container>
      <h4>Gi vurdering</h4>
      <Container className="scroll">
        {ratingsToGive.map((ra, idx) => (
          <div key={idx}>
            <Card className="mb-3">
              <Card.Body className="col">
                Du kan gi en vurdering til {`${ra.gottenFirstName} ${ra.gottenLastName}`}
                <br></br>Etter handelen av <i>{ra.description}</i>
              </Card.Body>
              <Button className="col-6 mb-2 ml-3" onClick={() => setShowConfirm(true)}>
                Gi vurdering
              </Button>
            </Card>
            <Modal onHide={() => setShowConfirm(false)} show={showConfirm}>
              <Modal.Body>
                Gi {ra.gottenFirstName + ' ' + ra.gottenLastName}
                en vurdering fra 1 til 5
              </Modal.Body>
              <div className='d-flex col w-100 flex-column'>
                {ratingNums.map((element, idx) => (
                  <Button
                    key={idx}
                    className={`col-9 mx-auto my-1 ${idx}`}
                    onClick={() => setCurrentRating(element.value)}
                    variant={(idx + 1 === currentRating) ? "primary" : "outline-primary"}
                  >
                    {element.name}
                  </Button>
                ))}
              </div>
              <Form.Group className="mb-3 w-100" controlId="formBasicl">
                <Form.Label className='m-3'>Beskrivelse</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="God kommunikasjon, enkel handel"
                  onChange={(e) => setCurrentDescription(e.target.value)}
                  className="mb-3 mx-auto"
                  style={{width: "90%"}}
                />
              </Form.Group>
              <p className='col'>Sånn ser ratingen din ut:</p>
              <Card className='text-center mx-auto mb-3' style={{width: "90%"}}>
                {`${currentRating}${currentDescription ? ", "+currentDescription : ""}`}
              </Card>
              <Button
                onClick={() => {
                  handleRateUser(ra.id, currentRating, currentDescription);

                  setSuccess(true);
                  setTimeout(() => {
                    setShowConfirm(false);
                    setSuccess(false);
                    setCurrentRating(1);
                    setCurrentDescription("");
                    getNotAcceptedRatings();
                  }, 3000);
                }}
                className="w-75 mx-auto mb-3"
              >
                Bekreft
              </Button>

              <Alert variant="success" show={success} className="m-3">
                Vurderingen har blitt lagret
              </Alert>
            </Modal>
          </div>
        ))}
      </Container>
    </Container>
  );
}

export default GiveRating;
