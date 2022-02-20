import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

function RecommendedTicketer() {
  return (
    <div className="RecommendedTicketer mt-0 ml-5 mr-5 p-5">
      <Container>
        <h2 className='text-center'>Anbefalte Ticketer</h2>
        <CardGroup>
          <Card style={{ cursor: 'pointer' }} className="mx-4 my-2">
            <Card.Img src="https://picsum.photos/200/200" />
            <Card.Body>
              <Card.Title>40 år med vondt brenn&apos;vin</Card.Title>
              <Card.Text>Vazelina</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ cursor: 'pointer' }} className="mx-4 my-2">
            <Card.Img src="https://picsum.photos/200/200" />
            <Card.Body>
              <Card.Title>41 år med vondt brenn&apos;vin</Card.Title>
              <Card.Text>Vazelina</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ cursor: 'pointer' }} className="mx-4 my-2">
            <Card.Img src="https://picsum.photos/200/200" />
            <Card.Body>
              <Card.Title>42 år med vondt brenn&apos;vin</Card.Title>
              <Card.Text>Vazelina</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default RecommendedTicketer;
