import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Category = (props: {
  picture: string;
  name: string;
  active: boolean;
  onClick: any;
}) => {
  return (
    <Col>
      <Card
        onClick={props.onClick}
        style={{ cursor: 'pointer', textAlign: 'center', borderWidth: '5px' }}
        className="mx-4 my-4 rounded"
        border={props.active ? 'success' : 'light'}
      >
        <Card.Img
          className="mx-auto mt-4"
          style={{ width: '50%', height: 'auto' }}
          src={props.picture}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Category;
