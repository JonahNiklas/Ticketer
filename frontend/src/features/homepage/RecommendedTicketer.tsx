import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';

function RecommendedTicketer() {
  return(
    <div className='RecommendedTicketer'>
      <Container>
        <h2>Anbefalte Ticketer</h2>
        <CardGroup>
          <Card style={{ cursor: 'pointer' }} className='mx-4 my-2'>
            <Card.Img src='https://picsum.photos/200/200' />
            <Card.Body>
              <Card.Title>40 år med vondt brenn&apos;vin</Card.Title>
              <Card.Text>
                Vazelina
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ cursor: 'pointer' }} className='mx-4 my-2'>
            <Card.Img src='https://picsum.photos/200/200' />
            <Card.Body>
              <Card.Title>41 år med vondt brenn&apos;vin</Card.Title>
              <Card.Text>
                Vazelina
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ cursor: 'pointer' }} className='mx-4 my-2'>
            <Card.Img src='https://picsum.photos/200/200' />
            <Card.Body>
              <Card.Title>42 år med vondt brenn&apos;vin</Card.Title>
              <Card.Text>
                Vazelina
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default RecommendedTicketer;