import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Concert from '../../images/konsert.png';
import Sport from '../../images/sport.png';
import Teater from '../../images/teater.png';

function FilterBar() {
  return (
    <Container>
      <CardGroup>
        <Card
          style={{ cursor: 'pointer', border: `2px solid black` }}
          className="mx-4 my-4 rounded"
        >
          <Card.Img
            className="mx-auto mt-4"
            style={{ width: '50%', height: '50%' }}
            src={Concert}
          />
          <Card.Body>
            <Card.Title>KONSERT</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ cursor: 'pointer', border: `2px solid black` }}
          className="mx-4 my-4 rounded"
        >
          <Card.Img
            className="mx-auto mt-4"
            style={{ width: '50%', height: '50%' }}
            src={Sport}
          />
          <Card.Body>
            <Card.Title>SPORT</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ cursor: 'pointer', border: `2px solid black` }}
          className="mx-4 my-4 rounded"
        >
          <Card.Img
            className="mx-auto mt-4"
            style={{ width: '50%', height: '50%' }}
            src={Teater}
          />
          <Card.Body>
            <Card.Title>TEATER/SHOW</Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ cursor: 'pointer', border: `2px solid black` }}
          className="mx-4 my-4 rounded"
        >
          <Card.Img
            className="mx-auto mt-4"
            style={{ width: '50%', height: '50%' }}
            src="https://pic.onlinewebfonts.com/svg/img_520908.png"
          />
          <Card.Body>
            <Card.Title>ANNET</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default FilterBar;
