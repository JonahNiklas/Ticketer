import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Concert from '../../images/konsert.png';
import Sport from '../../images/sport.png';
import Teater from '../../images/teater.png';

function FilterBar() {
  return (
    <div className="justify-content-md-center mb-0 m-5 p-5 pb-0">
      <CardGroup>
        <Card style={{ cursor: 'pointer' }} className="mx-4 my-2 hover-shadow">
          <Card.Img
            className="mx-auto mt-4"
            style={{ width: '50%', height: '50%' }}
            src={Concert}
          />
          <Card.Body>
            <Card.Title>KONSERT</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ cursor: 'pointer' }} className="mx-4 my-2">
          <Card.Img
            className="mx-auto mt-4"
            style={{ width: '50%', height: '50%' }}
            src={Sport}
          />
          <Card.Body>
            <Card.Title>SPORT</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ cursor: 'pointer' }} className="mx-4 my-2">
          <Card.Img
            className="mx-auto mt-4"
            style={{ width: '50%', height: '50%' }}
            src={Teater}
          />
          <Card.Body>
            <Card.Title>TEATER/SHOW</Card.Title>
          </Card.Body>
        </Card>
        <Card style={{ cursor: 'pointer' }} className="mx-4 my-2">
          <Card.Img
            className="mx-auto mt-4 px-0"
            style={{ width: '50%', height: '50%' }}
            src="https://pic.onlinewebfonts.com/svg/img_520908.png"
          />
          <Card.Body>
            <Card.Title>ANNET</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default FilterBar;
